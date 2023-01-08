require("dotenv").config();
const express = require("express");

//Controladores usuarios
const { createUser, loginUser, logedUser, editUser, deleteUser } = require("./controllers/users");

//Controladores servicios
const {
  createService,
  getService,
  deleteService,
  editService,
  getSerById
} = require("./controllers/services");

//Middlewares
const { handleError, handleNotFound, validateR } = require("./middlewares");

//
const app = express();

const { PORT } = process.env;

app.use(express.json());
//

//Endpoints usuarios
app.post("/users", createUser);
app.post("/login", loginUser);
app.get("/users/:id", validateR, logedUser); // No devuelve los datos del usuario?
app.put("/users/:id", validateR, editUser);
app.delete("/users/:id", validateR, deleteUser);

//Endpoints servicios
app.get("/services", getService);
app.get("/services/:id", getSerById); // No devuelve los datos del servicio?
app.post("/services", validateR, createService);
app.delete("/services/:id", validateR, deleteService);
app.put("/services/:id", validateR, editService);
//app.put("/services/:id", validateR, resolvedService);
 
//Endpoints comentarios 
//app.post("/services/:id/comment", validateR, createComment); */

// Endpoints errores
app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
