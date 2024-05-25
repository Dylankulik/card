var btn = document.getElementById("btn")
var venta = document.getElementById("cal-venta")
var compra = document.getElementById("cal-compra")
btn.onclick = function(){
    btn.classList.toggle("activate");
    if (btn.classList.contains("activate")) {
        venta.style.display = "block";
        compra.style.display = "none";
    } else {
        venta.style.display = "none";
        compra.style.display = "block";
    }
}



