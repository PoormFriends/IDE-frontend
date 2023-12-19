/* eslint-disable react/prop-types */
import React from "react";
import MyListProblem from "./MyListProblem";
import styles from "./MyList.module.css";

export default function MyList({ title, contents }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>{title}</h4>
      {/* 문제들 */}
      <div className={styles.problems}>
        {contents.map(problem => (
          <MyListProblem
            key={problem.id}
            title={problem.title}
            level={problem.level}
          />
        ))}
      </div>
      <button className={styles.addButton} type="button">
        문제 추가하기
      </button>
    </div>
  );
}
