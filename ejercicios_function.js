
//Ejercicio fechaYHora

var fechaYHora = function() {
  console.log("Hoy es "+Date())
}
fechaYHora()
fechaYHora()
fechaYHora()
fechaYHora()
fechaYHora()

// Ejercicio: decirHola

var saludo = function (nombre){
  console.log ("Hola como estas? "+nombre)
}

saludo("Pepe")

// Ejercicio Matemática simple

/* Creá una función que se llame tripler que tome un número como input (osea, como parametro) y retorne el triple de ese valor.
Creá una función multiply que tome dos números como parámetros y devuelva el producto de los dos.
Creá una función divide que tome dos números como parámetros y devuelva el resultado de dividir el primero por el segundo.
Creá una función reminder que tome dos números como parámetros y devuelva el resultado del módulo del primero sobre el segundo
Usando solamente las funciones que escribieron arriba, y sin otros operadores, calculen el valor de triplicar 5,
luego multiplicar eso por 12, dividir por 12 y encontrar el resto de dividir eso en 3. */

var tripler = function (num) {
  return (num*num*num)
}

var multiply = function(num,num){
  return (num*num)
}

var divide = function(x,y){
  return (x/y)
}

var reminder = function(x,y){
  return (x%y)
}

reminder(divide(multiply(tripler(5),12),12),3)


//Ejercicio esPar()
//Crea una función esPar que tome un número como argumento y devuelva true si es par o false si no lo es.

var esPar = function (num) {
  if (num%2===0){
    console.log("true")
  } else {
    console.log("false")
  }
}

//Ejercicio contarDeA_n
//Escribí una función llamada contarDeA_n que tenga los parámetros contar_de_a y contar_hasta,
//y escriba en la consola los números desde 1 hasta contar_hasta en intervalos de contar_de_a.
//Por ejemplo: si ponemos 2 y 10 como parámetros, la función debería contar de a dos hasta llegar a diez.

var contador = 0
var contarDeA_n = function(contar_desde,contar_hasta){
  while(contador<contar_hasta){
    console.log(contador+=contar_desde)
}
}


// Ejercicio FizzBuzz 2: La venganza de FizzBuzz

/*Escribe una función fizzBuzz2 que tome dos strings como argumento y reimplemente
el fizzbuzz pero con esas dos palabras en vez de fizz y buzz.
(Escribir los número del 1 al 100. Para múltiplos de 3 escribir la palabra1,
para múltiplos de 3 escribir la palabra2, y para múltiplos de 3 y 5 la combinación de ambas palabras)
Haz que fizzBuzz2 devuelva un string con los números separados por comas.
Mejora la función para que el usuario pueda ingresar un argumento contar_hasta
Mejora la función para que el usuario pueda ingresar fizznum y buzznum para que la
sustitución de palabras ocurra en los números múltiplos de los nuevos argumentos de entrada, en vez de sólo 3 y 5.*/

var fizzBuzz2 = function(){
  var n=1
  var contar_hasta=prompt("Hasta que numero deseas contar?")
  var string1 = prompt("Ingresa una palabra para sustituir un numero:")
  var num_1 = prompt("Ingresa el primer numero a sustituir:")
  var string2 = prompt("Ingresa otra palabra para sustituir un numero:")
  var num_2 = prompt("Ingresa el segundo numero a sustituir:")

      while (n<=contar_hasta) {
        if (n%num_1==0&&n%num_2==0){
          console.log (string1+string2)
          } else if (n%num_1==0){
            console.log (string1)
            }   else if (n%num_2==0) {
                console.log (string2)
              }  else console.log(n+",")
              n++
            }
          }


// Ejercicio factorial()
/* Crea una función factorial que tome un número como argumento y devuelva el factorial de ese número.
Osea que si hacemos factorial(5) la función debería hacer 5x4x3x2x1, y devolver el resultado, osea 120.
Algo que tenés que tener en cuenta: el factorial de 0 es igual a 1, osea que si el usuario ingresa factorial(0)
el resultado debería ser 1.
Algunos tips:
Vas a necesitar hacer una variable para almacenar el resultado.
Vas a necesitar hacer un loop para recorrer hasta el número que recibís como input.
En cada vuelta del loop vas a tener que actualizar el resultado.
Ojo con el caso en que el usuario pone 0, o un número negativo.
Vas a tener que hacer algo para verificar eso. Podés utilizar estos ejemplos para ver si tu código funciona.
factorial(5) //120
factorial(2) //2
factorial(10) //3628800
factorial(0) //1*/

var resultado = 0
var factorial = function (num){
  if (num==0){
    return 1
  } else {
    resultado = num*factorial(num-1)
  }
  return resultado
}

// Ejercicio: Fibonacci

/*Por definición, los dos primeros números de la serie de Fibonacci son el 0 y el 1,
los siguientes números de la serie son la suma de los dos anteriores.
Por ejemplo, los primeros diez números de la serie son:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
Escribí una función que acepte un número n y devuelva el n-ésimo término de la serie de Fibonacci.*/

function fibonacci(num) {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2)
}
