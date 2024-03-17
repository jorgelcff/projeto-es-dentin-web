class Relatorio {
  constructor(fkDentin, historico, dores, alimentacao, higiene, cuidadoAparelho, acidente, dataEmissao, dataReferencia) {
    this.fkDentin = fkDentin;
    this.historico = historico;
    this.dores = dores;
    this.alimentacao = alimentacao;
    this.higiene = higiene;
    this.cuidadoAparelho = cuidadoAparelho;
    this.acidente = acidente;
    this.dataEmissao = dataEmissao;
    this.dataReferencia = dataReferencia;
  }
}

module.exports = Relatorio;
