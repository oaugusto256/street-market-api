/**
 * Required External Modules and Interfaces
 */
import express from "express";
import * as authController from "../controllers/auth.controller";

/**
 * Router Definition
 */
export const authRouter = express.Router();

/**
 * Controller Definitions
 */

/**
 * Create a new account
 * POST signup/
 */
authRouter.post("/signup", authController.postSignUp);

/**
 * Get the confirm account page
 * GET confirm-account/
 */
// authRouter.get("/confirm-account/:token");

/**
 * Post the token to confirm account and e-mail
 * POST confirm-account/
 */
// authRouter.post("/confirm-account");

/**
 * Login in an account
 * POST login/
 */
// authRouter.post("/login");

/**
 * Log out from an account
 * POST logout/
 */
// authRouter.post("/logout");

/**
 * Request password change
 * POST forgot-password/
 */
// authRouter.post("/forgot-password");

/**
 * Request page to change password
 * GET reset-password/
 */
// authRouter.get("/reset-password/:token");

/**
 * Request password change to an account passing new passwords
 * POST reset-password/
 */
// authRouter.post("/reset-password");
