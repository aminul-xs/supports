<?php

function supports_editor_assets() {
    // Enqueue editor-only styles for supports block
    $asset_file = include_once PLUGIN_DIR . 'build/supports/filter.asset.php';
    wp_enqueue_script( 
        'supports-editor-script',  
        plugin_dir_url( __DIR__ ) . 'build/supports/filter.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );

    $asset_components = include_once PLUGIN_DIR . 'build/components/index.asset.php';
    wp_enqueue_script(
        'supports-components-script',
        plugin_dir_url( __DIR__ ) . 'build/components/index.js',
        $asset_components['dependencies'],
        $asset_components['version']
    );

    $asset_controls = include_once PLUGIN_DIR . 'build/controls/index.asset.php';
    wp_enqueue_script(
        'supports-controls-script',
        plugin_dir_url( __DIR__ ) . 'build/controls/index.js',
        $asset_controls['dependencies'],
        $asset_controls['version']
    );

    // $asset_store_controls = include_once PLUGIN_DIR . 'build/store-controls/index.asset.php';
    // wp_enqueue_script(
    //     'supports-store-controls-script',
    //     plugin_dir_url( __DIR__ ) . 'build/store-controls/index.js',
    //     $asset_store_controls['dependencies'],
    //     $asset_store_controls['version']
    // );
}
add_action( 'enqueue_block_editor_assets', 'supports_editor_assets' );