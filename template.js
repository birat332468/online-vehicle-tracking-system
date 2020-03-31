function open_fuel_page(){
  var fuel_button = document.getElementById('fuel_button');
  fuel_button.addEventListener('click', fuel_page, false);
}

function fuel_page() {
   document.getElementById('fuel_page').style.display = "block";
}

function open_service_page(){
  var service_button = document.getElementById('service_button');
  service_button.addEventListener('click', service_page, false);
}

function service_page() {
   document.getElementById('service_page').style.display = "block";
}

function open_maintanence_page(){
  var maintanence_button = document.getElementById('maintanence_button');
  maintanence_button.addEventListener('click', maintanence_page, false);
}

function maintanence_page() {
   document.getElementById('maintanence_page').style.display = "block";
}

window.addEventListener('load', open_fuel_page, false)
window.addEventListener('load', open_service_page, false)
window.addEventListener('load', open_maintanence_page, false)
