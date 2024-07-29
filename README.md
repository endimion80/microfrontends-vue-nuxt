# Prueba Técnica: Microfrontends con Vue, Nuxt y Bases de Datos

Este repositorio contiene dos microfrontends (`user-management` y `product-dashboard`), junto con un backend básico para la gestión de datos utilizando Express y SQLite. La prueba técnica está diseñada para evaluar tus habilidades en el desarrollo de microfrontends utilizando Vue y Nuxt, la integración con una base de datos, y la configuración de un entorno de desarrollo utilizando Docker y Docker Compose.

## Objetivos de la Prueba

1. **Configurar Microfrontends**: Crear dos microfrontends utilizando Vue y Nuxt.
2. **Integración con Base de Datos**: Configurar un backend utilizando Express y SQLite para gestionar los datos.
3. **Dockerización**: Configurar Docker y Docker Compose para facilitar el despliegue y la ejecución de los microfrontends y el backend.
4. **Comunicación entre Microfrontends y Backend**: Implementar la comunicación entre los microfrontends y el backend utilizando Axios.
5. **Autenticación y Optimización**: Implementar autenticación básica y optimizar el rendimiento de la aplicación.
6. **Cambios en el Código**: en caso de que se necesite hacer cambios en el código facilitado añade justificación para el cambio.

## Requisitos

- Docker
- Docker Compose

## Estructura del Proyecto

```plaintext
microfrontends-vue-nuxt/
├── user-management/
│   ├── Dockerfile
│   ├── nuxt.config.js
│   ├── package.json
│   └── ...
├── product-dashboard/
│   ├── Dockerfile
│   ├── nuxt.config.js
│   ├── package.json
│   └── ...
├── backend/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── ...
├── docker-compose.yml
└── README.md

Configuración del Entorno

1.Clonar el Repositorio: 
git clone https://github.com/tu-usuario/microfrontends-vue-nuxt.git
cd microfrontends-vue-nuxt

2.Construir y Levantar los Contenedores:
docker-compose up --build

3. Acceder a las Aplicaciones:
 • user-management: http://localhost:3001
 • product-dashboard: http://localhost:3002
 • backend: http://localhost:3000

Descripción del Proyecto

user-management

Microfrontend para la gestión de usuarios. Implementa funcionalidades básicas de autenticación y gestión de usuarios.

product-dashboard

Microfrontend para la visualización y gestión de productos. Implementa funcionalidades para mostrar, agregar, editar y eliminar productos.

backend

API RESTful para la gestión de datos de usuarios y productos utilizando Express y SQLite.
