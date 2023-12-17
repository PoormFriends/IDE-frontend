/* eslint-disable react/prop-types */
import React from "react";
import styles from "./InputOutput.module.css";

export default function InputOutput({ num, input, output }) {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4 className={styles.label}>예제 입력{num + 1}</h4>
        <p className={styles.contents}>{input}</p>
      </div>
      <div className={styles.section}>
        <h4 className={styles.label}>예제 출력{num + 1}</h4>
        <p className={styles.contents}>{output}</p>
      </div>
    </div>
  );
}
