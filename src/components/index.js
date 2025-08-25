import GkitBorderControl from './GkitBorderControl';

// Create controls object that maps to actual components
if ( typeof window !== 'undefined' ) {
	window.ControlsManager = {
		...( window.ControlsManager || {} ),
		BORDER_CONTROL: GkitBorderControl,
		// Add more control mappings here
	};

	// Add type resolver function
	window.getControlType = ( typeString ) => {
		if ( typeof typeString === 'string' && typeString.includes( '::' ) ) {
			const [ manager, controlType ] = typeString.split( '::' );
			if (
				manager === 'ControlsManager' &&
				window.ControlsManager[ controlType ]
			) {
				return window.ControlsManager[ controlType ];
			}
		}
		return typeString;
	};

	// Alternative: Add resolver directly to ControlsManager
	window.ControlsManager.resolve = ( controlType ) => {
		return window.ControlsManager[ controlType ] || null;
	};
}
