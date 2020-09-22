import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-2daea/us-central1/api", //The API (cloud function)url
});

export default instance;
