// 마이리스트 전체 조회
export const fetchMyLists = async userId => {
  try {
    console.log("fetchMyLists 호출됨", userId);
    const response = await fetch(
      `https://localhost:8080/directory?userId=${userId}`,
    );

    if (!response.ok) {
      throw new Error(`마이리스트 전체 조회 실패 ${userId}`);
    }
    return response.json();
  } catch (error) {
    console.error("서버 요청에 실패했습니다: ", error);

    // test: 서버 요청이 실패했을 때 모의 데이터 반환
    return [{ directoryId: "1", directoryName: "List 1", problemList: [] }];

    // 실제로는 test 부분 삭제하고 아래 코드 주석 해제
    // throw error;
  }
};

// 마이리스트 추가
export const fetchAddMyList = async (userId, directoryTitle) => {
  try {
    console.log("fetchAddMyList 호출됨", userId, directoryTitle);
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
  } catch (error) {
    console.error("fetchAddMyList 서버 요청에 실패했습니다: ", error);

    // test: 서버 요청 실패해도 성공 결과 반환
    return {
      success: true,
      message: "[test] 목록 추가 성공",
    };
    // 실제로는 test 부분 삭제하고 아래 코드 주석 해제
    // throw error;
  }
};

// 마이리스트 삭제
export const fetchDeleteMyList = async (userId, directoryId) => {
  try {
    console.log("fetchDeleteMyList 호출됨", userId, directoryId);
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
  } catch (error) {
    console.error("fetchDeleteMyList 서버 요청에 실패했습니다: ", error);

    // test: 서버 요청 실패해도 성공 결과 반환
    return {
      success: true,
      message: "[test] 목록 삭제 성공",
    };
    // 실제로는 test 부분 삭제하고 아래 코드 주석 해제
    // throw error;
  }
};

// 마이리스트 문제 추가
export const fetchAddMyListProblem = async (userId, directoryId, problemId) => {
  try {
    console.log("fetchAddMyListProblem 호출됨", userId, directoryId, problemId);
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
  } catch (error) {
    console.error("fetchAddMyListProblem 서버 요청에 실패했습니다: ", error);

    // test: 서버 요청 실패해도 성공 결과 반환
    return {
      success: true,
      message: "[test] 목록 삭제 성공",
    };
    // 실제로는 test 부분 삭제하고 아래 코드 주석 해제
    // throw error;
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
    console.log(
      "fetchDeleteMyListProblem 호출됨",
      userId,
      directoryId,
      problemId,
      directoryProblemId,
    );
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
  } catch (error) {
    console.error("fetchDeleteMyListProblem 서버 요청에 실패했습니다: ", error);

    // test: 서버 요청 실패해도 성공 결과 반환
    return {
      success: true,
      message: "[test] 목록 삭제 성공",
    };
    // 실제로는 test 부분 삭제하고 아래 코드 주석 해제
    // throw error;
  }
};
