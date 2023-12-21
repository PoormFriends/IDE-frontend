import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import TablePagination from "@mui/material/TablePagination";
import styles from "./ProblemListsPage.module.css";
import Header from "../../components/header/Header";

function createData(id, num, title, level, lists, state) {
  return { id, num, title, level, lists, state };
}

const rows = [
  createData("fjsda423897", 1, "최댓값과 최솟값", "Lv.1", ["A", "B"], "O"),
  createData("razcg56", 2, "길 찾기", "Lv.2", [], "O"),
  createData("fgsrwer456", 3, "최소 비용 찾기", "Lv.0", ["B"], null),
  createData("rtfgxb", 4, "문제4", "Lv.0", [], null),
  createData("adfeqrttz", 5, "문제5", "Lv.2", [], null),
  createData("fasdfae", 6, "카드 놀이", "Lv.1", ["C"], null),
  createData("yrtsfg", 8, "문자열", "Lv.0", [], "X"),
  createData("sdfgsrt", 9, "별 찍기", "Lv.1", [], "O"),
  createData("fgsty", 10, "ABCDEFG", "Lv.2", ["C"], "X"),
  createData("gafdgfda", 11, "abcdwer", "Lv.1", [], null),
  createData("gadfgazvb", 12, "qwert", "Lv.0", ["B"], "X"),
  createData("dgafgqr", 13, "QWERabc", "Lv.1", ["B"], "O"),
  createData("agafdzc", 14, "문제10", "Lv.2", [], "X"),
  createData("dafrtq4", 15, "문제6", "Lv.1", [], null),
  createData("ertqertafdg5", 16, "문제8", "Lv.0", ["C"], "X"),
  createData("sdfasdf", 17, "문제9", "Lv.1", [], "O"),
  createData("ghdfghfdg", 18, "문제10", "Lv.2", ["A"], "X"),
  createData("bxcv", 19, "문제6", "Lv.1", ["A"], null),
  createData("54645adfg", 20, "문제8", "Lv.0", ["B"], "X"),
  createData("dfsgsdf", 21, "문제9", "Lv.1", [], "O"),
  createData("5345adf", 22, "문제10", "Lv.2", [], "X"),
  createData("45fgsd", 23, "문제6", "Lv.1", [], null),
  createData("fdasfa", 24, "문제8", "Lv.0", [], "X"),
  createData("534gsdf456", 25, "문제9", "Lv.1", [], "O"),
  createData("gsdf45645", 26, "문제10", "Lv.2", [], "X"),
];

const problemListsPage = () => {
  const userId = "zivjoij45892ldfk";
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [problemLists, setProblemLists] = useState(rows);
  const [searchFilter, setSearchFilter] = useState("");
  const [stateFilter, setstateFilter] = useState("default");
  const [levelFilter, setLevelFilter] = useState("default");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filterProblems = (searchTerm, corFilter, levFilter) => {
    const filteredRows = rows.filter(item => {
      const itemText = item.title ? item.title : "";
      const itemNum = item.num ? item.num.toString() : "";

      if (
        !searchTerm.trim() &&
        corFilter === "default" &&
        levFilter === "default"
      ) {
        return true;
      }

      const searchTermRegex = new RegExp([...searchTerm].join(".*"), "i");
      const corFilterMatch =
        corFilter === "default" || item.state === corFilter;
      const levFilterMatch =
        levFilter === "default" ||
        item.level.toLowerCase() === levFilter.toLowerCase();
      const numMatch = itemNum.includes(searchTerm.trim());

      return (
        (searchTermRegex.test(itemText.toLowerCase()) || numMatch) &&
        corFilterMatch &&
        levFilterMatch
      );
    });

    setProblemLists(
      !searchTerm.trim() && corFilter === "default" && levFilter === "default"
        ? rows
        : filteredRows,
    );
  };

  const handleFilterInput = e => {
    setSearchFilter(e.target.value);
    filterProblems(e.target.value, stateFilter, levelFilter);
  };

  const handlestateFilterChange = event => {
    const newstate = event.target.value;

    setstateFilter(newstate);
    filterProblems(searchFilter, newstate, levelFilter);
  };

  const handleLevelFilterChange = event => {
    const newLevel = event.target.value;

    setLevelFilter(newLevel);
    filterProblems(searchFilter, stateFilter, newLevel);
  };

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.search_bar}>
          <Container sx={{ mt: 5 }}>
            <TextField
              type="search"
              id="search"
              label="Search"
              value={searchFilter}
              onChange={e => handleFilterInput(e)}
              sx={{ width: 680 }}
            />
          </Container>
        </div>
        <div className={styles.sort_standard}>
          <div className={styles.sort_state}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="state-select-label">상태</InputLabel>
                <Select
                  labelId="state-select-label"
                  id="state-select"
                  label="state"
                  value={stateFilter}
                  onChange={handlestateFilterChange}
                >
                  <MenuItem value="default">none</MenuItem>
                  <MenuItem value="O">O</MenuItem>
                  <MenuItem value="X">X</MenuItem>
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
                  value={levelFilter}
                  onChange={handleLevelFilterChange}
                >
                  <MenuItem value="default">none</MenuItem>
                  <MenuItem value="lv.0">Lv.0</MenuItem>
                  <MenuItem value="lv.1">Lv.1</MenuItem>
                  <MenuItem value="lv.2">Lv.2</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <Paper sx={{ mt: 2, width: 680 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">상태</TableCell>
                    <TableCell align="right">번호</TableCell>
                    <TableCell align="left">제목</TableCell>
                    <TableCell align="center">난이도</TableCell>
                    <TableCell align="left">리스트</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {problemLists
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(problemList => {
                      const stateClass =
                        problemList.state === "O" ? styles.OText : styles.XText;

                      const levelMap = {
                        "lv.0": styles.lv0,
                        "lv.1": styles.lv1,
                        "lv.2": styles.lv2,
                      };

                      const levelClass =
                        levelMap[problemList.level.toLowerCase()] || "";

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={problemList.id}
                        >
                          <TableCell
                            width="60"
                            align="center"
                            className={stateClass}
                          >
                            {problemList.state}
                          </TableCell>
                          <TableCell
                            width="30"
                            component="th"
                            scope="row"
                            align="right"
                          >
                            {problemList.num}
                          </TableCell>
                          <TableCell width="200" align="left">
                            <Link
                              className={styles.problem_title}
                              to={`/solve/${userId}/${problemList.num}`}
                            >
                              {problemList.title}
                            </Link>

                            {/* 문제 num과 id를 조합한 값의 url을 만들어주어야 함. */}
                          </TableCell>
                          <TableCell
                            width="50"
                            align="center"
                            className={levelClass}
                          >
                            {problemList.level}
                          </TableCell>
                          <TableCell width="150" align="left">
                            {problemList.lists.map(item => (
                              <span className={styles.list_box} key={item.id}>
                                {item}
                              </span>

                              // item의 id가 아니라 태그 각각의 id를 넣어주어야 함!!(추후 수정)
                            ))}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={problemLists.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <div className={styles.proplem_table_container} />
        </div>
      </div>
    </div>
  );
};

export default problemListsPage;
