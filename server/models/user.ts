import { Schema, model } from "mongoose";

export interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  image?: string;
  phoneNumber: number;
  createdAt: Date;
  updatedAt: Date;
  role: [String];
}

const UserSchema = new Schema<IUser>({
  name: { type: String, minlength: 3, required: true },
  surname: { type: String, minlength: 3, required: true },
  email: { type: String, minlength: 14, required: true },
  password: { type: String, minlength: 6, required: true },
  image: { type: String },
  phoneNumber: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() },
  role: { type: [String], required: true, default: ["user"] },
});

const User = model<IUser>("User", UserSchema);

export default User;
