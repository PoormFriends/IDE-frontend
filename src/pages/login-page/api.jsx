import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8081",
});

instance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem("accessToken"); // 로컬 스토리지에서 가져오기
    const headers = { ...config.headers };
    headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
const requestToken = accessToken => {
  return instance.post("/user/reissue", accessToken);
};

instance.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const accessToken = localStorage.getItem("accessToken");
    // HTTP 응답 에러발생 => accessToekn 만료
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      try {
        const response = await requestToken(accessToken);
        // 새로운 access token 받아옴
        const newAccessToken = response.data.accessToken;
        const { config } = error;
        config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(config);
      } catch (e) {
        console.error(error);
        window.location.reload();
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
