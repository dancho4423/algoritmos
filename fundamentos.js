
//tipo de datos 
let nombre = "jhon";

let edad = 18;

let mayorEdad = true;

let estatura;

console.log(typeof nombre);

console.log(typeof edad);

console.log(typeof mayorEdad);

console.log(typeof estatura);

//tipos de datos complejos 
let frutas = ['Pera', 'Manzana', 'Melon'] ;

let auto = {
modelo: '2024',
marca: 'Chevrolet',
color: 'negro',
cilindraje: '2100',
tipo: 'camioneta',

}


//concatenaado varialbles  
console.log("Bienvenido usuario  " +  nombre + " su edad es " +  edad  + ' y su fruta favorita es ' + frutas [1]);

//estructuras de control condicional 

if (edad > 25) {
    console.log("es un aldulto")
}
else if (edad>18){

    console.log("es un joven")
}
else if  ( edad> 13){ 

    console.log("es un pelado")

}
else {
    console.log("es un joven")
}


let tipoSucripcion = "sd"

switch (tipoSucripcion) {
    case "Basico":
        console.log("Muy suave o pobre")
        break
    case "gold":
        console.log("buen plan, pero sigue siendo pobre")
        break
    case "platinium":
        console.log("El mejor plan")
        break
    default:

        console.log("este plan no existe")
        break
     
}

//estuructura de control de bucles

let contador = 0;

while (contador < 11) {
    console.log("Este es el numero " + contador );
    contador = contador + 1;
}


for (let i = 0 ; i < 111 ; i = i + 10 ){
    console.log("contador con for numero" + i);
}

