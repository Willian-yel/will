const Planta =["      Maiz🌽         "];
const dias =["Enero(del 20 al 26) - Febrero(del 15 al 19)" ];
const mes =["   Enero y Febrero"];


let tabla = document.createElement("table");
tabla.border = "2";
tabla.bgColor = "#e6b0aa";
tabla.width = "1400px";
tabla.style.height ="500px";


let encabezado = tabla.insertRow();
encabezado.innerHTML = `
<th class = "tabla">Planta</th>
<th class = "tabla">Fecha</th>
<th class = "tabla">Mes</th>
`;
for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = ` 
    <td> <center class = "t"> ${Planta[i]} </center></td>
    <td> <center class = "t"> ${dias[i]} </center></td> 
    <td> <center class = "t"> ${mes[i]} </center></td>
    `;
    
}
for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = ` 
   <th class = "t">Procedimiento:</th>
   <td class = "t">  <h3>
    1.-Busca un lugar soleado con tierra suelta y sin piedras. <br>

    2.-Limpia el terreno y si puedes, mézclale un poco de abono o compost.<br>

    3.-Haz hoyitos separados unos 30 cm entre sí.<br>

    4.- Pon 1 o 2 semillas de maíz en cada hoyito y cúbrelas con un poco de tierra.<br>

    5.-Riega con cuidado, sin encharcar, y sigue regando cada 3-4 días.<br>

    6.-Quita las malas hierbas que crezcan cerca.<br>

    7.-Después de unos 3 meses, cuando las mazorcas estén grandes y secas, ¡ya puedes cosechar!</h3></td>
    `;
    
}
for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = ` 
   <th class = "t">Recomendaciones:</th>
   <td class = "t">  <h3> 
    1.-En caso de no llover, riega despues de sembrar para activar la germinacion. <br>

    2.-Aplicar Fertilizantes nitrogenado(como urea).<br>

    3.-El fertilizante se aplica en dos etapas:<br><br>

    -A los 15-20 dias de sembrado.<br><br>

    -Y nuevamente cuendo el maiz tiene 50-60 cm de altura.<br>
    `;
}
    document.getElementById("table").appendChild(tabla);
