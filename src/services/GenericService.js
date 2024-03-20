
import axios from 'axios';

export class GenericService {
  constructor() {
    this.baseUrl = 'http://localhost:5500';
  }

  async get(endpoint, params) {
    try {
      const response = await axios.get(`${this.baseUrl}/${endpoint}`, params);
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

  async delete(endpoint, id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/${endpoint}`, id);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default GenericService;
