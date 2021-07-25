//ListResults Component: will display list of dog breeds (all or searched)

import React,{Fragment} from "react";
import {Link} from "react-router-dom";

const ListResults = ({breeds}) => {
    console.log("breeds", breeds)
    return (
        <div>This will list results
            <div>{Object.entries(breeds).map(([breed,subBreed], idx)=>{
                //If the breed has a sub-breed array it will display as a list item
                if(subBreed.length){
                    return(
                        <Fragment key={`dog_breed_${idx}`}>
                        <Link to={`/${breed}`}><ul>Breed: {breed}</ul></Link>
                        <>{subBreed.map(sub=>{
                            return(
                                <li>Sub-breed: {sub}</li>
                            )
                        })}</>
                    </Fragment>
                    )
                }
                else{
                    return (
                        <Link to={`/${breed}`}><ul key={`dog_breed_${idx}`}>Breed: {breed}</ul></Link>
                    )
                }
            })}</div>
        </div>
    )
}

export default ListResults;