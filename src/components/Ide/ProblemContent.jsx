/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProblemContent.module.css";

export default function ProblemContent({ type, content }) {
  return (
    <article className={`${styles.problemInfo} ${styles.borderBottom}`}>
      <h4 className={styles.problemInformationLabel}>{type}</h4>
      <p className={styles.problemInformationContent}>{content}</p>
    </article>
  );
}
