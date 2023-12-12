import React from "react";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const KakaoRestApi = process.env.REACT_APP_KAKAO_API;
  const KakaRedirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const GithubRestApi = process.env.REACT_APP_GITHUB_API;
  const GithubRedirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URI;

  const kakaoLoginHandler = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KakaoRestApi}&redirect_uri=${KakaRedirectUri}&response_type=code`;
    // const code = new URL(window.location.href).searchParams.get("code");
  };
  const githubLoginHandler = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GithubRestApi}&redirect_uri=${GithubRedirectUri}&response_type=code`;
  };
  return (
    <div>
      <section className={styles["login-container"]}>
        <h2 className={styles["login-title"]}>Goorm Friends IDE</h2>
        <section className={styles["btn-container"]}>
          <button
            onClick={kakaoLoginHandler}
            className={styles["btn-kakao"]}
            type="button"
          >
            <img
              className={styles["logo-kakao"]}
              alt="kakao"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kakao_Corp._symbol_-_2012.svg/100px-Kakao_Corp._symbol_-_2012.svg.png?20151013114543"
            />
            카카오로 로그인하기
          </button>
          <button
            onClick={githubLoginHandler}
            className={styles["btn-github"]}
            type="button"
          >
            <img
              className={styles["logo-github"]}
              alt="github"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/200px-GitHub_Invertocat_Logo.svg.png"
            />
            깃허브로 로그인하기
          </button>
        </section>
      </section>
      <footer className={styles["login-footer"]}>footer</footer>
    </div>
  );
}
