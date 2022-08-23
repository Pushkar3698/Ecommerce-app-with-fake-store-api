import React from "react";
// import { ReactDOM } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./DisplayModel.css";

const Portal = document.querySelector("#overlay");

const Modal = (props) => {
  const cart = useSelector((state) => state.reducer.cart);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex-container">
        <div className="checkout-modal">
          <div className="checkout-heading">
            <p>
              {cart.length !== 0
                ? props.title
                : "There are no items in your Cart!"}
            </p>
          </div>
          <div className="checkout-buttons">
            {cart.length !== 0 && (
              <button onClick={() => navigate("/checkout")}>Yes</button>
            )}

            <button onClick={props.closeModel}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const DisplayModel = ({ title, closeModel }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal title={title} closeModel={closeModel} />,
        Portal
      )}
    </>
  );
};
