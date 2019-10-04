import { combineReducers,createStore, applyMiddleware } from 'redux';
import portfolio from './utilities/portfolio'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({portfolio});


const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;