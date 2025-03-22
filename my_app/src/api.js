import axios from "axios";

const API_URL = "http://20.244.56.144/test";  // Replace with actual API URL

export const fetchTopUsers = async () => {
  const response = await axios.get(`${API_URL}/top-users`);
  return response.data;
};

export const fetchTrendingPosts = async () => {
  const response = await axios.get(`${API_URL}/trending-posts`);
  return response.data;
};

export const fetchFeed = async () => {
  const response = await axios.get(`${API_URL}/feed`);
  return response.data;
};
