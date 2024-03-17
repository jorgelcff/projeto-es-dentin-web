class Dentista {
  constructor(nome, cro, especialidadeNN, especialidade2, telefone, dataNasc, sexo, uf, cidade, bairro, rua, endereco, fkConvenio) {
    this.nome = nome;
    this.cro = cro;
    this.especialidadeNN = especialidadeNN;
    this.especialidade2 = especialidade2;
    this.telefone = telefone;
    this.dataNasc = dataNasc;
    this.sexo = sexo;
    this.uf = uf;
    this.cidade = cidade;
    this.bairro = bairro;
    this.rua = rua;
    this.endereco = endereco;
    this.fkConvenio = fkConvenio;
  }
}

module.exports = Dentista;
