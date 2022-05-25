//css
import './App.css';
//components
import Form from './components/Form';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <div className='mainContainer'> */}
      <Header />
      <Form />
      <MainContainer />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
