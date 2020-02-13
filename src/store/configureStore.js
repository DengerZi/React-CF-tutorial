/** @format */

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import persistState from "redux-localstorage";
import reducers from "../reducers";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

const enhancer = compose(persistState("user"));
export const history = createBrowserHistory();

const createRootReducer  = (history) => combineReducers({
  router: connectRouter(history),
	...reducers
});

export default function configureStore(middleware) {
	return createStore(
    createRootReducer(history), // root reducer with router state
    compose(
      applyMiddleware(
        middleware,
        routerMiddleware(history), // for dispatching history actions
        thunk
      ),
      enhancer
    ),
	);
}
