import { Router } from "express";

export default () =>{
  let api = Router();

  api.get('/',(req, res)=>{
   return res.status(200).json({
      Output: `Our First API - GET`,
    });
  })

  api.post('/greeting',(req, res)=>{
    console.log(req.body);
    var name = req.body.name;
    return res.status(200).json({
        Output: `Hi ${name}`,
      });
  })

  return api;
};