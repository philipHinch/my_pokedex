//context
import { PokemonContext } from '../context/PokemonContext';
//icons
import { Icon } from '@iconify/react';
//images
import backCard from '../assets/images/back_card.png'
//hooks
import { useContext, useEffect, useState } from 'react';

const Card = ({ type, image, name, id, hp }) => {

    //context
    const context = useContext(PokemonContext)
    const { dispatch, data, watchlist } = context

    const [heartActive, setHeartActive] = useState(watchlist.includes(id) ? 'heartActive' : '')

    //set icon class on page load
    useEffect(() => {
        setHeartActive(watchlist.includes(id.toString()) ? 'heartActive' : '')
    }, [])

    //handles heart icon click and local storage
    const handleHeartClick = (e) => {
        //get pokemon id
        const pokeID = (e.target.id) || e.target.parentElement.id;
        let arr = watchlist
        if (arr.includes(pokeID)) {
            //remove active class from icon
            setHeartActive('')
            //get index of the pokemon id in the array
            let index = arr.indexOf(pokeID);
            //remove id from array
            arr.splice(index, 1);
            console.log(watchlist);
            //save updated array to local storage
            localStorage.setItem('watchlist', JSON.stringify(arr))
        } else {
            //add active class to icon
            setHeartActive('heartActive')
            //push pokemon id to array
            arr.push(pokeID);
            //save new array to local storage
            localStorage.setItem('watchlist', JSON.stringify(arr));
            console.log(watchlist);
        }
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="card">
            <div className="content">
                <div className="backCard">
                    <img src={backCard} alt="back card image" />
                </div>
                <div className="frontCard" >
                    <small className="compareIcon compareIcon1">1</small>
                    <small className="compareIcon compareIcon2">2</small>
                    <Icon icon="ant-design:heart-filled" className={`heartIcon ${ heartActive }`} onClick={handleHeartClick} id={id} />
                    {/* <p className="hp">hp {hp}</p> */}
                    <div className="cardImageContaier">
                        <img src={image} alt="card image" />
                    </div>
                    <div className="cardInfoContainer">
                        <h2 className="cardName">{capitalizeFirstLetter(name)}</h2>
                        <div className="pokemonStats">
                            {/* <p className="attack">attack:{hp}</p> */}
                        </div>
                        <p className={`type ${ type }`}>{capitalizeFirstLetter(type)}</p>
                        {/* <div className="statsContainer">
                            <small className="weight">weight:120</small>
                            <small className="height">heigh:20</small>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;