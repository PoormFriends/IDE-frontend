import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import styles from "./MyListProblem.module.css";
import { fetchDeleteMyListProblem } from "../../api/MyListService";

export default function MyListProblem({
  directoryId,
  directoryProblemId,
  problemTitle,
  problemLevel,
}) {
  const { userId, problemId } = useParams();
  const queryClient = useQueryClient();
  const deleteMyListProblemMutation = useMutation(
    () =>
      fetchDeleteMyListProblem(
        userId,
        directoryId,
        problemId,
        directoryProblemId,
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myLists", userId]);
      },
    },
  );

  const handleDeleteMyListProblem = () => {
    deleteMyListProblemMutation.mutate({
      userId,
      directoryId,
      problemId,
      directoryProblemId,
    });
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <NavLink to={`/solve/${userId}/${problemId}`} className={styles.link}>
          {problemTitle}
        </NavLink>
      </p>
      <span className={styles.level}>Lv. {problemLevel}</span>
      <button
        className={styles.deleteButton}
        type="button"
        aria-label="trash button"
        onClick={handleDeleteMyListProblem}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}
