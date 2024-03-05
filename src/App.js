import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import RootLayout from './components/Layout/RootLayout/Root';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import { useContext } from 'react';
import AuthContext from './store/auth-context';


function App() {
  const authCntx = useContext(AuthContext)
  return (
    <>
      <RootLayout >
        <Routes>
          <Route path='/' element={<Home />} />
          {authCntx.isLoggedIn && <Route path="store" element={<Store />} /> }
          {!authCntx.isLoggedIn && <Route path="store" element={<Login />} /> }
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='*' element = {<Navigate to="login"/>} />
        </Routes>
      </RootLayout>
    </>
    )
}

export default App;
