//css
import './App.css';
//components
import Header from './components/Header';
import Form from './components/Form';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
//hooks
import { useContext } from 'react';
//context
import { PokemonContext } from './context/PokemonContext';

function App() {

  //context
  const context = useContext(PokemonContext)
  const { isLoading } = context

  return (
    <div className="App">
      <Header />
      {!isLoading && <Form />}
      < MainContainer isLoading={isLoading} />
      {isLoading && <Spinner />}
      <Footer />
    </div>
  );
}

export default App;
