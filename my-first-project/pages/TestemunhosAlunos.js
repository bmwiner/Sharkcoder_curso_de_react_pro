import React, { useEffect, useState } from "react";

function TestemunhosAlunos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchTestemunhosAlunos() {
      fetch("/api/TestemunhosAlunos")
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    fetchTestemunhosAlunos();
  }, []);

  return (
    data.map((TestemunhosAlunos) => (
      // eslint-disable-next-line react/jsx-key
      <p>Testemunhos: {TestemunhosAlunos.title} </p>
  ))
  )
}

export default TestemunhosAlunos;
