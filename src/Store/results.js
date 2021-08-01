//results state
import axios from "axios";

//ACTIONS
const GET_ALL_RESULTS = "GET_ALL_RESULTS";
const SET_FILTER = "SET_FILTER";
const SET_SEARCHED = "SET_SEARCHED";

//ACTION CREATORS
const getAllResults = (results) => {
    return{
        type: GET_ALL_RESULTS,
        results
    }
}

const getFiltered = (filter, filterResults) => {
    return {
        type: GET_FILTERED,
        filter,
        filterResults
    }
}

const setSearchState = (state) => {
    return{
        type: SET_SEARCHED,
        state
    }
}

//THUNK (CREATORS)
export const fetchResults = () => {
    return async dispatch => {
        try{
            const {data} = axios.get("https://dog.ceo/api/breeds/list/all")
            dispatch(getResults(data.message))
        }catch(err){
            console.log(err)
        }
    }
}

//REDUCER

const resultsReducer = (state={}, action) =>{
    switch(action.type){
        case GET_RESULTS:
            return {...state, results: action.results}
        case GET_FILTERED:
            return {...state, filter: action.filter, filteredResults: action.filterResults}
        case SET_SEARCHED:
            return {...state, searched: action.state}
        default: 
            return state;
    }
}

export default resultsReducer;