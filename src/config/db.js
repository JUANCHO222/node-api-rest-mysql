import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

// Conexion a la base de datos de planetsale
const connection = mysql.createConnection(process.env.DATABASE_URL)


export default connection.promise()