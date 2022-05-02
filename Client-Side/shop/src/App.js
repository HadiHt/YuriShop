import './App.css';
import Footer from './components/footer/Footer'
import Home from './pages/explore/home';
import CategoryProducts from './pages/categoryProducts/CategoryProducts';
import Login from './pages/Log-In/LogIn';
import { userContext } from './userContext';
import { useState } from 'react';
import ProductView from './pages/ProductView/ProductView';
import Navbar from './components/testNav/Navbar';
import EditBiosInfo from './pages/EditBiosInfo/EditBiosInfo';
import EditAddress from './pages/EditAddress/EditAddress';

import {
  Routes,
  Route,
} from "react-router-dom";
import UserProfile from './pages/UserProfile/UserProfile';

function App() {
  const [user,setUser] =useState('')
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar/>
      <userContext.Provider value={{user, setUser}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="category/:john" element={<CategoryProducts />} />
          <Route path="logIn" element={<Login />} />
          <Route path="order" element={<CategoryProducts />} />
          <Route path="product-details/:id" element={<ProductView/>}/>
          <Route path="UserProfile/:id" element={<UserProfile />} />
          <Route path="UserProfile/:id/EditBiosInfo" element={<EditBiosInfo/>} />
          <Route path="UserProfile/:id/EditAddress" element={<EditAddress/>} />
        </Routes>
      </userContext.Provider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
