import React from "react";
import { useMutation, useQueryClient } from "react-query";
import styles from "./MiniMyList.module.css";
import {
  fetchAddMyListProblem,
  fetchDeleteMyListProblem,
} from "../../api/MyListService";

function MiniMyList({
  userId,
  currentMyLists,
  totalMyLists,
  problemId,
  toggleOffListsEditor,
}) {
  console.log(`userId: ${userId}, problemId: ${problemId}`);
  console.log("현재리스트: ", currentMyLists);
  console.log("전체리스트: ", totalMyLists);

  const queryClient = useQueryClient();

  const addMyListMutation = useMutation(
    () => fetchAddMyListProblem(userId, currentMyLists.directoryId, problemId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["problemLists", userId]);
      },
    },
  );

  const handleAddDirectory = directoryId => {
    addMyListMutation.mutate({
      userId,
      directoryId,
      problemId,
    });
  };

  const deleteMyListMutation = useMutation(
    () => fetchDeleteMyListProblem(userId, directoryId, problemId),
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
    console.log(`directoryId: ${directoryId}`);
    deleteMyListMutation.mutate({
      userId,
      directoryId,
      problemId,
    });
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_background}>
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <div className={styles.modal_title}>
              {problemId}번 문제 리스트 편집
            </div>
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
            <div className={styles.cur_lists}>
              {currentMyLists &&
                currentMyLists.map(currentMyList => (
                  <div
                    className={styles.cur_lists_list}
                    key={currentMyList.customDirectoryId}
                  >
                    {currentMyList.customDirectoryName}
                    <button
                      className={styles.del_btn}
                      type="button"
                      onClick={() =>
                        handleDeleteDirectory(currentMyList.customDirectoryId)
                      }
                    >
                      x
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <hr />
          <div className={styles.all_lists_wrapper}>
            <div className={styles.all_lists_title}>전체 리스트</div>
            <div className={styles.all_lists}>
              {totalMyLists &&
                totalMyLists.map(totalMyList => (
                  <button
                    className={styles.all_lists_list}
                    type="button"
                    key={totalMyList.directoryId}
                    onClick={() => handleAddDirectory(totalMyList.directoryId)}
                  >
                    {totalMyList.directoryName}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniMyList;
