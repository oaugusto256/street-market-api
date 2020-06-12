/**
 * Required External Modules and Interfaces
 */
import express from "express";
import * as authController from "../controllers/auth";
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
 * Request password change to an account
 * POST reset-password/
 */
// authRouter.post("/reset-password");

/**
 * Set a new password to an account
 * POST new-password/
 */
// authRouter.post("/new-password");
