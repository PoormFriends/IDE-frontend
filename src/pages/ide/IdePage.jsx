import React, { useContext, useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import styles from "./IdePage.module.css";
import MonacoEditor from "../../components/Ide/MonacoEditor";
import ProblemContent from "../../components/Ide/ProblemContent";
import InputOutput from "../../components/Ide/InputOutput";
import { EditorContext } from "../../contexts/EditorContext";
import MyListContainer from "../../components/myList/MyListContainer";

export default function IdePage() {
  const [executionResult, setExecutionResult] = useState("");
  const { editor } = useContext(EditorContext);
  const [problems, setProblems] = useState(null);
  const [isMyListVisible, setIsMyListVisible] = useState(false);
  const location = useLocation();
  // const containerRef = useRef(null); // 외부 클릭 감지

  const getUserIDProblemId = () => {
    const path = window.location.pathname;
    const segments = path.split("/").filter(Boolean);
    const problemId = segments.slice(-1);
    const userId = segments.slice(-2, -1);

    return { problemId, userId };
  };

  // ide 데이터 조회
  useEffect(() => {
    const { userId, problemId } = getUserIDProblemId();
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      console.error("No access token available");
      return;
    }
    fetch(`http://localhost:8081/api/problems/ide/${userId}/${problemId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        return response.json();
      })
      // 초대 받은 사람인지 / 주인인지 확인 먼저(백엔드 -> status code -> 어떻게 보여줄지)
      // 200일때는 데이터를 같이 받아서 / 403일때는 데이터없이 유저를 이동 유도
      .then(data => {
        setProblems(data);
        console.log("data", { data });
        console.log(`userId: ${userId}, problemId: ${problemId}`);
      })
      .catch(error => console.error(error));
  }, [location]);

  // 제출 후 채점하기
  const handleSubmit = async () => {
    const { userId, problemId } = getUserIDProblemId();
    console.log("handleSubmit: ", userId, problemId);
    console.log("usercode: ", { editor });
    const accessToken = window.localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        `http://localhost:8081/solve/${userId}/${problemId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ usercode: editor }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("response data", { data });

      const state = data.information?.state || data.state;
      let executeResultPhase = "";
      if (state === "COMPILE_ERROR") {
        executeResultPhase = "컴파일 에러입니다.";
      } else if (state === "WRONG_ANSWER") {
        executeResultPhase = "오답입니다.";
      } else if (state === "SUCCESS") {
        executeResultPhase = "정답입니다!";
      } else {
        executeResultPhase = "ERROR! 다시 시도해주세요.";
      }
      setExecutionResult(executeResultPhase);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const toggleMyListVisible = () => {
    setIsMyListVisible(!isMyListVisible);
  };

  return (
    <div>
      <header className={styles.header}>
        <button
          type="button"
          aria-label="마이리스트 메뉴 열기 버튼"
          className={styles.myListMenuButton}
          onClick={toggleMyListVisible}
        >
          <CiMenuBurger />
        </button>
        {isMyListVisible && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              zIndex: 999,
            }}
          >
            <MyListContainer onClose={() => setIsMyListVisible(false)} />
          </div>
        )}
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
            problems.testCases.map((testCase, index) => (
              <InputOutput
                key={testCase.testCaseId}
                num={index}
                input={testCase.input}
                output={testCase.output}
              />
            ))}
        </section>
        <section className={styles.solveContainer}>
          <div className={styles.editorContainer}>
            <MonacoEditor userCode={problems?.usercode || ""} />
          </div>
          <div className={styles.executeResult}>
            <h4 className={styles.executeResultLabel}>실행 결과</h4>
            <div className={styles.executeResultContent}>{executionResult}</div>
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
