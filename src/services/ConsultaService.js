import GenericService from "./GenericService";

class ConsultaService extends GenericService {
  constructor() {
    super();
    this.uri += 'consulta';
  }

  async getAll() {
    return await super.get(this.uri, '');
  }

  async getById(id) {
    return await super.get(this.uri, {id: id});
  }

  async create(data) {
    return await super.post('', data);
  }

  async update(id, data) {
    return await super.put(`/${id}`, data);
  }

  async delete(id) {
    return await super.delete(this.uri, {id: id});
  }
}