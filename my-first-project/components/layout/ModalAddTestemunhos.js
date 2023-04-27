import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";

function ModalAddTestemunhos({ open, handleClose, handleSubmit }) {
  console.log(open);
  return (
    <Modal
      sx={{
        backgroundColor: "background.paper",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
      open={open}
      onClose={handleClose}
    >
      {" "}
      <Box>
        {" "}
        <Typography variant="h5" component="h2" mb={2}>
          {" "}
          Adicionar Aluno{" "}
        </Typography>{" "}
        <form onSubmit={handleSubmit}>
          {" "}
          <TextField
            id="nome"
            name="nome"
            label="Nome"
            fullWidth
            required
          />{" "}
          <TextField id="about" name="about" label="Curso" fullWidth required />{" "}
          <TextField
            id="description"
            name="description"
            label="Testemunho"
            fullWidth
            multiline
            rows={4}
            required
          />{" "}
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            {" "}
            Adicionar{" "}
          </Button>{" "}
        </form>{" "}
      </Box>{" "}
    </Modal>
  );
}
export default ModalAddTestemunhos;
