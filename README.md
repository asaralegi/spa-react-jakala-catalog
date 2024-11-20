# Prueba Técnica JAKALA - Floristería Dulces Pétalos

## Arquitectura

Tal y como se solicita en el enunciado de la prueba se creará una aplicación SPA (Single Page Application) creada con React y que muestre el catálogo de la folristería Dulces Pétalos.

Para ello, contamos con un API para el Backend de la aplicación proporcionado por Jakala (https://dulces-petalos.herokuapp.com).

La arquitectura que usaremos para la aplicación será: React + TypeScrypt + Vite. Para ello usaremos un Contenedor Docker con NodeJs 20 instalado.

Creamos la estructura de la aplicación inicial con el comando NPM:

  npm create vite@latest spa-react-jakala-catalog --template react

Como ejecutamos la app en desarrollo desde el contenedor, añadimos el argumento --host al script "dev" en el package.json.