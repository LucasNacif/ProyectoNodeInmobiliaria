const fs = require('fs')

function guardar(data){
    console.log("-----modelo data----");
    console.log(data);

    let str_Propiedades = fs.readFileSync("./archivos/db.txt",'utf-8')
    let Propiedades = []
    if(str_Propiedades){
        Propiedades = JSON.parse(str_Propiedades)
    }
    Propiedades.push(data)

    console.log("-----modelo propiedades----");
    console.log(Propiedades);


    fs.writeFileSync("./archivos/db.txt",JSON.stringify(Propiedades))
    
    
}

function obtener(){
    let str_Propiedades = fs.readFileSync("./archivos/db.txt",'utf-8')
    let propiedades = []
    if(str_Propiedades){
        propiedades = JSON.parse(str_Propiedades)
    }
    return propiedades;
}

module.exports = {guardar, obtener}