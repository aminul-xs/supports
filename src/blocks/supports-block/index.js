/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { select } from '@wordpress/data';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import '../../store-controls'
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { useBlockAttributesWithControls } from '../../hooks';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: ( props ) => {
		const controls = select( 'supports/controls-store' ).getBlockControls( props.name );
		// 🔑 Don't mutate props.attributes (it's frozen)
		const mergedAttributes = {
			...metadata.attributes,
			...controls,
			...props.attributes,
		};
		console.log('props', props);
		console.log('mergedAttributes', mergedAttributes);

		// const mergedAttributes = useBlockAttributesWithControls( props.name, metadata.attributes, props.attributes );
		// Pass merged attributes into Edit
		return <Edit { ...props } attributes={ mergedAttributes } />;
	},

	/**
	 * @see ./save.js
	 */
	save,
} );
