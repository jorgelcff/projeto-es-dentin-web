import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class HttpHandle {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://dentin.fly.dev",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setInterceptor();
  }

  static getInstance() {
    if (!HttpHandle.instance) {
      HttpHandle.instance = new HttpHandle();
    }

    return HttpHandle.instance;
  }

  getAxios() {
    return this.axios;
  }

  /**
   * Configura interceptors
   */
  setInterceptor() {
    this.axios.interceptors.request.use(
      async (config) => {
        const item = await AsyncStorage.getItem("userData");
        const authToken = `Bearer ${item}`;

        if (item) {
          config.headers = {
            ...config.headers,
            Authorization: authToken,
          };
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    this.axios.interceptors.response.use(
      (response) => {
        if (response.config.url?.includes("login")) {
          return Promise.resolve({
            token: response.headers.authorization,
          });
        }

        return response;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }
}
