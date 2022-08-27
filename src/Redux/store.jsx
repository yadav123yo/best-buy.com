import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'react';
import thunk from 'redux-thunk';
import { productReducer } from './products/reducer';

const rootReducer= combineReducers({ecommerceData:productReducer});
const composeEnhancers= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store= legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

