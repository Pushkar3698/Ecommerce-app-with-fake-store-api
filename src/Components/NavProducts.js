import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function NavProducts() {
  const products = useSelector((state) => state.reducer.products);

  return (
    <div className="products-container">
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              title={product.title}
              price={product.price}
              rating={product.rating}
              key={product.id}
              id={product.id}
              description={product.description}
              image={product.image}
            />
          ))
        ) : (
          <p>Could not fetch the products !</p>
        )}
      </div>
    </div>
  );
}
