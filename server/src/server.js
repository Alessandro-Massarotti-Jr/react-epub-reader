import express from "express";
import { routes } from "./routes.js"
import cors from "cors";
import http from "http";
import 'dotenv/config';

import uploader from "express-fileupload";


const app = express();

app.use(cors());
app.use(express.json());
app.use(uploader());

const server = http.createServer(app);

app.use(routes);

server.listen( process.env.PORT, () => { 
    console.log("HTTP Server runing in port: "+process.env.PORT) 
});
