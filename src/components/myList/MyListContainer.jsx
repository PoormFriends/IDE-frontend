import React, { useEffect, useState } from "react";
import MyList from "./MyList";
import styles from "./MyListContainer.module.css";
import AddMyList from "./AddMyList";

export default function MyListContainer() {
  const [myLists, setMyLists] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  // react query로 서버 상태 업데이트 필요(현재는 첫번째 렌더링)
  useEffect(() => {
    // `https://localhost:8080/directory?userId=${"id"}` 으로 변경
    fetch("/SampleMyLists.json")
      .then(response => response.json())
      .then(data => {
        const { newMyLists } = data;
        setMyLists(newMyLists);
      })
      .catch(error => console.error("Errors: ", error));
  }, []);

  const handleListChange = newList => {
    setMyLists(prevLists => [...prevLists, newList]);
  };
  const handleClick = () => {
    setIsEdit(prev => !prev);
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>oo의 마이리스트</h4>
      <div className={styles.lists}>
        {myLists.map(myList => (
          <MyList key={myList.directoryId} myList={myList} />
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
