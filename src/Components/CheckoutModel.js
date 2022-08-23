import React from "react";
import "./CheckoutModel.css";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, getOrders, resetCart } from "./Redux/Actions";
import { useNavigate } from "react-router-dom";

export const CheckoutModel = ({ data, closeModel }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reducer.cart);
  const navigate = useNavigate();

  const onSubmit = () => {
    const order = {
      custDetails: {
        ...data,
      },

      orderId: Math.random(),
      items: cart,
    };
    dispatch(getAddress({ ...data }));
    dispatch(getOrders(order));
    dispatch(resetCart());
    navigate("/orders");
  };

  return (
    <div className="checkout-model-container">
      <div className="checkout-model-main">
        <div className="checkout-content">
          <p style={{ fontWeight: "600" }}>
            Hii! {data.firstName + " " + data.lastName}
          </p>
          <p>The order is to be delivered on the following address ?</p>
          <p style={{ height: "40px" }}>
            {data.address1 + data.address2 + data.address3}{" "}
          </p>
          <p>city :-{data.city}</p>
          <p>State :- {data.state}</p>
          <p>Pincode :- {data.code}</p>
        </div>
        <div className="checkout-actions">
          <button onClick={onSubmit}>Confirm</button>
          <button onClick={() => closeModel()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
