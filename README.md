# Lantzarez - Web

Este proyecto es una aplicación web para la marca Lantzarez, desarrollada utilizando React, Tailwind CSS y varios servicios de terceros como EmailJS y Google Maps API.

## Tabla de Contenidos

- [Lantzarez - Web](#lantzarez---web)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Requisitos Previos](#requisitos-previos)
  - [Configuración del Proyecto](#configuración-del-proyecto)
  - [Configuración del Proyecto](#configuración-del-proyecto-1)

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- **Node.js** (versión 14.x o superior)
- **npm** (gestor de paquetes de Node.js)
- **Git** (para el control de versiones)

## Configuración del Proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/Lantzarez.git
   cd Lantzarez
   npm install
   npm start
   ```

## Configuración del Proyecto

Debes configurar las variables de entorno para conectar con los servicios externos (Google Maps, EmailJS). Crea un archivo .env.local en la raíz del proyecto con el siguiente contenido:

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_emailjs_user_id
CI=false

Reemplaza your_google_maps_api_key, your_emailjs_service_id, your_emailjs_template_id y your_emailjs_user_id con las claves adecuadas.

Claves de API
Google Maps API Key: Debes habilitar la API de Google Maps desde la Consola de Google Cloud y restringirla para su uso en localhost y tu dominio de producción.
EmailJS: Debes configurar EmailJS y obtener el Service ID, Template ID y User ID desde tu panel de EmailJS.
