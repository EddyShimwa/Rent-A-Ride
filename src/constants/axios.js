// import axios from "axios";

// const axiosInstance = axios.create({
//  baseURL: 'http://127.0.0.1:3000/',
//  headers: {
//   'Content-Type': 'application/json',
//   Authorization: 'Bearer ' + localStorage.getItem('token'),
//  },
// })

// // Post Request
// export const post = (url, data) => {
//  return axiosInstance.post(url, data);
// };

// // Get Request
// export const get = async (url) => {
//  return await axiosInstance.get(url);
// };

// // Put Request
// export const put = async (url, data) => {
//  try {
//   const response = await axiosInstance.put(url, data);
//   if (response.status === 200) {
//    return response.data;
//   }
//  } catch (error) {
//   return error.response;
//  }
// };

// // Delete Request
// export const remove = async (url) => {
//  try {
//   const response = await axiosInstance.delete(url);
//   if (response.status === 200) {
//    return response.data;
//   }
//  } catch (error) {
//   return error.response;
//  }
// };
