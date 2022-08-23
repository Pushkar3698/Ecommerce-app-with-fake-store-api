import React from "react";

const Slidercomponent = (props) => {
  return (
    <div className={props.className} style={props.style}>
      <img src={props.image} alt="" style={{ width: "100%" }} />
    </div>
  );
};

export default Slidercomponent;
