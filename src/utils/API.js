import axios from "axios";

export default {
  search: function () {
    axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
