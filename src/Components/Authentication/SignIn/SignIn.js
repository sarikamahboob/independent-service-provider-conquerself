import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-container">
      <h1 className="form-title">SignIn</h1>
      <form className="form" onSubmit={handleSignIn}>
        <input type="email" name="email" id="" placeholder="Enter Your Email" />
        <input type="password" name="password" id="" placeholder="Password" />

        <button>Sign In</button>
      </form>

      <p className="toggle-link">
        New to ConquerSelf ?
        <span>
          <Link
            to="/signup"
            onClick={() => navigate(`/signup`)}
            className="ms-2 text-decoration-none"
            style={{ color: "#A63EC5" }}
          >
            Sign Up
          </Link>
        </span>
      </p>

      <div className="or">
        <div className="line"></div>
        <span>or</span>
        <div className="line"></div>
      </div>

      <SocialSignIn />
    </div>
  );
};

export default SignIn;
