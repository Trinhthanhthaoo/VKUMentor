axios.defaults.baseURL = "https://vku.danhle.dev";
axios.interceptors.request.use((config) => {
  const jwtToken = localStorage.getItem("token");
  if (jwtToken) {
    config.headers["Authorization"] = `Bearer ${jwtToken}`;
  }
  return config;
});
