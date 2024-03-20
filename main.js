//Variables

//alert("JavaScript funcionando correctamente");
let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2 * PI;
const miNombre = "Pablo";
let miNumeroFav = 33;
let bool;
console.log(miNombre.length);
console.log(typeof miNumeroFav);
console.log(
  "Mi nombre es " + miNombre + " y mi numero favorito es " + miNumeroFav
);
const texto = "Seré un crack en JavaScript al terminar el bootcamp";
console.log(texto.toUpperCase());
const hola = "Hola soy un crack";
console.log(hola.substring(0, 4));
miNumeroFav = miNumeroFav.toString();
console.log(typeof miNumeroFav);
let variable = "Variable";
let templateLiteral = `Esta es la varible: ${variable}`;
console.log(templateLiteral);
console.log(PI.toFixed(2));

//Arrays

const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ["Hola", "Mundo"];
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
const arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];
console.log(loGuardoTodo.length);
const nuevo = "nuevo";
loGuardoTodo.push(nuevo);
console.log(loGuardoTodo);
console.log(loGuardoTodo[1]);
loGuardoTodo.push("Euralio");
console.log(loGuardoTodo);

//Objetos

const Coche = {
  marca: "BMW",
  modelo: "M2",
  matricula: "4125MCS",
};

const Casa = {
  codPostal: 46017,
  calle: "carteros",
  portal: 45,
  piso: 11,
};

const FullStackDeveloper = {
  lenguajes: ["javascript", "php", "java"],
  proyectos: ["mi página personal", "carta"],
};

const Perro = {
  nombre: "",
  raza: "golden retriever",
  color: "blanco",
  edad: 2,
};

const Noticia = {
  titular: "gwetgowm",
  cuerpo: "evbwnetbonetgnuwoeutnguetgonwe",
};

const Persona = {
  nombre: "Pablo",
  apellidos: "Gonzalez Sanchez",
  edad: 23,
};

console.log(Persona.nombre);
console.log(FullStackDeveloper.lenguajes[0]);

const Portatil = {
  marca: "Apple",
};

console.log(Portatil.marca);

const Concierto = {
  grupos: ["AJR", "Imagine Dragons"],
};

console.log(Concierto.grupos);

const Led = {
  lampara1: "rojo",
  lampara2: "verde",
  lampara3: "azul",
};

const RGB = [Led.lampara1, Led.lampara2, Led.lampara3];
console.log(RGB);

const O_Error = {
  codigo: "Error",
};

console.log(O_Error.codigo);

const Grupo = {
  integrantes: ["primero", "segundo", "tercero"],
};

const integrantes = Grupo.integrantes[1];
console.log(integrantes);

const Impresora = {
  tinta: {
    rojo: 12,
    verde: 43,
    azul: 32,
  },
};

const nivelesTinta = [
  Impresora.tinta.rojo,
  Impresora.tinta.verde,
  Impresora.tinta.azul,
];
console.log(nivelesTinta);

const Movil = {
  especificaciones: "A16",
};

const especificaciones = Movil["especificaciones"];
console.log(especificaciones);

Portatil.marca = "MSI";
console.log(Portatil.marca);

Concierto.grupos.push("Guns N' Roses");
Concierto.fecha = "2024-03-10";
console.log(Concierto.fecha);
Concierto.fecha = new Date();
console.log(Concierto.fecha);

Grupo.integrantes.pop();
console.log(Grupo.integrantes.length);
