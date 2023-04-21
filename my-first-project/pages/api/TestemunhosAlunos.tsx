import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json([
      {
        aluno: "Joao",
        title: "Sobre o curso de Python",
        description: "This is a test",
      },
      {
        aluno: "Carlos",
        title: "Sobre o curso de React",
        description: "This is good course",
      },
      {
        aluno: "Andre",
        title: "Sobre o curso de JavaScripts",
        description: "This is good course",
      },
    ]);
  }
  if (req.method === "POST") {
    const {aluno, title, description} = req.body;
    console.log(aluno,title, description);
    return res.status(201).json({ message: "aluno matriculado com sucesso" });
  }
}
