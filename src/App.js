import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import RootLayout from './pages/Root';
import Footer from './components/Layout/Footer/Footer';
import HeaderGlobal from './components/Layout/Header/HeaderGlobal';
import Contact from './pages/Contact';



function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderGlobal />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>)
}

export default App;
