import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

const ConsultaCard = ({ paciente, data, horario, dores, alimentacao, higiene, cuidadoAparelho, acidente, dataEmissao, dataReferencia }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} sm={6} md={3} style={{ marginBottom: '20px' }}>
      <Card variant="outlined" sx={{ height: '100%', backgroundColor: 'white', color: '#434a4a', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1, borderBottom: '1px solid #1DBEAB', paddingBottom: '5px', fontSize: "25px" }}>
            {paciente}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ fontWeight: 'medium', color: '#434a4a', fontSize: "20px" }}>
              Data: {data}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'medium', color: '#434a4a', fontSize: "20px" }}>
              Horário: {horario}
            </Typography>
          </Box>
          <Button onClick={handleOpen} style={{ fontWeight: 'bold', backgroundColor: '#1DBEAB', color: 'white', border: '1px solid #1DBEAB' }} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 600,
              bgcolor: 'white',
              border: '2px solid #1DBEAB',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-modal-title" variant="h6"component="h2"sx={{textAlign: 'center',fontWeight: 'bold',color: '#1DBEAB'}}>
              Relatório do Paciente
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <p><strong>Dores:</strong> {dores}</p>
              <p><strong>Alimentação:</strong> {alimentacao}</p>
              <p><strong>Higiene:</strong> {higiene}</p>
              <p><strong>Cuidado com o Aparelho:</strong> {cuidadoAparelho}</p>
              <p><strong>Acidente:</strong> {acidente}</p>
              <p><strong>Data de Emissão:</strong> {dataEmissao}</p>
              <p><strong>Data de Referência:</strong> {dataReferencia}</p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
};

const ConsultasPage = () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">Consultas</li>
    </ol>
    <Typography variant="h2" align="center" gutterBottom>
      Consultas Agendadas
    </Typography>
    <Typography variant="subtitle1" align="center" marginBottom={"30px"} gutterBottom>
      Saiba quem são seus próximos pacientes
    </Typography>
    <Grid container spacing={4}>
      <ConsultaCard paciente="João Silva" data="10/03/2024" horario="09:00" dores="Descrição das dores" alimentacao="Descrição da alimentação" higiene="Descrição da higiene" cuidadoAparelho="Descrição do cuidado com o aparelho" acidente="Descrição do acidente" dataEmissao="Data de emissão" dataReferencia="Data de referência" />
      <ConsultaCard paciente="João Silva" data="10/03/2024" horario="09:00" dores="Descrição das dores" alimentacao="Descrição da alimentação" higiene="Descrição da higiene" cuidadoAparelho="Descrição do cuidado com o aparelho" acidente="Descrição do acidente" dataEmissao="Data de emissão" dataReferencia="Data de referência" />
      <ConsultaCard paciente="João Silva" data="10/03/2024" horario="09:00" dores="Descrição das dores" alimentacao="Descrição da alimentação" higiene="Descrição da higiene" cuidadoAparelho="Descrição do cuidado com o aparelho" acidente="Descrição do acidente" dataEmissao="Data de emissão" dataReferencia="Data de referência" />
      <ConsultaCard paciente="João Silva" data="10/03/2024" horario="09:00" dores="Descrição das dores" alimentacao="Descrição da alimentação" higiene="Descrição da higiene" cuidadoAparelho="Descrição do cuidado com o aparelho" acidente="Descrição do acidente" dataEmissao="Data de emissão" dataReferencia="Data de referência" />
      <ConsultaCard paciente="João Silva" data="10/03/2024" horario="09:00" dores="Descrição das dores" alimentacao="Descrição da alimentação" higiene="Descrição da higiene" cuidadoAparelho="Descrição do cuidado com o aparelho" acidente="Descrição do acidente" dataEmissao="Data de emissão" dataReferencia="Data de referência" />

      {/* Adicione as informações de dores, alimentacao, higiene, cuidadoAparelho, acidente, dataEmissao e dataReferencia aqui */}
    </Grid>
  </Fragment>
);

export default ConsultasPage;
