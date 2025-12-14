const Planta =["      Papaya🍈    "];
const dias =["Marzo(del 2 al 8) - Abril(del 24 al 30) " ];
const mes =["   Marzo y Abril "];


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

    1.-Elige papayas maduras y extrae las semillas de su interior.<br>

    2.-Siembra las semillas en macetas pequeñas o directamente en el suelo.  <br>

    3.-Haz un pequeño agujero de 2-3 cm de profundidad y coloca 2-3 semillas en cada agujero, dejando espacio entre ellos.<br>

    4.-Dales una distancia de 2-3 metros entre cada planta.<br>

    5.-Asegúrate de que la planta reciban suficiente sol..<br>

    6.-Es importante que el suelo esté bien aireado y drenado.<br>

    7.-Fertiliza una vez al mes, especialmente si el suelo carece.</h3></td>
`;
}

for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = `  
    <th>Recomendacion:</th>
   <td>  <h3>

    1.-La papaya necesita mucho sol y un clima cálido (por encima de los 20°C).  <br>

    2.-Revisa la planta por plagas como los pulgones o la mosca blanca.<br>

    3.-La papaya está lista para cosechar cuando empieza a cambiar de color, de verde a amarillo o naranja.<br>

    4.-Busca un lugar donde reciba al menos 8 horas de sol al día.
</h3></td>
    `;
    
}

    document.getElementById("table").appendChild(tabla);
