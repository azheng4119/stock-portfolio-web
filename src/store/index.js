import { combineReducers,createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import portfolio from './utilities/portfolio'
import balance from './utilities/balance'
import history from './utilities/history'
import user from './utilities/user'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({portfolio,balance,history,user});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
const store = createStore(rootReducer,middleware);

export default store;