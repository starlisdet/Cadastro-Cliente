import express from "express";
import PATH from "path";
import bodyParser from "body-parser";
import ejs from "ejs";

import userRoutes from "./controller/routes/usuarioRoutes.js";
import clientRoutes from "./controller/routes/clienteRoutes.js";

var app = express();

//npm install body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));

//nom install ejs
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);
app.set("views", PATH.join("view/"));

//consign.apply('controller/routes', app);
// consign().include('controller/routes').into(app);

app.use("/user", userRoutes);
app.use('/client', clientRoutes);

app.listen(8081, () => {
  console.log("http://localhost:8081");
});