import "dotenv/config";
import express from "express";
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import hpp from 'hpp'
import { UserAccounts } from "../database/models/index.js";

import { databaseSyncronize } from "../database/models/index.js";

const app = express();
app.use(cors());
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

// Routes
import AccountRoute from '../routes/AccountRoutes.js'

app.use('/api', AccountRoute)

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});
// Database Syncronizer and Port Setup
(async () => {
	await databaseSyncronize();
  app.listen(process.env.PORT, () =>
    console.log("Successful Port Connection", process.env.PORT)
  );
})();