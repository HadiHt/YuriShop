import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/cartContext";
import "./CartView.css";
import { useNavigate } from "react-router-dom";
import ProductItem from "../../components/content/product-view/product-card/ProductCard";
import CheckOut from "../../components/chekOut/CheckOut";

const CartView = () => {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  const { cart, setCart } = useContext(cartContext);
  const [arrr, setarrr] = useState();
  useEffect(() => {
    const arr = cart.map((data, index) => {
      return (
        <div key={index}>
          <ProductItem product={data} type="cart" />
        </div>
      );
    });
    setarrr(arr);
  }, [cart]);
  console.log(cart);
  return (
    <div className="CartViewPage">
      <div className="CartViewMainContainer">
        <div className="checkAndButtons">
          <div className="buttonsContainer">
            <button className="hoemBut Buttonn" onClick={() => navigate("/")}>
              {"< "} Return to Explore Page{" "}
            </button>
            <button className="Buttonn" onClick={() => setHide(!hide)}>
              {" "}
              Confirm Purchase {">"}
            </button>
          </div>
          {hide && <CheckOut />}
        </div>
        {cart.length != 0 && <div className="cartProducts">{arrr}</div>}
      </div>
    </div>
  );
};

export default CartView;
