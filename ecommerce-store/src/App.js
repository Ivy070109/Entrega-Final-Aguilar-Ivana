import './App.css';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
        <ItemListContainer greetings="Bienvenidos a Deepest Symphaty" />

        <Footer />

      </header>
    </div>
  );
}

export default App;
