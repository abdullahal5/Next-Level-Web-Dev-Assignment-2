"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), ".env")) });
const url = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.zelnjpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
exports.default = {
    port: process.env.PORT,
    database_url: url,
};
