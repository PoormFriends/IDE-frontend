import React from "react";

import styles from "./LoginPage.module.css";
import logo from "../../asset/images/logo_main.png";

export default function LoginPage() {
  const kakaoLoginHandler = () => {
    window.location.href = `http://localhost:8081/oauth2/authorization/kakao`;
  };
  const githubLoginHandler = () => {
    window.location.href = `http://localhost:8081/oauth2/authorization/github`;
  };

  return (
    <div>
      <section className={styles.login_container}>
        <h2 className={styles.login_title}>
          <img
            className={styles.logo_poorm}
            alt="Poorm Friends IDE"
            src={logo}
          />
        </h2>
        <section className={styles.btn_container}>
          <button
            className={styles.btn_kakao}
            type="button"
            onClick={kakaoLoginHandler}
          >
            <img
              className={styles.logo_kakao}
              alt="kakao logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kakao_Corp._symbol_-_2012.svg/100px-Kakao_Corp._symbol_-_2012.svg.png?20151013114543"
            />
            login with kakao
          </button>

          <button
            onClick={githubLoginHandler}
            className={styles.btn_github}
            type="button"
          >
            <img
              className={styles.logo_github}
              alt="github"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/220px-Font_Awesome_5_brands_github.svg.png"
            />
            Login with Github
          </button>
        </section>
      </section>
      <footer className={styles.login_footer}>footer</footer>
    </div>
  );
}
