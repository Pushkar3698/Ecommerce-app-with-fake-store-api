import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductDetals.css";
import { addToCart } from "./Redux/Actions";
import { useParams } from "react-router-dom";

const AddedToCart = ({ title }) => {
  return (
    <div className="add-popup">
      <div className="title">{title} is added to the cart !</div>
    </div>
  );
};

export default function ProductDetals() {
  const [popup, setpopup] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();

  const productState = useSelector((state) => state.reducer.products).find(
    (el) => el.id === +id
  );

  useEffect(() => {
    const time = setTimeout(() => {
      setpopup(false);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [popup]);

  const AddToCart = () => {
    dispatch(addToCart(productState));
    setpopup(true);
  };

  return (
    <>
      {popup && <AddedToCart title={productState.title} />}
      <div className="product-details-container">
        <div className="left-container">
          <div className="product-detail-image">
            <img src={productState.image} alt="" />
          </div>
        </div>
        <div className="right-container">
          <div className="product-details-text">
            <h2>{productState.title}</h2>
            <p>{productState.category}</p>
            <p>{productState.description}</p>
            {/* <span>Rating {productState.rating.rate}</span> */}
            <h3>$ {productState.price}</h3>
          </div>
          <div className="product-details-buttons">
            <button onClick={AddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
