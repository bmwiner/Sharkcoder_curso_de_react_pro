import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Index() {
  const [alunos, setAlunos] = useState([]);

  //JSON representation [{nome: 'joão', email: 'dycj@exemple.com'},
  //                      {nome: 'maria', email: 'dycj@exemple.com'}]

  // useEfect (() => {funcao, [controle]})
  // function nomedafuncao(){corpo da funcao}

  useEffect(() => {
    async function buscarAlunos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      //metedos HTTP para retornar dados - CRUD
      //GET - recuperar dados
      //POST - criar dados
      //PUT - atualizar dados
      //DELETE - apagar dados

      //REST API
      //Microservice

      const data = await response.json();
      setAlunos(data);
    }
    buscarAlunos();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <h2>Alunos Matriculados</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {alunos.map((aluno, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Item>
              <p>Nome: {aluno.name} </p>
              <p>Email: {aluno.email}</p>
              <p>Phone: {aluno.phone}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Index;
