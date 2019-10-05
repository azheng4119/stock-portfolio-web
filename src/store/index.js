import { combineReducers,createStore, applyMiddleware } from 'redux';
import portfolio from './utilities/portfolio'
import balance from './utilities/balance'
import history from './utilities/history'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({portfolio,balance,history});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;