//context
import { PokemonContext } from '../context/PokemonContext';
//icons
import { Icon } from '@iconify/react';
//images
import backCard from '../assets/images/back_card.png'
//hooks
import { useContext, useEffect, useState } from 'react';

const Card = ({ isCompare, type, image, name, id, hp, attack, defence, speed }) => {

    //context
    const context = useContext(PokemonContext)
    const { dispatch, favourites } = context

    const [heartActive, setHeartActive] = useState(favourites.includes(id) ? 'heartActive' : '')

    //set icon class on page load
    useEffect(() => {
        setHeartActive(favourites.includes(id.toString()) ? 'heartActive' : '')
    }, [])

    //handles heart icon click and local storage
    const handleHeartClick = (e) => {
        //get pokemon id
        const pokeID = (e.target.id) || e.target.parentElement.id;
        let arr = favourites
        if (arr.includes(pokeID)) {
            //remove active class from icon
            setHeartActive('')
            //get index of the pokemon id in the array
            let index = arr.indexOf(pokeID);
            //remove id from array
            arr.splice(index, 1);
            //save updated array to local storage
            localStorage.setItem('favourites', JSON.stringify(arr))
        } else {
            //add active class to icon
            setHeartActive('heartActive')
            //push pokemon id to array
            arr.push(pokeID);
            //save new array to local storage
            localStorage.setItem('favourites', JSON.stringify(arr));
        }
    }

    //function to capitalize first letter
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //pokemon compare button 1 or 2 click sends data to context
    const compareButtonClick = (e) => {
        //send data to context
        if (e.target.textContent === '1') {
            dispatch({ type: 'SET_POKEMON_1', payload: { name, hp, attack, defence, speed, image } })
        } else if (e.target.textContent === '2') {
            dispatch({ type: 'SET_POKEMON_2', payload: { name, hp, attack, defence, speed, image } })
        }
    }

    return (
        <div className="card">
            <div className="content">
                <div className="backCard">
                    <img src={backCard} alt="back card image" />
                </div>
                <div className="frontCard">
                    {isCompare && <small className="compareIcon compareIcon1" id={id} onClick={compareButtonClick}>1</small>}
                    {isCompare && < small className="compareIcon compareIcon2" id={id} onClick={compareButtonClick}>2</small>}
                    <Icon icon="ant-design:heart-filled" className={`heartIcon ${ heartActive }`} onClick={handleHeartClick} id={id} />
                    <div className="cardImageContaier">
                        <img src={image} alt="card image" />
                    </div>
                    <div className="cardInfoContainer">
                        <h2 className="cardName">{capitalizeFirstLetter(name)}</h2>
                        <div className="pokemonStats">
                        </div>
                        <p className={`type ${ type }`}>{capitalizeFirstLetter(type)}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;