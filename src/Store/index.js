//Redux Store

import { createStore, combineReducers, applyMiddleware } from "redux";
import results from "./results"

const reducer = combineReducers({
    results
})

const store = createStore(reducer)
export default store;