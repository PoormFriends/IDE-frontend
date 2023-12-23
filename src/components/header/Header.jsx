import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import titleLogo from "../../assets/images/title_logo.png";
import { requestLogout } from "../../pages/login-page/api";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={styles.header}>
      <div className={styles.header_title}>
        <Link to="/">
          <img
            src={titleLogo}
            className={styles.header_title_icon}
            alt="header-title-icon"
          />
        </Link>
      </div>
      <div className={styles.buttons}>
        <Link to="/mypage">
          <img
            className={styles.header_user_profile}
            src={user.profileImage}
            alt="user-profile"
          />
        </Link>

        <div>
          <FiLogOut onClick={requestLogout} className={styles.logout_icon} />
        </div>
      </div>
    </div>
  );
}

export default Header;
