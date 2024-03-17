import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ConsultaCard = ({ paciente, data, horario }) => {
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
          <Button type="submit" style={{ fontWeight: 'bold', backgroundColor: '#1DBEAB', color: 'white', border: '1px solid #1DBEAB' }} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Ver relatório do paciente
          </Button>
        </CardContent>
      </Card>
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
    <Typography variant="subtitle1" align="center" marginBottom={"30px"}gutterBottom>
      Saiba quem são seus próximos pacientes
    </Typography>
    <Grid container spacing={4}>
      <ConsultaCard paciente="João Silva" data="10/03/2024" horario="09:00" />
      <ConsultaCard paciente="Maria Oliveira" data="15/03/2024" horario="11:30" />
      <ConsultaCard paciente="Pedro Santos" data="20/03/2024" horario="15:45" />
      <ConsultaCard paciente="Ana Costa" data="22/03/2024" horario="14:00" />
      <ConsultaCard paciente="Carlos Oliveira" data="25/03/2024" horario="10:30" />
      <ConsultaCard paciente="Fernanda Souza" data="28/03/2024" horario="17:15" />
      <ConsultaCard paciente="Ricardo Almeida" data="30/03/2024" horario="08:45" />
    </Grid>
  </Fragment>
);

export default ConsultasPage;
