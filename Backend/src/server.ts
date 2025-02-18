import "dotenv/config";
import express from "express";
import compression from 'compression'
import helmet from 'helmet'
import hpp from 'hpp'
import { UserAccounts } from "../database/models/index.js";

import { databaseSyncronize } from "../database/models/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(hpp());
app.use(
  helmet({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? true : false,
  })
);

app.get("/", async (req, res) => {
  try {
    const results = await UserAccounts.findAll();
    if (results.length === 0) {
      res.send("Empty Table")
    }
    else res.json(results);
  } catch (error) {
    console.log(error)
  }

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
