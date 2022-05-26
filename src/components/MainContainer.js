//hooks
import { useEffect, useState, useContext } from 'react'
//components
import Card from './Card'
//context
import { PokemonContext } from '../context/PokemonContext';


const MainContainer = () => {

    //context
    const context = useContext(PokemonContext)
    const { dispatch, data, isLoading } = context

    //const [data, setData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(null);

    const maxNumPokemon = 898
    const cardsPerPage = 20;
    const indexOfLastPost = currentPage * cardsPerPage;
    const indexOfFirstPost = indexOfLastPost - cardsPerPage;

    //fetches data on initial page load
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        const promises = [];
        for (let i = 1; i <= maxNumPokemon; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${ i }`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        return Promise.all(promises).then((results) => {
            setNumOfPages(Math.ceil(results.length / cardsPerPage));
            let arr = results.slice(indexOfFirstPost, indexOfLastPost)
            console.log(arr);
            dispatch({ type: 'SET_DATA', payload: arr })
            dispatch({ type: 'SET_IS_LOADING', payload: false })
        });
    };

    return (
        <main className="mainContainer container">
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
            {data && data.map(item => (
                <Card key={item.id} name={item.name} image={item.sprites.other['official-artwork'].front_default} type={item.types[0].type.name} />
            ))}
        </main>
    );
}

export default MainContainer;