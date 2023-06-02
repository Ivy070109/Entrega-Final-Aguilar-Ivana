import './App.css';
import { getFirestore, doc, getDoc } from "firebase/firestore";
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
import { useEffect, useState } from 'react';


function App() {
  const [categoria, setCategoria] = useState();

  useEffect(() => {
    const db = getFirestore();

    const categoryRef = doc(db, "products", "1udrCOvwysQmwwfWRsGw");
    getDoc(categoryRef).then((snapshot) => {
      if(snapshot.exists()) {
        setCategoria({ id: snapshot.id, ...snapshot.data() });
      }
    })
  }, []);
  console.log(categoria);

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
          </Routes>

          <Footer />
        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
