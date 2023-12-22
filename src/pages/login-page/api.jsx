import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8081",
});
export default instance;

// auth 역할
export const requestUserInfo = () => {
  // 로그인 완료 후 유저 정보 get요청
  return instance.get(`/user/info`);
};

export const requestToken = accessToken => {
  // 토큰 재요청
  return instance.post(`/user/reissue`, accessToken);
};
export const requestCheckLoginUser = async userId => {
  // 로그인한 유저 정보 검증
  const result = await instance.get(`/user/check/login/${userId}`);
  return result;
};

export const requestLogout = async () => {
  // 로그아웃 요청
  localStorage.clear();
  const result = await instance.get(`/user/logout`);
  return result;
};
// auth 역할

instance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem("accessToken");
    const newConfig = { ...config };
    newConfig.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
    return newConfig;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const accessToken = localStorage.getItem("accessToken");
    if (error.response.status === 401 || error.response.status === 403) {
      try {
        const response = await requestToken(accessToken);
        const newAccessToken = response.data.accessToken;
        const { config } = error;
        config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(config);
      } catch (e) {
        console.error(e);
        requestLogout();
        window.location.reload();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
