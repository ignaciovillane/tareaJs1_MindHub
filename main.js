/*
Crear una variable llamada miNombre y guardar en ella su primer nombre.
Crear una variable llamada miApellido y guardar en ella su apellido.
Crear una variable llamada miEdad y guardar en ella su edad.
Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.*/
let miNombre ="Ignacio"
let miApellido="Villane"
let miEdad= 29
let miMascota ="Chester"
let edadMascota=6

//Visualizar todas las variables dentro de la consola del navegador 
//escribiendo el nombre de cada una de ellas.
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

//Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.
let nombreCompleto = miNombre +" "+ miApellido
console.log(nombreCompleto)

//Crear una variable llamada textoPresentacion 
//y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.

let textoPresentacion = miNombre +" "+miApellido+" "+miEdad+" "+miMascota+" "+edadMascota+" "+nombreCompleto
console.log(textoPresentacion)

//Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y 
//calcular sus respectivas operaciones con las variables miEdad y edadMascota.

let sumaEdades = miEdad+edadMascota
let restaEdades=miEdad-edadMascota
let productoEdades=miEdad*edadMascota
let divisionEdades=miEdad/edadMascota

console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

/*Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y 
luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.
*/
let nombreIngresado = prompt("Ingrese su nombre:")
console.log(nombreIngresado)

let apellidoIngresado=prompt("Ingrese su apellido:")
console.log(apellidoIngresado)

let edadIngresada=Number((prompt("Ingrese su edad:")))
console.log(edadIngresada)

let nombreMascotaIngresada=prompt("Ingrese el nombre de su mascota:")
console.log(nombreMascotaIngresada)

let edadMascotaIngresada=Number((prompt("Ingrese la edad de su mascota:")))
console.log(edadMascotaIngresada)

/*Crear un objeto llamado alumno con un mínimo de 5 propiedades, 
mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
*/

let alumno ={
    nombre:"Ignacio",
    apellido:"Villane",
    edad:29,
    carrera:"Ingenieria en sistemas",
    legajo:62687
}
console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.carrera)
console.log(alumno.legajo)

/*Crear un objeto llamado mascota con un mínimo de 5 propiedades, 
mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
*/

let mascota ={
    nombre : "Chester",
    edad: 6,
    especie:"gato",
    genero:"macho",
    peso: "4 kg"
}

console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.especie)
console.log(mascota.genero)
console.log(mascota.peso)

/*Crear un array llamado frutas con un mínimo de 5 elementos 
y mostrar por consola el array completo y cada uno de los elementos por separado.
*/

const frutas =["naranja","banana","pera","manzana","uva"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

/*Crear un array llamado números con un mínimo de 5 elementos y
 mostrar por consola el array completo y cada uno de los elementos por separado.
*/

const numeros=[1,2,3,4,5]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

/*Crear un array llamado familia con un mínimo de 5 objetos y
 mostrar por consola el array completo y cada uno de los elementos por separado.
*/

let madre={
   nombre:"Marge",
   apellido:"Bouvier"
}
let padre={
    nombre:"Homero",
    apellido:"Simpson"
}
let hermano=
{
    nombre:"Bart",
    apellido:"Simpson"
}
let hermana=
{
    nombre:"Lisa",
    apellido:"Simpson"
}
let hermana2=
{
    nombre:"Maggie",
    apellido:"Simpson"
}

const familia=[madre,padre,hermano,hermana,hermana2]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

/*Crear una variable llamada textoAleatorio formando una frase 
con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.
*/

let textoAleatorio = frutas[1] +" "+numeros[3]+" "+familia[4]
console.log(textoAleatorio)

/*Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero 
y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo:
 edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
Mi edad es igual a la de mi compañero: false
Mi edad es mayor a la de mi compañero: true
Mi edad es menor a la de mi compañero: false
*/
let edadMia = Number((prompt("Introduce tu edad:")));
console.log(edadMia)
let edadCompañero = Number((prompt("Introduce la edad de tu compañero:")));
console.log(edadCompañero)
const edadesIguales=true
const soyMayor=true 
const soyMenor =true
if(edadMia===edadCompañero)
{
    console.log("Mi edad es igual a la de mi compañero: "+edadesIguales)
  
}
else{
    console.log("Mi edad es igual a la de mi compañero: "+ !edadesIguales)
}

if(edadMia>edadCompañero)
{
    console.log("Mi edad es mayor a la de mi compañero: "+soyMayor)   
}
else{
    console.log("Mi edad es mayor a la de mi compañero: "+ !soyMayor)   
}

if(edadMia<edadCompañero)
{
    console.log("Mi edad es menor a la de mi compañero:"+soyMenor)   
}
else{
    console.log("Mi edad es menor a la de mi compañero:"+ !soyMenor)   
}

/*Compare su edad ingresada por pantalla con prompt() con el numero 18 y 
guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: 
Soy mayor de edad y el valor de la variable.
*/
 let soyMayorDeEdad=0 
if(edadMia > 18)
{
    soyMayorDeEdad=edadMia
    console.log("Soy mayor de edad: "+soyMayorDeEdad)
}

/*Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y 
en una variable llamada puedeSubir el resultado de la operación resultante de si 
la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: 
Puede subir a la atracción y el valor de la variable resultante.
*/
let edadPersona = Number((prompt("Introduce la edad de la persona: ")));
console.log(edadMia)

let alturaPersona= Number((prompt("Introduce la altura de la persona: ")));
console.log(alturaPersona)

const puedeSubir=true
if( edadPersona > 6 && alturaPersona <=120)
{
    
    console.log("Puede subir a la atracción y el valor de la variable resultante: " + puedeSubir)
}
else
{
    console.log("Puede subir a la atracción y el valor de la variable resultante: " + !puedeSubir)
}

/*
Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone 
y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de 
si la persona tiene pase “VIP”
 o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable.
 */
let pase =prompt("Introduzca el pase:")
console.log(pase.toUpperCase())
let saldo = Number((prompt("Introduce el saldo de la persona: ")));
console.log(saldo)

const puedePasar=true

if(pase.toUpperCase()==="VIP"|| saldo > 1000)
{
    console.log("La persona puede pasar: "+pase.toUpperCase()+" " +" "+ saldo +" "+ puedePasar )
}
else
{
    console.log("La persona puede pasar: "+pase.toUpperCase()+" " +" "+ saldo +" "+ !puedePasar )
}