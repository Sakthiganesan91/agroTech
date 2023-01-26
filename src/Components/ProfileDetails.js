import React from "react";

function ProfileDetails() {
  const divStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    width: "fit-content",
    padding: "16px",
  };
  return (
    <div className="container" style={divStyle}>
      <div className="row">
        <div className="col-6">
          <h5>Location </h5>
          <p className="lead">Erode</p>

          <h5>Farming Experience </h5>
          <p className="lead">8 years</p>

          <h5>Market Available Upto</h5>
          <p className="lead">45 km</p>
        </div>
        <div className="col-6">
          <h5>Total Available Products </h5>
          <p className="lead">15</p>

          <h5>Country Vegetables Available</h5>
          <p className="lead">Yes</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
