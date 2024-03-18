import { Relatorio } from "../models/Relatorio";
import { GenericService } from "./GenericService";

export class RelatorioService extends GenericService {
  async getRelatorios() {
    return this.get("relatorios");
  }

  async getRelatorio(id) {
    return this.get(`relatorios/${id}`);
  }

  async postRelatorio(body) {
    return this.post("relatorios", body);
  }

  async putRelatorio(id, Relatorio) {
    return this.put(`relatorios/${id}`, Relatorio);
  }

  async deleteRelatorio(id) {
    return this.delete(`relatorios/${id}`);
  }

  async getRelatoriosByDenTin(dentinId) {
    return this.get(`relatorios/dentin/${dentinId}`);
  }

  async deleteRelatoriosByDenTin(dentinId) {
    return this.delete(`relatorios/dentin/${dentinId}`);
  }
}
