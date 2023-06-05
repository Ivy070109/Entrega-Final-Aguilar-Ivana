import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext';
import AboutUs from './components/AboutUs/AboutUs';
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <CartProvider>

        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route exact path={"/"} element={<Banner greetings="Bienvenido a Deepest Symphaty" />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={        <ItemListContainer /> } />
            <Route exact path="/productos" element={        <ItemListContainer /> } />
            <Route exact path="/productos/:category" element={        <ItemListContainer /> } />
            <Route exact path="/item/:id" element={         <ItemDetailContainer /> } />
            <Route exact path="/nosotros" element={ <AboutUs /> } />
            <Route exact path="/registro" element={ <Register />} />
            <Route exact path="/cart" element={ <Cart />} /> 
            <Route exact path="/checkout" element={ <Checkout />} />  

          </Routes>

          <Footer />
        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
