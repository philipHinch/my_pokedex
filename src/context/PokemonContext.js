//context
import { createContext, useReducer } from "react"
//reducer
import { PokemonReducer } from "./PokemonReducer"

//create context
export const PokemonContext = createContext()

//create provider
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PokemonReducer,
        {
            data: null,
            filtered_data: null,
            pokemon_1: null,
            pokemon_2: null,
            searchValue: null,
            isLoading: true,
            currentPage: 1,
            numOfPages: null,
            allPokemonsData: null,
            favourites: JSON.parse(localStorage.getItem('favourites')) || []
        }
    )

    //return provider surrounding children
    return (
        <PokemonContext.Provider value={{ ...state, dispatch }}>
            {children}
        </PokemonContext.Provider>
    )
}