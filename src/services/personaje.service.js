import db from "../config/db.js"

export const getPersonajes = () =>{
    return new Promise((resolve, reject)=>{
        const query = 'SELECT * FROM personaje'
        db.execute(query)
        .then((result)=> resolve( result ))
        .catch((err)=> reject(err))
    })
    
}

export const getPersonaje = (id) =>{
    return new Promise((resolve, reject)=>{
        const query = 'SELECT * FROM personaje WHERE idPersonaje = ?';

        db.execute(query,[id])
        .then((result)=> resolve( result ))
        .catch((err)=> reject(err))
    })
    
}

export const createPersonaje = (personaje) =>{
    return new Promise((resolve, reject)=>{
        const query = "INSERT INTO personaje (idPersonaje, nombre, email) VALUES (?, ?, ?)";

    const {idPersonaje, nombre, email} = personaje;

        db.execute(query, [idPersonaje, nombre, email])
        .then((result)=> resolve( result ))
        .catch((err)=> reject(err))
    })
}

export const updatePersonaje = (id, personaje) =>{
    return new Promise((resolve, reject)=>{
        const query = "UPDATE personaje SET nombre = ?, email = ? WHERE idPersonaje = ? ";

    const {nombre, email} = personaje;

        db.execute(query, [nombre, email, id])
        .then((result)=> resolve( result ))
        .catch((err)=> reject(err))
    })
}
export const deletePersonaje = (id) =>{
    return new Promise((resolve, reject)=>{
        const query = "DELETE FROM personaje WHERE idPersonaje = ?";

        db.execute(query, [id])
        .then((result)=> resolve( result ))
        .catch((err)=> reject(err))
    })
}