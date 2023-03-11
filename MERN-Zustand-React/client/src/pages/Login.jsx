import React from "react";
import { loginRequest, profileRequest } from "../api/auth";
import useAuthStore from "../store/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = e.currentTarget.elements[0].value;
    const pass = e.currentTarget.elements[1].value;

    const resLogin = await loginRequest(email, pass);
    setToken(resLogin.data.token);
    console.log(resLogin);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.profile);
    console.log(resProfile);

    console.log(email, pass);

    navigate("/profile");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="" id="" />
        <input type="password" placeholder="********" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
