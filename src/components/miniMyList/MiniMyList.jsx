import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { IoClose } from "react-icons/io5";
import { Chip } from "@mui/material";
import styles from "./MiniMyList.module.css";
import {
  fetchAddMyListProblem,
  fetchDeleteMyListProblem,
} from "../../api/MyListService";

function MiniMyList({ userId, currentMyLists, totalMyLists, problemId }) {
  const queryClient = useQueryClient();

  const addMyListMutation = useMutation(
    ({ directoryId }) => fetchAddMyListProblem(userId, directoryId, problemId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["problemLists", userId]);
      },
      onError: error => {
        console.log("문제리스트 fetchAddMyListProblem error", error);
      },
    },
  );

  const handleAddDirectory = directoryId => {
    addMyListMutation.mutate({
      directoryId,
    });
  };

  const deleteMyListMutation = useMutation(
    ({ directoryId }) =>
      fetchDeleteMyListProblem(userId, directoryId, problemId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["problemLists", userId]);
      },
      onError: error => {
        console.log("마이리스트 삭제하기 실패", error);
      },
    },
  );

  const handleDeleteDirectory = directoryId => {
    deleteMyListMutation.mutate({
      directoryId,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal_header}>
        <h4 className={styles.modal_title}>🗂️ [문제제목] 문제 담기</h4>
        <button
          type="button"
          className={styles.close_button}
          aria-label="close button"
        >
          <IoClose className={styles.close_icon} />
        </button>
      </div>
      <div className={styles.mylist_container}>
        <h4 className={styles.title}>현재 담은 마이리스트</h4>
        <div className={styles.mylists}>
          {currentMyLists &&
            currentMyLists.map(currentMyList => (
              <Chip
                key={currentMyList.customDirectoryId}
                label={currentMyList.customDirectoryName}
                onClick={() =>
                  handleDeleteDirectory(currentMyList.customDirectoryId)
                }
              />
            ))}
        </div>
      </div>
      <div className={styles.mylist_container}>
        <h4 className={styles.title}>전체 마이리스트</h4>
        <div className={styles.mylists}>
          {totalMyLists &&
            totalMyLists.map(totalMyList => (
              <Chip
                key={totalMyList.directoryId}
                label={totalMyList.directoryName}
                variant="outlined"
                onClick={() => handleAddDirectory(totalMyList.directoryId)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MiniMyList;
