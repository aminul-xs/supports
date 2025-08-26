import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

// const withMyPluginControls = createHigherOrderComponent( ( BlockEdit ) => {
// 	return ( props ) => {
// 		const tabSettings = useSelect( ( select ) => {
// 			return select( blockEditorStore ).getSettings().blockInspectorTabs;
// 		}, [] );

// 		console.log( 'tabSettings', tabSettings );
// 		return (
// 			<>
// 				<BlockEdit key="edit" { ...props } />
// 				<InspectorControls>
// 					<PanelBody>My custom control</PanelBody>
// 				</InspectorControls>
// 			</>
// 		);
// 	};
// }, 'withMyPluginControls' );

// wp.hooks.addFilter(
// 	'editor.BlockEdit',
// 	'supports/with-inspector-controls',
// 	withMyPluginControls
// );


// const withMyPluginControls = createHigherOrderComponent( ( BlockEdit ) => {
// 	return ( props ) => {
// 		const allowed = useSelect( ( select ) => {
// 			return select( 'supports/controls-store' )?.getAllowedBlocks() || new Set();
// 		});
// 		console.log( 'Allowed blocks:', Array.from( allowed ) );
// 		console.log('propsX', props);

// 		return (
// 			<>
// 				<BlockEdit key="edit" { ...props } />
// 			</>
// 		);
// 	};
// }, 'withMyPluginControls' );

// addFilter(
// 	'editor.BlockEdit',
// 	'supports/block/specific-block',
// 	withMyPluginControls
// );
