import { addFilter } from '@wordpress/hooks';
import { dispatch } from '@wordpress/data';
import { select } from '@wordpress/data';
// function addControl(name, config) {
// 	return {
// 		name,
// 		...config,
// 		render: (props) => {
// 			const Component = config.type;
// 			return <Component {...config} {...props} />;
// 		},
// 	};
// }
// export default addControl;


export default function addControl( blockName, id, config ) {
	const Component = config?.control;
	console.log( 'Adding control:', blockName, id, config );

	// const newConfig = { ...config };
	// delete newConfig.control;
	// delete newConfig.default;
	if ( ! Component ) return null;

	dispatch( 'supports/controls-store' ).registerAllowedBlock( blockName );
	dispatch( 'supports/controls-store' ).registerControl( blockName, id, config );

	// Return a React element that can be rendered directly
	return (
		<Component
			key={ id }
			label={ config?.label }
			value={ config?.value }
			onChange={ config?.onChange }
			{ ...config }
		/>
	);
}

// function addDynamicAttributes( settings, name ) {
//     // Check if this specific block has registered controls
//     const controls = select( 'supports/controls-store' )?.getBlockControls( 'supports-test/supports-block' );
// 	const allowed = select( 'supports/controls-store' )?.getAllowedBlocks();

//     // Only add attributes if this block has controls registered
//     if ( controls && Object.keys( controls ).length > 0 ) {
//         const newAttributes = {};
        
//         Object.keys( controls ).forEach( controlId => {
//             const control = controls[ controlId ];
//             newAttributes[ controlId ] = {
//                 type: control.type || 'object',
//                 default: control.default || ( control.type === 'string' ? '' : {} ),
//             };
//         });

//         console.log( `Adding attributes for block "${name}":`, newAttributes );

//         return {
//             ...settings,
//             attributes: {
//                 ...settings.attributes,
//                 ...newAttributes,
//             },
//         };
//     }

//     // Return unchanged settings if no controls for this block
//     return settings;
// }

// // Apply the filter - this will only affect blocks that have registered controls
// addFilter(
//     'blocks.registerBlockType',
//     'supports/add-block-specific-attributes',
//     addDynamicAttributes
// );


// function addListBlockName(settings, name) {
//     console.log('Allowed blocks:', Array.from(allowedBlocks));
//     console.log('Current block:', name);

//     // Check if current block is in allowed list and has registered controls
//     if (allowedBlocks.has(name)) {
//         const controls = blockControls[name];

//         if (controls && Object.keys(controls).length > 0) {
//             const newAttributes = Object.keys(controls).reduce((acc, controlName) => {
//                 acc[controlName] = {
//                     type: controls[controlName].type,
//                     default: controls[controlName].default
//                 };
//                 return acc;
//             }, {});

//             console.log('Adding attributes for', name, ':', newAttributes);

//             return {
//                 ...settings,
//                 attributes: {
//                     ...settings.attributes,
//                     ...newAttributes
//                 },
//             };
//         }
//     }

//     return settings;
// }

// addFilter(
//     'blocks.registerBlockType',
//     'supports/addControls',
//     addListBlockName
// );

// Extend block attributes


//Save Render the Attribute

// function applyExtraProps( extraProps, blockType, attributes ) {
	
// 	if ( blockType.name === 'supports-test/supports-block') {
// 		console.log('attributes', attributes);
		
// 		// add gkitBorder block.json attribute
// 		attributes.gkitBoxShadow = {
// 			type: 'object',
// 			default: {},
// 		};	
// 	}
// 	console.log('Extra props for block:', blockType.name, extraProps);

// 	return extraProps;
// }

// addFilter(
// 	'blocks.getSaveContent.extraProps',
// 	'supports/block/apply-extra-props',
// 	applyExtraProps
// );
