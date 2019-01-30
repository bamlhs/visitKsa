import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import placesReducers from './reducers/placesReducers';
import ThunkRedux from 'redux-thunk';

const reducers = combineReducers({
    places: placesReducers
})

const enhancers = [];
const middlewares = [ThunkRedux];
enhancers.push(applyMiddleware(...middlewares));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers(...enhancers));



