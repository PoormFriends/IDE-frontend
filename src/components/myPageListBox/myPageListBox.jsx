import React from "react";
import { Link } from "react-router-dom";
import styles from "./myPageListBox.module.css";
/* eslint-disable react/prop-types */

function MyListBox({ listName, listInfo }) {
  const { userId } = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.list_title}>{listName}</h2>
        {listInfo.map(item => (
          <div className={styles.list_item} key={item.index}>
            <Link
              className={styles.link}
              to={`/solve/${userId}/${item.problemNum}`}
            >
              <h4 key={item.problemNum} className={styles.problemName}>
                {item.problemTitle}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyListBox;
