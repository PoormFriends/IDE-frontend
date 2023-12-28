import React from "react";
import { Link } from "react-router-dom";
import styles from "./myPageListBox.module.css";

function MyListBox({ listName, listInfo }) {
  const { userId } = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{listName}</h4>
      <div className={styles.list_container}>
        {listInfo.map(item => (
          <div className={styles.itemContainer} key={item.directoryProblemId}>
            <p className={styles.problemTitle}>
              <Link
                className={styles.link}
                to={`/solve/${userId}/${item.problemNum}`}
              >
                {item.problemTitle}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyListBox;
