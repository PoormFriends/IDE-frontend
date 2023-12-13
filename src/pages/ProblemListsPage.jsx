import React from "react";
import { Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../components/Header";
import styles from "./ProblemListsPage.module.css";

function createData(num, title, level, lists, isCorrect) {
  return { num, title, level, lists, isCorrect };
}

const rows = [
  createData(1, "최댓값과 최솟값", 2, [], "O"),
  // createData(2, "양꼬치", 0, [], " "),
  // createData(3, "JadenCase 문자열 만들기", 2, ["다시 풀 문제"], "X"),
];

const problemListsPage = () => {
  return (
    <div>
      <Header />
      <wrapper className={styles.wrapper}>
        <div className={styles.search_bar}>
          <Container maxWidth="md" sx={{ mt: 15 }}>
            <TextField
              type="search"
              id="search"
              label="Search"
              value="변수로 받아와야 함"
              sx={{ width: 600 }}
            />
          </Container>
        </div>
        <div className={styles.sort_standard}>
          <div className={styles.sort_isCorrect}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="isCorrect-select-label">정답여부</InputLabel>
                <Select
                  labelId="isCorrect-select-label"
                  id="isCorrect-select"
                  label="isCorrect"
                >
                  <MenuItem value="default">none</MenuItem>
                  <MenuItem value="true">O</MenuItem>
                  <MenuItem value="false">X</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className={styles.sort_level}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="level-select-label">난이도</InputLabel>
                <Select
                  labelId="level-select-label"
                  id="level-select"
                  label="level"
                >
                  <MenuItem value="default">none</MenuItem>
                  <MenuItem value="lv0">Lv.0</MenuItem>
                  <MenuItem value="lv1">Lv.1</MenuItem>
                  <MenuItem value="lv2">Lv.2</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className={styles.proplem_table_container}>
            <TableContainer
              component={Paper}
              sx={{ maxWidth: 650, mt: 9, mx: "auto" }}
            >
              <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">번호</TableCell>
                    <TableCell align="left">제목</TableCell>
                    <TableCell align="center">난이도</TableCell>
                    <TableCell align="center">리스트</TableCell>
                    <TableCell align="center">정답 여부</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {row.num}
                      </TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="center">Lv.{row.level}</TableCell>
                      <TableCell align="left" />
                      <TableCell align="center">{row.isCorrect}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </wrapper>
    </div>
  );
};

export default problemListsPage;
