import React from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const getLogout = useAuthStore((state) => state.getLogout)
  const navigate = useNavigate()  

  function handleClick(){
    getLogout()
    navigate("/login")
  }
    
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Profile;
