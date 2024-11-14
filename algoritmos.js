function saludar(){
    console.log("Hola mundo ");
    alert("Hello world");
}
//Algoritmo que realiza una suma entre dos valores ingresados por el usuario 

function suma(){
    //1. Declarar variables necesarias para la funcion o algoritmo 

    let a = 0;
    let b = 0;
    let operacion;

    //2.solicitar al usuario que ingrese los valores y estos se asignan a las variables 
    
    a = parseInt(prompt("Ingrese el primer valor a sumar: "));
    b = parseInt(prompt("Ingrese el primer valor a sumar: "));

    //3.realizar el procedimiento

    suma = a + b;

    //4.mostrar el resultado 

    alert("el resutado es: " + suma );

}


// 2.algoritmo que realiza un suma, resta, multiplicacion y division entre dos valores ingresado por el usuario 

function opBasicas(){
    let a = 0;
    let b = 0;

    //Se ingresan los valores a sumar
    a = parseInt(prompt("Ingrese el primer valor a sumar: "));
    b = parseInt(prompt("Ingrese el segundo valor a sumar: "));

    suma = a + b;

    //Se da el resultado de la suma
    alert("El resutado es: " + suma );

    //Se ingresan los valores a restar
    a = parseInt(prompt("Ingrese el primer valor a restar: "));
    b = parseInt(prompt("Ingrese el segundo valor a restar: "));

    resta = a - b;

    //Se da el resultado de la resta
    alert("El resultado de la resta es: " + resta)

    //Se ingresan los valores a multiplicar
    a = parseInt(prompt("Ingrese el primer valor a multiplicar: "))
    b = parseInt(prompt("Ingrese el segundo valor a multiplicar: "))

    multiplicacion = a * b

    //Se da el resultado de la multiplicación
    alert("El resultado de la multiplicación es: " + multiplicacion)

    //Se ingresan los valores a dividir
    a = parseInt(prompt("Ingrese el primer valor a dividir: "))
    b = parseInt(prompt("Ingrese el segundo valor a dividir: "))

    division = a / b
    //Se da el resultado de la división
    alert("El resultado de la división es: " + division)
    
}


function cuaNum(){
    let a = 0

    //Se ingresa el valor a calcular
    a = parseInt(prompt("Ingrese el cuadrado a calcular: "))

    //Se multiplica el número por si mismo
    cuadrado = a * a
    
    //Se muestra el resultado en pantalla
    alert("El cuadrado es: " + cuadrado)

}

//4. Realizar el un algoritmo que determine el área de un triángulo a partir de la base y la altura ingresado por el usuario

function triAlt(){
    let base = 0
    let altura = 0

    //Se piden la base y la altura del triángulo
    base = parseInt(prompt("Ingrese la base del triángulo: "))
    altura = parseInt(prompt("Ingrese la altura del triángulo: "))

    //Se multiplican y se dividen 
    triangulo = base * altura / 2

    //Se muestra el resultado en pantalla
    alert("El área del triángulo es de: " + triangulo)
}

//5. Algortimo que determine los milimetros, centrimetros, metros, y kilómetros dado en pulgadas

function pulCent(){

    let pul = 0
    let mil = 0
    let cm = 0
    let mts = 0
    let kms = 0

    pul = parseInt(prompt("Ingrese el valor en pulgadas: "))

    kms = pul * 0.0000259
    cm = pul * 2.54
    mil = pul * 25.4
    mts = pul * 0.0254

    alert ("El resultado en milímetros es " + mil + " el resultado en centímetros es de "+ cm + " el resultado en metros es de " + mts + " y el resultado en kilómetros es de "+ kms)
}




//Algoritmo que determine el mayor de los dos números ingresados por el usuario
function mayorDos(){
    let a = 0
    let b = 0

    //Se piden los dos números
    a = parseInt(prompt("Ingrese el primer número: "))
    b = parseInt(prompt("Ingrese el segundo número: "))

    //Si el número A es mayor entonces se mostrará en pantalla que el mayor es el A
    if (a > b){
        alert("El número mayor es el: " + a)

    //Sino, entonces se sabe que el número B es el que se mostrará en pantalla    
    }
        else if(b > a){
            alert("El número mayor es el: " + b)
        }
    
        else {
            alert("Los números son iguales.")
        }

}


//Algoritmo que determine el menor de los tres números ingresados por el usuario
function menorTres() {

    
    let a = parseInt(prompt("Ingrese el primer número: "));
    let b = parseInt(prompt("Ingrese el segundo número: "));
    let c = parseInt(prompt("Ingrese el tercer número: "));

    //Determinamos cuál es el número mayor entre a, b y c.
    //La constante && (AND) para varios valores.
    if (a < b && a < c) {
        alert("El número menor es: " + a);
    } else if (b < a && b < c) {

        alert("El número menor es: " + b);
    } else if (c < a && c < b){

        alert("El número menor es: " + c)
    }
        else{
            alert("El número menor es: " + c);
        }

    }

//Algoritmo que determine si el numero ingresado es par o impar
function parImpar(){


    let a = parseInt(prompt("Ingrese el primer número: "))
    let b = parseInt(prompt("Ingrese el segundo número: "))

    // Verificamos si 'a' es par o impar
    if (a % 2 === 0) {
        alert("El primer número " + a + " es par.");
    } else {
        alert("El primer número " + a + " es impar.");
    }

    // Verificamos si 'b' es par o impar
    if (b % 2 === 0) {
        alert("El segundo número " + b + " es par.");
    } else {
        alert("El segundo número " + b + " es impar.");
    }
}


//El colegio ABC requiere un sistema que capture el nombre del estudiante, materia y 7 calificaciones entre 1 y 10, con esta informacion determinar si el estudiante aprobo o reprobo teniendo en cuenta que se aprueba con 6.1
function notasPro(){



    let nom = parseInt (prompt("Ingrese el nombre del estudiante: "))
    let mat = parseInt (prompt("Ingrese el nombre de la materia: "))
    let uno = parseInt(prompt("Ingrese la primera nota: "))
    let dos = parseInt(prompt("Ingrese la segunda nota: "))
    let tres = parseInt(prompt("Ingrese la tercera nota: "))
    let cuatro = parseInt(prompt("Ingrese la cuarta nota: "))
    let cinco = parseInt(prompt("Ingrese la quinta nota: "))
    let seis = parseInt(prompt("Ingrese la sexta nota: "))
    let siete = parseInt(prompt("Ingrese la séptima nota: "))

    sumaPromedio = (uno + dos + tres + cuatro + cinco + seis + siete) / 7

    let nombre = nom
    let materia = mat

    if (sumaPromedio > 6.09 ){

        alert("Señor estudiante " + nom + " su materia es " + mat + " y aprobó con: " + sumaPromedio)
    }
    else {
        alert("Señor estudiante " + nom + " su materia es " + mat + " y reprobó con: " + sumaPromedio)
}
 
}

//Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de # numero de años teniendo en cuenta que el banco paga un interes mensual del 0,7% 

function inverCapital(){
    
    let  capital = 0
    let  años = 0
    let  ganancia = 0

    capital = parseInt(prompt("Ingrese el monto a invertir: "))
    años = parseInt(prompt("Ingrese los años de la inversión: "))

    interesGanancia = (capital * 0.0884) * años
    ganancia = capital + interesGanancia

    alert("La ganancia será de: " + interesGanancia)

    alert("La ganancia total es de: " + ganancia)
}


