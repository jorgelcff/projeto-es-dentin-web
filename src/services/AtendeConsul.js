class AtendeConsul {
  constructor(fkDentista, fkConsultorio, expediente) {
    this.fkDentista = fkDentista;
    this.fkConsultorio = fkConsultorio;
    this.expediente = expediente;
  }
}

module.exports = AtendeConsul;
