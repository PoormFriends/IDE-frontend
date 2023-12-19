/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useParams } from "react-router-dom";
import styles from "./AddMyList.module.css";

export default function AddMyList({ onSubmit, onToggleEdit }) {
  const [title, setTitle] = useState("");
  const { userId } = useParams();

  const handleInput = e => {
    setTitle(e.target.value);
  };
  const fetchPostMyList = name => {
    // "http://localhost:8080/directory" 로 변경
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        directoryTitle: name,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error("Errors: ", error));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (title !== "") {
      console.log("리스트 제목이 빈값이 아님");
      // title을 db에 post, MyListContainer로 보내서 setLists
      fetchPostMyList(title);
      onSubmit(true);
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
