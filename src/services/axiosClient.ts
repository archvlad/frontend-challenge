import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    "x-api-key":
      "live_ZVbWKgKxkERi7hTNgZopyAEarHvGZjv51xxKEvY05NhtHj04jaedMRxoJQdBl3QQ",
  },
});

export default axiosClient;
