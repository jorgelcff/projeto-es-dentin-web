
import axios from 'axios';

class GenericService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    try {
      const response = await axios.get(`${this.baseUrl}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async post(endpoint, data) {
    try {
      const response = await axios.post(`${this.baseUrl}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async put(endpoint, data) {
    try {
      const response = await axios.put(`${this.baseUrl}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(endpoint) {
    try {
      const response = await axios.delete(`${this.baseUrl}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default GenericService;
