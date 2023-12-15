import React, { useEffect } from "react";

import instance from "./api";
import styles from "./LoginPage.module.css";
import logo from "../../asset/images/logo_main.png";

export default function LoginPage() {
  const params = new URLSearchParams(window.location.search);
  const accessToken = String(params.get("accessToken")); // 토큰 코드 가져오기

  const kakaoLoginHandler = () => {
    window.location.href = `http://localhost:8081/oauth2/authorization/kakao`;
  };
  const githubLoginHandler = () => {
    window.location.href = `http://localhost:8081/oauth2/authorization/github`;
  };

  const handleToken = () => {
    localStorage.setItem("accessToken", accessToken); // 토큰 저장
  };
  const requestUserInfo = () => {
    return instance.get(`/user/oauth/login`);
  };
  useEffect(() => {
    handleToken();
    requestUserInfo();
  }, []);
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
