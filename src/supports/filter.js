const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

const withMyPluginControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const tabSettings = useSelect( ( select ) => {
			return select( blockEditorStore ).getSettings().blockInspectorTabs;
		}, [] );

		console.log( 'tabSettings', tabSettings );
		return (
			<>
				<BlockEdit key="edit" { ...props } />
				<InspectorControls>
					<PanelBody>My custom control</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withMyPluginControls' );

wp.hooks.addFilter(
	'editor.BlockEdit',
	'supports/with-inspector-controls',
	withMyPluginControls
);
