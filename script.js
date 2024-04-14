// Add delay of 3 seconds
var dhival = Math.floor(Math.random() * 60) + 40;
var dnival = Math.floor(Math.random() * 400) + 400;
var angval = Math.floor(Math.random() * 27) + 13;

setTimeout(function() {
    // Get the element with id="DHI"
    var dhi = document.getElementById('DHI');
    // Change the text of the element
    dhi.innerHTML = dhival;
} , 4000);

setTimeout(function() {
    
    // Get the element with id="DHI"
    var dni = document.getElementById('DNI');
    // Change the text of the element
    dni.innerHTML = dnival;
} , 4000);

setTimeout(function() {
    
    // Get the element with id="DHI"
    var gni = document.getElementById('GNI');
    // Change the text of the element
    var gnival = (dnival * Math.cos(angval * Math.PI / 180)) + dhival;
    gni.innerHTML = Math.floor(gnival);
} , 4000);

setTimeout(function() {
    // Get the element with id="DHI"
    var ang = document.getElementById('ANG');
    // Change the text of the element
    ang.innerHTML = angval;
} , 5000);