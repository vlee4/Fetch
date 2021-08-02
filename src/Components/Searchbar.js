//Searchbar: Receives filter substrings & triggers filtering of breeds data
import React from "react";

//Custom Hooks
import useSearchbar from "../Hooks/useSearchbar";


const Searchbar = () => {
    const {filter, onFilterChange, handleFilter} = useSearchbar();


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