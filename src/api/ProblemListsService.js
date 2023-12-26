export default async function fetchProblemLists(userId) {
  try {
    const accessToken = window.localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("access token 없음");
    }
    const response = await fetch(
      `http://localhost:8081/api/problems/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`문제리스트 전체 조회 실패 ${userId}`);
    }
    return response.json();
  } catch (error) {
    console.error("서버 요청에 실패했습니다: ", error);

    throw error;
  }
}
