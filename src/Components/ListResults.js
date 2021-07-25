//ListResults Component: will display list of dog breeds (all or searched)

import React,{Fragment} from "react";
import {Link} from "react-router-dom";

const ListResults = ({breeds}) => {
    console.log("breeds", breeds)
    return (
        <div>This will list results
            <div>{Object.entries(breeds).map(([breed,subBreed], idx)=>{
                //If the breed has a sub-breed array it will display as a list item link
                if(subBreed.length){
                    return(
                        <Fragment key={`dog_breed_${idx}`}>
                        <Link to={`/breed/${breed}`}><ul>Breed: {breed}</ul></Link>
                        <>{subBreed.map((sub, idx)=>{
                            return(
                                <Link to={`/breed/${breed}/${sub}`} key={`dog_subBreed_${idx}`}><li >Sub-breed: {sub}</li></Link>
                            )
                        })}</>
                    </Fragment>
                    )
                }
                else{
                    return (
                        <Link to={`/breed/${breed}`} key={`dog_breed_${idx}`}><ul >Breed: {breed}</ul></Link>
                    )
                }
            })}</div>
        </div>
    )
}

export default ListResults;