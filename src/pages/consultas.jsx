import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { DentistaService } from "../services/DentistaService";

const ConsultaCard = ({
  paciente,
  data,
  horario,
  tipoConsulta,
  relatorio,
  dores,
  alimentacao,
  higiene,
  cuidadoAparelho,
  acidente,
  dataEmissao,
  dataReferencia,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} sm={6} md={3} style={{ marginBottom: "20px" }}>
      <Card
        variant="outlined"
        sx={{
          height: "100%",
          backgroundColor: "white",
          color: "#434a4a",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              marginBottom: 1,
              borderBottom: "1px solid #1DBEAB",
              paddingBottom: "5px",
              fontSize: "25px",
            }}
          >
            {paciente.nome}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "medium", color: "#434a4a", fontSize: 18 }}
            >
              {tipoConsulta}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "medium", color: "#434a4a", fontSize: 16 }}
            >
              Data: {data}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "medium", color: "#434a4a", fontSize: 16 }}
            >
              Horário: {horario}
            </Typography>
          </Box>
          <Button
            onClick={handleOpen}
            style={{
              fontWeight: "bold",
              backgroundColor: "#1DBEAB",
              color: "white",
              border: "1px solid #1DBEAB",
            }}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ver relatório do paciente
          </Button>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "white",
              border: "2px solid #1DBEAB",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center", fontWeight: "bold", color: "#1DBEAB" }}
            >
              Relatório do Paciente
            </Typography>

            <Typography id="modal-mal-description" sx={{ mt: 2 }}>
              <p>
                <strong>Paciente:</strong>{" "}
                {paciente.nome ? paciente.nome : "Não Informado"}
              </p>
              <p>
                <strong>Telefone:</strong>{" "}
                {paciente.telefone ? paciente.telefone : "Não Informado"}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {paciente.email ? paciente.email : "Não Informado"}
              </p>
              <p>
                <strong>Dores:</strong>{" "}
                {relatorio.dores ? relatorio.dores : "Não Informado"}
              </p>
              <p>
                <strong>Alimentação:</strong>{" "}
                {relatorio.alimentacao
                  ? relatorio.alimentacao
                  : "Não Informado"}
              </p>
              <p>
                <strong>Higiene:</strong>{" "}
                <p>
                  Escovação:{" "}
                  {relatorio.higiene.escova
                    ? relatorio.higiene.escova
                    : "Não Informado"}
                  {" / "}
                  Fio-Dental:
                  {relatorio.higiene.fioDental
                    ? relatorio.higiene.fioDental
                    : "Não Informado"}
                </p>
              </p>
              <p>
                <strong>Cuidado com o Aparelho:</strong>{" "}
                {relatorio.cuidadoAparelho
                  ? relatorio.cuidadoAparelho
                  : "Não Informado"}
              </p>
              <p>
                <strong>Acidente:</strong>{" "}
                {relatorio.acidente ? relatorio.acidente : "Não Informado"}
              </p>
              <p>
                <strong>Data de Emissão:</strong>{" "}
                {relatorio.dataEmissao
                  ? new Date(relatorio.dataEmissao).toLocaleDateString("pt-BR")
                  : "Não Informado"}
              </p>
              <p>
                <strong>Data de Referência:</strong>{" "}
                {relatorio.dataReferencia
                  ? new Date(relatorio.dataReferencia).toLocaleDateString(
                      "pt-BR"
                    )
                  : "Não Informado"}
              </p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
};

const ConsultasPage = () => {
  const [consultas, setConsultas] = useState([]);
  const usuario = localStorage.getItem("usuario")
    ? JSON.parse(localStorage.getItem("usuario"))
    : "";

  const dentistaService = new DentistaService();

  const fetchConsultas = async () => {
    try {
      const response = await dentistaService.getConsultasByDentistasId(
        usuario.pkDentista
      );

      setConsultas(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConsultas();
  }, []);

  return (
    <Fragment>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/consultas">Consultas</NavLink>
        </li>
      </ol>
      <Typography
        variant="h2"
        sx={{
          fontSize: 36,
        }}
      >
        Consultas Agendadas
      </Typography>
      <Typography
        variant="subtitle1"
        marginBottom={"30px"}
        sx={{
          color: "#777",
        }}
        gutterBottom
      >
        Saiba quem são seus próximos pacientes
      </Typography>
      <Grid container spacing={4} flexWrap={"wrap"}>
        {consultas &&
          consultas.map((consulta) => {
            console.log("consulta", consulta);

            return (
              <ConsultaCard
                key={consulta.pkConsulta} // Add a unique key prop
                paciente={consulta.paciente}
                data={new Date(consulta.dataConsulta).toLocaleDateString(
                  "pt-BR"
                )}
                horario={consulta.horaConsulta}
                tipoConsulta={consulta.tipo}
                relatorio={consulta.relatorio}
                dores="Descrição das dores"
                alimentacao="Descrição da alimentação"
                higiene="Descrição da higiene"
                cuidadoAparelho="Descrição do cuidado com o aparelho"
                acidente="Descrição do acidente"
                dataEmissao="Data de emissão"
                dataReferencia="Data de referência"
              />
            );
          })}
      </Grid>
    </Fragment>
  );
};
export default ConsultasPage;
