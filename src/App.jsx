import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProblemListsPage from "./pages/ProblemListsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProblemListsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
