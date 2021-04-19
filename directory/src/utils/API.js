import axios from "axios";

export default {
  userDirectory: function () {
    return axios.get("https://randomuser.me/api/?results=1");
  }
};
