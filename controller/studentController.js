import { Router } from "express";
import Student from "../models/student.js";

export default ({db}) =>{
  let api = Router();

  api.post('/addStudent', (req,res)=> {
    const { studentId, name, status } = req.body;
    const student = new Student({studentId, name, status});
    const response = student.save();
    return res.status(200).json(response);
  });

  return api;
}