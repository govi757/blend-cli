"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    userName: { type: String, },
    emailId: { type: String, },
    password: { type: String, },
    mobile: { type: String, },
    firstName: { type: String, },
    lastName: { type: String, },
});
const User = Database_1.default.UserDb.model('User', UserSchema);
exports.default = User;
