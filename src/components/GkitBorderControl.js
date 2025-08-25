import { BorderControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const GkitBorderControl = ( {
	__next40pxDefaultSize = 40,
	colors = {},
	label = '',
	border = {},
	onChange,
	values,
	...props
} ) => {
	return (
		<BorderControl
			__next40pxDefaultSize
			colors={ colors }
			label={ __( 'Border' ) }
			onChange={ onChange }
			value={ border }
			{ ...props }
		/>
	);
};
export default GkitBorderControl;
