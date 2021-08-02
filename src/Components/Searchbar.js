//Searchbar: Receives filter substrings & triggers filtering of breeds data

import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Dispatcher
import { setFilter, setFilteredResults, setSearchState } from "../Store/results";


const Searchbar = () => {
    const dispatch = useDispatch();
    const {breeds, filter, searched} = useSelector(state=> state.results);

    const onFilterChange = (e) => {
        //Set searched to false if new search inputted to prevent rendering old results
        if(searched){
            dispatch(setSearchState(false))
        }
        dispatch(setFilter(e.target.value))
        
    }

    //handleFilter takes the list of dog breeds generated on page load & generates an object with dog breeds that match the input substring
    const handleFilter = () => {
        dispatch(setSearchState(false))
        if(filter&&breeds){
            let filteredResults = {};
            Object.entries(breeds).forEach(([breed, subBreed])=>{
                if(breed.includes(filter)){
                    filteredResults[breed] = [...subBreed];
                }
            })
            console.log("filter", filter, "filteredREsults", filteredResults)
            dispatch(setFilteredResults(filteredResults))
            dispatch(setSearchState(true))
        }
    }


    return(
        <span role="search" className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <label htmlFor="filter">Filter dog breeds: </label>
            <span className="d-flex align-items-center">
                <input type="search" id="filter" className="mx-1" value={filter} onChange={(e)=>onFilterChange(e)}></input>
                <button type="button" className="btn btn-primary m-1" onClick={handleFilter}>Search</button>
            </span>
        </span>
    )
}

export default Searchbar;