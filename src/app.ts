import "dotenv/config";
import express, { json, Request, Response } from "express";
import router from "./router/router";
import cors from "cors";
const PORT = process.env.PORT || 3200;
const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`);
});