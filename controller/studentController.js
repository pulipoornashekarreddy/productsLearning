import { Router } from "express";

export default ({db}) =>{
  let api = Router();

  api.post('/addStudent', (req,res)=> {
    const { studentId, name, status } = req.body;
    

  });

  return api;
}