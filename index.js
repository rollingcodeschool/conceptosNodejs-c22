import express from 'express'
// const express = require('express')

const app = express()
const PORT = 3000

console.log('Este es el segundo mensaje de este backend 🥐')
console.log('nueva prueba')

app.listen(PORT, ()=>{
    console.log(`Servidor activo en el puerto: ${PORT}`)
})