"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const cors_1 = __importDefault(require("cors"));
const debug_1 = __importDefault(require("debug"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = 3000;
const routes = [];
const debugLog = (0, debug_1.default)('app');
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, body_parser_1.urlencoded)());
app.use((0, body_parser_1.json)());
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
mongoose_1.default.set('strictQuery', false);
const runningMessage = `Server running ats http://localhost:${port}`;
app.get('/', (req, res) => {
    res.send("Hello World");
});
const server = http.createServer(app);
server.listen(port, () => {
    if (process.env.MONGO_DB_URL) {
        mongoose_1.default.connect(process.env.MONGO_DB_URL).then(mongoConnection => {
            console.log("Succesfully connected to the data base", routes);
        });
    }
    console.log(runningMessage);
    routes.forEach((route) => {
    });
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
});
