import React, { useEffect, useState } from "react";
import MyList from "./MyList";
import styles from "./MyListContainer.module.css";
import AddMyList from "./AddMyList";

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
  const [isEdit, setIsEdit] = useState(false);

  // react query로 서버 상태 업데이트 필요(현재는 첫번째 렌더링)
  useEffect(() => {
    fetch(`https://localhost:8080/directory?userId=${"id"}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Errors: ", error));
  }, []);

  const handleListChange = newList => {
    setLists(prevLists => [...prevLists, newList]);
  };
  const handleClick = () => {
    setIsEdit(prev => !prev);
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>oo의 마이리스트</h4>
      <div className={styles.lists}>
        {lists.map(list => (
          <MyList key={list.id} title={list.title} contents={list.contents} />
        ))}
      </div>
      {/* isEdit 상태면 <AppMyList />을 보여주고,
      입력해서 리스트 추가가 완료되면, isEdit=false */}
      {isEdit ? (
        <AddMyList onSubmit={handleListChange} onToggleEdit={handleClick} />
      ) : (
        <button
          className={styles.addButton}
          type="button"
          onClick={handleClick}
        >
          리스트 추가하기
        </button>
      )}
    </div>
  );
}
