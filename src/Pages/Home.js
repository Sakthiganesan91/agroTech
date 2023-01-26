import React from "react";
import logo from "../images/agri.webp";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <div className="d-flex justify-content-center align-items-center  ">
            <img src={logo} alt="" width={200} height={200} />
          </div>

          <p className="display-6">Where People Meets Farmers</p>
        </div>
      </div>

      <Cards />
      <Footer />
    </>
  );
}

export default Home;
