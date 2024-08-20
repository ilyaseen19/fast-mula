import "dotenv/config"
import "module-alias/register"
import App from "./app"
import { config } from "./utils/config"
import { validateEnv } from "@/utils/validateEnv"
import AdminController from "@/resources/admins/admin.controller"

validateEnv()

const app = new App([
    new AdminController()
], config.PORT)

app.listen()