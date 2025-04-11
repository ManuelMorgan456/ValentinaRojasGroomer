# 🐶 Groomer Backend

Este es el backend de la página web de **[Valentina Rojas Groomer]**, una Groomer canina profesional. Aquí se gestionan servicios, reservas, contacto con clientes, testimonios, galería de imágenes y el blog informativo.

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB con Mongoose
- JWT para autenticación
- Bcrypt.js para contraseñas
- Dotenv
- CORS
- Multer (para subir imágenes)

## 📂 Estructura del Proyecto

C:.
|   .env
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
|   server.js
|
+---controllers
|       blogController.js
|       cambiarPasswordController.js
|       configImagenController.js
|       configRedController.js
|       configTextoController.js
|       consultaController.js
|       galeriaController.js
|       imagenController.js
|       loginController.js
|       productoController.js
|       recuperarController.js
|       servicioController.js
|       testimonioController.js
|       usuarioController.js
|
+---helpers
|       enviarCorreo.js
|
+---middleware
|       authMiddleware.js
|
+---models
|       blog.js
|       configImagen.js
|       configRed.js
|       configTexto.js
|       consulta.js
|       galeria.js
|       imagen.js
|       producto.js
|       servicio.js
|       testimonio.js
|       usuario.js
+---routes
        blogRoutes.js
        configImagenRoutes.js
        configRedRoutes.js
        configTextoRoutes.js
        consultaRoutes.js
        galeriaRoutes.js
        imagenRoutes.js
        loginRoutes.js
        productoRoutes.js
        recuperarRoutes.js
        servicioRoutes.js
        testimonioRoutes.js
        usuarioRoutes.js






📋 Funcionalidades

📅 Reservas de turnos

✂️ Gestión de servicios (CRUD)

💬 Testimonios de clientes

🖼️ Galería de imágenes

📚 Blog de consejos y cuidados

📩 Formulario de contacto

👥 Panel de administración con autenticación segura

📮 Endpoints disponibles
POST /api/login - Login de administrador

GET /api/servicios - Ver servicios

POST /api/testimonios - Crear testimonio

GET /api/galeria - Ver imágenes

POST /api/contacto - Enviar consulta

GET /api/blog - Ver artículos

... y más.

🔐 Seguridad
Autenticación con JWT

Contraseñas encriptadas

Acceso controlado para zona admin

✨ Autor
Jose Manuel
Desarrollador Full Stack & amante de los animales 🐾
GitHub: @ManuelMorgan456