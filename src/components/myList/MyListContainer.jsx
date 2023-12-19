import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MyList from "./MyList";
import styles from "./MyListContainer.module.css";
import AddMyList from "./AddMyList";
import { fetchMyLists } from "../../api/MyListService";

export default function MyListContainer() {
  const [isEdit, setIsEdit] = useState(false);
  const { userId } = useParams();

  const {
    data: myLists,
    isLoading,
    error,
  } = useQuery(["myLists", userId], fetchMyLists);

  const handleClick = () => {
    setIsEdit(prev => !prev);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className={styles.container}>
      <h4 className={styles.label}>oo의 마이리스트</h4>
      <div className={styles.lists}>
        {myLists &&
          myLists.map(myList => (
            <MyList
              key={myList.directoryId}
              directoryId={myList.directoryId}
              directoryName={myList.directoryName}
              problemList={myList.problemList}
            />
          ))}
      </div>
      <div className={styles.addContainer}>
        {isEdit ? (
          <AddMyList onToggleEdit={handleClick} />
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
    </div>
  );
}
