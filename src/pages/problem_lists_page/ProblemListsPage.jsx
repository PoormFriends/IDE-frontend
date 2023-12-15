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
import TablePagination from "@mui/material/TablePagination";
import styles from "./ProblemListsPage.module.css";
import Header from "../../components/header/Header";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0),
  createData(2, 237, 9.0, 37, 4.3),
  createData(3, 262, 16.0, 24, 6.0),
  createData(4, 305, 3.7, 67, 4.3),
  createData(5, 356, 16.0, 49, 3.9),
  createData(6, 356, 16.0, 49, 3.9),
  createData(7, 356, 16.0, 49, 3.9),
  createData(8, 356, 16.0, 49, 3.9),
  createData(9, 356, 16.0, 49, 3.9),
  createData(10, 356, 16.0, 49, 3.9),
  createData(11, 356, 16.0, 49, 3.9),
  createData(12, 356, 16.0, 49, 3.9),
  createData(13, 356, 16.0, 49, 3.9),
  createData(14, 356, 16.0, 49, 3.9),
  createData(15, 356, 16.0, 49, 3.9),
  createData(16, 356, 16.0, 49, 3.9),
  createData(17, 356, 16.0, 49, 3.9),
  createData(18, 356, 16.0, 49, 3.9),
  createData(19, 356, 16.0, 49, 3.9),
  createData(20, 356, 16.0, 49, 3.9),
  createData(21, 356, 16.0, 49, 3.9),
  createData(22, 356, 16.0, 49, 3.9),
  createData(23, 356, 16.0, 49, 3.9),
];

const problemListsPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
              value="변수로 받아와야 함"
              sx={{ width: 680 }}
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
          <Paper sx={{ mt: 2, width: 680 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">번호</TableCell>
                    <TableCell align="left">제목</TableCell>
                    <TableCell align="center">난이도</TableCell>
                    <TableCell align="left">리스트</TableCell>
                    <TableCell align="center">정답 여부</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell
                            width="30"
                            component="th"
                            scope="row"
                            align="right"
                          >
                            {row.name}
                          </TableCell>
                          <TableCell width="200" align="left">
                            {row.calories}
                          </TableCell>
                          <TableCell width="50" align="center">
                            {row.fat}
                          </TableCell>
                          <TableCell width="150" align="left">
                            {row.carbs}
                          </TableCell>
                          <TableCell width="60" align="center">
                            {row.protein}
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
              count={rows.length}
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
