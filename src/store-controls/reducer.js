// Default state
const DEFAULT_STATE = {
	allowedBlocks: new Set(),
	blockControls: {},
};

// Reducer
function reducer( state = DEFAULT_STATE, action ) {
	switch ( action.type ) {
		case 'REGISTER_ALLOWED_BLOCK':
			return {
				...state,
				allowedBlocks: new Set( [ ...state.allowedBlocks, action.blockName ] ),
			};

		case 'REGISTER_CONTROL':
			return {
				...state,
				blockControls: {
					...state.blockControls,
					[ action.blockName ]: {
						...( state.blockControls[ action.blockName ] || {} ),
						[ action.id ]: {
							type: action.config.type || 'object',
							default: action.config.default || {},
						},
					},
				},
			};

		default:
			return state;
	}
}

export default reducer; 