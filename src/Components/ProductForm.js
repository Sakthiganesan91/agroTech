import React from "react";

function ProductForm() {
  return (
    <div className="container">
      <form className="d-flex justify-content-start m-4">
        <div>
          <label className="form-label">Choose Your Location</label>
          <select className="form-select">
            <option value="Erode">Erode</option>
            <option value="Chennai">Chennai</option>
            <option value="Ooty">Ooty</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Salem">Salem</option>
            <option value="Madurai">Madurai</option>
          </select>
        </div>
        <div className="mx-4">
          <label className="form-label">Choose Category</label>
          <select className="form-select">
            <option value="Erode">Vegetable</option>
            <option value="Chennai">Fruit</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
