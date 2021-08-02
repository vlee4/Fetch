//results state
import axios from "axios";

//ACTIONS
const GET_ALL_BREEDS = "GET_ALL_BREEDS";
const SET_FILTER = "SET_FILTER";
const SET_FILTERED_RESULTS = "SET_FILTERED_RESULTS";
const SET_SEARCHED = "SET_SEARCHED";

//ACTION CREATORS
const getAllBreeds = (breeds) => {
    return{
        type: GET_ALL_BREEDS,
        breeds
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter,
    }
}
export const setFilteredResults = (filteredResults) => {
    return {
        type: SET_FILTERED_RESULTS,
        filteredResults,
    }
}

export const setSearchState = (state) => {
    return{
        type: SET_SEARCHED,
        state
    }
}

//THUNK (CREATORS)
export const fetchBreeds = () => {
    return async dispatch => {
        try{
            const {data} = await axios.get("https://dog.ceo/api/breeds/list/all")
            dispatch(getAllBreeds(data.message))
        }catch(err){
            console.log(err)
        }
    }
}

const initialState = {
    breeds:{
        loading: true
    }, 
    filter:"",
    filteredResults: {},
    searched: false   
}

//REDUCER
const resultsReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_ALL_BREEDS:
            return {...state, breeds: action.breeds}
        case SET_FILTER:
            return {...state, filter: action.filter}
        case SET_FILTERED_RESULTS:
            return {...state, filteredResults: action.filteredResults}
        case SET_SEARCHED:
            return {...state, searched: action.state}
        default: 
            return state;
    }
}

export default resultsReducer;