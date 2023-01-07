require("dotenv").config();
const express = require("express");

//Controladores usuarios
const { createUser, loginUser } = require("./controllers/users");

//Controladores servicios
const {
  createService,
  getService,
  deleteService,
  editService,
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

//Endpoints servicios
app.get("/services", getService);
app.post("/services", validateR, createService);
app.delete("/services/:id", validateR, deleteService);
app.put("/services/:id", validateR, editService);

// Endpoints errores
app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
