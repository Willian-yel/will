const Planta =["   Chile🌶️    "];
const dias =["Abril(del 9 al 22) - Junio(del 7 al 20) " ];
const mes =["   Abril y Junio"];


let tabla = document.createElement("table");
tabla.border = "2";
tabla.bgColor = "#e6b0aa";
tabla.width = "1400px";
tabla.style.height ="500px";

let encabezado = tabla.insertRow();
encabezado.innerHTML = `
<th>Planta</th>
<th>Fecha</th>
<th>Mes</th>
`;
for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = ` 
    <td> <center> ${Planta[i]} </center></td>
    <td> <center> ${dias[i]} </center></td> 
    <td> <center> ${mes[i]} </center></td>
    `;
    
}
for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = ` 
   <th>Procedimiento:</th>
   <td>  <h3>  <br>

    1.-Compra semillas de chile en una tienda o usa chiles secos de tu cocina. <br>

    2.-Llena una maceta con tierra y busca un espacio pequeño<br>
    (los chiles pueden ser sembrados incluso en macetas).<br>

    3.-Siembra las semillas a 1 cm de profundidad.<br>

    4.-Riega ligeramente para mantener la tierra húmeda.<br>

    5.-Deben permaneser en un lugar soleado y calido.<br>

    6.-Cosecha cuando los chiles estén maduros (cambian de color).</h3></td>
`;
}

for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = `  
    <th>Recomendacion:</th>
   <td>  <h3>

    1.- Antes de sembrar, trabaja el suelo con compost o fertilizantes orgánicos para darle nutrientes. <br>

    2.-Temperatura ideal: Las semillas germinan mejor a temperaturas entre 22°C y 30°C. C<br>

    3.-Asegúrate de dejar suficiente espacio entre las plantas (al menos 40-60 cm entre cada planta). <br>

    4.-Los chiles necesitan un riego regular, pero no les gusta tener el suelo encharcado.<br>

</h3></td>
    `;
    
}

    document.getElementById("table").appendChild(tabla);
