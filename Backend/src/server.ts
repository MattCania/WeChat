import "dotenv/config";
import express from "express";

import { databaseSyncronize } from "../database/models/index.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Error Handler
// app.use((err: any, req: any, res: any, next: any) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });

// Database Syncronizer and Connection Test
(async () => {
	await databaseSyncronize();
})();

app.listen(process.env.PORT, () =>
  console.log("Successful Port Connection", process.env.PORT)
);
