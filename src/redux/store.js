import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { weatherReducer } from './reducers/weatherReducer';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
