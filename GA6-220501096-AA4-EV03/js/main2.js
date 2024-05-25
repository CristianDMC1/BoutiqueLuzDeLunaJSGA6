//variables para llamar a los elementos
let nav = document.getElementById("nav"); /*aqui estoy capturando los elementos de HTML*/
let menu = document.getElementById("enlaces");
let divMenu = document.getElementById("open");
let botones = document.getElementsByClassName("btn-header");
let cerrado = true;

function menus() {
  let Desplazamiento_Actual = window.scrollY; /* va a guardar el valor de desplazamiento vertical en pixeles*/
  if (Desplazamiento_Actual <= 300) {
    nav.classList.remove("nav2"); /* removemos un nombre de clase*/
    nav.className = ("nav1"); /* asignamos otro nombre de clase*/
    nav.style.transition = "1s"; /* cuanto tiempo tarda en pasar al otro estilo */
    divMenu.style.color = "#fff";
  } // este es el cierre de if
  else {
    // si el desplazamiento es superior a 300
    nav.classList.remove("nav1");
    nav.className = ("nav2");
    nav.style.transition = "1s"; /* cuanto tiempo tarda en pasar al otro estilo */
    divMenu.style.color = "#000";
  }
} // cierro la función Menus
// trabajando con boliano
function apertura() {
  if (cerrado) {
    // es decir, si es verdadero
    menu.style.width = "70vw";
    cerrado = false; /*como el menú está abierto, es fslso que esté cerrado*/
  } else {
    menu.style.width = "0%";
    menu.style.overflow = "hidden";
    cerrado = true; // si lo estoy cerrando, ya es  verdadero
  }
}

window.addEventListener("load", function () {
  menus();
});

// vamos a programar un evento para cuasndo se de clic
window.addEventListener("click", function (e) {
  console.log(e.target); // muestra donde estoy dando clic
  if (cerrado==false) {
    let span = document.querySelector("span");
    if (e.target !== span && e.target !== divMenu) {
      menu.style.width = "0%";
      menu.style.overflow = "hidden";
      cerrado = true;
    }
  }
});

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  menus();
});

Window.addEventListener("resize", function () {
  if (screen.width >= 700) {
    cerrado = true;
    menu.style.removeProperty("overflow");
    menu.style.removeProperty("width");
  }
});

divMenu.addEventListener("click", function () {
  apertura();
});
