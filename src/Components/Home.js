//Homepage Component

import React, {useEffect, useState} from "react";
import ListResults from "./ListResults"
import axios from "axios";

const Home = () => {
const [breeds, setBreeds] = useState({})

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
            <ListResults breeds={breeds}/>
        </div>
    )
}

export default Home;