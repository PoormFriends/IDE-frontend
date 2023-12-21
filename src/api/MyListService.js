const accessToken = localStorage.getItem("accessToken");

// 마이리스트 전체 조회
export const fetchMyLists = async userId => {
  try {
    if (!accessToken) {
      console.log("access token is not available");
      throw new Error(`access token 없음`);
    }
    console.log("fetchMyLists 호출됨", userId);
    const response = await fetch(
      `http://localhost:8081/directory?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`마이리스트 전체 조회 실패 ${userId}`);
    }
    return response.json();
  } catch (error) {
    console.error("서버 요청에 실패했습니다: ", error);

    throw error;
  }
};

// 마이리스트 추가
export const fetchAddMyList = async (userId, directoryTitle) => {
  try {
    if (!accessToken) {
      console.log("access token is not available");
      throw new Error(`access token 없음`);
    }
    console.log("fetchAddMyList 호출됨", userId, directoryTitle);
    const response = await fetch(`http://localhost:8081/directory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ userId, directoryTitle }),
    });
    if (!response.ok) {
      throw new Error("마이리스트 추가 실패");
    }
    return response.json();
  } catch (error) {
    console.error("fetchAddMyList 서버 요청에 실패했습니다: ", error);

    throw error;
  }
};

// 마이리스트 삭제
export const fetchDeleteMyList = async (userId, directoryId) => {
  try {
    console.log(accessToken);
    if (!accessToken) {
      console.log("access token is not available");
      throw new Error(`access token 없음`);
    }
    console.log("fetchDeleteMyList 호출됨", userId, directoryId);
    // /userId=${encodeURIComponent(userId)}&directoryId=${encodeURIComponent(directoryId)
    const response = await fetch(`http://localhost:8081/directory}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ userId, directoryId }),
    });
    if (!response.ok) {
      throw new Error("마이리스트 삭제 실패");
    }
    return response.json();
  } catch (error) {
    console.error("fetchDeleteMyList 서버 요청에 실패했습니다: ", error);

    throw error;
  }
};

// 마이리스트 문제 추가
export const fetchAddMyListProblem = async (userId, directoryId, problemId) => {
  try {
    if (!accessToken) {
      console.log("access token is not available");
      throw new Error(`access token 없음`);
    }
    console.log("fetchAddMyListProblem 호출됨", userId, directoryId, problemId);
    const response = await fetch(`http://localhost:8081/directory/problem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ userId, directoryId, problemId }),
    });
    if (!response.ok) {
      throw new Error("마이리스트 문제 추가 실패");
    }
    return response.json();
  } catch (error) {
    console.error("fetchAddMyListProblem 서버 요청에 실패했습니다: ", error);

    throw error;
  }
};

// 마이리스트 문제 삭제
export const fetchDeleteMyListProblem = async (
  userId,
  directoryId,
  problemId,
  directoryProblemId,
) => {
  try {
    if (!accessToken) {
      console.log("access token is not available");
      throw new Error(`access token 없음`);
    }
    console.log(
      "fetchDeleteMyListProblem 호출됨",
      userId,
      directoryId,
      problemId,
      directoryProblemId,
    );
    const response = await fetch(`http://localhost:8081/directory/problem`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
  } catch (error) {
    console.error("fetchDeleteMyListProblem 서버 요청에 실패했습니다: ", error);

    throw error;
  }
};
