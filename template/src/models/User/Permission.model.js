"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
const mongoose_1 = require("mongoose");
const PermissionSchema = new mongoose_1.Schema({
    name: { type: String, },
    description: { type: String, },
});
const Permission = Database_1.default.UserDb.model('Permission', PermissionSchema);
exports.default = Permission;
