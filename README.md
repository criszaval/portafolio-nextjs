# Portafolio Profesional — Next.js 16 + Supabase

Portafolio web profesional desarrollado como parte de la actividad **“Dominio del App Router y Gestión de Datos: Construcción de Rutas Dinámicas y Persistencia con servicio serverless”**.

El proyecto utiliza **Next.js 16+ con App Router**, **Supabase como servicio backend serverless y base de datos PostgreSQL**, y **Vercel** para el despliegue.

La aplicación presenta información profesional, habilidades y proyectos de desarrollo de software mediante una interfaz moderna, responsive y con animaciones interactivas.

---

## Objetivo del Proyecto

El objetivo principal es demostrar el dominio de herramientas modernas para el desarrollo web, implementando:

* Next.js 16+.
* App Router.
* Server Components.
* Rutas dinámicas.
* Consumo de datos desde Supabase.
* Persistencia de información en PostgreSQL.
* Row Level Security (RLS).
* Loading states.
* Manejo de errores.
* Diseño responsive.
* Animaciones modernas.
* Despliegue en producción.

---

## Tecnologías Utilizadas

| Tecnología       | Uso                                |
| ---------------- | ---------------------------------- |
| **Next.js 16+**  | Framework principal                |
| **React**        | Componentes de interfaz            |
| **TypeScript**   | Tipado estático                    |
| **Tailwind CSS** | Diseño y estilos                   |
| **Motion**       | Animaciones y transiciones         |
| **Supabase**     | Backend serverless y base de datos |
| **PostgreSQL**   | Persistencia de datos              |
| **Git**          | Control de versiones               |
| **GitHub**       | Repositorio                        |
| **Vercel**       | Despliegue                         |

---

## Funcionalidades

### Landing Page

La página principal presenta diferentes secciones:

* Hero / presentación.
* Perfil profesional.
* Habilidades técnicas.
* Proyectos.
* Información de contacto.
* Navegación responsive.

La interfaz cuenta con animaciones y microinteracciones para mejorar la experiencia de usuario.

---

### Efecto Typewriter

El título principal utiliza un efecto de escritura automática para mostrar diferentes roles profesionales.

Ejemplo:

```text
Ingeniero en Sistemas
Desarrollador Web
Full Stack Builder
```

Este componente utiliza React y Motion para crear una transición dinámica entre los diferentes textos.

---

## Supabase

Supabase se utiliza como servicio **backend serverless** y proporciona una base de datos PostgreSQL para almacenar la información de los proyectos.

Los proyectos mostrados en el portafolio son obtenidos dinámicamente desde Supabase.

### Operación de lectura

La aplicación realiza consultas `SELECT` a Supabase desde componentes del servidor para obtener los proyectos disponibles.

Flujo de datos:

```text
Next.js Server Component
        │
        ▼
     Supabase
        │
        ▼
   PostgreSQL
        │
        ▼
     Projects
        │
        ▼
    Next.js UI
```

---

## Row Level Security (RLS)

La tabla utilizada por el proyecto tiene habilitado **Row Level Security (RLS)**.

Se configuraron políticas para permitir únicamente las operaciones necesarias para la aplicación.

La información pública del portafolio puede ser consultada mediante las políticas correspondientes, mientras que las operaciones administrativas no quedan expuestas públicamente.

> Las credenciales privadas no se almacenan en el repositorio.

---

## Estructura de Datos

La aplicación utiliza una tabla para almacenar los proyectos.

Ejemplo de estructura:

```text
projects
│
├── id
├── title
├── slug
├── description
├── image
├── technologies
├── github_url
├── demo_url
└── created_at
```

La tabla contiene **5 o más registros de ejemplo**, cumpliendo con el requisito mínimo establecido en la actividad.

Ejemplo:

```text
1. Sistema de Gestión de Barbería
2. API E-commerce
3. Sistema POS
4. Landing Page
5. Sistema de Gestión de Tareas
```

---

## Rutas Dinámicas

El proyecto implementa rutas dinámicas utilizando el **App Router de Next.js**.

### 1. Ruta dinámica de proyectos

```text
/proyectos/[slug]
```

Ejemplos:

```text
/proyectos/barbershop
/proyectos/ecommerce
/proyectos/task-manager
```

Cada `slug` permite consultar y mostrar información específica de un proyecto.

---

### 2. Ruta dinámica de categorías

```text
/categorias/[slug]
```

Ejemplos:

```text
/categorias/full-stack
/categorias/frontend
/categorias/backend
```

Esta ruta permite filtrar o presentar contenido asociado a una categoría determinada.

### Resumen de rutas dinámicas

| Ruta                 | Tipo     | Función                         |
| -------------------- | -------- | ------------------------------- |
| `/proyectos/[slug]`  | Dinámica | Detalle individual del proyecto |
| `/categorias/[slug]` | Dinámica | Visualización por categoría     |

Con estas rutas se cumple el requisito de implementar **al menos dos rutas dinámicas**.

---

## Server Components

El proyecto utiliza **React Server Components** mediante el App Router de Next.js.

Las consultas a Supabase que no requieren interacción del navegador se realizan desde componentes del servidor.

Esto permite:

* Obtener datos en el servidor.
* Reducir JavaScript enviado al cliente.
* Mantener una arquitectura más eficiente.
* Separar correctamente la lógica de datos de la interfaz interactiva.

Los componentes que requieren interacción, como animaciones o efectos de escritura, utilizan `use client` cuando es necesario.

---

## Loading States

El proyecto implementa estados de carga mediante `loading.tsx`.

