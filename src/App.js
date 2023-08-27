/* eslint-disable react/react-in-jsx-scope */
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Crousel from "./Components/Crousel";
import BillOut from "./pages/Bill/BillOut";
import Flite from "./pages/Flite/Flite";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import Login from "./pages/Login/Login";
import Previousbooking from "./pages/Previous/Previousbooking";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/previous" element={<Previousbooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flite" element={<Flite />} />
        <Route path="/slider" element={<Crousel />} />
        <Route path="/bill" element={<BillOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
