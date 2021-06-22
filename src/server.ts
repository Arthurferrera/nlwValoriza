import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

// Server running port
app.listen(3000, () => console.log("Server is running..."));
