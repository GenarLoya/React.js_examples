import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const user_id = 10

  return (
    <div>
      <h1>HOME</h1>
      <Link to={`users/${user_id}`}>About</Link>
    </div>
  );
}

export default Home;
