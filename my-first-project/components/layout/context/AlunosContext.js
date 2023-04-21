import React, { createContext, useContext, useState } from "react";
const AlunosContext = createContext();
const AlunosDispatchContext = createContext();
function AlunosProvider({ children }) {
  const [alunos, setAlunos] = useState([
    { nome: "joao", email: "teste@gmail.com", phone: "938383838" },
    { nome: "marta", email: "teste@gmail.com", phone: "938383838" },
    { nome: "tó", email: "teste@gmail.com", phone: "938383838" },
    { nome: "joana", email: "teste@gmail.com", phone: "938383838" },
    { nome: "antónio", email: "teste@gmail.com", phone: "938383838" },
    { nome: "josé", email: "teste@gmail.com", phone: "938383838" },
    { nome: "carla", email: "teste@gmail.com", phone: "938383838" },
  ]);
  return (
    <AlunosContext.Provider value={alunos}>
      {" "}
      <AlunosDispatchContext.Provider value={[setAlunos]}>
        {" "}
        {children}{" "}
      </AlunosDispatchContext.Provider>{" "}
    </AlunosContext.Provider>
  );
}
export { AlunosProvider, AlunosContext, AlunosDispatchContext };
