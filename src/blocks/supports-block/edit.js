/**
 * WordPress dependencies
 */

import {InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor';
import { addControl } from '../../controls';
import { BorderControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

const Edit = ( props ) => {
    const {   attributes: { content, border }, setAttributes,  } = props;
	const { ControlsManager } = window;

    const blockProps = useBlockProps();
    const onChangeContent = ( newContent ) => {
        setAttributes( { content: newContent } );
    };

    const onChangeBorder = ( newBorder ) => {
        setAttributes( { border: newBorder } );
    };

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

    return (
        <>
            <RichText
                { ...blockProps }
                tagName="p"
                onChange={ onChangeContent }
                value={ content }
            />
            {/* <BorderControl
                __next40pxDefaultSize
                colors={ colors }
                label={ __( 'Border' ) }
                onChange={ onChangeBorder }
                value={ border }
            /> */}
            <InspectorControls>
				<PanelBody
					title={ __( 'Settings', 'block-development-examples' ) }
				>
                     {
                        addControl("gkitBorder", {
                            __next40pxDefaultSize: 40,
                            colors: colors,
                            label: "Border",
                            type: ControlsManager?.BORDER_CONTROL,
                            value: border,
                            onChange: onChangeBorder
                        })
                    }
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Edit;