const Planta =["      Lentejas 🌾    "];
const dias =["Octubre(del 2 al 9) - Diciembre(del 14 al 20) " ];
const mes =["   Octubre y Diciembre"];


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
   <td>  <h3>  

    1.-Retira malas hierbas y piedras del terreno donde sembrarás las lentejas.<br>

    2.-Afloja la tierra con una pala o azada, asegurándote de que esté bien suelta<br>

    3.-Remoja las lentejas durante unas 12 horas antes de sembrarlas.<br>

    4.-Haz líneas de aproximadamente 2-3 cm de profundidad.<br>

    5.-Coloca las lentejas a unos 5 cm de distancia entre ellas.<br>

    6.-Cubre ligeramente las lentejas con tierra.    <br>

    7.-Riega suavemente después de sembrar para humedecer la tierra. <br>
    
    8.-Esperar entre 3 y 4 meses para la cosecha.   </h3></td>
`;
}

for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = `  
    <th>Recomendacion:</th>
   <td>  <h3>

    1.-Necesitan un clima templado, con temperaturas entre 15 y 20°C. <br>

    2.-A las lentejas no les gusta el exceso de humedad.  <br>

    3.- Mantén el área libre de hierbas que puedan competir por los nutrientes.<br>

    4.- Las lentejas estarán listas para cosechar cuando las vainas se ponen secas y marrones.

</h3></td>
    `;
    
}

    document.getElementById("table").appendChild(tabla);
