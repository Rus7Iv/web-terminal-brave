import axiosInstanse from 'axios'

export const axios = axiosInstanse.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
    // http://localhost:3000
  });