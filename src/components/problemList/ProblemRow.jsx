import { TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { FaRegCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import MiniMyList from "../miniMyList/MiniMyList";
import { fetchMyLists } from "../../api/MyListService";
// import styles from "./ProblemRow.module.css";

export default function ProblemRow({
  userId,
  state,
  problemId,
  problemName,
  level,
  directories,
}) {
  const [isMiniMyListVisible, setIsMiniMyListVisible] = useState(false);
  const { data: totalMyLists } = useQuery(["myLists", userId], () =>
    fetchMyLists(userId),
  );
  const toggleMyListModal = () => {
    setIsMiniMyListVisible(prev => !prev);
  };

  return (
    <TableRow>
      <TableCell align="center">
        {state === "SUCCESS" && <FaRegCircle />}
        {state === "FAILURE" && <IoMdClose />}
      </TableCell>
      <TableCell align="center">{problemId}</TableCell>
      <TableCell align="left">
        <Link to={`/solve/${userId}/${problemId}`}>{problemName}</Link>
      </TableCell>
      <TableCell align="center">
        <span>{`Lv.${level}`}</span>
      </TableCell>
      <TableCell align="center" onClick={toggleMyListModal}>
        <div>
          {directories &&
            directories.map(directory => (
              <span key={directory.customDirectoryId}>
                {directory.customDirectoryName}
              </span>
            ))}
        </div>
        {isMiniMyListVisible && (
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
            <MiniMyList
              userId={userId}
              currentMyLists={directories}
              totalMyLists={totalMyLists}
              problemId={problemId}
              onClose={() => setIsMiniMyListVisible(false)}
            />
          </div>
        )}
      </TableCell>
    </TableRow>
  );
}
