import React from "react";
import { FiMinus } from "react-icons/fi";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import styles from "./MyListProblem.module.css";
import { fetchDeleteMyListProblem } from "../../api/MyListService";

export default function MyListProblem({
  directoryId,
  problemNum,
  problemTitle,
  problemLevel,
}) {
  const { userId, problemId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteMyListProblemMutation = useMutation(
    () => fetchDeleteMyListProblem(userId, directoryId, problemNum),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myLists", userId]);
      },
      onError: error => {
        console.log("문제 삭제하기 실패", error);
      },
    },
  );

  const handleDeleteMyListProblem = () => {
    console.log("problemId: ", problemId);
    console.log("problemNum: ", problemNum);
    deleteMyListProblemMutation.mutate({
      userId,
      directoryId,
      problemNum,
    });
  };

  const handleClick = () => {
    const path = `/solve/${userId}/${problemNum}`;
    navigate(path);
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <NavLink
          to={`/solve/${userId}/${problemNum}`}
          className={styles.link}
          onClick={handleClick}
        >
          {problemTitle}
        </NavLink>
      </p>
      <span className={styles.level}>Lv. {problemLevel}</span>
      <button
        className={styles.deleteButton}
        type="button"
        aria-label="delete problem my list button"
        onClick={handleDeleteMyListProblem}
      >
        <FiMinus />
      </button>
    </div>
  );
}
