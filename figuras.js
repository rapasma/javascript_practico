// Codigo del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm.")

function perimetroCuadrado(lado){

    return lado * 4;
} 
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado+"cm.")

function areaCuadrado(lado){
   return lado * lado;
} 
// console.log("El area del cuadrado mide: " + areaCuadrado +"cm2.")

console.groupEnd();

// Codigo del triangulo



console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const base = 4;


// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + base + "cm.")

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm.")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
} 

function areaTriangulo(base,altura){
    return (base * altura)/2
} 


console.groupEnd();



// console.group("Circulo");
// const radio = 4;
// const diametro = radio * 2;
// const PI = Math.PI;
// console.log("el valor de PI es: " + PI)

function diametroCirculo(radio){
 return radio * 2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return Math.PI * (radio * radio);
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
    
}
console.groupEnd();