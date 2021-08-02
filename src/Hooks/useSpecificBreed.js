//useSpecificBreed: custom hook for SpecificBreed component functionality

import {useEffect} from "react"
import {useDispatch} from "react-redux"

//Redux
import { fetchPictures } from "../Store/specificBreed";

const useSpecificBreed = ({breed, subBreed}) => {
    const dispatch = useDispatch();
   
     //Load pictures, using url params to make the appropriate GET request; will be triggered again if params changes
     useEffect(()=>{
        subBreed? dispatch(fetchPictures(breed, subBreed)): dispatch(fetchPictures(breed))
    },[dispatch, breed, subBreed])

    return {}
}

export default useSpecificBreed;