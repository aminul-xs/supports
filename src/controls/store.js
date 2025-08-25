import { createReduxStore, register, select } from '@wordpress/data';

export const STORE_NAME = 'supports/controls-store';

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

// Actions
export const actions = {
	registerAllowedBlock( blockName ) {
		return { type: 'REGISTER_ALLOWED_BLOCK', blockName };
	},
	registerControl( blockName, id, config ) {
		return { type: 'REGISTER_CONTROL', blockName, id, config };
	},
};

// Selectors
export const selectors = {
	getAllowedBlocks( state ) {
		return state.allowedBlocks;
	},
	getBlockControls( state, blockName ) {
		return state.blockControls[ blockName ] || {};
	},
};

// ✅ Prevent duplicate registration
if ( ! select.stores?.[ STORE_NAME ] ) {
	const store = createReduxStore( STORE_NAME, {
		reducer,
		actions,
		selectors,
	} );
	register( store );
}
