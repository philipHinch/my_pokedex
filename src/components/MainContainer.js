//hooks
import { useEffect, useState, useContext } from 'react'
//components
import Card from './Card'
//context
import { PokemonContext } from '../context/PokemonContext';
import Pagination from './Pagination';


const MainContainer = ({ isSearching, setIsSearching }) => {

    //context
    const context = useContext(PokemonContext)
    const { dispatch, data, isLoading, currentPage, searchValue, watchlist } = context

    // const [currentPage, setCurrentPage] = useState(1);
    //const [numOfPages, setNumOfPages] = useState(null);

    const maxNumPokemon = 898
    // const maxNumPokemon = 150
    const cardsPerPage = 20;
    const indexOfLastPost = currentPage * cardsPerPage;
    const indexOfFirstPost = indexOfLastPost - cardsPerPage;

    //fetches data on initial page load
    useEffect(() => {
        getData()
    }, [currentPage])

    //get data and set it to context
    const getData = () => {
        //set loading
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        //fetch all all data for every pokemon and insert into promises array
        const promises = [];
        for (let i = 1; i <= maxNumPokemon; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${ i }`;
            promises.push(fetch(url).then((res) => res.json()).catch(err => console.log(err)));
        }
        //send data to context
        return Promise.all(promises).then((results) => {
            console.log(results);
            dispatch({ type: 'SET_ALL_POKEMONS_DATA', payload: results })
            dispatch({ type: 'SET_NUM_OF_PAGES', payload: Math.ceil(results.length / cardsPerPage) + 1 })
            //slice data to amount of decided cards per page
            let arr = results.slice(indexOfFirstPost, indexOfLastPost)
            // console.log(arr);
            dispatch({ type: 'SET_DATA', payload: arr })
            dispatch({ type: 'SET_IS_LOADING', payload: false })
        });
    };

    return (
        <main className="mainContainer container">
            {!isLoading && data && !isSearching && data.map(item => (
                <Card key={item.id} name={item.name} image={item.sprites.other['official-artwork'].front_default} type={item.types[0].type.name} id={item.id} hp={item.stats[0].base_stat} />
            ))}
            {!isLoading && searchValue && isSearching && searchValue.map(item => (
                <Card key={item.id} name={item.name} image={item.sprites.other['official-artwork'].front_default} type={item.types[0].type.name} id={item.id} hp={item.stats[0].base_stat} />
            ))}
            {!isLoading && !isSearching && <Pagination />}
        </main>
    );
}

export default MainContainer;