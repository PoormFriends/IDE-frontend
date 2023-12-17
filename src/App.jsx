import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProblemListsPage from "./pages/problem_lists_page/ProblemListsPage";
import IdePage from "./pages/ide/IdePage";
import LoginPage from "./pages/login-page/LoginPage";
import RedirectPage from "./pages/login-page/RedirectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProblemListsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth2" element={<RedirectPage />} />
        <Route path="/solve/:user_id/:problem_id" element={<IdePage />} />
      </Routes>
    </Router>
  );
}

export default App;
