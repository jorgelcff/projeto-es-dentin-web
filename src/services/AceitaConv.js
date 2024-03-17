const { GenericService } = require("./GenericService");
const { AceitaConv } = require("../models/AceitaConv");

class AceitaConvService extends GenericService {
  async getAceitaConvs() {
    return this.get("aceita");
  }

  async getAceitaConv(id) {
    return this.get(`aceita/${id}`);
  }

  async postAceitaConv(body) {
    return this.post("aceita", body);
  }

  async putAceitaConv(id, aceitaConv) {
    return this.put(`aceita/${id}`, aceitaConv);
  }

  async deleteAceitaConv(id) {
    return this.delete(`aceita/${id}`);
  }

  async getConveniosByDentista(dentistaId) {
    return this.get(`aceita/convenio/${dentistaId}`);
  }

  async getDentistasByConvenio(convenioId) {
    return this.get(`aceita/dentistas/${convenioId}`);
  }
}

module.exports = AceitaConvService;
