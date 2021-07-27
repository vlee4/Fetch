//SpecificBreed Component: Will display 4 random dog pictures of a specific breed + 'Back' button

import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';

const SpecificBreed = () => {
    const params = useParams();
    const [pictures, setPictures] = useState([]);

    //Load pictures once, using url params to make the appropriate GET request
    useEffect(()=>{
        const fetchPictures = async() =>{
            try{
                //If the the user is viewing a sub-breed, the component will make a GET request for 4 random pictures of the sub-breed
                if(params.subBreed){
                    const {data} = await axios.get(`https://dog.ceo/api/breed/${params.breed}/${params.subBreed}/images/random/4`);
                    setPictures(data.message)
                    
                   
                }else{ //If the user is viewing a general breed, the component will GET 4 random pictuers of the general breed
                    const {data} = await axios.get(`https://dog.ceo/api/breed/${params.breed}/images/random/4`);
                    setPictures(data.message)
                }
            }catch(err){
                console.log(err)
            }
        }
        fetchPictures()
    },[params.breed, params.subBreed])
  
    return (
        <div>
            <span className="d-flex"><Link to="/">{`<< Back`}</Link></span>
            <h2>{params.breed} {params.subBreed?params.subBreed:""}</h2>
            <div className="container d-flex flex-wrap justify-content-center">{pictures?.map((picURL, idx)=>{
                return(
                    <img key={`dog_${idx}`} src={picURL} alt={`${params.breed} ${params.subBreed?params.subBreed:""} ${idx}`} className="img-fluid max-vh-50 w-sm-100 w-md-50 p-2"></img>
                )
            })}</div>
        </div>
    )
}

export default SpecificBreed;