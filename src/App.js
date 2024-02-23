import { useState } from 'react';
import './App.css';
import Content from './components/Layout/Content/Content';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import ProductLists from './components/Products/ProductList';
import Cart from './components/Cart/Cart';

function App() {

  const [showCart,setShowCart] = useState(false);

  const showCartHandler = () =>{
    setShowCart(true)
  }
  const hideCardHandler = () =>{
    setShowCart(false)
  }

  return (
    <div >
      {showCart && <Cart onClose={hideCardHandler}/>}
      <Header onShowCart={showCartHandler}  />
      <Content />
      <ProductLists />
      <Footer />
    </div>
  );
}

export default App;
