class Paciente {
  constructor(cpf, nome, telefone, dataNasc, sexo, cidade, uf, bairro, rua, endereco, fkConvenio, cardiaco, diabetico, alergico, ID) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
    this.dataNasc = dataNasc;
    this.sexo = sexo;
    this.cidade = cidade;
    this.uf = uf;
    this.bairro = bairro;
    this.rua = rua;
    this.endereco = endereco;
    this.fkConvenio = fkConvenio;
    this.cardiaco = cardiaco;
    this.diabetico = diabetico;
    this.alergico = alergico;
    this.ID = ID;
  }
}

module.exports = Paciente;
