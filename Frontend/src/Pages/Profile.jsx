import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import "./Styles/Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [User, setUser] = useState(null);
  const [toggleSignInSignUp, setToggleSignInSignUp] = useState(false); //true -- signin    false --signup

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logout = async (e) => {
    await auth.signOut();
    window.location.reload();
    navigate("/");
  };

  return (
    <div className="ProfileContainer">
      <div className="userEmail">UserName: {User ? User.email : "No User"}</div>

      <div className="SigninSignupButtons">
        {User ? (
          <button hidden={!User} onClick={logout}>
            logout
          </button>
        ) : (
          <div className="toggleForm">
            <button
              hidden={User}
              className="SignUp-form"
              onClick={() => {
                setToggleSignInSignUp(false);
              }}
            >
              New User?
            </button>
            <button
              hidden={User}
              className="SignIn-form"
              onClick={() => {
                setToggleSignInSignUp(true);
              }}
            >
              Already A User?
            </button>
          </div>
        )}
      </div>

      <div className="SigninSingupForm">
        {toggleSignInSignUp ? <Signin /> : <Signup />}
      </div>
    </div>
  );
}

export default Profile;
