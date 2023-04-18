import React, { useEffect } from "react";
import { useState } from "react";

function TestemunhosAlunos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchTestemunhosAlunos() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    fetchTestemunhosAlunos();
  }, []);

  return data.map((TestemunhosAlunos, index) => {
    return (
      <>
        Aluno: {TestemunhosAlunos.userId}
        <br />
        Aluno: {TestemunhosAlunos.title}
        <br />
        Aluno: {TestemunhosAlunos.body}
        <br />
      </>
    );
  });
}

export default TestemunhosAlunos;
