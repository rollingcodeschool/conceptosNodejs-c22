# Conceptos de NodeJS

Este proyecto es una practica de los primeros conceptos de nodejs, donde implementaremos middlewares, endpoints y fue construido con pnpm como gestor de paquetes.

## Demo del backend

Podes ver una demo del proyecto en producción [aqui](https://conceptos-nodejs-c22.vercel.app/)

## Librerias utilizadas

- Nodejs v24.4 o cualquier version posterior a la 22.
- ExpressJS
- Cors
- Morgan 

## Instalacion y configuración del proyecto

1- Clonar el repositorio

`git clone https://github.com/rollingcodeschool/conceptosNodejs-c22.git`

2- Instalar las dependencias 

`pnpm install`

3- Iniciar aplicacion:

```bash
# comando de producción
pnpm start

# comando de desarrollo
pnpm run dev
```

## Endpoints

```bash
# Metodo: Get
/api/saludo
# Descripcion: Este endpoint devuelve un saludo y un array de vehiculos

# Metodo: Get
/api/adios
# Descripcion: Este endpoint devuelve mensaje de adios
```
# Autor

Arias Emilse