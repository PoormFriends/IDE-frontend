import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProblemListsPage from "./pages/problem_lists_page/ProblemListsPage";
import IdePage from "./pages/ide/IdePage";
import LoginPage from "./pages/login-page/LoginPage";
import RedirectPage from "./pages/login-page/RedirectPage";
import MyListContainer from "./components/myList/MyListContainer";
import { EditorProvider } from "./contexts/EditorContext";

const queryClient = new QueryClient();
function App() {
  const isLogin = localStorage.getItem("accessToken");
  return (
    <QueryClientProvider client={queryClient}>
      <EditorProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={isLogin ? <ProblemListsPage /> : <LoginPage />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth2" element={<RedirectPage />} />
            <Route path="/solve/:user_id/:problem_id" element={<IdePage />} />
            <Route
              path="/mylist/:userId/:problemId"
              element={<MyListContainer />}
            />
          </Routes>
        </Router>
      </EditorProvider>
    </QueryClientProvider>
  );
}

export default App;
