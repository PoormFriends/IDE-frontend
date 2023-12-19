/* eslint-disable react/prop-types */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./MyListProblem.module.css";

export default function MyListProblem({ title, level }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <span className={styles.level}>Lv. {level}</span>
      <button
        className={styles.deleteButton}
        type="button"
        aria-label="trash button"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}