Por ejemplo:

```text
app/
└── proyectos/
    └── [slug]/
        ├── loading.tsx
        └── page.tsx
```

Mientras se obtiene la información del proyecto, Next.js muestra un estado de carga evitando una experiencia visual abrupta.

---

## Manejo de Errores

La aplicación contempla escenarios en los que un proyecto no existe o no puede ser obtenido desde Supabase.

Las rutas dinámicas pueden manejar estos casos mediante páginas de error o respuestas apropiadas.

Ejemplo:

```text
Proyecto encontrado
        │
        ▼
Mostrar información
```

o:

```text
Proyecto no encontrado
        │
        ▼
Mostrar mensaje de error / Not Found
```

---

## Diseño Responsive

La interfaz fue desarrollada siguiendo un enfoque **responsive**, adaptándose a diferentes tamaños de pantalla:

* Smartphones
* Tablets
* Laptops
* Desktop

Tailwind CSS permite adaptar los componentes utilizando diferentes breakpoints.

---

## Diseño UI/UX

El diseño busca ofrecer una experiencia visual moderna y profesional.

Características principales:

* Dark theme.
* Glassmorphism.
* Gradientes y efectos lumínicos.
* Animaciones.
* Microinteracciones.
* Cards para proyectos.
* Hover effects.
* Transiciones suaves.
* Tipografía moderna.
* Diseño responsive.

---

## Arquitectura del Proyecto

```text
portfolio-next/
│
├── app/
│   │
│   ├── proyectos/
│   │   └── [slug]/
│   │       ├── loading.tsx
│   │       └── page.tsx
│   │
│   ├── categorias/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── TypewriterTitle.tsx
│
├── lib/
│   └── supabase.ts
│
├── public/
│   └── screenshots/
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## Componentes Principales

### `Hero.tsx`

Contiene la sección principal de presentación del portafolio.

### `TypewriterTitle.tsx`

Implementa el efecto de escritura automática utilizando React y Motion.

### `About.tsx`

Presenta información profesional y trayectoria.

### `Projects.tsx`

Obtiene y muestra los proyectos almacenados en Supabase.

### `Navbar.tsx`

Implementa la navegación principal y adaptación responsive.

### `Contact.tsx`

Contiene los canales de contacto profesional.

### `lib/supabase.ts`

Contiene la configuración del cliente utilizado para conectarse con Supabase.

---

## Variables de Entorno

Para ejecutar el proyecto localmente es necesario configurar las variables de entorno.

Crear un archivo:

```text
.env.local
```

Con las siguientes variables:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_publica
```

También se incluye:

```text
.env.example
```

como plantilla para configurar el proyecto.

> Nunca se deben subir credenciales reales ni archivos `.env.local` al repositorio público.

---

## Instalación Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/criszaval/portfolio-nextjs.git
```

Entrar al proyecto:

```bash
cd portfolio-next
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Configurar variables de entorno

Crear:

```text
.env.local
```

Agregar:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_publica
```

---

### 4. Ejecutar el servidor

```bash
npm run dev
```

Abrir:

```text
http://localhost:3000
```

---

## Scripts Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Crear build de producción
npm run build

# Ejecutar aplicación en producción
npm run start

# Ejecutar ESLint
npm run lint
```

---

## Despliegue

La aplicación está preparada para desplegarse en **Vercel**.

Arquitectura del despliegue:

```text
                    ┌──────────────┐
                    │    GitHub    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    Vercel    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Next.js    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Supabase   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ PostgreSQL   │
                    └──────────────┘
```

Las variables de entorno deben configurarse también en el proyecto de Vercel.

---

## Capturas de Pantalla

Las siguientes imágenes pueden utilizarse para documentar el funcionamiento de la aplicación:

### Página principal


### Sección de proyectos



### Detalle del proyecto





---

## Requisitos de la Actividad

| Requisito            | Implementación           | Estado   |
| -------------------- | ------------------------ | -------- |
| Next.js 16+          | Next.js + App Router     | Cumplido |
| App Router           | Carpeta `app/`           | Cumplido |
| Supabase             | PostgreSQL + Supabase    | Cumplido |
| Backend serverless   | Supabase                 | Cumplido |
| Lectura de datos     | Consulta de proyectos    | Cumplido |
| Server Components    | Consultas desde servidor | Cumplido |
| Ruta dinámica #1     | `/proyectos/[slug]`      | Cumplido |
| Ruta dinámica #2     | `/categorias/[slug]`     | Cumplido |
| Tabla en Supabase    | `projects`               | Cumplido |
| Mínimo 5 registros   | Proyectos de ejemplo     | Cumplido |
| RLS                  | Políticas configuradas   | Cumplido |
| Loading states       | `loading.tsx`            | Cumplido |
| Manejo de errores    | Not Found / errores      | Cumplido |
| Variables de entorno | `.env.local`             | Cumplido |
| Diseño responsive    | Tailwind CSS             | Cumplido |
| Despliegue           | Vercel                   | Cumplido |
| Repositorio público  | GitHub                   | Cumplido |

---

## Entregables

### Sitio en producción

```text
[PEGAR AQUÍ LA URL DE VERCEL]
```

### Repositorio de GitHub

```text
https://github.com/criszaval/portfolio-nextjs
```

---

## Autor

**Cristofer Zavala**

**Ingeniero en Sistemas | Full-Stack Developer**

---

## Licencia

Este proyecto se distribuye bajo los términos de la licencia **MIT** y puede utilizarse con fines académicos y profesionales respetando sus condiciones.
