import React from "react";

function Order() {
  return (
    <>
      <div>
        <h2 className="text-center">Summary</h2>
      </div>

      <div className="container d-flex align-items-center justify-content-center">
        <div className="border rounded d-flex align-items-center justify-content-center p-4 w-50">
          <div>
            <div className="d-flex align-items-center mx-3">
              <div>
                <p>
                  {" "}
                  <b>Name</b>
                </p>
              </div>
              <div className="mx-2">
                <p className="lead">Uthaman</p>
              </div>
            </div>
            <div className="d-flex align-items-center mx-3">
              <div>
                <p>
                  {" "}
                  <b>Order Items</b>
                </p>
              </div>
              <div className="mx-2">
                <ul className="list-group">
                  <li className="list-group-item">
                    Carrot <span>10 kg Rs 300</span>
                  </li>
                  <li className="list-group-item">
                    {" "}
                    Brinjal <span>5 kg Rs 200</span>
                  </li>
                  <li className="list-group-item">
                    {" "}
                    Potato <span>1 kg Rs 30</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-center mx-3">
              <div>
                <p>
                  {" "}
                  <b>Total Price</b>
                </p>
              </div>
              <div className="mx-2">
                <p className="lead">Rs 530</p>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-success">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
