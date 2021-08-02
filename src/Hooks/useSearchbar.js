//useSearchbar: custom hook for Searchbar functionality
import { useSelector, useDispatch } from "react-redux";

//Redux
import { setFilter, setFilteredResults, setSearchState } from "../Store/results";


const useSearchbar = () =>{
    const dispatch = useDispatch();
    const {breeds, filter, searched} = useSelector(state=> state.breedsResults);



    const onFilterChange = (e) => {
        //Set searched to false if new search inputted to prevent rendering old results
        if(searched){
            dispatch(setSearchState(false))
        }
        dispatch(setFilter(e.target.value))
        
    }

    //handleFilter takes the list of dog breeds generated on page load & generates an object with dog breeds that match the input substring
    const handleFilter = () => {
        dispatch(setSearchState(false))
        if(filter&&breeds){
            let filteredResults = {};
            Object.entries(breeds).forEach(([breed, subBreed])=>{
                if(breed.includes(filter)){
                    filteredResults[breed] = [...subBreed];
                }
            })

            dispatch(setFilteredResults(filteredResults))
            dispatch(setSearchState(true))
        }
    }

    return{
        filter,
        onFilterChange,
        handleFilter,

    }
}

export default useSearchbar;