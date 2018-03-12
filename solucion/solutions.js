// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3){

    if (parseInt(p1.age) > parseInt(p2.age) && parseInt(p1.age) >  parseInt(p3.age)) {
        return p1.name;
    } else if (parseInt(p2.age) > parseInt(p1.age) && parseInt(p2.age) > parseInt(p3.age)) {
        return p2.name;
    } else {
        return p3.name;
    }
}

// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3){

    if (p1.email.toLowerCase() === p2.email.toLowerCase() || p1.email.toLowerCase() === p3.email.toLowerCase() || p2.email.toLowerCase() === p3.email.toLowerCase() ){
        return true;
    } else {
        return false;
    }
}

// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3){
    var autent = prompt('Edad usuario correcta?');
    if(parseInt(autent) === parseInt(p1.age) || parseInt(autent) === parseInt(p2.age) || parseInt(autent) === parseInt(p3.age)) {
        return true;
    } else {
        return false;
    }
}

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// RESTRICCIÓN: Resuélvelo usando el método .search()
// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()
// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba
// Deja descomentada solo una de las soluciones
function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3){

   var contador = 0;

   if (p1.email.substr(p1.email.length - 10, p1.email.length - 1) == "@gmail.com") {
       contador = contador + 1;
   }

   if (p2.email.substr(p2.email.length - 10, p2.email.length - 1) == "@gmail.com") {
       contador = contador + 1;
   }

   if (p3.email.substr(p3.email.length - 10, p3.email.length - 1) == "@gmail.com") {
       contador = contador + 1;
   }

   return contador;
}
