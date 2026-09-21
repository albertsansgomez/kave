# KAVE

Prueba técnica para el proceso de selección de **Kavehome**.

Aplicación web desarrollada con **Next.js, React, TypeScript y Tailwind CSS**, orientada a la personalización de espacios mediante generación de imágenes.

## 🛠️ Tecnologías

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** para el despliegue

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/albertsansgomez/kave.git
cd kave
```

Instalar las dependencias:

```bash
npm install
```

## ▶️ Ejecutar el proyecto

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

## 📜 Scripts

| Comando          | Descripción                        |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Inicia el servidor de desarrollo   |
| `npm run build`  | Genera la build de producción      |
| `npm run start`  | Inicia la aplicación en producción |
| `npm run lint`   | Ejecuta ESLint                     |
| `npm run format` | Formatea el código                 |

## 🧩 Arquitectura

El proyecto utiliza **Next.js con App Router** y está desarrollado íntegramente con TypeScript.

La interfaz se ha estructurado mediante componentes reutilizables, separando la lógica de presentación de la lógica relacionada con la generación de imágenes.

## 📱 Responsive

La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla, con especial atención a la experiencia de uso en escritorio y dispositivos móviles.

## 🌐 Despliegue

El proyecto está preparado para su despliegue en **Vercel**.

### 🏗️ Decisiones arquitectónicas adoptadas

* **Next.js + App Router** como base de la aplicación, aprovechando su estructura de rutas y separación entre Server y Client Components.
* **TypeScript** para mantener tipado y facilitar el mantenimiento del código.
* **Componentización de la UI**, separando componentes reutilizables de presentación y componentes específicos de cada página.
* **Context API** para gestionar el estado global de favoritos, evitando introducir una librería de gestión de estado innecesaria para esta funcionalidad.
* **Mock de los endpoints** para poder desarrollar y validar la aplicación ante las restricciones de acceso del API real.
* **Tailwind CSS** para la implementación de estilos de forma consistente y responsive.
* **Diseño responsive y accesible**, utilizando HTML semántico, atributos ARIA cuando son necesarios y una estructura adaptada a diferentes tamaños de pantalla.
* **Configuración de `next/image`** para optimizar la carga y gestión de imágenes procedentes del CDN.

### 🤖 Uso de herramientas de IA

Se han utilizado herramientas de IA como apoyo puntual para resolver dudas técnicas, revisar código, explorar alternativas de implementación y facilitar tareas de debugging. Todas las soluciones propuestas han sido revisadas y adaptadas durante el desarrollo.

### 🤖 Uso de IA

IA utilizada como herramienta de apoyo para consultas técnicas, revisión de código, debugging y exploración de alternativas de implementación.

