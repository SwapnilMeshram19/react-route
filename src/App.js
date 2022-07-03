import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './components/AllProducts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AllProducts' element={<AllProducts/>}></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetails/>}></Route>
        <Route path='/NotFound' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
