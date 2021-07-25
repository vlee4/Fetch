//Homepage Component

import React, {useEffect} from "react";
import ListResults from "./ListResults"
import axios from 'axios';

const Home = () => {

useEffect(()=>{
    const fetchDogs = async() =>{
        try{
            const {data} = await axios.get("https://dog.ceo/api/breeds/list/all")  
            console.log('dog breeds:', data.message)
        }catch(err){
            console.log(err)
        }
    }
    fetchDogs()
},[])

    return (
        <div>This is the Homepage
            <ListResults/>
        </div>
    )
}

export default Home;