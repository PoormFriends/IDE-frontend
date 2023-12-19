import React, { useState } from "react";
import MyListProblem from "./MyListProblem";
import styles from "./MyList.module.css";

export default function MyList() {
  const [list, setList] = useState([
    {
      id: "1",
      title: "약수의 합",
      level: "1",
    },
    {
      id: "2",
      title: "피보나치 수",
      level: "2",
    },
    {
      id: "3",
      title: "JadenCase 문자열이 몇개일까요알아맞춰보세요딩동댕동",
      level: "2",
    },
  ]);

  const tempFunction = () => {
    setList([]);
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>마이리스트 이름</h4>
      {/* 문제들 */}
      <div className={styles.problems}>
        {list.map(problem => (
          <MyListProblem
            key={problem.id}
            title={problem.title}
            level={problem.level}
          />
        ))}
      </div>
      <button className={styles.addButton} type="button" onClick={tempFunction}>
        문제 추가하기
      </button>
    </div>
  );
}
