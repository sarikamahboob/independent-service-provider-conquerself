import React from "react";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  let errorElement;

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const confirmPassword = event.target.confirmPassword.value;
    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(`/home`);
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1 className="form-title">SignUp</h1>
      <form className="form" onSubmit={handleSignUp}>
        <input type="text" name="name" id="" placeholder="Enter Your Name" />
        <input
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
        {/* <input
          type="password"
          name="confirmPassword"
          id=""
          placeholder="Confirm Password"
          required
        /> */}
        <button>Sign Up</button>
      </form>

      {errorElement}

      <p className="toggle-link">
        Already have an account ?
        <span>
          <Link
            to="/signin"
            onClick={() => navigate(`/signin`)}
            className="ms-2 text-decoration-none"
            style={{ color: "#A63EC5" }}
          >
            Sign In
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

export default SignUp;
