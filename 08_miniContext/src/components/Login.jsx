import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleClick(e) {
    e.preventDefault();
    setUser({ userName, password });
  }
    
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter Username..."
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password..."
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Login;
