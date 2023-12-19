// 마이리스트 전체 조회
export const fetchMyLists = async userId => {
  const response = await fetch(
    `https://localhost:8080/directory?userId=${userId}`,
  );
  if (!response.ok) {
    throw new Error("마이리스트 전체 조회 실패");
  }
  return response.json();
};

// 마이리스트 추가
export const fetchAddMyList = async (userId, directoryTitle) => {
  const response = await fetch(`https://localhost:8080/directory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': Bearer accessToken
    },
    body: JSON.stringify({ userId, directoryTitle }),
  });
  if (!response.ok) {
    throw new Error("마이리스트 추가 실패");
  }
  return response.json();
};

// 마이리스트 삭제
export const fetchDeleteMyList = async (userId, directoryId) => {
  const response = await fetch(`http://localhost:8080/directory`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': Bearer accessToken
    },
    body: JSON.stringify({ userId, directoryId }),
  });
  if (!response.ok) {
    throw new Error("마이리스트 삭제 실패");
  }
  return response.json();
};

// 마이리스트 문제 추가
export const fetchAddMyListProblem = async (userId, directoryId, problemId) => {
  const response = await fetch(`http://localhost:8080/directory/problem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': Bearer accessToken
    },
    body: JSON.stringify({ userId, directoryId, problemId }),
  });
  if (!response.ok) {
    throw new Error("마이리스트 문제 추가 실패");
  }
  return response.json();
};

// 마이리스트 문제 삭제
export const fetchDeleteMyListProblem = async (
  userId,
  directoryId,
  problemId,
  directoryProblemId,
) => {
  const response = await fetch(`http://localhost:8080/directory/problem`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': Bearer accessToken
    },
    body: JSON.stringify({
      userId,
      directoryId,
      problemId,
      directoryProblemId,
    }),
  });
  if (!response.ok) {
    throw new Error("마이리스트 문제 삭제 실패");
  }
  return response.json();
};
