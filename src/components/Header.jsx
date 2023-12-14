import React from "react";
import { FiLogOut } from "react-icons/fi";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header_title}>Goorm Friends IDE</h1>
      <div className={styles.buttons}>
        <img
          className={styles.header_user_profile}
          src="https://avatars.githubusercontent.com/u/100774811?v=4"
          alt="user-profile"
        />
        <FiLogOut className={styles.logout_icon} />
      </div>
    </div>
  );
}

export default Header;
