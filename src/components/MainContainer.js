//components
import { useEffect, useState } from 'react'
import Card from './Card'

const maxNum = 898

const MainContainer = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        getData()
    }, [])

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
            {data && data.map(pokemon => (
                <Card />
            ))}
        </main>
    );
}

export default MainContainer;