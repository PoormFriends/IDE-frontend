import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import styles from "./IdePage.module.css";
import MonacoEditor from "../../components/Ide/MonacoEditor";
import ProblemContent from "../../components/Ide/ProblemContent";
import InputOutput from "../../components/Ide/InputOutput";

export default function IdePage() {
  const [problems, setProblems] = useState(null);
  useEffect(() => {
    fetch("/ProblemFakeData.json")
      .then(response => response.json())
      .then(data => {
        setProblems(data.problems);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = () => {
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error: ", error));
  };
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
        {problems && (
          <>
            <h2 className={styles.problemTitle}>{problems.title}</h2>
            <span className={styles.problemLevel}>Lv. {problems.level}</span>
          </>
        )}
      </header>
      <div className={styles.container}>
        <section className={styles.problemInfoContainer}>
          {problems && (
            <ProblemContent type="문제 설명" content={problems.content} />
          )}
          {problems &&
            problems.examples.map((example, index) => (
              <InputOutput
                key={example.id}
                num={index}
                input={example.input}
                output={example.output}
              />
            ))}
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
        <button
          type="button"
          className={styles.executeButton}
          onClick={handleSubmit}
        >
          제출 후 채점하기
        </button>
      </footer>
    </div>
  );
}
