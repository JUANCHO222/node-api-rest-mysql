const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
require('dotenv').config()

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 3000

const connection = mysql.createConnection(process.env.DATABASE_URL)


app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

connection.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('API')
})

app.get('/personajes', (req, res) => {

    const query = 'SELECT * FROM personaje;'
    connection.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        const obj = {}
        if(resultado.length > 0) {
            obj.listaUsuarios = resultado
            res.json(obj)
        } else {
            res.send('No hay registros')
        }
    })
})

app.get('/personaje/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM personaje WHERE idPersonaje=${id};`
    connection.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0){
            res.json(resultado);
        } else {
            res.send('No hay registros');
        }
    })
})

app.post('/personaje/add', (req, res) => {
    const usuario = {
        nombre: req.body.nombre,
        edad: req.body.edad ,
        ocupacion: req.body.ocupacion,
        capitulo: req.body.capitulo   
    }

    const query = `INSERT INTO personaje SET ?`
    connection.query(query, usuario, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se inserto correctamente el usuario`)
    })
})

app.put('/personaje/update/:id', (req, res) => {
    const { id } = req.params
    const { nombre, edad, ocupacion, capitulo } = req.body

    const query = `UPDATE personaje SET nombre='${nombre}', edad='${edad}', ocupacion='${ocupacion}', capitulo='${capitulo}' WHERE idPersonaje='${id}';`
    connection.query(query, (error) => {
        if(error) return console.log(error.message)

        res.json(`Se actualizó correctamente el usuario`)
    })
})

app.delete('/personaje/delete/:id', (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM personaje WHERE idPersonaje=${id};`
    connection.query(query, (error) => {
        if(error) return console.log(error.message)

        res.json(`Se eliminó correctamente el usuario`)
    })
})
