//Redux Store: Sets up Redux to provide global state throughout the app
import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import results from "./results"

const reducer = combineReducers({
    results
})

const middleware = composeWithDevTools(
    applyMiddleware(ThunkMiddleware)
)

const store = createStore(reducer, middleware)
export default store;