/**
 * WordPress dependencies
 */

import {InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor';
import { addControl } from '../../controls';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { createElement } from '@wordpress/element';
import { select } from '@wordpress/data';

const Edit = ({ attributes , setAttributes, name}) => {
	const { ControlsManager } = window;
	const { content, border } = attributes;

    const blockProps = useBlockProps();
    const onChangeContent = ( newContent ) => {
        setAttributes( { content: newContent } );
    };

    const onChangeBorder = ( newBorder ) => {
        setAttributes( { gkitBorder: newBorder } );
    };

    console.log('attributesX', attributes);

    const colors = [
        { name: 'Blue 20', color: '#72aee6' },
        { name: 'Blue 30', color: '#5a9bd4' },
        { name: 'Blue 40', color: '#428bca' },
        { name: 'Blue 50', color: '#007bff' },
        { name: 'Blue 60', color: '#0056b3' },
        { name: 'Blue 70', color: '#004085' },
        { name: 'Blue 80', color: '#003366' },
        { name: 'Blue 90', color: '#002147' },
        { name: 'Blue 100', color: '#00112f' }
    ];

    return [
		// InspectorControls with createElement
		createElement(
			InspectorControls,
			{ key: 'inspector' },
			createElement(
				PanelBody,
				{ title: __( 'Settings', 'block-development-examples' ) },

				addControl(name, "gkitBorder", {
					__next40pxDefaultSize: 40,
					colors,
					label: "Border",
					type: "object",
					control: ControlsManager?.BORDER_CONTROL,
					value: border,
					onChange: onChangeBorder,
					default: {}
				}),

				addControl(name, "gkitBorder2", {
					__next40pxDefaultSize: 40,
					colors,
					label: "Border 2",
					type: "object",
					control: ControlsManager?.BORDER_CONTROL,
					value: "",
					onChange: () => {},
					default: {}
				})
			)
		),

		// RichText with JSX
		<RichText
			{ ...blockProps }
			key="richtext"
			tagName="p"
			value={ content }
			onChange={ onChangeContent }
		/>
	];

//    return (
//         <>
//             {/* <BorderControl
//                 __next40pxDefaultSize
//                 colors={ colors }
//                 label={ __( 'Border' ) }
//                 onChange={ onChangeBorder }
//                 value={ border }
//             /> */}
//             <InspectorControls>
// 				<PanelBody
// 					title={ __( 'Settings', 'block-development-examples' ) }
// 				>
//                     {[
//                         addControl(metadata.name, "gkitBorder", {
//                             __next40pxDefaultSize: 40,
//                             colors,
//                             label: "Border",
//                             type: "object",
//                             control: ControlsManager?.BORDER_CONTROL,
//                             value: border,
//                             onChange: onChangeBorder,
//                             default: {}
//                         }),
//                         addControl(metadata.name, "gkitBorder2", {
//                             __next40pxDefaultSize: 40,
//                             colors,
//                             label: "Border 2",
//                             type: "object",
//                             control: ControlsManager?.BORDER_CONTROL,
//                             value: "",
//                             onChange: () => {},
//                             default: {}
//                         })
//                     ]}
//                 </PanelBody>
//             </InspectorControls>

//             <RichText
//                 { ...blockProps }
//                 tagName="p"
//                 onChange={ onChangeContent }
//                 value={ content }
//             />
//         </>
//     );
};

export default Edit;