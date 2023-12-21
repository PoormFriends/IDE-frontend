import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import MyList from "./MyList";
import styles from "./MyListContainer.module.css";
import AddMyList from "./AddMyList";
import { fetchMyLists } from "../../api/MyListService";

export default function MyListContainer({ onClose }) {
  const [isEdit, setIsEdit] = useState(false);
  const { userId } = useParams();

  const {
    data: myLists,
    isLoading,
    error,
  } = useQuery(["myLists", userId], () => fetchMyLists(userId));
  console.log("myLists: ", myLists);

  const handleClick = () => {
    setIsEdit(prev => !prev);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log("my list error");
    console.log(error);
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4 className={styles.label}>oo의 마이리스트</h4>
        <button
          className={styles.closeButton}
          type="button"
          aria-label="마이리스트 닫기"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
      </header>

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
