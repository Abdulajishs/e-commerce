import { useState } from 'react';
import './App.css';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import ProductLists from './components/Products/Products';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCardHandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCartHandler} />
      <ProductLists />
      <Footer />
    </CartProvider>
  );
}

export default App;
