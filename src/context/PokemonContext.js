import { createContext, useReducer } from "react"
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
        }
    )

    //return provider surrounding children
    return (
        <PokemonContext.Provider value={{ ...state, dispatch }}>
            {children}
        </PokemonContext.Provider>
    )
}