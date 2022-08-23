import React from "react";
import "./ProductTitle.css";

export default function ProductTitle({ getFiltered }) {
  return (
    <div className="product-header">
      <div className="product-heading">
        <h1>Products</h1>
      </div>
      <div className="product-filter">
        <button className="filter-btn" onClick={() => getFiltered("All")}>
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => getFiltered("men's clothing")}
        >
          men's clothing
        </button>
        <button
          className="filter-btn"
          onClick={() => getFiltered("electronics")}
        >
          electronics
        </button>
        <button
          className="filter-btn"
          onClick={() => getFiltered("women's clothing")}
        >
          women's clothing
        </button>
      </div>
    </div>
  );
}
