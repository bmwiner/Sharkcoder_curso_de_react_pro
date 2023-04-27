import React, { createContext, useEffect, useState } from "react";

const AlunosContext = createContext();
const AlunosDispatchContext = createContext();

function AlunosProvider({ children }) {
  const [alunos, setAlunos] = useState();

  useEffect(() => {
    function fetchTestemunhosAlunos(){
      fetch("/api/TestemunhosAlunos")
      .then((response) => response.json())
      .then((data) => setAlunos(data));
    }
    fetchTestemunhosAlunos();
  }, []);

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
