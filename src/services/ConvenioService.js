import { GenericService } from "./GenericService";

export class ConvenioService extends GenericService {
  async getConvenios() {
    return this.get("convenios");
  }

  async getConvenio(id) {
    return this.get(`convenios/${id}`);
  }

  async postConvenio(body) {
    return this.post("convenios", body);
  }

  async putConvenio(id, Convenio) {
    return this.put(`convenios/${id}`, Convenio);
  }

  async deleteConvenio(id) {
    return this.delete(`convenios/${id}`);
  }
}
