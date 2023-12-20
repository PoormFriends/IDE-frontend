/* eslint-disable react/prop-types */
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

  const addMyListProblemMutation = useMutation(
    newMyListProblemData => fetchAddMyListProblem(newMyListProblemData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myLists", userId]);
      },
    },
  );
  const handleAddMyListProblem = () => {
    addMyListProblemMutation.mutate({
      userId,
      directoryId,
      problemId,
    });
  };

  const deleteMyListMutation = useMutation(
    myListData => fetchDeleteMyList(myListData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myLists", userId]);
      },
    },
  );
  const handleDeleteList = () => {
    deleteMyListMutation.mutate({
      userId,
      directoryId,
    });
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
