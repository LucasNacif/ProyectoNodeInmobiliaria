const express = require("express");
const app = express();
const path = require('path')


let Controlador = require('./controlador.js');

app.use(express.json());
app.use(express.urlencoded({extended : false}))

const port = 3000;

app.listen(port,()=>{
  console.log("El servidor está escuchando en el puerto " + port);
});

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname,'./static/menuPrincipal.html'))
})

app.post('/nuevo', (req,res)=>{
  res.sendFile(path.join(__dirname,'./static/menuPrincipal.html'))
  Controlador.nuevo(req.body);
  console.log("-----SERVIDOR----");
  console.log(req.body);
})
app.get('/obtener', (req, res) => {
  let data = Controlador.obtener();
  let str = "<div id='propDisp'><h1>Propiedades</h1>";

  if (data.length > 0) {
    str += "<table>";
    str += "<tr><th>Descripción</th><th>Localidad</th><th>Ubicación</th><th>Nombre Propietario</th><th>Apellido Propietario</th><th>Teléfono Propietario</th><th>Precio</th><th>Dimensiones</th></tr>";

    data.forEach((propiedad) => {
      str += "<tr>" +
        "<td>" + propiedad.descripcion + "</td>" +
        "<td>" + propiedad.localidad + "</td>" +
        "<td>" + propiedad.ubicacion + "</td>" +
        "<td>" + propiedad.nomPropietario + "</td>" +
        "<td>" + propiedad.apePropietario + "</td>" +
        "<td>" + propiedad.telPropietario + "</td>" +
        "<td>" + propiedad.precio + "</td>" +
        "<td>" + propiedad.dimension + "</td>" +
        "</tr>";
    });

    str += "</table>";
  } else {
    str += "<p>No hay propiedades disponibles.</p>";
  }

  str += "</div>";
  res.send(str);
});

