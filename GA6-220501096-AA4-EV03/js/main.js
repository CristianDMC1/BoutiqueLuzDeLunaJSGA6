// Variables

let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let abrir =
  document.getElementById("open"); /*icono pequeño de las 3 barritas en el nav*/
let botones = document.getElementsByClassName("btn-header");
let cerrado = true;

function menus() {
  let Desplazamiento_Actual =
    window.pageYOffset; /*Retorna el número de píxeles que 
                             han sido desplazados en el documento mediante el scroll vertical*/

  if (Desplazamiento_Actual <= 300) {
    nav.classList.remove("nav2"); /*se remueve el nombre de la clase*/
    nav.className = "nav1";
    nav.style.transition =
      "1s"; /*velocidad con que cambia de un estilo a otro*/
    menu.style.top =
      "80px"; /*margen superior del div que contiene los enlaces*/
    abrir.style.color =
      "#fff"; /*se cambia el color de las 3 barritas en el nav*/
  } else {
    nav.classList.remove("nav1");
    nav.className = "nav2";
    nav.style.transition = "1s";
    menu.style.top = "100px";
    abrir.style.color =
      "#000"; /*se cambia el color de las 3 barritas en el nav*/
  }
}

function apertura() {
  if (cerrado) {
    /*al inicio se declaró como verdadero (true)*/
    menu.style.width =
      "70vw"; /*vw hace referencia al ancho, en este caso del div 
                                   que contiene los enlaces. Su efecto solo se ve al hacerse
                                   más pequeña la página. En el css width está en 0*/
    cerrado = false;
  } else {
    menu.style.width = "0%";
    menu.style.overflow = "hidden";
    cerrado = true;
  }
}

window.addEventListener("load", function () {
  /*para que cuando cargue la página realice lo programado*/ menus();
});

/*el siguiente evento es para cuando se dé click en cualquier parte de la ventana hacer...*/
// window.addEventListener('click',function(e){ /*apertura función. e será el parámetro del evento*/
//     console.log(e.target);  /*el target me dice a qué le doy clic, debería aparecer en consola*/
//     if(cerrado==false){
//         let span = document.querySelector('span'); /*se asigna el elemento span de html al span aquí*/
//         if(e.target !== span && e.target !== abrir){
//             menu.style.width = '0%';
//             menu.style.overflow = 'hidden';
//             cerrado = true;
//         }
//     } /*cierro el if padre*/
// /*cierro la función*/});  /*paréntesis de cierre del evento*/

window.addEventListener("scroll", function () {
  /*al hacer scroll, se activa la función menus() ya pogramada*/ /*esto solo se verá si se abre la ventana de Inspección, pestaña console*/ menus();
});
window.addEventListener("resize", function () {
  /*en caso de que el usuario cambie el tamaño de la pantalla, haga esto*/ if (
    screen.width >= 700
  ) {
    /*si el ancho de pantalla es igual o mayor a 700 haga*/
    cerrado = true;
    menu.style.removeProperty("overflow");
    menu.style.removeProperty("width");
  }
});

abrir.addEventListener("click", function () {
  /*al dar clic en abrir (id 'open' en el html) haga lo siguiente*/ apertura();
});

// modal para mostrar descripción de cada producto

const data = {
  camisas: {
    titulo: "Camisas",
    imagen: "./img/hombre1.jpeg",
    descripcion:
      "Tela de lino fino, con diseño exclusivo el cual posee distintos motivos como tambien diferentes modelos",
    precio: "$ 75.000",
  },
  ropaDoportiva: {
    titulo: "Ropa Deportiva",
    imagen: "./img/hombre2.jpeg",
    descripcion:
      "Sueter de tela fria, incluye panataloneta impermeable, diferentes colores y motivos como tambien marcas",
    precio: "$ 58.000",
  },
  pantalones: {
    titulo: "Pantalones",
    imagen: "./img/hombre3.jpeg",
    descripcion:
      "Pantalones de tela rigida de diferentes marcas de excelente calidad. tambien los hay licrados de excelente calidad",
    precio: "$ 96.000",
  },
  pantalonesYBlusas: {
    titulo: "Pantalones y blusas",
    imagen: "./img/dama1.jpeg",
    descripcion:
      "Las Blusas poseen varios diseños que se acomodan a tus gustos, al igual que los pantalones se encuentran de distintos colores y modelos",
    precio: " Blusa : $29.000 - Pantalón $79.000",
  },
  vestidos: {
    titulo: "Vestidos",
    imagen: "./img/dama2.jpeg",
    descripcion:
      "vestidos con diseño exclusivo, los puedes encontrar en diferentes modelos y colores, además de que sus telas varían adaptandose a tus gustos",
    precio: "$ 73.000",
  },
  pijamas: {
    titulo: "Pijamas",
    imagen: "./img/dama3.jpeg",
    descripcion:
      "Pijamas talla única, con telas suaves para que descances como mereces, viene con 3 piezas: Sueter, Pantalónn Largo y Pantalóin corto",
    precio: "$55.000",
  },
  cuadros: {
    titulo: "Cuadros",
    imagen: "./img/arte1.jpeg",
    descripcion:
      "Cuadros personalizados para ocaciones especiales, a tu gusto, tú solo indicanos como lo quieres y nosotros lo fabricamos",
    precio: "van de $35.000 hasta $56.000",
  },
  aretes: {
    titulo: "Aretes",
    imagen: "./img/arte2.jpeg",
    descripcion:
      "Aretes de multiples motivos a bajos precios y de excelente calidad para combinar con cualquiera de tus oufit",
    precio: "$ 15.000",
  },
  llaveros: {
    titulo: "Llaveros",
    imagen: "./img/arte3.jpeg",
    descripcion: "Llaveros en madera, personalizados según sea tu gusto.",
    precio: "van de $25.000 hasta $50.000",
  },
};

// llama a todas las tarjetas que se muestran en productos
const products = document.querySelectorAll(".product");

// Trae el modal de descipción del producto para abrirlo o cerrarlo según el caso
const modal = document.getElementById("modal");

// estos son los elementos que se renderizan en el modal
const imagenModal = document.getElementById("imagenModal");
const tituloModal = document.getElementById("tituloModal");
const descripcionModal = document.getElementById("descripcionModal");
const precioModal = document.getElementById("precioModal");

// botón para cerrar el modal
const botonCerrar = document.getElementById("cerrar");

products.forEach((product) => {
  product.addEventListener("click", (evento) => {
    modal.toggleAttribute("hidden");
    const nombre = evento.target?.name;
    console.log(data[nombre]);
    imagenModal.setAttribute("src", data[nombre].imagen);
    tituloModal.innerHTML = data[nombre].titulo;
    descripcionModal.innerHTML = data[nombre].descripcion;
    precioModal.innerHTML = data[nombre].precio;
  });
});
botonCerrar.addEventListener("click", () => {
  modal.toggleAttribute("hidden");
});
