const btnincrementar$ = document.getElementById("btnadd");
const btndecrementar$ = document.getElementById("btnless");
const h1$ = document.getElementById("contador");

let contador = 0;
h1$.innerHTML = contador;

console.log(btnincrementar$);
console.log(btndecrementar$);
console.log(h1$);

btnincrementar$.addEventListener("click", function () {
    contador = contador + 100;
  h1$.innerHTML = contador;


});
btndecrementar$.addEventListener("click", function () {
    contador = contador - 100;
    h1$.innerHTML = contador;
  });

  
