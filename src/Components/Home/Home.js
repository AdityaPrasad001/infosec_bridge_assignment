import React, { useState } from "react";
import styles from "./Home.module.css";
import logo from "../../img/logo.png";
import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.home_container}>
      <img alt="logo_infosec" src={logo} />
      <h1 className={styles.welcomeTo}>
        Welcome to <span className={styles.name}>InfoSec Bridge!</span>
      </h1>

      <div className={styles.tabs}>
        <button
          onClick={() => setIsLogin(true)}
          className={`${styles.btn} ${isLogin && styles.clicked}`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`${styles.btn} ${!isLogin && styles.clicked}`}
        >
          Signup
        </button>
      </div>
      {isLogin ? <Login /> : <SignUp />}
    </div>
  );
};

export default Home;
