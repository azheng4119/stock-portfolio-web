import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import user from './utilities/user'
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({user});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
const store = createStore(rootReducer,middleware);

export default store;