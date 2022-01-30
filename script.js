var precio = 250000;
var total = "";
var marca = "Zapatillas Nike";
var nombre = "Mercurial superfly 7";
var color = "";
var size = 0.0;
var cantidad = 0;
var descripcion =
  "Zapatilla usada para jugar en corta hierba de fibra sintetica(Alfombra de primera generacion AG) Las orejetas bajas combinadas con el compuesto base de goma crean una mayor friccion para proporcionar una traccion optima para movimientos multidireccionales.";

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var options = {
    fullWidth: true,
    indicators: true,
  };
  var instances = M.Carousel.init(elems, options);
});

function guardarColor(a) {
  if (a == 1) {
    this.color = "rojo";
    var myDiv = document.getElementById("hiveDiv1");
    myDiv.className = "class1";
    var myDiv2 = document.getElementById("hiveDiv2");
    myDiv2.className = "class1";
    var myDiv3 = document.getElementById("hiveDiv3");
    myDiv3.className = "class2";
  }
  if (a == 2) {
    this.color = "amarillo";
    var myDiv = document.getElementById("hiveDiv1");
    myDiv.className = "class2";
    var myDiv2 = document.getElementById("hiveDiv2");
    myDiv2.className = "class1";
    var myDiv3 = document.getElementById("hiveDiv3");
    myDiv3.className = "class1";
  }
  if (a == 3) {
    this.color = "blanco";
    var myDiv = document.getElementById("hiveDiv1");
    myDiv.className = "class1";
    var myDiv2 = document.getElementById("hiveDiv2");
    myDiv2.className = "class2";
    var myDiv3 = document.getElementById("hiveDiv3");
    myDiv3.className = "class1";
  }
}

function guardarSize(size) {
  this.size = size;
}

function guardarTotal() {
  this.cantidad = document.getElementById("cantidad").value;
  var t = this.precio * this.cantidad;
  document.getElementById("total").value = "$" + t;
  this.total = "$" + t;
}

function guardar() {
  alert(
    "Compra exitosa\n " +
      cantidad +
      " " +
      marca +
      " " +
      nombre +
      " de color \n" +
      color +
      ", con un tamanio de " +
      size +
      " " +
      " con un precio en total de " +
      this.total
  );
}

function proximamente() {
  M.toast({ html: "Proximamente.." });
}
