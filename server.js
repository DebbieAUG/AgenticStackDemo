import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// WE'LL ADD SOME CODE HERE

app.listen(5000, () => console.log("API running on localhost:5000"));