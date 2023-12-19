/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import styles from "./AddMyList.module.css";

export default function AddMyList({ onSubmit, onToggleEdit }) {
  const [title, setTitle] = useState("");

  const handleInput = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // title을 db에 post, MyListContainer로 보내서 setLists
    onSubmit({ id: "list5", title, contents: [] }); // 임시 id
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
