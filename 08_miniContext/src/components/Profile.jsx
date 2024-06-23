import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) return <div>Please login...</div>;
  return <div>Welcome {user.userName}</div>;
}

export default Profile;
