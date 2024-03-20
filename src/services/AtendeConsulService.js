import { GenericService } from "./GenericService";

export class AtendeConsulService extends GenericService {
  async getAtendeConsuls() {
    return this.get("atende");
  }

  async getAtendeConsul(id) {
    return this.get(`atende/${id}`);
  }

  async postAtendeConsul(body) {
    return this.post("atende", body);
  }

  async putAtendeConsul(id, AtendeConsul) {
    return this.put(`atende/${id}`, AtendeConsul);
  }

  async deleteAtendeConsul(id) {
    return this.delete(`atende/${id}`);
  }

  async getDentistasByConsultorio(consultorio) {
    return this.get(`atende/dentistas/${consultorio}`);
  }

  async getConsultoriosByDentista(dentista) {
    return this.get(`atende/consultorios/${dentista}`);
  }
}
