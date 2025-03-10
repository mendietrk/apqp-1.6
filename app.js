const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

// Configuración de la aplicación Express

const indexRoutes = require("./src/routes/index.js");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

  // Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));


// Routes
app.use("/", indexRoutes);


// Start server (type: npm run dev)
app.listen(app.get("port"), () =>
{
    console.log("Server on port " + app.get("port"));
});

