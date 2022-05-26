//css
import './App.css';
//components
import Header from './components/Header';
import Form from './components/Form';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
//hooks
import { useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="App">
      <Header />
      {!isLoading && <Form />}
      < MainContainer isLoading={isLoading} setIsLoading={setIsLoading} />
      {isLoading && <Spinner />}
      <Footer />
    </div>
  );
}

export default App;
