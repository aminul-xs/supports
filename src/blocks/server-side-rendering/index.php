<?php
function server_side_render_block() {
	register_block_type(
		__DIR__ . '/build/blocks/server-side-rendering',
		array(
			'render_callback' => 'server_side_render_block_test',
		)
	);
}
add_action( 'init', 'server_side_render_block' );

/**
 * Renders the block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the block content.
 */
function server_side_render_block_test( $attributes ) {
	$label   = isset( $attributes['label'] ) ? $attributes['label'] : '';
	$message = __( 'Server Side Render Block d26119 – This content is rendered on the server and displayed in the Editor using the ServerSideRender component.', 'supports' );

	$wrapper_attributes = get_block_wrapper_attributes();

	if ( empty( $label ) ) {
		return sprintf( '<p %s>%s</p>', $wrapper_attributes, esc_html( $message ) );
	}

	return sprintf(
		'<div %s><h2>%s</h2><p>%s</p></div>',
		$wrapper_attributes,
		esc_html( $label ),
		esc_html( $message )
	);
}