//ListResults Component: will display list of dog breeds (all or searched)

import React,{Fragment} from "react";

const ListResults = ({breeds}) => {
    console.log("breeds", breeds)
    return (
        <div>This will list results
            <div>{Object.entries(breeds).map(([breed,subBreed], idx)=>{
                if(subBreed){
                    return(
                        <Fragment key={`dog_breed_${idx}`}>
                        <ul>Breed: {breed}</ul>
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
                        <ul key={`dog_breed_${idx}`}>Breed: {breed}</ul>
                    )
                }
            })}</div>
        </div>
    )
}

export default ListResults;