import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function SingleProduct() {
  const location = useLocation();

  const product = location.state;
  const navigate = useNavigate();
  const backgroundDiv = {
    backgroundColor: "rgb(105,105,105)",
    height: "100vh",
    width: "100%",
    position: "absolute",
    zScale: "1",
  };

  const modalDiv = {
    backgroundColor: "white",
    height: "70%",
    width: "50%",
    position: "relative",

    borderRadius: "20px ",
  };
  return (
    <div
      style={backgroundDiv}
      className="d-flex justify-content-center align-items-center "
    >
      <div style={modalDiv} className="container">
        <div className="d-flex justify-content-center align-items-center my-1">
          <img src={product.productImageUrl} alt="" height={150} width={150} />
        </div>
        <h5 className="text-center">{product.productName}</h5>
        <div className="container d-flex justify-content-around">
          <div>
            <p>
              <b>Location </b>
              {product.location}
            </p>
            <p>
              <b>Price</b> Rs {product.productPrice}/Kg
            </p>

            <form>
              <label htmlFor="" className="form-label">
                Choose Quantity (kg)
              </label>
              <select name="" id="" className="form-select">
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </form>
          </div>
          <div>
            <form>
              <label htmlFor="" className="form-label">
                Choose Farmer
              </label>
              <select name="" id="" className="form-select">
                <option value="Mani">Mani</option>
                <option value="Kumar">Kumar</option>
                <option value="Vel">Vel</option>
              </select>
            </form>
            <button className="btn btn-info my-2">Show Farmer Details</button>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <button className="btn btn-success w-25 my-1">Order</button>
          <button
            className="btn btn-danger w-25 m-1"
            onClick={() => {
              navigate("/product");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
