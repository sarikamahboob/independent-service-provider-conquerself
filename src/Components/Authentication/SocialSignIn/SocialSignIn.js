import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const SocialSignIn = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  let errorElement;
  if (googleUser || githubUser) {
    navigate("/home");
  }
  if (googleLoading || githubLoading) {
    <Loading />;
  }
  if (googleError || githubError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {googleError.message} {githubError.message}
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="social-login">
        <button onClick={() => signInWithGoogle()}>
          <span>
            <AiFillGoogleCircle />
          </span>
          Sign Up with Google
        </button>

        <button>
          <span>
            <BsFacebook />
          </span>
          Sign Up with Google
        </button>

        <button onClick={() => signInWithGithub()}>
          <span>
            <BsGithub />
          </span>
          Sign Up with Google
        </button>
      </div>
      {errorElement}
    </div>
  );
};

export default SocialSignIn;
