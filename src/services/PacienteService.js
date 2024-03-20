import { GenericService } from "./GenericService";

export class PacienteService extends GenericService {
  async getPacientes() {
    return this.get("pacientes");
  }

  async getPaciente(id) {
    return this.get(`pacientes/${id}`);
  }

  async postPaciente(body) {
    return this.post("pacientes", body);
  }

  async putPaciente(id, paciente) {
    return this.put(`pacientes/${id}`, paciente);
  }

  async deletePaciente(id) {
    return this.delete(`pacientes/${id}`);
  }

  async getPacientesByNome(nome) {
    return this.get(`pacientes/nome/${nome}`);
  }
}
