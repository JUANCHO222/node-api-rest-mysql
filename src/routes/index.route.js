import { Router } from "express"; // Router para definir rutas
const indexRouter = Router();
import personajeRouter from "./personaje.route.js";

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
    res.send("Bienvenido a la api de one piece")
})

indexRouter.use(`${prefix}/personaje`, personajeRouter)

export default indexRouter;
