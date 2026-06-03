import express from 'express'
// const express = require('express')

const app = express()
const PORT = 3000


console.log('El primer mensaje de este backend')

app.listen(PORT, ()=>{
    console.log(`Servidor activo en el puerto: ${PORT}`)
})