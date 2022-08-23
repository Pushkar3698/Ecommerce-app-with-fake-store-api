import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import {
  DecreaseQuantity,
  DeleteItem,
  IncreaseQuantity,
} from "./Redux/Actions";

export default function CartItem({ title, image, qty, id, price, showWindow }) {
  //   const [quant, setquant] = useState(qty);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(IncreaseQuantity(id));
    // setquant((prev) => prev + 1);
  };

  const decrease = () => {
    dispatch(DecreaseQuantity(id));
  };

  const deleteItem = () => {
    showWindow(true);
    dispatch(DeleteItem(id));
  };

  return (
    <div className="cart-item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="cart-details">
        <p className="title">
          {/* {title.length > 30 ? title.slice(0, 30) + "..." : title} */}
          {title}
        </p>
        <p>
          ({qty} X $ {price})
        </p>
      </div>
      <div className="price">
        <button onClick={increase}>+</button>
        <p>$ {`${(+price * +qty).toFixed(2)}`}</p>
        <button onClick={decrease}>-</button>
      </div>
      <div className="remove-item">
        <button onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
}
