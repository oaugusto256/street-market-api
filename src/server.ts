/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
require("custom-env").env();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middlewares/error";
import { notFoundHandler } from "./middlewares/not-found";
import mongooseConnection from "./database/connection";
import { authRouter } from "./routes/auth.route";

// TODO: Extract out in Config file
const env = dotenv.config();
dotenvExpand(env);

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine
app.set("view engine", "ejs");
app.set("views", "views");

/**
 * Routes
 */
app.use(authRouter);
app.use("/items", itemsRouter);

/**
 * Error Handler
 */
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
const server = () =>
  app.listen(PORT, () => {
    console.log(
      `Running in ENV: '${process.env.APP_ENV}' and Listening on port ${PORT} 🌎🚀`
    );
    console.log("Press CTRL-C to stop\n");
  });

/**
 * Database Connection
 */
mongooseConnection.then(() => server()).catch((err) => console.log(err));

/**
 * Webpack HMR Activation
 */

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
