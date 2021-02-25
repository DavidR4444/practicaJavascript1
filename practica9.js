let dia=prompt("Ingrrese un dia a la semana");
dia=dia.toLowerCase();
if (dia=="lunes" || dia=="martes"|| dia=="miercoles"|| dia=="jueves"|| dia=="viernes") {
    alert("es un dia a la semana "+ dia);
} 
    if (dia=="sabado"||dia=="domingo") {
        alert("es un dia del fin semana "+ dia);
    } else {
        alert("ingrese un dia de la semana");
    }