import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Administrator from "./pages/Administrator";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { useState } from "react";
import Protectedroute from "./components/Protectedroute";

function App() {
  const [user, setUser] = useState();

  const login = () => {
    setUser({
      id: 1,
      user: "joe",
      permission: ['admin']
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>

        {user ? (
          <button onClick={logout}>LogOut</button>
        ) : (
          <button onClick={login}>LogIn</button>
        )}

        <Routes>
          <Route path="/" element={<Landing />}></Route>

          <Route element={<Protectedroute isAllowed={!!user}></Protectedroute>}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>

          <Route
            path="/analytics"
            element={
              <Protectedroute isAllowed={!!user && user.permission.includes('analize')} redirectRoute='/home'>
                <Analytics></Analytics>
              </Protectedroute>
            }
          ></Route>
          <Route
            path="/analytics"
            element={
              <Protectedroute isAllowed={!!user && user.permission.includes('admin')} redirectRoute='/home'>
                <Administrator />
              </Protectedroute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
