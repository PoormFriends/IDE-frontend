import React from "react";
import { useQuery } from "react-query";
import styles from "./MiniMyList.module.css";
import {
  fetchMyLists,
  fetchAddMyListProblem,
  fetchDeleteMyListProblem,
} from "../../api/MyListService";

function MiniMyList({ userId, lists, num, toggleOffListsEditor }) {
  const {
    data: myLists,
    isLoading,
    error,
    refetch,
  } = useQuery(["myLists", userId], () => fetchMyLists(userId));

  console.log({ myLists });
  console.log({ lists });

  if (isLoading) {
    console.log({ isLoading });
  }
  if (error) {
    console.log({ error });
  }

  const findDirectoryProblemId = (
    myList,
    customDirectoryId,
    customDirectoryName,
    problemId,
  ) => {
    if (myList && Array.isArray(myList)) {
      const foundList = myList.find(
        list =>
          list.directoryId === customDirectoryId &&
          list.directoryName === customDirectoryName &&
          list.problemList &&
          Array.isArray(list.problemList),
      );

      if (foundList && Array.isArray(foundList.problemList)) {
        const foundProblem = foundList.problemList.find(
          problem => problem.problemNum === problemId,
        );

        if (foundProblem) {
          return foundProblem.directoryProblemId;
        }
      }
    }
    return undefined;
  };

  const handleDeleteButtonClick = async list => {
    const directoryProblemId = findDirectoryProblemId(
      myLists,
      list.customDirectoryId,
      list.customDirectoryName,
      num,
    );
    if (directoryProblemId !== undefined) {
      try {
        await fetchDeleteMyListProblem(
          userId,
          list.customDirectoryId,
          num,
          directoryProblemId,
        );
        console.log("삭제 성공");
        refetch();
      } catch (fetchError) {
        console.error("서버 요청 중 에러 발생:", fetchError);
      }
    } else {
      console.warn("directoryProblemId가 없어서 삭제 요청을 보내지 않습니다.");
    }
  };

  const handleAddButtonClick = async myList => {
    try {
      await fetchAddMyListProblem(userId, myList.directoryId, num);
      console.log("추가 성공");
      refetch();
    } catch (fetchError) {
      console.error("서버 요청 중 에러 발생:", fetchError);
    }
  };

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
            <div className={styles.cur_lists}>
              {lists &&
                lists.map(list => (
                  <div
                    className={styles.cur_lists_list}
                    key={list.customDirectoryId}
                  >
                    <div className={styles.cur_lists_list_content}>
                      {list.customDirectoryName}
                    </div>
                    <button
                      className={styles.del_btn}
                      type="button"
                      onClick={() => handleDeleteButtonClick(list)}
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
              {myLists &&
                myLists.map(myList => (
                  <button
                    className={styles.all_lists_list}
                    type="button"
                    key={myList.directoryId}
                    onClick={() => handleAddButtonClick(myList)}
                  >
                    {myList.directoryName}
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
