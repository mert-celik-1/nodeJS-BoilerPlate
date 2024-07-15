import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const loadConfig = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const dotenvPath = path.resolve(__dirname, "../../.env");
  dotenv.config({ path: dotenvPath });
};


export default loadConfig;