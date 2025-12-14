const Planta =["      Frijol🌱      "];
const dias =["Mayo(del 2 al 16) - Junio( del 1 al 14)" ];
const mes =["   Mayo y Junio"];


let tabla = document.createElement("table");
tabla.border = "2";
tabla.bgColor = "#e6b0aa";
tabla.width = "1400px";
tabla.style.height ="500px";


let encabezado = tabla.insertRow();
encabezado.innerHTML = `
<th>Planta</th>
<th>Fecha</th>
<th>mes</th>
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

    1.-Elige un lugar soleado y con tierra suelta. <br>

    2.-Limpia el terreno y, si puedes, échale abono o tierra negra.<br>

    3.-Haz hoyitos de 3 a 5 cm de profundidad, dejando unos 20 cm entre ellos.<br>

    4.-Coloca 1 o 2 frijoles por hoyito y tápalos con tierra.<br>

    5.-Riega suavemente después de sembrar y cada vez que la tierra esté seca (no mojes demasiado).<br>

    6.-Quita la hierba mala que crezca cerca de las plantas.    <br>

    7.-En unos 2 o 3 meses, cuando las vainas estén secas, ya puedes cosechar.</h3></td>
    `;
    
}
for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = `  
    <th>Recomendacion:</th>
   <td>  <h3>

    1.-Mantén el suelo húmedo pero no encharcado. <br>

    2.-Evita el riego excesivo.<br>

    3.-No requiere mucha fertilización, pero podemos agregar compost o fertilizantes orgánicos antes de la siembra. <br>

    4.-Monitorea de 4-5 dias regularmente para detectar plagas y controlar 

</h3></td>
    `;
    
}

    document.getElementById("table").appendChild(tabla);
