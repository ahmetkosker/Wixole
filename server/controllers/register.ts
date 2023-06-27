import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import createToken from "../functions/createToken";

const register = async (req: Request, res: Response) => {
  console.log(
    createToken(
      "163",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvbmN0IjoiNDUxMjQwNDgzNjEiLCJpYXQiOjE1MTYyMzkwMjJ9.ydgg00D7UwrYsdXPbKrzLQHUrW4oPWtt1Chb6zQ5RCA"
    )
  );
};

export default register;
