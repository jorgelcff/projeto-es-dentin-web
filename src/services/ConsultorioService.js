import { Consultorio } from "../models/Consultorio";
import { GenericService } from "./GenericService";

export class ConsultorioService extends GenericService {
  async getConsultorios() {
    return this.get("consultorios");
  }

  async getConsultorio(id) {
    return this.get(`consultorios/${id}`);
  }

  async postConsultorio(body) {
    return this.post("consultorios", body);
  }

  async putConsultorio(id, Consultorio) {
    return this.put(`consultorios/${id}`, Consultorio);
  }

  async deleteConsultorio(id) {
    return this.delete(`consultorios/${id}`);
  }
}
