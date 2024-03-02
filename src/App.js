import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import RootLayout from './pages/Root';
import Footer from './components/Layout/Footer/Footer';
import HeaderGlobal from './components/Layout/Header/HeaderGlobal';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';



function App() {
  return (
    <>
        <HeaderGlobal />
        <Routes>/
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path='product/:id' element={<ProductDetails/>} />
          </Route>
        </Routes>
      <Footer />
    </>)
}

export default App;
