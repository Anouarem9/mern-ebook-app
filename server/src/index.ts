import "dotenv/config"; 



const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 9999;

import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static("public"));



app.set("view engine", "ejs"); 

app.use("*", (req: Request, res: Response)=>res.status(404).send("404 page not found!"));
 
app.listen(PORT, async() => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
