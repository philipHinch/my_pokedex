//context
import { PokemonContext } from '../context/PokemonContext';
//hooks
import { useContext } from 'react';

const Pagination = () => {

    //context
    const context = useContext(PokemonContext)
    const { dispatch, currentPage, numOfPages } = context

    //checks if page 1 or last page before sending data to context
    const handlePrevNextClick = (e) => {
        if (e.target.id === 'prev' && currentPage > 1) {
            dispatch({ type: 'PREV_PAGE', payload: currentPage - 1 })
        } else if (e.target.id === 'next' && currentPage < outputNumberOfPages() - 1) {
            dispatch({ type: 'NEXT_PAGE', payload: currentPage + 1 })
        }
    }

    //sets current page to context
    const handlePageNumberClick = (e) => {
        dispatch({ type: 'SET_CURRENT_PAGE', payload: e.target.textContent })
    }

    //outputs number of pages
    const outputNumberOfPages = () => {
        let arr = []
        for (let i = 1; i < numOfPages; i++) {
            arr.push(<button key={i} className={`pageBtn ${ currentPage == i ? 'activePageBtn' : '' }`} onClick={handlePageNumberClick}>{i}</button>)
        }
        return arr
    }

    return (
        <div className="paginationContainer">
            <button className="prevBtn" id='prev' onClick={handlePrevNextClick}>
                {'<<'}
            </button>
            {outputNumberOfPages()}
            <button className="nextBtn" id='next' onClick={handlePrevNextClick}>
                {'>>'}
            </button>
        </div>
    );
}

export default Pagination;