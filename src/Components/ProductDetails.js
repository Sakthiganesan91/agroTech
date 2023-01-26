import React from "react";
import { useNavigate } from "react-router-dom";
function ProductDetails(props) {
  const navigate = useNavigate();
  const { product } = props;

  console.log(product);
  const divStyle = {
    border: "1px solid black",
    padding: "8px 24px",
    width: "fit-content",
    borderRadius: "10px",
    margin: "8px",
    flex: "",
  };

  const imageStyle = {
    borderRadius: "15px",
  };
  return (
    <div style={divStyle}>
      <img
        src={product.productImageUrl}
        alt=""
        height={200}
        width={200}
        style={imageStyle}
      />
      <p className="text-center">
        <b>{product.productName}</b>
      </p>
      <p>
        <b>Location </b>
        {product.location}
      </p>
      <p>
        <b>Price</b> Rs {product.productPrice}/Kg
      </p>

      <div className="text-center">
        <button
          className="btn btn-info text-white"
          onClick={() => {
            navigate("/single", {
              state: product,
            });
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
