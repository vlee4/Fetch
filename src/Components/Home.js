//Homepage Component
import React, {useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Dispatcher
import { fetchBreeds } from "../Store/results";

//COMPONENTS
import ListResults from "./ListResults";
import Searchbar from "./Searchbar";

const Home = () => {
    const dispatch = useDispatch();
    const {breeds, filter, filteredResults, searched } = useSelector(state => state.results)

    
    //Makes a GET request for all dog breeds available, once, via Redux dispatch
    useEffect(()=>{
        dispatch(fetchBreeds())
    },[dispatch])

    
    return (
        <div>
            <Searchbar/>
            <ListResults breeds={filter&&searched? filteredResults: breeds}/>
        </div>
        )
    }

export default Home;