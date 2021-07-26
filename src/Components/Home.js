//Homepage Component
import React, {useEffect, useState} from "react";
import axios from "axios";

//COMPONENTS
import ListResults from "./ListResults"

const Home = () => {
const [breeds, setBreeds] = useState({})

const handleFilter = () => {

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
            <form>
               <label>Filter dog breeds:  <input type="search" aria-label="Filter dog breeds"></input></label>
                <button type="button" className="btn btn-primary m-1">Search</button>
            </form>
            <ListResults breeds={breeds}/>
        </div>
    )
}

export default Home;