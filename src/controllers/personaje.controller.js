// controlador funcion que se encarga de recibir la peticion del cliente, procesarla 
import * as personajeServices from "../services/personaje.service.js"

export const getPersonajes = (req, res)=> {
    personajeServices
    .getPersonajes()
    .then((result) => {
        res.status(200).json({
            data: result[0]
        })
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

export const getPersonaje = (req, res)=> {
    const { id } = req.params;
    personajeServices
    .getPersonaje(id)
    .then((result) => {
        res.status(200).json({
            data: result[0],
        })
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

export const createPersonaje = (req, res)=> {
    const personaje = req.body;
    personajeServices
    .createPersonaje(personaje)
    .then(() => {
        res.status(200).json({
            data: personaje
        })
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}
export const updatePersonaje = (req, res)=> {
    const personaje = req.body;
    const { id } = req.params;

    personajeServices
    .updatePersonaje(id, personaje)
    .then(() => {
        res.status(200).json({
            data: personaje
        })
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

export const deletePersonaje = (req, res)=> {
    const { id } = req.params;

    personajeServices
    .deletePersonaje(id)
    .then(() => {
        res.status(200).json({
        })
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

