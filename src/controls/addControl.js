import { addFilter } from '@wordpress/hooks';
import { dispatch } from '@wordpress/data';

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
	const Component = config.control;
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
			label={ config.label }
			value={ config.value }
			onChange={ config.onChange }
			{ ...config }
		/>
	);
}



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

// // Extend block attributes
// function addCustomAttributes( settings, name ) {
// 	// Only target specific block(s)
// 	if ( name !== 'supports-test/supports-block' ) {
// 		return settings;
// 	}
//     const controls = blockControls[name]
//     console.log('Controls for', name, ':', controls);

// 	// Add new attributes
// 	settings.attributes = {
// 		...settings.attributes,
// 		gkitBorder: {
// 			type: 'object',
// 			default: {},
// 		},
// 	};

// 	return settings;
// }

// addFilter(
// 	'blocks.registerBlockType',
// 	'supports/block/specific-block',
// 	addCustomAttributes
// );

// //Save Render the Attribute
// import { addFilter } from '@wordpress/hooks';

// function applyExtraProps( extraProps, blockType, attributes ) {
// 	if ( blockType.name === 'core/paragraph' && attributes.gkitBorder?.style ) {
// 		extraProps.style = {
// 			...( extraProps.style || {} ),
// 			border: attributes.gkitBorder.style,
// 		};
// 	}
// 	return extraProps;
// }

// addFilter(
// 	'blocks.getSaveContent.extraProps',
// 	'supports/block/apply-extra-props',
// 	applyExtraProps
// );
