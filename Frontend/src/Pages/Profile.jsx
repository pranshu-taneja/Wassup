import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const User = auth.currentUser;

  // useEffect(() => {
  //   setUser(auth.currentUser);
  // }, []);

  const logout = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      UserName: {User}
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Profile;
