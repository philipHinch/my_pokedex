//icons
import { Icon } from '@iconify/react';
//components
import Card from './Card';

const Favourites = ({ isFavourites, setIsFavourites, favouritesData }) => {

    //handles close button click
    const handleClose = () => {
        setIsFavourites(false)
    }

    return (
        <div className={`favouritesContainer ${ isFavourites ? 'showFavouites' : 'hideFavourites' }`}>
            <div className="innerFavouritesContainer">
                <Icon icon="ep:close-bold" className='closeIcon' onClick={handleClose} />
                <h2 className="favouritesTitle">Favourites</h2>
                <div className="favouritesCardContainer">
                    {favouritesData && favouritesData.map(item => (
                        <Card key={item.id} name={item.name} image={item.sprites.other['official-artwork'].front_default} type={item.types[0].type.name} id={item.id} hp={item.stats[0].base_stat} attack={item.stats[1].base_stat} defence={item.stats[2].base_stat} speed={item.stats[5].base_stat} />
                    ))}
                    {favouritesData && favouritesData.length < 1 && <p className='noFavourites'>No Favourites</p>}
                </div>
            </div>
        </div>
    );
}

export default Favourites;