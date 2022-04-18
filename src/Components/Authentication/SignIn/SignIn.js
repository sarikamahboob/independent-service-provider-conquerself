import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import { async } from "@firebase/util";
import Loading from "../../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const emailRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    return <Loading />;
  }

  if (error || passwordError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error?.passwordError}
        </p>
      </div>
    );
  }

  const resetPassword = async (event) => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter Your Email Address");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">SignIn</h1>
      <form className="form" onSubmit={handleSignIn}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id=""
          placeholder="Enter Your Email"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />

        <button>Sign In</button>
      </form>
      {errorElement}

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

      <p className="toggle-link">
        Forget Password?
        <span
          onClick={resetPassword}
          className="ms-2 text-decoration-none"
          style={{ color: "#A63EC5" }}
        >
          Reset Password
        </span>
      </p>

      <div className="or">
        <div className="line"></div>
        <span>or</span>
        <div className="line"></div>
      </div>

      <SocialSignIn />
      <ToastContainer />
    </div>
  );
};

export default SignIn;
