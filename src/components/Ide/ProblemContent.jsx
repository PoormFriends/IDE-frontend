import React from "react";
import styles from "./ProblemContent.module.css";

export default function ProblemContent({ type, content }) {
  return (
    <article className={`${styles.container} ${styles.borderBottom}`}>
      <h4 className={styles.label}>{type}</h4>
      <p className={styles.contents}>{content}</p>
    </article>
  );
}
