import axios from "axios";

class LoginService {

    static async login(username, password) {
      try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
          username,
          password
        });

        const token = response.data.token;

        const user = response.data;

        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("token", token); 

        return response;
      } catch (error) {
        console.error(error);
      }
    }

    static logout() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
    }

    static isLoggedIn() {
      return sessionStorage.getItem("token") !== null;
    }
  }

  export default LoginService;
