import { useState } from "react";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
