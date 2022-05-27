//icons
import { Icon } from '@iconify/react';
//components
import Card from './Card';
//hooks
import { useContext } from 'react';
//context
import { PokemonContext } from '../context/PokemonContext';


const Favourites = ({ isFavourites, setIsFavourites, favouritesData }) => {

    const context = useContext(PokemonContext)
    const { favourites, data } = context

    //handles close button click
    const handleClose = () => {
        setIsFavourites(false)
    }

    return (
        <div className={`favouritesContainer ${ isFavourites ? 'showFavouites' : 'hideFavourites' }`}>
            <div className="innerFavouritesContainer">
                <Icon icon="ep:close-bold" className='closeIcon' onClick={handleClose} />
                <div className="favouritesCardContainer">
                    {/* {favouritesData && favouritesData.map(item => (
                        <Card key={item.id} name={item.name} />
                    ))} */}
                    {favouritesData && favouritesData.map(item => (
                        <Card key={item.id} name={item.name} image={item.sprites.other['official-artwork'].front_default} type={item.types[0].type.name} id={item.id} hp={item.stats[0].base_stat} attack={item.stats[1].base_stat} defence={item.stats[2].base_stat} speed={item.stats[5].base_stat} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Favourites;