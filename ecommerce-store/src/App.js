import './App.css';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
        <Navbar />
        
        <ItemListContainer />

        {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} /> */}

        <Footer />

    </div>
  );
}

export default App;
