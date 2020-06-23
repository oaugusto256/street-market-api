import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";

/**
 * Pattern to CRUD methods
 * index() => list some data
 * show() => get a specific data
 * update() => update a data
 * delete() => delete a data
 */

export const postSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    email,
    firstName,
    lastName,
    password,
    whatsapp,
    gender,
    address,
  } = req.body;
  // TODO: Sanitize the data before save
  // TODO: Encrypt password and compare password and confirmPassword
  // TODO: Create two new props to schema, 'createdAt' and 'updatedAt'
  // TODO: Sent e-mail to confirm e-mail and validate sign up
  const data = {
    email,
    firstName,
    lastName,
    password,
    whatsapp,
    gender,
    address,
    userType: "marketer",
    isActive: true,
  };
  const user = new User(data);
  user
    .save()
    .then((userResp) => {
      console.log(userResp);
      return res.json(userResp);
    })
    .catch((err) => next(err));
};
