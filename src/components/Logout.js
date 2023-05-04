import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthFlagContext } from "./providers/AuthFlagProvider";

export const Logout= () => {
  const { setIsAuth } = useContext(AuthFlagContext);
  const navigate = useNavigate();
  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
    setIsAuth(false);
    navigate("/login");
    };

  return (
  <div>
    <p>ログアウトする</p>
    <button onClick={logout}>ログアウト</button>

  </div>
  );
};