import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import styles from "./IdePage.module.css";
import MonacoEditor from "../../components/Ide/MonacoEditor";

export default function IdePage() {
  return (
    <div>
      <header className={styles.header}>
        <button
          type="button"
          aria-label="myListMenu"
          className={styles.myListMenuButton}
        >
          <CiMenuBurger />
        </button>
        <h2>문제 이름</h2>
      </header>
      <div className={styles.container}>
        <section className={styles.problemInfoContainer}>
          <article className={`${styles.problemInfo} ${styles.borderBottom}`}>
            <h4 className={styles.problemInformationLabel}>문제 설명</h4>
            <p className={styles.problemInformationContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae pariatur maxime mollitia hic porro, expedita molestias
              est similique? Ipsa ullam nesciunt reiciendis velit dolore,
              assumenda voluptas sequi facere maxime magnam?
            </p>
          </article>
          <article className={styles.problemInfo}>
            <h4 className={styles.problemInformationLabel}>제한 사항</h4>
            <p className={styles.problemInformationContent}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              beatae alias repellendus esse dolor molestias, non, cum unde quod,
              ipsa tenetur obcaecati earum praesentium voluptas recusandae
              veritatis commodi distinctio ea?
            </p>
          </article>
          <article className={styles.problemInfo}>
            <h4 className={styles.problemInformationLabel}>입출력 예</h4>
            <p className={styles.problemInformationContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              deserunt exercitationem officia quis laborum similique cumque?
              Minus minima tenetur omnis excepturi similique ut, est tempore
              ipsam adipisci ipsum, eum molestiae.
            </p>
          </article>
        </section>
        <section className={styles.solveContainer}>
          <div className={styles.editorContainer}>
            <MonacoEditor />
          </div>
          <div className={styles.executeResult}>
            <h4 className={styles.executeResultLabel}>실행 결과</h4>
            <div className={styles.executeResultContent}>실행 결과 내용</div>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <button
          type="button"
          aria-label="chattingButton"
          className={styles.chattingButton}
        >
          <IoChatboxEllipsesOutline className={styles.chattingIcon} />
        </button>
        <button type="button" className={styles.executeButton}>
          제출 후 채점하기
        </button>
      </footer>
    </div>
  );
}
