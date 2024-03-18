import { Dentista } from "../models/Dentista";
import { GenericService } from "./GenericService";

export class DentistaService extends GenericService {
  async getDentistas() {
    return this.get("dentistas");
  }

  async getDentista(id) {
    return this.get(`dentistas/${id}`);
  }

  async postDentista(body) {
    return this.post("dentistas", body);
  }

  async putDentista(id, dentista) {
    return this.put(`dentistas/${id}`, dentista);
  }

  async deleteDentista(id) {
    return this.delete(`dentistas/${id}`);
  }

  async getDentistasByCidade(cidade) {
    return this.get(`dentistas/cidade/${cidade}`);
  }

  async getDentistasByNome(nome) {
    return this.get(`dentistas/nome/${nome}`);
  }

  async getDentistasByEspecialidade(especialidade) {
    return this.get(`dentistas/especialidade/${especialidade}`);
  }
}
