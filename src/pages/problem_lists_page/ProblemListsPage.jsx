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
  const [isCorrectFilter, setIsCorrectFilter] = useState("default");
  const [levelFilter, setLevelFilter] = useState("default");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // 한글을 자음, 모음으로 분리하는 함수
  const hangulToJamo = text => {
    return [...text].map(char => {
      const code = char.charCodeAt(0);
      // 한글 범위 내에서 자음, 모음으로 분리
      if (code >= 44032 && code <= 55203) {
        const initialSoundIndex = (code - 44032) / 588;
        return String.fromCharCode(44032 + Math.floor(initialSoundIndex) * 588);
      }
      return char;
    });
  };

  const filterProblems = (searchTerm, corFilter, levFilter) => {
    const filteredRows = rows.filter(item => {
      // item.title이 정의되어 있는지 확인하고, 정의되어 있지 않다면 빈 문자열을 사용
      const itemText = item.title ? item.title : "";

      if (
        !searchTerm.trim() &&
        corFilter === "default" &&
        levFilter === "default"
      ) {
        // 검색어, 정답여부, 난이도가 모두 비어 있는 경우, 모든 문제를 출력
        return true;
      }

      // 검색어가 비어 있는 경우, 모든 문제를 대상으로 필터 적용
      const searchTermSeparated = hangulToJamo(itemText.toLowerCase());
      const separatedSearchTerm = hangulToJamo(searchTerm.toLowerCase());
      const corFilterMatch =
        corFilter === "default" || item.state === corFilter;
      const levFilterMatch =
        levFilter === "default" ||
        item.level.toLowerCase() === levFilter.toLowerCase();

      return (
        searchTermSeparated.join("").includes(separatedSearchTerm.join("")) &&
        corFilterMatch &&
        levFilterMatch
      );
    });

    // 검색어, 정답여부, 난이도가 모두 비어 있는 경우 problemLists를 다시 rows로 설정
    setProblemLists(
      !searchTerm.trim() && corFilter === "default" && levFilter === "default"
        ? rows
        : filteredRows,
    );
  };

  const handleFilterInput = e => {
    setSearchFilter(e.target.value);
    filterProblems(e.target.value, isCorrectFilter, levelFilter);
  };

  const handleIsCorrectFilterChange = event => {
    const newIsCorrect = event.target.value;

    setIsCorrectFilter(newIsCorrect);
    filterProblems(searchFilter, newIsCorrect, levelFilter);
  };

  const handleLevelFilterChange = event => {
    const newLevel = event.target.value;

    setLevelFilter(newLevel);
    filterProblems(searchFilter, isCorrectFilter, newLevel);
  };

  return (
    <div>
      <Header />
      <wrapper className={styles.wrapper}>
        <div className={styles.search_bar}>
          <Container sx={{ mt: 15 }}>
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
          <div className={styles.sort_isCorrect}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="isCorrect-select-label">상태</InputLabel>
                <Select
                  labelId="isCorrect-select-label"
                  id="isCorrect-select"
                  label="isCorrect"
                  value={isCorrectFilter}
                  onChange={handleIsCorrectFilterChange}
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
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={problemList.id}
                        >
                          <TableCell width="60" align="center">
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
                          <TableCell width="50" align="center">
                            {problemList.level}
                          </TableCell>
                          <TableCell width="150" align="left">
                            {problemList.lists.map(item => (
                              <span className={styles.list_box} key={item.num}>
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
      </wrapper>
    </div>
  );
};

export default problemListsPage;
