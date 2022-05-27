//css
import './App.css';
//components
import Header from './components/Header';
import Form from './components/Form';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
//hooks
import { useContext, useState } from 'react';
//context
import { PokemonContext } from './context/PokemonContext';
import Favourites from './components/Favourites';

function App() {

  //context
  const context = useContext(PokemonContext)
  const { isLoading } = context

  const [isSearching, setIsSearching] = useState(false)
  const [isCompare, setIsCompare] = useState(false)
  const [isFavourites, setIsFavourites] = useState(false)
  const [favouritesData, setFavouritesData] = useState([])

  return (
    <div className="App">
      <Header />
      {!isLoading && !isFavourites && <Form isSearching={isSearching} setIsSearching={setIsSearching} isCompare={isCompare} setIsCompare={setIsCompare} isFavourites={isFavourites} setIsFavourites={setIsFavourites} setFavouritesData={setFavouritesData} />}
      {!isFavourites && < MainContainer isLoading={isLoading} isSearching={isSearching} setIsSearching={setIsSearching} isCompare={isCompare} />}
      {isLoading && <Spinner />}
      < Favourites isFavourites={isFavourites} setIsFavourites={setIsFavourites} favouritesData={favouritesData} />
      <Footer />
    </div>
  );
}

export default App;
