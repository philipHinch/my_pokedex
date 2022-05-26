//hooks
import { useEffect, useState } from 'react'
//components
import Card from './Card'

const MainContainer = ({ isLoading, setIsLoading }) => {

    //max num of pokemon
    const maxNumPokemon = 898
    const cardsPerPage = 20;

    const [data, setData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(null);
    const indexOfLastPost = currentPage * cardsPerPage;
    const indexOfFirstPost = indexOfLastPost - cardsPerPage;
    //const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const pageResults = cardsPerPage * (currentPage)

    //fetches data on initial page load
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setIsLoading(true)
        const promises = [];
        for (let i = 1; i <= maxNumPokemon; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${ i }`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        return Promise.all(promises).then((results) => {
            setNumOfPages(Math.ceil(results.length / cardsPerPage));
            let arr = results.slice(indexOfFirstPost, indexOfLastPost)
            console.log(arr);
            setData(arr)
            setIsLoading(false)
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