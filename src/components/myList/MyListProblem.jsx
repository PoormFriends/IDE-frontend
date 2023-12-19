/* eslint-disable react/prop-types */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./MyListProblem.module.css";

export default function MyListProblem({ title, level }) {
  const handleDeleteProblem = () => {
    fetch("http://localhost:8080/directory/problem", {
      method: "DELETE",
      header: {
        // Authorization: Bearer 수정 예정
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // react-query로 전역상태 관리 수정예정
        // userId,
        // directory,
        // problemId,
        // directoryProblemId,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {/* to={`/solve/${userId}/${problemId}`} 로 수정예정 */}
        <NavLink to="/solve/{userId}/{problemId}" className={styles.link}>
          {title}
        </NavLink>
      </p>
      <span className={styles.level}>Lv. {level}</span>
      <button
        className={styles.deleteButton}
        type="button"
        aria-label="trash button"
        onClick={handleDeleteProblem}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}
