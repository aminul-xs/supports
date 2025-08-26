// Selectors
const selectors = {
    getAllowedBlocks( state ) {
        return state.allowedBlocks;
    },
    getBlockControls( state, blockName ) {
        return state.blockControls[ blockName ] || {};
    },
};

export default selectors;