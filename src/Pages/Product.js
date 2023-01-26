import React from "react";
import ProductDetails from "../Components/ProductDetails";
import ProductForm from "../Components/ProductForm";
import products from "../data/products";
function Product() {
  return (
    <>
      <ProductForm />

      <div className="container d-flex justify-content-between flex-wrap align-items-start">
        {products.map((product) => {
          return <ProductDetails product={product} key={product.productId} />;
        })}
      </div>
    </>
  );
}

export default Product;
