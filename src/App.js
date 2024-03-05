import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import RootLayout from './components/Layout/RootLayout/Root';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';


function App() {
  return (
    <>
      <RootLayout >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path='product/:id' element={<ProductDetails />} />
        </Routes>
      </RootLayout>
    </>
    )
}

export default App;
