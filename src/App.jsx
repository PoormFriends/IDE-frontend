import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProblemListsPage from "./pages/problem_lists_page/ProblemListsPage";
import IdePage from "./pages/ide/IdePage";
import LoginPage from "./pages/login-page/LoginPage";
import RedirectPage from "./pages/login-page/RedirectPage";
import { EditorProvider } from "./contexts/EditorContext";

function App() {
  const isLogin = localStorage.getItem("accessToken");
  return (

    <EditorProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
            <Route
          path="/"
          element={isLogin ? <ProblemListsPage /> : <LoginPage />}
        />
          <Route path="/oauth2" element={<RedirectPage />} />
          <Route path="/solve/:user_id/:problem_id" element={<IdePage />} />
        </Routes>
      </Router>
    </EditorProvider>

  );
}

export default App;
