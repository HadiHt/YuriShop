import './App.css';
import Footer from './components/footer/Footer'
import Home from './pages/explore/home';
import CategoryProducts from './pages/categoryProducts/CategoryProducts';
import Login from './pages/Log-In/LogIn';
import ProductView from './pages/ProductView/ProductView';
import Navbar from './components/testNav/Navbar';
import SignUp from './pages/SignUp/SignUp';
import CartView from './pages/cartView/CartView';
import ContextWrapper from './contexts/ContextWrapper';
// import { useState } from 'react';
import EditBiosInfo from './pages/EditBiosInfo/EditBiosInfo';
import EditAddress from './pages/EditAddress/EditAddress';
import UserProfile from './pages/UserProfile/UserProfile';
import Admin from './pages/Admin/Admin';
import ApplicationView from './pages/ApplicationView/ApplicationView'

import AddAProduct from './pages/AddAProduct/AddAProduct';
import { Routes, Route } from "react-router-dom";
import OrderCard from './components/oderCard/OrderCard';
import Order from './pages/OrderPage/Order';
import ShopProfile from './pages/ShopProfile/ShoProfile';
import EditProduct from './pages/EditProduct/EditProduct';
import EditPurchase from './pages/EditPurchase/EditPurchase';
import FilteredPage from './pages/FilteredPage/FilteredPage';
import FillApplication from './pages/FillApplication/FillApplication';

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
          <Route path="/admin" element={<Admin />} />
          <Route path="/ApplicationView/:id" element={<ApplicationView />} />
          <Route path="logIn" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="order" element={<Order />} />
          <Route path="product-details/:id" element={<ProductView />} />
          <Route path='/cart' element={<CartView />} />
          <Route path='/filtered-products/:key' element={<FilteredPage/>}/>
          <Route path="UserProfile/:id" element={<UserProfile />} />
          <Route path="UserProfile/:id/EditBiosInfo" element={<EditBiosInfo />} />
          <Route path="UserProfile/:id/EditAddress" element={<EditAddress />} />
          <Route path="UserProfile/:id/Application" element={<FillApplication />} />
          <Route path='ShopProfile/:id/AddAProduct' element={<AddAProduct/>} />
          <Route path="ShopProfile/:id" element={<ShopProfile/>} />
          <Route path="ShopProfile/:id/EditBiosInfo" element={<EditBiosInfo />} />
          <Route path="ShopProfile/:id/EditAddress" element={<EditAddress />} />
          <Route path="ShopProfile/:id/EditProduct/:id" element={<EditProduct/>} />
          <Route path="ShopProfile/:id/EditPurchase/:id/:orderId" element={<EditPurchase/>} />
        </Routes>
      </ContextWrapper>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
