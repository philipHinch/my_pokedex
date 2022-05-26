//context
import { PokemonContext } from '../context/PokemonContext';
//hooks
import { useContext, useState } from 'react';

const Pagination = () => {

    //context
    const context = useContext(PokemonContext)
    const { dispatch, data, isLoading, currentPage, numOfPages } = context

    const [pagesArr, setPagesArr] = useState(null)

    const handlePrevNextClick = (e) => {
        // console.log(currentPage);
        if (e.target.id === 'prev' && currentPage > 1) {
            console.log(currentPage);
            dispatch({ type: 'PREV_PAGE', payload: currentPage - 1 })
        } else if (e.target.id === 'next') {
            console.log(currentPage);
            dispatch({ type: 'NEXT_PAGE', payload: currentPage + 1 })
        }
    }

    const handlePageNumberClick = (e) => {
        dispatch({ type: 'SET_CURRENT_PAGE', payload: e.target.textContent })
    }

    const outputNumberOfPages = () => {
        let arr = []
        for (let i = 1; i < numOfPages; i++) {
            arr.push(<button key={i} className={`pageBtn ${ currentPage === i ? 'activePageBtn' : '' }`} onClick={handlePageNumberClick}>{i}</button>)
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