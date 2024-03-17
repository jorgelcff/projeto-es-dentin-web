class Receita {
  constructor(orientacoes, medicamento, uso, fkConsulta, fkCRO) {
    this.orientacoes = orientacoes;
    this.medicamento = medicamento;
    this.uso = uso;
    this.fkConsulta = fkConsulta;
    this.fkCRO = fkCRO;
  }
}

module.exports = Receita;
