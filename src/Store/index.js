//Redux Store: Sets up Redux to provide global state throughout the app
import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import results from "./results"
import specificBreedReducer from "./specificBreed";

const reducer = combineReducers({
    breedsResults: results,
    specificBreed: specificBreedReducer
})

const middleware = composeWithDevTools(
    applyMiddleware(ThunkMiddleware)
)

const store = createStore(reducer, middleware)
export default store;