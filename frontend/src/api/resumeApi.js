import axios from "axios";

const API_URL = "http://localhost:5000/api/resume";
const AI_API_URL = "http://localhost:5000/api/ai";

export const getResume = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

export const saveResume = async (resumeData) => {
  const response = await axios.post(`${API_URL}/save`, resumeData);
  return response.data;
};

export const analyzeResume = async (userId) => {
  const response = await axios.get(
    `${AI_API_URL}/analyze/${userId}`
  );

  return response.data;
};