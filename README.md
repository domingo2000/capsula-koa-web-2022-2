# Capsula Koa básico

## Objetivos:
1. Repasar el patrón MVC y identificar que hace koa dentro del patrón.
2. Explicar un flujo de una request en nuestra aplicación de forma teórica.
3. Implementar un servidor web básico en koa.
4. Explicar de manera simple cada una de las librerías usadas.
5. Dar una estructura base de proyecto.
6. Explicar scripts básicos para ejecutar el servidor.
7. Refactorizar el código para modularizar las rutas.

## Requisitos funcionales:
1. Se debe poder ejecutar el servidor con comandos de desarrollo y producción.
2. Se debe tener una ruta GET que muestre un mensaje "Hello World!".
3. Se debe tener una ruta POST que parsee un body en formato JSON.
4. Se deben loguear todas las requests entrantes (logger).


## Requisitos no funcionales:
1. Las rutas deben estar modularizadas del archivo principal.
2. Se debe tener hot-reloading en desarrollo.


Guión:
0. Se explica de forma teórica el patrón MVC y se explica que es koa dentro de este.

1. Se explica la iniciacion de un proyecto en node, la estructuración de las dependencias, `package.json` y setup inicial.

2. Se instala koa, y se inicia un repo base en la carpeta `src`.

3. Se hace un `.gitignore` con los documentos que queremos ignorar clásicos de node (`node_modules/`, `.env`, etc...). Hacemos esto ahora porque antes no teníamos la carpeta creada pues no habían dependencias.

4. Instalamos koa router y hacemos una ruta `GET /` que responda `"hello world!"`

5. Instalamos koa-logger para loguear nuestras requests al servidor

6. Instalamos koa-body para parsear distintos tipos `Content-Type`, por ahora solo `JSON`.

7. Hacemos un pequeño refactor que deje las rutas modularizadas.

8. Creamos scripts en el `package.json` para correr la app con *hot reloading* usando `nodemon` como *dev-dependency* y se explica el concepto de *dev-dependency*.


## Librerías utilizadas:

### Producción
- [koa](https://github.com/koajs/koa) (middleware principal)
- [@koa/router](https://github.com/koajs/router) (middleware de ruteo)
- [koa-body](https://github.com/koajs/koa-body) (middleware que parsea el stream de la request)
- [koa-logger](https://github.com/koajs/logger) (middleware que logguea cada request/response)

### Desarrollo
- [nodemon](https://github.com/remy/nodemon) (for hot reloading)
