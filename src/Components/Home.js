//Homepage Component
import React, {useEffect, useState} from "react";
import axios from "axios";

//COMPONENTS
import ListResults from "./ListResults"

const Home = () => {
const [breeds, setBreeds] = useState({})
const [filter, setFilter] = useState("");
const [results, setResults] = useState({})

const handleFilter = () => {
    if(filter&&breeds){
        let filteredResults = Object.entries(breeds).filter(([breed, subBreed])=>{
            if(breed.includes(filter)){
                return true;
            }
        })
        console.log('filtered results: ', filteredResults)
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
        <div>This is the Homepage
               <label>Filter dog breeds:  <input type="search" aria-label="Filter dog breeds" value={filter} onChange={(e)=>setFilter(e.target.value)}></input></label>
                <button type="button" className="btn btn-primary m-1" onClick={handleFilter}>Search</button>
            <ListResults breeds={breeds}/>
        </div>
    )
}

export default Home;