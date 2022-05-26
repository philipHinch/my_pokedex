//hooks
import { useContext, useState } from 'react';
//context
import { PokemonContext } from '../context/PokemonContext';

const Form = ({ isSearching, setIsSearching }) => {

    //context
    const context = useContext(PokemonContext)
    const { dispatch, data, allPokemonsData, isLoading, currentPage, numOfPages } = context

    //search pokemon
    const handleSearch = async (e) => {
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        let word = e.target.value.toLowerCase()
        //set if searching or not
        if (word.length === 0) {
            setIsSearching(false)
        } else {
            setIsSearching(true)
        }
        let filteredArr = allPokemonsData.filter(pokemon => {
            if (pokemon.name.toLowerCase().includes(word)) {
                return true
            }
        })
        dispatch({ type: 'SET_SEARCH_VALUE', payload: filteredArr })
        //dispatch({ type: 'SET_DATA', payload: filteredArr })
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    return (
        <form className="container">
            <div className="searchInputContainer">
                <input type="text" name="searchInput" id="searchInput" placeholder="Search..." autoFocus onChange={handleSearch} />
            </div>
        </form>
    );
}

export default Form;