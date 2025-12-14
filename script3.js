const Planta =["      Calabaza 🎃    "];
const dias =["Abril(del 1 al 11) - Mayo(del 1 al 11) " ];
const mes =["   Abril y Mayo"];


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

    1.-Favorable en climas calidos la siembra puede extenderse hasta Julio. <br>

    2.-Temperaturas entre 18 y 30º C<br>

    3.-Debe tener mucha luz solar (minimo 6 horas diarias) <br>

    4.-No es abto en el frio.

</h3></td>
    `;
    
}

    document.getElementById("table").appendChild(tabla);
