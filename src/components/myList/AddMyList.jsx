import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import styles from "./AddMyList.module.css";

export default function AddMyList() {
  return (
    <div className={styles.container}>
      <h5 className={styles.label}>리스트 추가하기</h5>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="마이리스트 이름을 입력하세요"
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
