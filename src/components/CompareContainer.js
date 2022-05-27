//hooks
import { useContext } from 'react';
//context
import { PokemonContext } from '../context/PokemonContext';

const CompareContainer = () => {

    //context
    const context = useContext(PokemonContext)
    const { pokemon_1, pokemon_2 } = context

    //capitalize first letter function
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="compareContainer">
            <div className="pokemon1ImageContainer">
                <img src={pokemon_1 ? pokemon_1.image : ''} alt="" className='pokemon1Image' />
            </div>
            <div className="pokemon2ImageContainer">
                <img src={pokemon_2 ? pokemon_2.image : ''} alt="" className='pokemon2Image' />
            </div>
            <div className="compareTitleContainer">
                <h3 className="compareTitle">Stats</h3>
            </div>
            <div className="comparePokemonNames">
                <h4 className="pokemonName1">{pokemon_1 ? capitalizeFirstLetter(pokemon_1.name) : '??'}</h4>
                <h4 className="pokemonName2">{pokemon_2 ? capitalizeFirstLetter(pokemon_2.name) : '??'}</h4>
            </div>
            <div className="compareInnerContainer">
                <div className="pokemon1">

                </div>
                <ul className="compareStats">
                    <li className="stat hpStat">
                        <small className="hpPokemon1 compareText yellow">{pokemon_1 ? pokemon_1.hp : '??'}</small>
                        <small className="hpText compareText">HP</small>
                        <small className="hpPokemon2 compareText blue">{pokemon_2 ? pokemon_2.hp : '??'}</small>
                    </li>
                    <li className="stat attackStat">
                        <small className="attackPokemon1 compareText yellow">{pokemon_1 ? pokemon_1.attack : '??'}</small>
                        <small className="attackText compareText">ATTACK</small>
                        <small className="attackPokemon2 compareText blue">{pokemon_2 ? pokemon_2.attack : '??'}</small>
                    </li>
                    <li className="stat defenceStat">
                        <small className="defencePokemon1 compareText yellow">{pokemon_1 ? pokemon_1.defence : '??'}</small>
                        <small className="defenceText compareText">DEFENCE</small>
                        <small className="defencePokemon2 compareText blue">{pokemon_2 ? pokemon_2.defence : '??'}</small>
                    </li>
                    <li className="stat speedStat">
                        <small className="speedPokemon1 compareText yellow">{pokemon_1 ? pokemon_1.speed : '??'}</small>
                        <small className="speedText compareText">SPEED</small>
                        <small className="speedPokemon2 compareText blue">{pokemon_2 ? pokemon_2.speed : '??'}</small>
                    </li>
                </ul>
                <div className="pokemon2">

                </div>
            </div>
        </div>
    );
}

export default CompareContainer;