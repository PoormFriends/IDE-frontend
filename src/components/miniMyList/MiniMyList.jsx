import React from "react";
import styles from "./MiniMyList.module.css";

function MiniMyList({ userId, lists, num, toggleOffListsEditor }) {
  console.log({ userId, lists, num });

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_background}>
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <div className={styles.modal_title}>{num}번 문제 리스트 편집</div>
            <button
              type="button"
              className={styles.exit_button}
              onClick={toggleOffListsEditor}
            >
              x
            </button>
          </div>
          <hr />
          <div className={styles.cur_lists_wrapper}>
            <div className={styles.cur_lists_title}>현재 리스트</div>
            <div>{lists && lists.map(list => list.customDirectoryName)}</div>
          </div>
          <hr />
          <div className={styles.all_lists_wrapper}>
            <div className={styles.all_lists_title}>전체 리스트</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniMyList;
