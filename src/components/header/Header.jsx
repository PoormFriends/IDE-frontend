import React from "react";
import { FiLogOut } from "react-icons/fi";
import styles from "./Header.module.css";
import titleLogo from "../../assets/images/title_logo.png";
import { requestLogout } from "../../pages/login-page/api";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_title}>
        <img
          src={titleLogo}
          className={styles.header_title_icon}
          alt="header-title-icon"
        />
      </div>
      <div className={styles.buttons}>
        <img
          className={styles.header_user_profile}
          src="https://avatars.githubusercontent.com/u/100774811?v=4"
          alt="user-profile"
        />
        <FiLogOut onClick={requestLogout} className={styles.logout_icon} />
      </div>
    </div>
  );
}

export default Header;
