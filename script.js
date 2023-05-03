function mostrarHora() {
  var fecha = new Date();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  var ampm = horas >= 12 ? 'p.m' : 'a.m';
  horas = horas % 12;
  horas = horas ? horas : 12;
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;
  var horaActual = horas + ":" + minutos + ":" + segundos + " " + ampm;
  document.getElementById("reloj").innerHTML = horaActual;
}

setInterval(mostrarHora, 1000); // Actualiza el reloj cada segundo

var personalizarBtn = document.getElementById("personalizarBtn");
var colorFondo = document.getElementById("colorFondo");
var tamanoTexto = document.getElementById("tamanoTexto");
var fuenteTexto = document.getElementById("fuenteTexto");
var colorBtn = document.getElementById("colorBtn");
var colorPicker = document.getElementById("colorPicker");

personalizarBtn.addEventListener("click", function() {
  colorFondo.click();
});

colorFondo.addEventListener("input", function() {
  document.body.style.backgroundColor = colorFondo.value;
});

tamanoTexto.addEventListener("change", function() {
  document.body.style.fontSize = tamanoTexto.value + "px";
});

fuenteTexto.addEventListener("input", function() {
  document.body.style.fontFamily = fuenteTexto.value;
});

colorBtn.addEventListener("click", function() {
  colorPicker.click();
});

colorPicker.addEventListener("input", function() {
  document.body.style.color = colorPicker.value;
});