
# Portafolio Profesional | Next.js + Supabase + AWS Amplify

Portafolio web profesional desarrollado con Next.js 16, React, TypeScript y Supabase. El proyecto permite presentar información profesional, categorías y proyectos mediante una interfaz moderna, responsive y conectada a una base de datos PostgreSQL.

La aplicación se encuentra desplegada en AWS Amplify y está disponible públicamente mediante HTTPS.

## Aplicación en producción

**URL pública:**  
https://main.d102z9qocimmau.amplifyapp.com

**Repositorio de GitHub:**  
https://github.com/criszaval/portafolio-nextjs

## Tecnologías utilizadas

- Next.js 16.3.4
- React
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL
- Git y GitHub
- AWS Amplify

## Características principales

- Diseño responsive para computadoras, tablets y dispositivos móviles.
- Arquitectura basada en Next.js App Router.
- Renderizado de páginas estáticas y dinámicas.
- Integración con Supabase.
- Organización de proyectos mediante categorías.
- Rutas dinámicas para proyectos individuales.
- Componentes reutilizables.
- Despliegue automatizado mediante GitHub y AWS Amplify.
- Acceso público mediante HTTPS.

## Estructura del proyecto

```text
portfolio-next/
├── app/
│   ├── categorias/
│   │   └── [slug]/
│   ├── proyectos/
│   │   └── [slug]/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── public/
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Requisitos previos

Para ejecutar el proyecto localmente se necesita:

- Node.js compatible con Next.js 16 (versión 20.9 o superior).
- npm.
- Git.
- Visual Studio Code u otro editor de código.
- Un proyecto de Supabase configurado.

## Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/criszaval/portafolio-nextjs.git
```

### 2. Acceder al directorio

```bash
cd portafolio-nextjs
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear el archivo `.env.local` en la raíz del proyecto.

Agregar las variables necesarias para la conexión con Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_publica_de_supabase
```

Los valores deben corresponder a las credenciales públicas de configuración del proyecto de Supabase.

No deben publicarse contraseñas ni claves privadas en GitHub.

### 5. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abrir en el navegador:

http://localhost:3000

### 6. Compilar para producción

```bash
npm run build
```

### 7. Ejecutar la versión de producción

```bash
npm run start
```

## Base de datos

La aplicación utiliza Supabase como servicio de backend, con PostgreSQL como sistema de gestión de base de datos.

Supabase proporciona los datos utilizados para mostrar el contenido del portafolio, las categorías y los proyectos.

La conexión se configura mediante variables de entorno.

## Rutas de la aplicación

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal del portafolio |
| `/categorias/[slug]` | Proyectos por categoría |
| `/proyectos/[slug]` | Detalles de un proyecto |
| `/_not-found` | Página para rutas no encontradas |

Next.js utiliza generación estática y renderizado dinámico según las necesidades de cada ruta.

## Despliegue en AWS Amplify

La aplicación fue desplegada utilizando AWS Amplify Hosting, un servicio administrado de Amazon Web Services que permite publicar aplicaciones web a partir de repositorios Git.

### Configuración del despliegue

| Parámetro | Configuración |
|-----------|---------------|
| Proveedor cloud | Amazon Web Services |
| Servicio | AWS Amplify |
| Framework | Next.js 16.3.4 |
| Repositorio | criszaval/portafolio-nextjs |
| Rama | main |
| Comando de compilación | npm run build |
| Base de datos | Supabase PostgreSQL |
| Protocolo | HTTPS |
| Estado | Implementación realizada |

### Proceso de implementación

1. Se preparó la aplicación Next.js en el entorno local.
2. Se verificó la compilación mediante `npm run build`.
3. Se subió el código fuente a un repositorio público en GitHub.
4. Se creó una aplicación en AWS Amplify.
5. Se conectó AWS Amplify con el repositorio y la rama `main`.
6. Se verificó la configuración de compilación del proyecto.
7. Se agregaron las variables de entorno necesarias para Supabase.
8. Se ejecutó el proceso de compilación y despliegue.
9. Se verificó el estado exitoso de implementación.
10. Se obtuvo una URL pública para acceder a la aplicación.

### Variables de entorno en AWS Amplify

Para conectar la aplicación con Supabase se configuraron las siguientes variables:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_publica_de_supabase
```

Estas variables se administran directamente desde la sección de configuración de variables de entorno de AWS Amplify.

El archivo `.env.local` no se incluye en el repositorio por motivos de seguridad.

### Implementación automática

AWS Amplify está conectado a la rama principal `main` del repositorio de GitHub.

Esto permite ejecutar automáticamente nuevos procesos de compilación e implementación cuando se publican cambios en esa rama.

### URL del despliegue

https://main.d102z9qocimmau.amplifyapp.com

La aplicación utiliza un subdominio proporcionado por AWS Amplify, por lo que no fue necesario configurar un dominio personalizado.

## Evidencias del despliegue

Para documentar el proceso de implementación se incluyen las siguientes evidencias en la entrega académica:

**Evidencia 1: AWS Amplify**

Captura del panel de AWS Amplify donde se muestra el proyecto `portafolio-nextjs`, la rama `main`, la URL pública y el estado exitoso de implementación.

**Evidencia 2: Aplicación en producción**

Captura de la aplicación ejecutándose desde su dirección pública HTTPS en el navegador.

## Resultados

Se logró publicar una aplicación desarrollada con Next.js utilizando AWS Amplify.

Durante el proceso se realizaron las siguientes actividades:

- Preparación del repositorio Git.
- Verificación de la compilación para producción.
- Configuración del despliegue automático.
- Configuración de variables de entorno.
- Integración con Supabase.
- Publicación de la aplicación mediante una URL pública.
- Verificación del estado de implementación.

El proyecto demuestra un flujo práctico de despliegue de aplicaciones web utilizando servicios administrados de AWS.

## Consideraciones de seguridad

- No publicar archivos `.env.local`.
- Mantener las claves privadas fuera del repositorio.
- Utilizar variables de entorno para la configuración.
- Controlar el acceso a los servicios de AWS y Supabase.
- Revisar periódicamente el consumo y la facturación de AWS.

## Autor

**Cristofer Ozman Zavala Cruz**

Proyecto desarrollado como práctica de desarrollo web y despliegue de aplicaciones en la nube mediante AWS Amplify.

## Enlaces

**Aplicación:**  
https://main.d102z9qocimmau.amplifyapp.com

**Código fuente:**  
https://github.com/criszaval/portafolio-nextjs
