import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialSignIn = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    navigate("/home");
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
        <button>
          <span>
            <BsGithub />
          </span>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
