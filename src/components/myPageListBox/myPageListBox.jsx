import React from "react";
import styles from "./myPageListBox.module.css";
/* eslint-disable react/prop-types */

function MyListBox({ listName, listInfo }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.list_title}>{listName}</h2>
        {listInfo.map(item => (
          <div className={styles.list_item} key={item.index}>
            <h4 className={styles.problemName}>{item.problemName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyListBox;
