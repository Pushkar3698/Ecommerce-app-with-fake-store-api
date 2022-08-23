import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import ProductTitle from "./ProductTitle";
import { useDispatch, useSelector } from "react-redux";
import { filteredProductData, getProducts } from "./Redux/Actions";
import { LoadingSpinner } from "./LoadingSpinner";

export default function Products() {
  const ProductsData = useSelector((state) => state.reducer.products);

  const filteredData = useSelector((state) => state.reducer.filter);

  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);

  const fetchProducts = async () => {
    try {
      setloading(true);
      const Products = await fetch("https://fakestoreapi.com/products");

      const data = await Products.json();

      dispatch(getProducts(data));

      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const getFiltered = (cat) => {
    if (cat === "All") {
      dispatch(getProducts(ProductsData));
    } else {
      const filterData = ProductsData.filter((el) => el.category === cat);
      dispatch(filteredProductData(filterData));
    }
  };

  return (
    <div className="products-container">
      <ProductTitle getFiltered={getFiltered} />
      <div className="products">
        {loading ? (
          <LoadingSpinner />
        ) : (
          filteredData.map((product) => (
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
        )}
      </div>
    </div>
  );
}
