import { Sala } from "../models/Sala";
import { GenericService } from "./GenericService";

export class SalaService extends GenericService {
  async getSalas() {
    return this.get("salas");
  }

  async getSala(id) {
    return this.get(`salas/${id}`);
  }

  async postSala(body) {
    return this.post("salas", body);
  }

  async putSala(id, Sala) {
    return this.put(`salas/${id}`, Sala);
  }

  async deleteSala(id) {
    return this.delete(`salas/${id}`);
  }
}
