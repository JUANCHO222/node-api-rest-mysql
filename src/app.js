import express from "express";
import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";

const app = express();

// Definicion del puerto -----------------------------------------------
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());

// Ruta de inicio ------------------------------------------------------
app.use('/', indexRouter)
app.use("*", (req, res) => {
    res.send("Error 404")
})

// Servidor ------------------------------------------------------------
app.listen(app.get('port'), ()=>{
    console.log('Servidor corriendo en el puerto', app.get('port'));
})

db.connect()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log("Error", err);
  });

// pscale_pw_BW6UpHiOgVD3KgAiRh6qbZ6nt7t5oUqssOoQfFyFSak