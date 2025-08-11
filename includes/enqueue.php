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
}
add_action( 'enqueue_block_editor_assets', 'supports_editor_assets' );