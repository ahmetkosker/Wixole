"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AdminSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    surName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    phoneNumber: { type: Number },
    createdAt: { type: Date, default: new Date(), required: true },
});
const Admin = (0, mongoose_1.model)("Admin", AdminSchema);
exports.default = Admin;
