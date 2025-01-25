import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { singInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        console.log("socil login", result.user);
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="m-4 ">
      <div className="flex justify-center items-center gap-3 border min-w-[280px] p-4 rounded-full">
        <FcGoogle className="text-3xl" />
        <button onClick={handleGoogleSignIn} className="text-xl text-white">
          Continue with Google
        </button>
      </div>
      <div className="divider">OR</div>
    </div>
  );
};

export default SocialLogin;
