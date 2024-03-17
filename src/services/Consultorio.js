class Consultorio {
  constructor(nome, uf, cidade, bairro, rua, endereco, logradouro, funcionamento, complemento, referencia) {
    this.nome = nome;
    this.uf = uf;
    this.cidade = cidade;
    this.bairro = bairro;
    this.rua = rua;
    this.endereco = endereco;
    this.logradouro = logradouro;
    this.funcionamento = funcionamento;
    this.complemento = complemento;
    this.referencia = referencia;
  }
}

module.exports = Consultorio;
