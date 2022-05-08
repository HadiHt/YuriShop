import './App.css';
import Footer from './components/footer/Footer'
import Home from './pages/explore/home';
import CategoryProducts from './pages/categoryProducts/CategoryProducts';
import Login from './pages/Log-In/LogIn';
import ProductView from './pages/ProductView/ProductView';
import Navbar from './components/testNav/Navbar';
import SignUp from './pages/SignUp/SignUp';
import CartView from './pages/cartView/CartView';
import { ContextWrapper } from './contexts/ContextWrapper';
// import { useState } from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // const [user,setUser] =useState('')
  return (
    <div className="App">
      {/* <Header /> */}
      <ContextWrapper>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="category/:john" element={<CategoryProducts />} />
          <Route path="logIn" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="order" element={<CategoryProducts />} />
          <Route path="product-details/:id" element={<ProductView />} />
          <Route path='/cart' element={<CartView />} />
        </Routes>
      </ContextWrapper>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
