import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://localhost:8081/api/v1'
// });

const api = axios.create({
    baseURL: 'http://localhost:8081/api/v1',
  });
  
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      
      console.log("Getting token from the local storage ====================== ");
      console.log(token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log("config printing ======================= ")
      console.log(config)
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
export default api;