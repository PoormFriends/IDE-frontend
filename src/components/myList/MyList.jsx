/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import MyListProblem from "./MyListProblem";
import styles from "./MyList.module.css";

export default function MyList({ id, title, list }) {
  const { userId, problemId } = useParams();
  const handleAddProblem = () => {
    fetch("http://localhost:8080/directory/problem", {
      method: "POST",
      headers: {
        // 추후 Authorization: Bearer <Token> 로 수정 예정
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        directoryId: id,
        problemId,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>{title}</h4>
      {/* 문제들 */}
      <div className={styles.problems}>
        {list &&
          list.map(problem => (
            <MyListProblem
              key={problem.directoryProblemId}
              title={problem.problemTitle}
              level={problem.problemLevel}
            />
          ))}
      </div>
      <button
        className={styles.addButton}
        type="button"
        onClick={handleAddProblem}
      >
        문제 추가하기
      </button>
    </div>
  );
}
