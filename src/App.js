import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Comment from './components/pages/Comment';
import Analytics from './components/pages/Analytics';
import Product from './components/pages/Product';
import ProductList from './components/pages/ProductList';
import MainContent from './components/MainContent';

const App=()=> {
  return (
    <>
      <Sidebar />
      <MainContent/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/comment' element={<Comment />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/product' element={<Product />} />
        <Route path='/productList' element={<ProductList />} />
      </Routes>
      
    </>
  );
}

export default App;
