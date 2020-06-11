/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middlewares/error";
import { notFoundHandler } from "./middlewares/not-found";

// TODO: Extract out in Config file
dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

console.log(process.env.PORT)

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Routes
 */
app.use("/items", itemsRouter);

/**
 * Error Handler
 */
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
const server = app.listen(PORT, () => {
  console.log(`Listening and Firing on port ${PORT} 🌎🚀`);
});

/**
 * Database Connection
 */
// const server = app.listen(PORT, () => {
//   console.log(`Listening and Firing on port ${PORT} 🌎🚀`);
// });

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
