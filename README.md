# Prueba Técnica JAKALA - Floristería Dulces Pétalos

## Arquitectura

Tal y como se solicita en el enunciado de la prueba se creará una aplicación SPA (Single Page Application) creada con React y que muestre el catálogo de la folristería Dulces Pétalos.

Para ello, contamos con un API para el Backend de la aplicación proporcionado por Jakala (https://dulces-petalos.jakala.es/api).

La arquitectura que usaremos para la aplicación será: React + TypeScrypt + Vite. Para ello usaremos un Contenedor Docker con NodeJs 20 instalado.

Creamos la estructura de la aplicación inicial con el comando NPM:

  npm create vite@latest spa-react-jakala-catalog --template react

Como ejecutamos la app en desarrollo desde el contenedor, añadimos el argumento --host al script "dev" en el package.json.

Utilizaremos las siguientes dependencias:

- react-router-dom: Componente Router para la navegación de la App
- vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event: paquetes necesarios para testing
- bootstrap
- prettier eslint-config-prettier eslint-plugin-prettier

## Desarrollo de la App

### Task 001 - Instalar Router y crear páginas iniciales

- Instalar Router para navegación (react-router-dom)
- Cambiar el App.tsx para utilizar el componente Router.
- Crear las 2 páginas vacías que requiere la app (HomePage y ProductPage)
- ProductPage: añadir un parámetro id para pasarle el id del producto a mostrar

### Task 002 - Instalar dependencias y configurar tests

- Instalar Vitest y el resto de dependecias para crear tests (vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event)
- Configurar testing en vite.config.ts
- Crear un componente base de Layout para el template de la página
- Añadir el componente Layout a las páginas existentes y crear primeros tests básicos

### Task 003 - Instalar Bootstrap y crear componentes para el Header

- Instalar Bootstrap para diseño de la aplicación (dependencia bootstrap)
- Añadir parámetro breadcrumb al componente Layout para dibujarlo en el header
- Crear 2 componentes para el Header:
 - Brand: con el nombre o logo de la empresa
 - Breadcrumb: rastro de la navegación con links
- Refactorizar y adaptar test del Layout

### Task 004 - Crear servicio de acceso al API

- Crear ApiService.ts con funciones de acceso al API
- Modificar las páginas Home y Producto para añadir función de acceso al API

### Task 005 - Crear componente ListView para la HomePage

- Crear carpeta para agrupar los componentes de la HomePage
- Crear subcomponentes ListView e Item para mostrar la lista de productos en columnas y tarjetas de Bootstrap
- Añadir navegación a ProductPage
- Añadir casilla de filtrado de productos (por nombre o nombre científico)

### Task 006 - Crear componente DetailView para ProductPage

- Crear carpeta para agrupar los componentes de ProductPage
- Crear subcomponentes DetailView, Image y Description para mostrar la información detallada de un producto
- Añadir botón de navegación hacia atrás
- Adaptar test de ProductPage haciendo mock de la llamada al servicio para simular la obtención de un producto

### Task 007 - Test de HomePage

- Mejorar test de HomePage, para testear que se dibuja al menos el nombre de un producto de la lista

### Task 008 - Limpieza de código

- Instalar Prettier y dependecias para formatear el código (prettier eslint-config-prettier eslint-plugin-prettier)
- Aplicar reglas de formateo básicas en el código