const Planta =["      Platano 🍌    "];
const dias =["Junio(del 2 al 26) - Septiembre(del 18 al 24 ) " ];
const mes =["   Junio y Septiembre"];


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

    1.-Consige una planta o "hijo" de plátano<br>

    2.-Afloja el terreno. <br>

    3.-Haz un agujero en el suelo que sea lo suficientemente grande como para <br>
    acomodar las raíces de la planta (aproximadamente 30 cm de profundidad y 30 cm de ancho).<br>

    4.-Coloca la planta en el agujero y cubre las raíces con tierra.<br>

    5.-Deja el tallo de la planta por encima de la tierra.<br>

    6.-
Riega bien después de plantar para asentar la tierra alrededor de las raíces.  <br>

    7.-Espera entre 9 a 12 meses para que los plátanos maduren.   </h3></td>
`;
}

for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = `  
    <th>Recomendacion:</th>
   <td>  <h3>

    1.- Asegúrate de que el suelo sea bien drenado y rico en nutrientes.  <br>

    2.-Los plátanos necesitan mucha agua, pero no les gusta el agua estancada.   <br>

    3.- Fertiliza cada 2 o 3 meses con abono orgánico<br>

    4.- Recorta las hojas secas o dañadas para evitar que enfermedades se propaguen.
</h3></td>
    `;
    
}

    document.getElementById("table").appendChild(tabla);
