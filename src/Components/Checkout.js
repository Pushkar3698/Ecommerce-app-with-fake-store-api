import React, { useState } from "react";
import "./Checkout.css";

import { CheckoutModel } from "./CheckoutModel";

const initialstate = {
  firstName: "",
  lastName: "",
  state: "punjab",
  city: "",
  address1: "",
  address2: "",
  address3: "",
  code: "",
};

export const Checkout = () => {
  const [formInput, setformInput] = useState(initialstate);
  const [valid, setvalid] = useState(false);
  const [modal, setmodal] = useState(false);

  const getFirstName = (e) => {
    setformInput((prev) => {
      return {
        ...prev,
        firstName: e.target.value,
      };
    });
  };
  const getlastName = (e) => {
    setformInput((prev) => {
      return {
        ...prev,
        lastName: e.target.value,
      };
    });
  };
  const getState = (e) => {
    setformInput((prev) => {
      return {
        ...prev,
        state: e.target.value,
      };
    });
  };
  const getAddress1 = (e) => {
    setformInput((prev) => {
      return {
        ...prev,
        address1: e.target.value,
      };
    });
  };
  const getAddress2 = (e) => {
    setformInput((prev) => {
      return {
        ...prev,
        address2: e.target.value,
      };
    });
  };
  const getAddress3 = (e) => {
    setformInput((prev) => {
      return {
        ...prev,
        address3: e.target.value,
      };
    });
  };
  const getCode = (e) => {
    setformInput((prev) => {
      return {
        ...prev,
        code: e.target.value,
      };
    });
  };
  const getCity = (e) => {
    setformInput((prev) => {
      return {
        ...prev,
        city: e.target.value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const { firstName, lastName, address1, code, city } = formInput;

    if (
      firstName === "" ||
      lastName === "" ||
      address1 === "" ||
      (code === "" && code.length < 3) ||
      city === ""
    ) {
      alert("Please fill in compulsory fields");
      setvalid(true);
      return;
    }
    // const input = { ...formInput, orderId: Math.random() };
    setvalid(false);
    // dispatch(getAddress(input));
    // setformInput(initialstate);
    setmodal(true);
  };

  const closeModel = () => {
    setmodal(false);
  };

  const validityCheck = valid ? "red" : "";

  return (
    <>
      {modal && <CheckoutModel data={formInput} closeModel={closeModel} />}
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="checkout-form">
            <form action="">
              <div className="names">
                <div>
                  <label htmlFor="" style={{ color: validityCheck }}>
                    FirstName :*
                  </label>
                  <input
                    type="text"
                    className="first-name"
                    value={formInput.firstName}
                    onChange={getFirstName}
                  />
                </div>
                <div>
                  <label htmlFor="" style={{ color: validityCheck }}>
                    LastName :*
                  </label>
                  <input
                    type="text"
                    className="last-name"
                    value={formInput.lastName}
                    onChange={getlastName}
                  />
                </div>
              </div>
              <div className="city">
                <div className="state">
                  <label htmlFor="">State*</label>
                  <select
                    name="state"
                    className="select-state"
                    value={formInput.state}
                    onChange={getState}
                  >
                    <option value="punjab">Punjab</option>
                    <option value="haryana">Haryana</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="himachal">himachal Pradesh</option>
                  </select>
                </div>
                <div className="select-city">
                  <label htmlFor="" style={{ color: validityCheck }}>
                    City*
                  </label>
                  <input
                    type="text"
                    value={formInput.city}
                    onChange={getCity}
                  />
                </div>
              </div>
              <div className="address">
                <label htmlFor="" style={{ color: validityCheck }}>
                  Address 1*
                </label>
                <input
                  type="text"
                  className="address-1"
                  value={formInput.address1}
                  onChange={getAddress1}
                />
                <label htmlFor="">Address 2</label>
                <input
                  type="text"
                  className="address-2"
                  value={formInput.address2}
                  onChange={getAddress2}
                />
                <label htmlFor="">Address 3</label>
                <input
                  type="text"
                  className="address-3"
                  value={formInput.address3}
                  onChange={getAddress3}
                />
              </div>
              <div className="postal-code">
                <label htmlFor="" style={{ color: validityCheck }}>
                  Postal Code :
                </label>
                <input type="text" value={formInput.code} onChange={getCode} />
              </div>
              <div className="submit-form-btn">
                <button onClick={submitHandler}>Order Now!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
