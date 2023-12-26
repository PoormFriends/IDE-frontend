import { Chip, TableCell, TableRow, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { FaRegCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import MiniMyList from "../miniMyList/MiniMyList";
import { fetchMyLists } from "../../api/MyListService";
import styles from "./ProblemRow.module.css";

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
    <TableRow className={styles.table_row} sx={{ paddingRight: 10 }}>
      <TableCell align="center" sx={{ maxWidth: 50 }}>
        {state === "SUCCESS" && <FaRegCircle style={{ color: "green" }} />}
        {state === "FAILURE" && <IoMdClose style={{ color: "red" }} />}
      </TableCell>
      <TableCell align="center">{problemId}</TableCell>
      <TableCell align="left" sx={{ minWidth: 300 }}>
        <Link to={`/solve/${userId}/${problemId}`} className={styles.link}>
          {problemName}
        </Link>
      </TableCell>
      <TableCell align="center">
        <span className={styles.level}>{`Lv.${level}`}</span>
      </TableCell>
      <Tooltip title="마이리스트에 추가/삭제하기" placement="right">
        <TableCell
          sx={{
            maxWidth: 300,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          align="center"
          onClick={toggleMyListModal}
        >
          <div className={styles.mylist_container}>
            {directories &&
              directories.map(directory => (
                <Chip
                  key={directory.customDirectoryId}
                  label={`${directory.customDirectoryName}`}
                  variant="outlined"
                  sx={{
                    "--Chip-radius": "4px",
                  }}
                />
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
      </Tooltip>
    </TableRow>
  );
}
