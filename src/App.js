import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile";
import Product from "./Pages/Product";
import SingleProduct from "./Pages/SingleProduct";
import Order from "./Pages/Order";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single" element={<SingleProduct />} />
        <Route path="/order" element={<Order />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
