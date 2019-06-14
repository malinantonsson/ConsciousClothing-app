import axios from "axios";

const createItem = item => {
  return axios.post("http://localhost:3000/items", item);
};

const getItems = () => axios.get("http://localhost:3000/items");

export { createItem, getItems };
