import React, { useState } from "react";
import "./ProductCard.css";
// import { useNavigate } from "react-router-dom";

// import { getProductsFromID } from "./Redux/Actions";
import { NavLink } from "react-router-dom";

export default function ProductCard(props) {
  const [readMore, setreadMore] = useState(false);
  const { id } = props;

  return (
    <div className="product-card-container">
      <div className="product-img">
        <img
          src={props.image}
          alt=""
          style={{ height: readMore ? "100px" : "120px" }}
        />
      </div>
      <div className="product-title">
        <h3>{props.title}</h3>
      </div>
      <div
        className="product-description"
        style={{ fontSize: readMore ? "12px" : "16px" }}
      >
        {/* {props.description.slice(0, 50) + "...."} */}
        {readMore
          ? props.description.slice(0, 300) + " ..."
          : props.description.slice(0, 20) + "..."}
        <span className="readmore" onClick={() => setreadMore(!readMore)}>
          {!readMore ? "read more" : "less"}
        </span>
      </div>
      <div className="product-price">${props.price}</div>
      <div className="product-button">
        <NavLink to={`/products/${id}`}>
          <button>Buy Now</button>
        </NavLink>
      </div>
    </div>
  );
}
