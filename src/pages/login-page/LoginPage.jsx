import React from "react";

import styles from "./LoginPage.module.css";
import logo from "../../assets/images/logo.png";

export default function LoginPage() {
  const kakaoLoginHandler = () => {
    window.location.href = `http://localhost:8081/oauth2/authorization/kakao`;
  };
  const githubLoginHandler = () => {
    window.location.href = `http://localhost:8081/oauth2/authorization/github`;
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo_poorm}
            alt="Poorm Friends IDE"
            src={logo}
          />
        </div>
        <section className={styles.btn_container}>
          <button
            className={`${styles.loginButton} ${styles.kakaoButton}`}
            type="button"
            onClick={kakaoLoginHandler}
          >
            <img
              className={styles.loginLogo}
              alt="kakao logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kakao_Corp._symbol_-_2012.svg/100px-Kakao_Corp._symbol_-_2012.svg.png?20151013114543"
            />
            카카오로 시작하기
          </button>

          <button
            className={`${styles.loginButton} ${styles.githubButton}`}
            type="button"
            onClick={githubLoginHandler}
          >
            <img
              className={styles.loginLogo}
              alt="github"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/220px-Font_Awesome_5_brands_github.svg.png"
            />
            깃허브로 시작하기
          </button>
        </section>
      </div>
      <footer className={styles.login_footer}>footer</footer>
    </div>
  );
}
