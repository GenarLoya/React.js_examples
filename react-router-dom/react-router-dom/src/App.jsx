import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import UserPage from "./pages/UserPage";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/dashboard/*" element={<DashBoard />}>
          <Route path="welcome" element={<p>Wlecomo</p>}></Route>
        </Route>
        <Route path="/user/:id/*" element={<UserPage />}></Route>
        <Route
          path="/users"
          element={<Navigate replace to={"/user"} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
