//hooks
import { useEffect, useState } from 'react'
//components
import Card from './Card'

const MainContainer = ({ setIsLoading }) => {

    //max num of pokemon
    const maxNum = 898

    const [data, setData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(20);

    //fetches data on initial page load
    useEffect(() => {
        getData()
    }, [])

    //fetch data function
    const getData = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/898')
        const data = await res.json()
        setData(data.results)
        console.log(data);
    }

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
        </main>
    );
}

export default MainContainer;