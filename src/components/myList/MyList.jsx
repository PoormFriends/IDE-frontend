/* eslint-disable react/prop-types */
import React from "react";
// import { useParams } from "react-router-dom";
import MyListProblem from "./MyListProblem";
import styles from "./MyList.module.css";

export default function MyList({ title, contents }) {
  // const { userId, problemIds } = useParams();
  const handleAddProblem = () => {
    fetch("http://localhost:8080/directory/problem", {
      method: "POST",
      headers: {
        // 추후 Authorization: Bearer <Token> 로 수정 예정
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   userId,
      //   directoryId,
      //   problemId,
      // }),
    })
      .then(response => response.json())
      .then(data => {
        const { directoryId, problemId, directoryProblemId } = data;
        console.log(directoryId, problemId, directoryProblemId);
      })
      .catch(error => console.error(error));
  };
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
