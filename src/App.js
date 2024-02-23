import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductLists from './components/Products/ProductList';

function App() {
  return (
    <div >
      <Header />
      <Content />
      <ProductLists />
      <Footer />
    </div>
  );
}

export default App;
