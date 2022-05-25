//css
import './App.css';
//components
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <main className='mainContainer'>
        <Header />
        <Form />
      </main>
    </div>
  );
}

export default App;
