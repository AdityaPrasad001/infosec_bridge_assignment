import React from "react";
import Button from "../UI/Button";

import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <form className={styles.form}>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <Button type="submit" className={styles.btn}>
            LOGIN
          </Button>
        </form>
        <p className={styles.forget_password}>Forget Password?</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.social_loginOption}>
          <p className={styles.or}>or login with</p>
          <div className={styles.socials}>
            <img
              alt="google"
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            />
            <img
              alt="facebook"
              src="https://cdn-icons-png.flaticon.com/512/2111/2111393.png"
            />
            <img
              alt="twitter"
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            />
          </div>
          <p className={styles.para_Text}>
            Don't have an account?{" "}
            <span className={styles.imp_text}> Create new now!</span>
          </p>
        </div>
        <div className={styles.terms_conditions}>
          By signing up, you are agree with our{" "}
          <span className={styles.link}>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
