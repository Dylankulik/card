function updateDateTime() {
    const now = new Date();
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    const day = days[now.getDay()];
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    
    const dateTimeString = `Actualizado el ${date} ,${time}.`;
    
    const tiempoElements = document.getElementsByClassName("tiempo");
    for (let i = 0; i < tiempoElements.length; i++) {
        tiempoElements[i].textContent = dateTimeString;
    }
}
updateDateTime();
setInterval(updateDateTime, 60000);
setInterval(updateDateTime, 1000);
updateDateTime();



fetch("https://dolarapi.com/v1/dolares")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            // document.getElementById("compra-0").textContent = `$${data[0].compra}`;
            // document.getElementById("venta-0").textContent =` $${data[0].venta}`;
            // document.getElementById("compra-1").textContent = `$${data[1].compra}`;
            // document.getElementById("venta-1").textContent =` $${data[1].venta}`;
            // document.getElementById("compra-2").textContent = `$${data[2].compra}`;
            // document.getElementById("venta-2").textContent =` $${data[2].venta}`;
            document.getElementById("compra-4").textContent = `$${data[4].compra}`;
            document.getElementById("venta-4").textContent =` $${data[4].venta}`;
        })

