import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

/**
 * Apps config and initialization
 */
const poolconfig = {
  host: process.env.HOST,
  user: process.env.USERID,
  password: process.env.PASSWORD,
  libraries: process.env.LIBRARY,
};

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 5000;
const pool = require("node-jt400").pool(poolconfig);

/**
 * Routes import
 */

/**
 * Express configuration
 */

/**
 * Database connection
 */

/**
 * API routes
 */

app.get("/api/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/api/sqltest1", async (req: Request, res: Response) => {
  const ifs = pool.ifs();

  try {
    const result = await pool.query("SELECT * FROM INI1050D", []);
    console.log(result);
    res.status(200).send(result);
  } catch (error: any) {
    console.log(error);
    res
      .status(404)
      .send(`category: ${error.category}, message: ${error.message} `);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
