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

function App() {

  //context
  const context = useContext(PokemonContext)
  const { isLoading } = context

  const [isSearching, setIsSearching] = useState(false)
  const [isCompare, setIsCompare] = useState(false)

  return (
    <div className="App">
      <Header />
      {!isLoading && <Form isSearching={isSearching} setIsSearching={setIsSearching} isCompare={isCompare} setIsCompare={setIsCompare} />}
      < MainContainer isLoading={isLoading} isSearching={isSearching} setIsSearching={setIsSearching} isCompare={isCompare} />

      {isLoading && <Spinner />}
      <Footer />
    </div>
  );
}

export default App;
