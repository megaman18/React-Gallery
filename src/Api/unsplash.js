import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID MZqz0SifF2CNygGKY8KUYPXUK8FV6z8KVZ3UnEn7T7g"
  }
});
