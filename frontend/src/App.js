import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Table from "./components/Table";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Table />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/sign_up" exact element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
