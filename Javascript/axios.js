axios.defaults.baseURL = "http://localhost:8000";
axios.interceptors.request.use((config) => {
  const jwtToken = localStorage.getItem("token");
  if (jwtToken) {
    config.headers["Authorization"] = `Bearer ${jwtToken}`;
  }
  return config;
});
