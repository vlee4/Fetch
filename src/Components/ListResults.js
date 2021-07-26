//ListResults Component: will display list of dog breeds (all or searched)

import React,{Fragment} from "react";
import {Link} from "react-router-dom";

const ListResults = ({breeds}) => {
    console.log("breeds", breeds)
    return (
        <div className="container">This will list results
            <div className="d-flex justify-content-center">
                <ul className="d-sm-flex flex-column align-items-start">{Object.entries(breeds).map(([breed,subBreed], idx)=>{
                    //If the breed has a sub-breed array it will display as a list item link
                    if(subBreed.length){
                        return(
                            <Fragment key={`dog_breed_${idx}`}>
                            <li className="breed">Breed: <Link to={`/breed/${breed}`}>{breed}</Link></li>
                            <ul>{subBreed.map((sub, idx)=>{
                                return(
                                    <li className="sub-breed" key={`dog_subBreed_${idx}`}>Sub-breed: <Link to={`/breed/${breed}/${sub}`}>{sub}</Link></li>
                                )
                            })}</ul>
                        </Fragment>
                        )
                    }
                    else{
                        return (
                            <li className="breed">Breed: <Link to={`/breed/${breed}`} key={`dog_breed_${idx}`}>{breed}</Link></li>
                        )
                    }
                })}</ul>
            </div>
        </div>
    )
}

export default ListResults;