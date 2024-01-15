import { Router } from "express"; // Router para definir rutas

// importacion de los controladores de peticion
import { getPersonaje, 
    getPersonajes, 
    createPersonaje, 
    deletePersonaje, 
    updatePersonaje }
    from "../controllers/personaje.controller.js";

const personajeRouter = Router();

personajeRouter.get("/", getPersonajes )

personajeRouter.get("/:id", getPersonaje)

personajeRouter.post("/add", createPersonaje)

personajeRouter.put("/update/:id", updatePersonaje)

personajeRouter.delete("/delete/:id", deletePersonaje)

export default personajeRouter;
