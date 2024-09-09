<?php
/*
 Plugin Name: My Gutenberg Blocks
 Description: Custom Gutenberg blocks.
 Version: 1.0
 Author: Your Name
*/

function mg_blocks_register_block() {
    // Enqueue block editor assets (JavaScript)
    wp_enqueue_script(
        'mg-blocks-editor-script',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    // Enqueue block styles for frontend
    wp_enqueue_style(
        'mg-blocks-style',
        plugins_url('build/style-index.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
    );
}
add_action('enqueue_block_editor_assets', 'mg_blocks_register_block');
