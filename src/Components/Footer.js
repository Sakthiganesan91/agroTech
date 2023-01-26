import React from "react";

function Footer() {
  return (
    <>
      <hr />
      <div className="d-flex justify-content-center align-items-center my-3">
        <form>
          <label className="form-label">Choose Your Location</label>
          <select className="form-select">
            <option value="Erode">Erode</option>
            <option value="Chennai">Chennai</option>
            <option value="Ooty">Ooty</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Salem">Salem</option>
            <option value="Madurai">Madurai</option>
          </select>
        </form>
      </div>
    </>
  );
}

export default Footer;
