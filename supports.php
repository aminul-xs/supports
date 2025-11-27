<?php
/**
 * Plugin Name:       Supports
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Requires WP-CLI:    true
 * Requires gutenberg: 20.9
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       supports
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

define( 'PLUGIN_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );

/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_supports_block_init() {
	$manifest_path = __DIR__ . '/build/blocks-manifest.php';
	$blocks_path   = __DIR__ . '/build/blocks';

	if ( ! file_exists( $manifest_path ) ) {
		return; // Manifest not built yet, skip registration.
	}

    /**
     * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
     * based on the registered block metadata.
     * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
     *
     * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
     */
    if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
        wp_register_block_types_from_metadata_collection( $blocks_path, $manifest_path );
        return;
    }

    /**
     * Registers the block(s) metadata from the `blocks-manifest.php` file.
     * Added to WordPress 6.7 to improve the performance of block type registration.
     *
     * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
     */
    if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
        wp_register_block_metadata_collection( $blocks_path, $manifest_path );
    }
    /**
     * Registers the block type(s) in the `blocks-manifest.php` file.
     *
     * @see https://developer.wordpress.org/reference/functions/register_block_type/
     */
    $manifest_data = require $manifest_path;
    foreach ( array_keys( $manifest_data ) as $block_type ) {
        register_block_type( __DIR__ . "/build/blocks/{$block_type}" );
    }

	// Fallback: Register each block manually
    $manifest_data = require $manifest_path;
    foreach ( array_keys( $manifest_data ) as $block_type ) {
        register_block_type_from_metadata( $blocks_path . '/' . $block_type );
    }
}
add_action( 'init', 'create_block_supports_block_init' );

require_once PLUGIN_DIR . '/includes/enqueue.php';

add_action( 'admin_menu', function() {
    add_menu_page(
        'Supports',
        'Supports',
        'manage_options',
        'supports',
        'supports_render_clean_page',
        '', // No icon
        3
    );
});

function supports_render_clean_page() {
  
}


// add_action( 'current_screen', function( $screen ) {
//     if ( $screen->id === 'toplevel_page_supports' ) {
//         remove_all_actions( 'admin_enqueue_scripts' );
//         remove_all_actions( 'admin_print_styles' );
//         remove_all_actions( 'admin_head' );
//         remove_all_actions( 'admin_footer' );
//     }
// }, 0 );

// Short-circuit admin page early and print a full custom HTML document.
// add_action( 'current_screen', 'supports_serve_clean_admin_page' );
function supports_serve_clean_admin_page( $screen ) {
    if ( 'toplevel_page_supports' !== $screen->id ) {
        return;
    }

    if ( ! current_user_can( 'manage_options' ) ) {
        wp_die( 'Forbidden', '', 403 );
    }

    while ( ob_get_level() ) {
        ob_end_clean();
    }

    // Send headers
    // header( 'Content-Type: text/html; charset=utf-8' );

    // Output your full custom HTML page
    ?>
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>GutenKit — Clean Page</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <style>
            html,body{height:100%;margin:0;font-family:system-ui,Segoe UI,Roboto,sans-serif}
            .wrap{display:flex;align-items:center;justify-content:center;height:100%}
        </style>
    </head>
    <body>
        <div class="wrap">
            <div>
                <h1>GutenKit — custom admin page</h1>
                <p>No wpwrap, no admin bar, no WP admin CSS.</p>
            </div>
        </div>
    </body>
    </html>
    <?php
    exit;
}
