import React, { useContext, useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { AlunosContext } from "../components/layout/context/AlunosContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Index() {
  const [alunos, setAlunos] = useState([]);
  const alunos2 = useContext(AlunosContext);

  //JSON representation [{nome: 'joão', email: 'dycj@exemple.com'},
  //                      {nome: 'maria', email: 'dycj@exemple.com'}]

  // useEfect (() => {funcao, [controle]})
  // function nomedafuncao(){corpo da funcao}

  useEffect(() => {
    console.log(alunos2);
    setAlunos(alunos2);
  }, [alunos2]);

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <h2>Alunos Matriculados</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {alunos?.map((aluno, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Item>
              <p>Aluno: {aluno.nome} </p>
              <p>Curso: {aluno.about}</p>
              <p>Testemunho: {aluno.description}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Index;
