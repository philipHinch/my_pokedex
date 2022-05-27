//hooks
import { useContext } from 'react';
//context
import { PokemonContext } from '../context/PokemonContext';
//components
import CompareContainer from './CompareContainer';

const Form = ({ setIsSearching, isCompare, setIsCompare }) => {

    //context
    const context = useContext(PokemonContext)
    const { dispatch, allPokemonsData } = context

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
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    //show/hide compare container
    const handleCompareBtnClick = () => {
        setIsCompare(!isCompare)
    }

    //prevents form from submitting
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="searchInputContainer">
                <input type="text" name="searchInput" id="searchInput" placeholder="Search..." autoFocus onChange={handleSearch} />
            </div>
            {isCompare && <CompareContainer />}
            {/* {(pokemon_1 || pokemon_2) && <CompareContainer />} */}
            {/* {!pokemon_1 && !pokemon_2 && <h4 className='selectPokemonTitle'>Select pokemon to compare stats</h4>} */}
            <button className="compareBtn" onClick={handleCompareBtnClick}>{isCompare ? 'Close' : 'Compare Stats'}</button>
        </form>
    );
}

export default Form;