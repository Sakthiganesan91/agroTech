import React from "react";

function Cards() {
  return (
    <div className="d-flex justify-content-center align-items-center my-3">
      <div class="card" style={{ width: "18rem" }} className="mx-2">
        <img
          src="https://www.pngitem.com/pimgs/m/115-1152010_handshake-vector-hd-png-download.png"
          class="card-img-top"
          alt="..."
          height={200}
          width={200}
        />
        <div class="card-body">
          <h5 class="card-title my-1">Customer Friendly</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            animi!
          </p>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }} className="mx-2">
        <img
          src="https://wallpaperaccess.com/full/1537336.jpg"
          class="card-img-top"
          alt="..."
          height={200}
          width={200}
        />
        <div class="card-body">
          <h5 class="card-title my-1">Fresh Vegetables At Door Step</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            animi!
          </p>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }} className="mx-2">
        <img
          src="https://www.kindpng.com/picc/m/25-253184_best-price-guarantee-logo-png-transparent-png.png"
          class="card-img-top"
          alt="..."
          height={200}
          width={200}
        />
        <div class="card-body">
          <h5 class="card-title my-1">Low Price No Extra</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            animi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
