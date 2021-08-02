//SpecificBreed Component: Will display 4 random dog pictures of a specific breed + 'Back' button

import React from "react";
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

//Custom Hooks
import useSpecificBreed from "../Hooks/useSpecificBreed";

const SpecificBreed = () => {
    const params = useParams();
    const {pictures} = useSelector(state => state.specificBreed);

    //custom hook to GET specific breed pictures
    useSpecificBreed(params)
  
    return (
        <div>
            <span className="d-flex"><Link to="/">{`<< Back`}</Link></span>
            <h2>{params.breed} {params.subBreed?params.subBreed:""}</h2>
            <div className="container d-flex flex-wrap justify-content-center">
                {pictures?.map((picURL, idx)=>{
                    return(
                        <img key={`dog_${idx}`} src={picURL} alt={`${params.breed} ${params.subBreed?params.subBreed:""} ${idx}`} className="img-fluid max-vh-50 w-sm-100 w-md-50 p-2"></img>
                    )
            })}</div>
        </div>
    )
}

export default SpecificBreed;