/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import styles from "./AddMyList.module.css";
import { fetchAddMyList } from "../../api/MyListService";

export default function AddMyList({ onToggleEdit }) {
  const [title, setTitle] = useState("");
  const { userId } = useParams();
  const queryClient = useQueryClient();

  const handleInput = e => {
    setTitle(e.target.value);
  };

  const addMyListMutation = useMutation(
    newMyListData => fetchAddMyList(newMyListData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myLists", userId]);
      },
    },
  );
  const handleSubmit = e => {
    e.preventDefault();
    if (title !== "") {
      addMyListMutation.mutate({ userId, title });
    }
    onToggleEdit(false);
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.label}>리스트 추가하기</h5>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="마이리스트 이름을 입력하세요"
          onChange={handleInput}
        />
        <button
          className={styles.submit}
          type="submit"
          aria-label="리스트 추가하기 버튼"
        >
          <IoIosAddCircle />
        </button>
      </form>
    </div>
  );
}
