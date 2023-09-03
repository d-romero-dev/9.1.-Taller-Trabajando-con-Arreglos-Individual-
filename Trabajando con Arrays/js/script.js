// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla:
function showList(array) {


  // Se filtran los datos del array inicial para almacenar unicamente aquellos que sean de tipo 'string'.

  let filterArray = array.filter((array) => typeof(array)=="string"); 
  
  //Se ordenan los elementos del array de forma alfabetica.

  let sortedArray = filterArray.sort();  
  


  const container = document.getElementById("list");  
  container.innerHTML = "";
    sortedArray.forEach((element) => {               //Se generan las etiquetas 'li' en el documento HTML, a partir de los elementos del array filtrado.
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
   showList(strangeArray);
});

