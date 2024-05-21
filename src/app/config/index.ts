import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

const url = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.zelnjpd.mongodb.net/assignment-2?retryWrites=true&w=majority&appName=Cluster0`;

export default {
  port: process.env.PORT,
  database_url: url,
};
