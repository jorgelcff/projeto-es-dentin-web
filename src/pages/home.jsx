import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const HomePageDentistas = () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Home</li>
    </ol>
    <div className="jumbotron">
      <h1 className="display-3">Bem-vindo, Dentista!</h1>
      <p className="lead">
        Esta é a página inicial da plataforma DenTIn para dentistas.
      </p>
      <hr className="my-2" />
      <p>
        A plataforma oferece acompanhamento de consultas, pacientes e horários,
        além de fornecer relatórios mensais detalhados sobre os pacientes
        atendidos.
      </p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header" style={{ color: "white" }}>
            Acompanhamento de Consultas
          </div>
          <div className="card-body">
            <h4 className="card-title" style={{ color: "white" }}>
              Consultas Agendadas
            </h4>
            <p className="card-text" style={{ color: "white" }}>
              Visualize e gerencie todas as consultas agendadas com seus
              pacientes.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header" style={{ color: "white" }}>
            Acompanhamento de Pacientes
          </div>
          <div className="card-body">
            <h4 className="card-title" style={{ color: "white" }}>
              Histórico de Pacientes
            </h4>
            <p className="card-text" style={{ color: "white" }}>
              Acesse o histórico completo de todos os seus pacientes e suas
              consultas anteriores.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-3">
          <div className="card-header" style={{ color: "white" }}>
            Relatórios Mensais
          </div>
          <div className="card-body">
            <h4 className="card-title" style={{ color: "white" }}>
              Relatórios Detalhados
            </h4>
            <p className="card-text" style={{ color: "white" }}>
              Receba relatórios mensais detalhados sobre o desempenho e a saúde
              bucal de seus pacientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default HomePageDentistas;
