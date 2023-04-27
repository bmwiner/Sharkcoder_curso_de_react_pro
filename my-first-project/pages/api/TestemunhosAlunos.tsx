import { NextApiRequest, NextApiResponse } from "next";
import testemunhos from "../../data/testemunhos"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(testemunhos);
  }

  
  if (req.method === "POST") {
    const {aluno, title, description} = req.body;
    console.log(aluno,title, description);
    return res.status(201).json({ message: "aluno matriculado com sucesso" });
  }
}
