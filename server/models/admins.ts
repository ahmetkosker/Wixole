import { Schema, model } from "mongoose";

export interface IAdmin {
  name: string;
  surName: string;
  email: string;
  password: string;
  image?: string;
  phoneNumber?: number;
  createdAt: Date;
}

const AdminSchema = new Schema<IAdmin>({
  name: { type: String, required: true },
  surName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  phoneNumber: { type: Number },
  createdAt: { type: Date, default: new Date(), required: true },
});

const Admin = model<IAdmin>("Admin", AdminSchema);

export default Admin;
