
let objetoA = {
    nombre:"alejandro",
    Ncontrol: "191111",
    id:5
};
let campos = Object.keys(objetoA);
let valores = Object.values(objetoA);
console.log(campos);
// console.log(valores);

let sentencia = "UPDATE hola.alumnos SET "
let sentencia2 = ""
let where = "WHERE id = "

campos.forEach(campo => {

    console.log(campo)

    if(campo == "id"){

    for(i = 0; i<sentencia.length-1; i++ ) {
    sentencia2+=sentencia[i]
    }
    console.log(sentencia2)
    where+=objetoA[campo]
    sentencia2 += where =';'
    console.log(sentencia2)
    }
    else{
        console.log('funciona')
    sentencia += campo + ' = ' + objetoA[campo]+','
    }
});