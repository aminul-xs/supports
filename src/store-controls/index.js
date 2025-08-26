import { createReduxStore, register, select } from '@wordpress/data';
import { STORE_NAME } from '../constants';
import selectors from './selectors';
import actions from './actions';
import reducer from './reducer'


const existingStore = select(STORE_NAME);

if (!existingStore) {
    const store = createReduxStore(STORE_NAME, {
        reducer,
		actions,
		selectors,
    });
    
    // Register the store
    register(store);
}

// if ( ! select.stores?.[ STORE_NAME ] ) {
// 	const store = createReduxStore( STORE_NAME, {
// 		reducer,
// 		actions,
// 		selectors,
// 	} );
// 	register( store );
// }