import React from "react";
import ProfileDetails from "../Components/ProfileDetails";

function Profile() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-2">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50141.jpg?w=2000"
            alt="profile"
            className="img-thumbnail rounded"
            height={100}
            width={100}
          />

          <p className="text-center">
            <b>Selvan</b>
          </p>
        </div>
      </div>

      <ProfileDetails />

      <div className="text-center my-2">
        <button className="btn btn-success">Update</button>
      </div>
    </>
  );
}

export default Profile;
