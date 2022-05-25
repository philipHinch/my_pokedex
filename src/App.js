//css
import './App.css';
//components
import Form from './components/Form';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      {/* <div className='mainContainer'> */}
      <Header />
      <Form />
      <MainContainer />
      {/* </div> */}
    </div>
  );
}

export default App;
