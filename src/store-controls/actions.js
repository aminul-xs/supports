// Actions
const actions = {
	registerAllowedBlock( blockName ) {
		return { 
            type: 'REGISTER_ALLOWED_BLOCK', 
            blockName 
        };
	},
	registerControl( blockName, id, config ) {
		return { 
            type: 'REGISTER_CONTROL', 
            blockName, 
            id, 
            config 
        };
	},
};

export default actions;