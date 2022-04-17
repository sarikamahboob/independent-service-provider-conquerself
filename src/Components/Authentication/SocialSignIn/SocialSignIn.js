import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const SocialSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  let errorElement;
  let from = location.state?.from?.pathname || "/";
  if (googleUser || githubUser) {
    navigate(from, { replace: true });
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
