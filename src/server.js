import Express from "express";
import { config } from "./config/index.js";
import bodyParser from "body-parser";
import cors from "cors"
import helmet from "helmet";

const app = Express();
const PORT = config.PORT;
const corseOptions = config.corseOptions

// express middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true, limit: "10mb"}))
app.use(cors(corseOptions))
app.use(helmet())

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`);
});