import React from "react";
import { useParams } from "react-router-dom";
import { FaCircleMinus } from "react-icons/fa6";
import { Tooltip } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import MyListProblem from "./MyListProblem";
import styles from "./MyList.module.css";
import {
  fetchAddMyListProblem,
  fetchDeleteMyList,
} from "../../api/MyListService";

export default function MyList({ directoryId, directoryName, problemList }) {
  const { userId, problemId } = useParams();
  const queryClient = useQueryClient();

  // isLoading 이 있어서 진행중 과정을 확인가능
  const addMyListProblemMutation = useMutation(
    () => fetchAddMyListProblem(userId, directoryId, problemId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myLists", userId]);
        // queryClient.setDataQuery(["myLists", userId], );
      },
    },
  );
  const handleAddMyListProblem = () => {
    addMyListProblemMutation.mutate({
      // mutate async + await⭐️
      // 비동기 실행 순서 로그 찍어서 확인해보기!
      userId,
      directoryId,
      problemId,
    });
  };

  const deleteMyListMutation = useMutation(
    () => fetchDeleteMyList(userId, directoryId),
    {
      onSuccess: data => {
        console.log("deleteMyListMutation 성공", { data });
        // queryClient.invalidateQueries(["myLists", userId]); // 렌더링에는 직접 영향을 미치지 않음
        queryClient.refetchQueries(["myLists", userId]);
      },
      onError: error => {
        console.log("deleteMyListMutation error", error);
      },
    },
  );
  // try catch에서 toast
  const handleDeleteList = () => {
    deleteMyListMutation.mutate({
      userId,
      directoryId,
    });
    console.log("handleDeleteList");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.title}>{directoryName}</h4>
        <Tooltip title="리스트를 삭제합니다">
          <button
            className={styles.deleteButton}
            type="button"
            aria-label="리스트 삭제하기 버튼"
            onClick={handleDeleteList}
          >
            <FaCircleMinus className={styles.deleteIcon} />
          </button>
        </Tooltip>
      </div>
      {/* 문제들 */}
      <div className={styles.problems}>
        {problemList &&
          problemList.map(problem => (
            <MyListProblem
              key={problem.directoryProblemId}
              directoryId={directoryId}
              problemNum={problem.problemNum}
              directoryProblemId={problem.directoryProblemId}
              problemTitle={problem.problemTitle}
              problemLevel={problem.problemLevel}
            />
          ))}
      </div>
      <button
        className={styles.addButton}
        type="button"
        onClick={handleAddMyListProblem}
      >
        문제 추가하기
      </button>
    </div>
  );
}
