<div align="center">
    <img style="max-width: 100%;" src="/public/thumbnails-project/VGG Movies Home.png" />
</div>

## Movie App - React

VGG Movies es un buscador de pelioculas desarrollado con React 18, usando la API de The Movie Database(TMDb) ontener las peliculas y shows de televisión, así como su respectiva información. Además de utilizar Firebase para la autenticación y FireStore para almacenar todas las peliculas y/o shows en la sección de Watchlist.

## 🤓 Descripción

- Configuración de un proyecto en React 18 utilizando las últimas características y mejoras.
- Creación de una interfaz de usuario moderna y adaptable con ChakraUI.
- Conexión a una API externa para obtener y mostrar datos de películas de manera dinámica.
- Implementación de autenticación de usuario mediante Firebase para una experiencia segura y personalizada.
- Integración de la base de datos de Firebase para gestionar la lista de seguimiento del usuario.

## 💻 Demo

[VGG Movies App - Live Demo](https://vgg-movie-search.vercel.app/)

## 🛠️ Herramientas y Recursos

- [**React**](https://es.react.dev/) - Configuración de un proyecto en React 18 utilizando las últimas características y mejoras.
- [**ChakraUI**](https://www.chakra-ui.com/) - Creación de una interfaz de usuario moderna y adaptable con ChakraUI.
- [**Firebase**](https://firebase.google.com/docs) - Conexión a una API externa para obtener y mostrar datos de películas de manera dinámica.
- [**TMDB API**](https://developer.themoviedb.org/docs/getting-started) - Implementación de autenticación de usuario mediante Firebase para una experiencia segura y personalizada.
- [**Vercel**](https://vercel.com/) - Despliegue de proyecto con Vercel.

## 🚀 Instalación

### 1. Clona el repositorio

     ```sh
     git https://github.com/Francisco-0510/movie-app-react.git
     ```

    `cd movie-app-react`

### 2. Instala los paquetes de NPM

```sh
npm install
```

### 3. Generación de API TMDb

- Para generar tu API KEY puedes seguir la documentación oficial de [TMDb](https://developer.themoviedb.org/docs/getting-started)

### 4. Configura Firebase

- Accede a la [consola de Firebase](https://firebase.google.com/), crea un proyecto y en las opciones del menu lateral izquierdo, despliega la opción de Compilación y añade Authentication.
- Agrega el metodo de Auntenticación de Google
- Añade Firebase a la app web
- Agrega el SDK de Google

### 5. Creación de archivo .env

- Crea un archivo lllamado `.env` en la ruta raiz del proyecto y copia el contenido de [.env.demo](.env.demo) en el.
- Reemplaza el texto copiado de demo en `.env` con tu api-key de TMDB, api-key de Firebase, y la configuración del SDK de Firebase

### 6. Ejecuta el Proyecto

```bash
# Disfruta del resultado
npm run dev
```

- Abre [**http://localhost:5173/**](http://localhost:5173/) en tu navegador apra ver el resultado

## Screenshot

<div align="center">
    <img style="max-width: 100%;" src="/public/thumbnails-project/VGG Movies Home.png" />
</div>

<div align="center">
    <img style="max-width: 100%;" src="/public/thumbnails-project/VGG Movies Movies Page.png" />
</div>

<div align="center">
    <img style="max-width: 100%;" src="/public/thumbnails-project/VGG Movies TV Shows Page.png" />
</div>

<div align="center">
    <img style="max-width: 100%;" src="/public/thumbnails-project/VGG Movies Info Movie Page.png" />
</div>

<div align="center">
    <img style="max-width: 100%;" src="/public/thumbnails-project/VGG Movies Search Page.png" />
</div>

<div align="center">
    <img style="max-width: 100%;" src="/public/thumbnails-project/VGG Movies Watchlist Page.png" />
</div>
