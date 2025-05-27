const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const app = express();

// Configuración de vistas y archivos estáticos
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Middleware global para evitar caché
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
});

// Middlewares principales
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Rutas
const indexRoutes = require("./src/routes/index.js");
app.use("/", indexRoutes);
const chrcRoutes = require("./src/routes/chrcRoutes");
// (Registra también chrcRoutes si no lo has hecho aún)

// Inicio del servidor
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});

