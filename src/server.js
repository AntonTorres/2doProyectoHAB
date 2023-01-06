require("dotenv").config();
const express = require("express");

//Controladores usuarios
const { createUser, loginUser } = require("./controllers/users");


//Controladores servicios
const { createService, getService, deleteService } = require("./controllers/services");


//Middlewares
const { handleError, handleNotFound } = require("./middlewares");



//
const app = express();

const { PORT } = process.env;

app.use(express.json());
//



//Endpoints users
app.post("/users", createUser);
app.post("/login", loginUser);


//Endpoints services
app.post("/services", createService);
app.get("/services", getService);
app.delete("/services", deleteService);


// Endpoints errores
app.use(handleNotFound);
app.use(handleError);



app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
