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
        setMyLists(data.myLists);
      })
      .catch(error => console.error("Errors: ", error));
  }, []);

  const handleAddList = newList => {
    setMyLists(prevLists => [...prevLists, newList]);
  };
  const handleClick = () => {
    setIsEdit(prev => !prev);
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>oo의 마이리스트</h4>
      <div className={styles.lists}>
        {myLists &&
          myLists.map(myList => (
            <MyList
              key={myList.directoryId}
              id={myList.directoryId}
              title={myList.directoryName}
              list={myList.problemList}
            />
          ))}
      </div>
      {isEdit ? (
        <AddMyList onSubmit={handleAddList} onToggleEdit={handleClick} />
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
