import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import styles from "./IdePage.module.css";
import MonacoEditor from "../../components/Ide/MonacoEditor";
import ProblemContent from "../../components/Ide/ProblemContent";

export default function IdePage() {
  const [problem, setProblem] = useState({});
  useEffect(() => {
    fetch("/ProblemFakeData.json")
      .then(response => response.json())
      .then(data => {
        console.log(data.problems);
        setProblem(data.problems);
      })
      .catch(error => console.error(error));
  }, []);

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
        <h2 className={styles.problemTitle}>{problem.title}</h2>
        <span className={styles.problemLevel}>Lv. {problem.level}</span>
      </header>
      <div className={styles.container}>
        <section className={styles.problemInfoContainer}>
          <ProblemContent type="문제 설명" content={problem.content} />
          <ProblemContent type="입력" content={problem.input} />
          <ProblemContent type="출력" content={problem.output} />
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
