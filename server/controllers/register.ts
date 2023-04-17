import { Request, Response } from "express";
import User, { IUser } from "../models/user";

const register = async (req: Request, res: Response) => {
  try {
    const user = await User.create(<IUser>{
      name: "Ahmet",
      surname: "Köşker",
      email: "exarons@gmail.com",
    });
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

export default register;
