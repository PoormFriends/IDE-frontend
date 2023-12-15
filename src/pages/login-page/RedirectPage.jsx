import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { requestUserInfo } from "./api";
// 요청만 하고 전환되는 페이지 프론트 멘토님이 말씀하신 방식
export default function RedirectPage() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.localStorage.search);
  const accessToken = String(params.get("accessToken"));

  const handleToken = () => {
    localStorage.setItem("accessToken", accessToken);
  };
  const handleUserInfo = async () => {
    try {
      const {
        data: {
          user: { userId, email, name },
        },
      } = await requestUserInfo();
      const userInfo = { userId, email, name };
      localStorage.setItem("user", JSON.stringify(userInfo)); // json 문자열로 변환후 로컬 스토리지에 저장
      navigate("/", { replace: true }); // 메인으로 돌아가고 뒤로가기로 이 페이지 접근방지
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleToken();
    handleUserInfo();
  }, []);
  return <h1>Loading...</h1>;
}
