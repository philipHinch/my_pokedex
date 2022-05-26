export const PokemonReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'SET_ALL_POKEMONS_DATA':
            return {
                ...state,
                allPokemonsData: action.payload
            }
        case 'SET_SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.payload
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'PREV_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'SET_NUM_OF_PAGES':
            return {
                ...state,
                numOfPages: action.payload
            }
        case 'SET_WATCHLIST':
            return {
                ...state,
                watchlist: action.payload
            }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}