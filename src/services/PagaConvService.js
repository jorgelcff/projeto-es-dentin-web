import { PagaConv } from "../models/PagaConv";
import { GenericService } from "./GenericService";

export class PagaConvService extends GenericService {
  async getPagaConvs() {
    return this.get("paga");
  }

  async getPagaConv(id) {
    return this.get(`paga/${id}`);
  }

  async postPagaConv(body) {
    return this.post("paga", body);
  }

  async putPagaConv(id, PagaConv) {
    return this.put(`paga/${id}`, PagaConv);
  }

  async deletePagaConv(id) {
    return this.delete(`paga/${id}`);
  }

  async getPacientesByConvenio(convenioId) {
    return this.get(`paga/nome/${convenioId}`);
  }
}
