import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
// const express = require('express')

const app = express()
const PORT = 3000

// middlewares
app.use(cors()); //permite conexiones remotas
app.use(express.json()) // permite interpretar los datos que lleguen en la solicitud o request en formato json
app.use(morgan('dev'))

// area de logica
console.log('Este es el segundo mensaje de este backend 🥐')
console.log('nueva prueba')

// diseñamos los endpoints
// http://localhost:3000/api/saludo
app.get('/api/saludo', (req, res)=>{
    const vehiculos = ['🏎️', '🚗', '🚕']
    
    res.json({
        mensaje: 'Bienvenidos a nuestro backend',
        vehiculos
    })
})

app.get('/api/adios', (req, res)=>{
    res.json('Nos vamos')
})

app.listen(PORT, ()=>{
    console.log(`Servidor activo en el puerto: ${PORT}`)
})