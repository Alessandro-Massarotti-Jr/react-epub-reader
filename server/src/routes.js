import express from "express";

import fs from "fs"

import path from "path"

export const routes = express.Router();


routes.get("/", async (req, res) => {
  return res.status(201).json({ ola_mundo: true });
})

routes.post("/sendFile", async(req,res)=>{
  console.log(req.files.file);

  const file = req.files.file;

   fs.writeFile("./src/uploads/teste.epub",file.data,function(err){
   console.log(err);
  })

     
   console.log(file);
;
  return res.status(200).json({success:true, files:req.files,file_url:`${process.cwd()}/src/uploads/teste.epub`})
     
})