import './App.css';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={        <ItemListContainer /> } />
          <Route exact path="item" element={         <ItemDetailContainer itemId={2} /> } />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
