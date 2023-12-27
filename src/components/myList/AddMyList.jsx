import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { IoMdClose } from "react-icons/io";
import styles from "./AddMyList.module.css";
import { fetchAddMyList } from "../../api/MyListService";

export default function AddMyList({ onToggleEdit }) {
  const [title, setTitle] = useState("");
  const { userId } = useParams();
  const queryClient = useQueryClient();

  const handleInput = e => {
    setTitle(e.target.value);
  };

  // 마이리스트 추가
  const addMyListMutation = useMutation(() => fetchAddMyList(userId, title), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myLists", userId]);
    },
    onError: error => {
      console.log(error);
    },
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (title !== "") {
      addMyListMutation.mutate();
    }
    onToggleEdit(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h5 className={styles.label}>마이리스트 추가하기</h5>
        <button
          className={styles.closeButton}
          type="button"
          aria-label="close button"
          onClick={() => onToggleEdit(false)}
        >
          <IoMdClose />
        </button>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="마이리스트 이름을 입력하세요"
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
