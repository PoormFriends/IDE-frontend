import React, { useState } from "react";
import MyList from "./MyList";
import styles from "./MyListContainer.module.css";

export default function MyListContainer() {
  const [lists, setLists] = useState([
    {
      id: "list1",
      title: "다시 풀 문제",
      contents: [
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
      ],
    },
    {
      id: "list2",
      title: "코딩테스트 대비 문제 모음",
      contents: [],
    },
  ]);

  const handleAdd = () => {
    setLists([]);
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>oo의 마이리스트</h4>
      <div className={styles.lists}>
        {lists.map(list => (
          <MyList key={list.id} title={list.title} contents={list.contents} />
        ))}
        <button className={styles.addButton} type="button" onClick={handleAdd}>
          리스트 추가하기
        </button>
      </div>
    </div>
  );
}
