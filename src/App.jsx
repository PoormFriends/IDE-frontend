import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProblemListsPage from "./pages/problem_lists_page/ProblemListsPage";
import IdePage from "./pages/ide/IdePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProblemListsPage />} />
        <Route path="/problems/:id" element={<IdePage />} />
      </Routes>
    </Router>
  );
}

export default App;
