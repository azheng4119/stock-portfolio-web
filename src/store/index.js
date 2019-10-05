import { combineReducers,createStore, applyMiddleware } from 'redux';
import portfolio from './utilities/portfolio'
import balance from './utilities/balance'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({portfolio,balance});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;