//specificBreed state
import axios from "axios";

//ACTIONS
const GET_BREED_PICTURES = "GET_BREED_PICTURES"
//ACTION CREATORS
const getPictures = (pictures) => {
    return {
        type: GET_BREED_PICTURES,
        pictures
    }
}

//THUNK
export const fetchPictures = (breed, subBreed) => {
    return async dispatch => {
        try{
            //If the the user is viewing a sub-breed, the component will make a GET request for 4 random pictures of the sub-breed
            if(subBreed){
                const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/4`);
                dispatch(getPictures(data.message))
            }else{//If the user is viewing a general breed, the component will GET 4 random pictuers of the general breed
                const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/4`);
                dispatch(getPictures(data.message))
            }
        }catch(err){
            console.log(err)
        }
    }
}


//REDUCER
const specificBreedReducer = (state = {pictures:[]}, action) =>{
    switch(action.type){
        case GET_BREED_PICTURES:
            return {...state, pictures: action.pictures}
        default:
            return state;
    }
}

export default specificBreedReducer;