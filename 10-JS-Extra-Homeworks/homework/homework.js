// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = []
  var clase = Object.keys(objeto)
  for (i=0;i<clase.length;i++){
    array[i] = [clase[i],objeto[clase[i]]]} 
    return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objeto = {}
  for (i=0;i<string.length;i++)
  {
  var caracter = string[i]
  if (objeto[caracter]){objeto[caracter]++}
  else  {Object.defineProperty(objeto, caracter,{value:1,writable:true,enumerable:true})}
  }
  ///Convierto el Obj en un Array de Arrays 
  var arrayClaves = Object.keys(objeto)
  var array2 = []
  for (i=0;i<arrayClaves.length;i++){
      var arrayInterno=[arrayClaves[i],objeto[arrayClaves[i]]]
      array2.push(arrayInterno)
  }
  /// Ordeno el Array  alfabeticamente
  array2.sort()
  ///devuelvo el array ordenado a un obj
  var objetoOrdenado = {}
  for(i=0;i<array2.length;i++){
      Object.defineProperty(objetoOrdenado,array2[i][0],{value:array2[i][1],writalbe:true,enumerable:true})
  }
  ///Devuelvo el Objeto Ordenado
  return objetoOrdenado
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  var mayusculas =''
  var minusculas=''
  for (i=0;i<s.length;i++){
    if (s.charAt(i)===s.charAt(i).toUpperCase()){mayusculas=mayusculas+s.charAt(i)}else{minusculas=minusculas+s.charAt(i)}
    
  }return mayusculas+minusculas
}    


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nuevaStr = ''
  for (i=0;i<str.length;i++){
    if (str.charAt(i)===' ')
    {
      for(var i2=i-1;str.charAt(i2)!=' ' && i2>=0 ;i2--){nuevaStr=nuevaStr+str.charAt(i2)}
      nuevaStr=nuevaStr+' '
    }
    if (i===str.length-1){for(i3=i;str.charAt(i3)!=' ';i3--){nuevaStr=nuevaStr+str.charAt(i3)}}
  }
  return (nuevaStr)
}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroInvertido = ''
  var numeroString = numero.toString()
    for(i=numeroString.length;i>=0;i--){
      numeroInvertido=numeroInvertido+numeroString.charAt(i)}
  if(numeroString===numeroInvertido){return 'Es capicua'}else{return 'No es capicua'}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = ''
  for(i=0;i<cadena.length;i++){
    if(cadena.charAt(i)!='a' && cadena.charAt(i)!='b' && cadena.charAt(i)!='c'){nuevaCadena=nuevaCadena+cadena.charAt(i)} 
  }
  return nuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (a,b){
    if(a.length>b.length){return 1}
    if(a.length<b.length){return -1}
    return 0
  })
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  //.slice(n.m) = copia  n:desde m:hasta no incluido
  //array.forEach(function (e)
  var nuevoArray = []
  var sw=0
  arreglo1.forEach(function (a)
                          { 
                            if(nuevoArray.lastIndexOf(a)===-1)
                             {
                                  sw=0
                                  for (i=0;i<arreglo2.length && sw===0;i++)
                                  {
                                   if(a===arreglo2[i]){nuevoArray.push(a);sw=1}
                                  }
                             }
                          }
                  )
  return nuevoArray
}                          



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

