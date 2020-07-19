import axios from "axios";

export const get = (url, config) =>
  axios.get(url, config).then((res) => res.data);

export const post = (url, payload, config) =>
  axios.post(url, payload, config).then((res) => res.data);
