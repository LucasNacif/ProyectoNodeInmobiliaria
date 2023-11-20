const Clases = require("./Propiedad");
const Modelo = require('./modelo.js');

function nuevo(data) {
    console.log("-----controlador data----");
    console.log(data);

    let miPropiedad = new Clases.Propiedad(
        data.descripcion,
        data.localidad,
        data.ubicacion,
        data.nomPropietario,
        data.apePropietario,
        data.telPropietario,
        data.precio,
        data.dimension
    );

    console.log("-----controlador propiedad----");
    console.log(miPropiedad);

    Modelo.guardar(miPropiedad);
}


function obtener() {
    return Modelo.obtener();
}

module.exports = { nuevo, obtener };
