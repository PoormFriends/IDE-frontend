import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Header.module.css";
import titleLogo from "../../assets/images/title_logo.png";
import { requestLogout } from "../../pages/login-page/api";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src={titleLogo}
          className={styles.logo_icon}
          alt="header-title-icon"
        />
      </Link>
      <div className={styles.button_container}>
        <Tooltip title="마이페이지">
          <Link to="/mypage">
            <img
              className={styles.mypage_img}
              src={user?.profileImage}
              alt="user-profile"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Log out">
          <button
            type="button"
            onClick={requestLogout}
            className={styles.logout_button}
            aria-label="logout button"
          >
            <FiLogOut className={styles.logout_icon} />
          </button>
        </Tooltip>
      </div>
    </header>
  );
}

export default Header;
