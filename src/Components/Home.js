//Homepage Component
import React, {useEffect, useState} from "react";
import axios from "axios";

//COMPONENTS
import ListResults from "./ListResults"

const Home = () => {
const [breeds, setBreeds] = useState({});
const [filter, setFilter] = useState("");
const [results, setResults] = useState({});
const [searched, setSearch] = useState(false);

const onFilterChange = (e) => {
    //Set searched to false if new search inputted to prevent rendering old results
    if(searched){
        setSearch(false)
    }
    setFilter(e.target.value)
    
}

//handleFilter takes the list of dog breeds generated on page load & generates an object with dog breeds that match the input substring
const handleFilter = () => {
    setSearch(false)
    if(filter&&breeds){
        let filteredResults = {};
        Object.entries(breeds).forEach(([breed, subBreed])=>{
            if(breed.includes(filter)){
                filteredResults[breed] = [...subBreed];
            }
        })
        setResults(filteredResults)
        setSearch(true)
    }
}

useEffect(()=>{
    const fetchDogs = async() =>{
        try{
            const {data} = await axios.get("https://dog.ceo/api/breeds/list/all")  
            setBreeds(data.message)
        }catch(err){
            console.log(err)
        }
    }
    fetchDogs()
},[])

    return (
        <div>
               <label>Filter dog breeds:  <input type="search" aria-label="Filter dog breeds" value={filter} onChange={(e)=>onFilterChange(e)}></input></label>
                <button type="button" className="btn btn-primary m-1" onClick={handleFilter}>Search</button>
            <ListResults breeds={filter&&searched? results: breeds}/>
        </div>
    )
}

export default Home;