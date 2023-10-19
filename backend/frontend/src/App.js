import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./pages/User/User";
import AddUser from "./pages/AddUser/AddUser";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/adduser" element={<AddUser/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
