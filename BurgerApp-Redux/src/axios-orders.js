import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burgerapp-fe506.firebaseio.com",
});

export default instance;
