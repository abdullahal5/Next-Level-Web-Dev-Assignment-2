import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.database_url);
    app.listen(config.port, () => {
      console.log(
        `Server is listening on port ${config.port} \nServer Connected successfully!!!`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
