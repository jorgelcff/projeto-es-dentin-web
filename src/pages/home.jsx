import React, { Fragment } from "react";

const HomePageDentistas = () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
    </ol>
    <div className="jumbotron">
      <h1 className="display-3">Bem-vindo, Dentista!</h1>
      <p className="lead">
        Esta é a página inicial da plataforma DenTIn para dentistas.
      </p>
      <hr className="my-4" />
      <p>
        A plataforma oferece acompanhamento de consultas, pacientes e horários,
        além de fornecer relatórios mensais detalhados sobre os pacientes atendidos.
      </p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header">Acompanhamento de Consultas</div>
          <div className="card-body">
            <h4 className="card-title">Consultas Agendadas</h4>
            <p className="card-text">
              Visualize e gerencie todas as consultas agendadas com seus pacientes.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header">Acompanhamento de Pacientes</div>
          <div className="card-body">
            <h4 className="card-title">Histórico de Pacientes</h4>
            <p className="card-text">
              Acesse o histórico completo de todos os seus pacientes e suas consultas anteriores.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header">Relatórios Mensais</div>
          <div className="card-body">
            <h4 className="card-title">Relatórios Detalhados</h4>
            <p className="card-text">
              Receba relatórios mensais detalhados sobre o desempenho e a saúde bucal de seus pacientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default HomePageDentistas;
