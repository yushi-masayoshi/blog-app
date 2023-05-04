import React, { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthFlagContext } from "./providers/AuthFlagProvider";

export const Login= () => {
  const { isAuth, setIsAuth } = useContext(AuthFlagContext);
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  }
  console.log(isAuth);


  return (
  <div>
    <p>ログインして始める</p>
    <button onClick={loginInWithGoogle}>Googleでログイン</button>

  </div>
  );
};