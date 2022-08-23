import React from "react";

export const OrdersCard = ({ orders }) => {
  const { firstName, lastName, address1, address2, address3, city, state } =
    orders.custDetails;
  return (
    <div className="order-display">
      <div className="order-left">
        <p>Delivering to : - {firstName + " " + lastName}</p>
        <p className="order-address">{address1 + address2 + address3}</p>
        <p>{`${city.toUpperCase()},${state.toUpperCase()}`}</p>
        <p>Order id :- {orders.orderId}</p>
      </div>
      <div className="order-right">
        {orders.items.map((el, i) => {
          return (
            <div className="orders" key={i}>
              <p style={{ fontSize: "12px" }}>
                {el.qty} x {el.title}
              </p>
              <img src={el.image} alt="" width={"25px"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
