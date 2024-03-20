import axios from "axios";

class LoginService {
  constructor() {
    this.loggedIn = false;
    this.axios = axios.create({
      baseURL: "https://dentin.fly.dev/",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async login(username, password) {
    const body = {
      email: username,
      senha: password,
      plataforma: "web",
    };

    try {
      const response = await this.axios.post("usuarios/login", body);
      console.log("response", response);
      if (response.status === 200) {
        // Salvar token e informações do usuário localmente
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("usuario", JSON.stringify(response.data.usuario));
        this.loggedIn = true;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  }

  logout() {
    // Limpar token e informações do usuário localmente
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    this.loggedIn = false;
  }

  isLoggedIn() {
    // Verificar se o usuário está logado localmente
    return this.loggedIn;
  }
}

export default LoginService;
