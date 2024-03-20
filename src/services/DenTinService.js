import { GenericService } from "./GenericService";

export class DenTinService extends GenericService {
  async getDenTins() {
    return this.get("dentins");
  }

  async getDenTinByPacienteId(pacienteId) {
    return this.get(`dentins/paciente/${pacienteId}`);
  }

  async putDenTinByPacienteId(paciente, dentin) {
    return this.put(`dentins/paciente/${paciente}`, dentin);
  }
}
