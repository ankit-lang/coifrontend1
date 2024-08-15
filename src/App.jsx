import { useState } from "react";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import EditPage from "./components/EditPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/editclient" element={<EditPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
