//read only context for user auth
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import AuthContext from "./AuthContext";
//localStorage
import { isLogin, userDataStorage } from "@/localStorage/auth";

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("petemoon-isLogin");
  const [user, setUser] = useLocalStorage("petemoon-user");
  useEffect(() => {
    console.log(userDataStorage.get());
    const userLogin = isLogin.get();
    const userData = userDataStorage.get();
    if (userLogin) {
      setIsLoggedIn(true);
    }
    if (userData) {
      console.log(JSON.parse(userData));
      setUser(JSON.parse(userData));
    }
  }, []);
  useEffect(() => {
    if (isLoggedIn) isLogin.set(isLoggedIn);
    if (user) userDataStorage.set(JSON.stringify(user));
  }, []);
  const context = {
    isLoggedIn: isLoggedIn,
    userData: user,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
