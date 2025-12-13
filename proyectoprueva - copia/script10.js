const Planta =["      Cilatro🌿    "];
const dias =["Octubre(del 17 al 23) - Noviembre(del 16 al 22 de) " ];
const mes =["   Octubre y Noviembre "];


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

    1.-El cilantro necesita entre 4-6 horas de sol al día.<br>

    2.-Afloja la tierra con una pala o azada.  <br>

    3.-Afloja la tierra con una pala o azada. <br>

    4.-Añade compost o abono para enriquecer la tierra si está pobre en nutrientes.<br>

    5.-Siembra las semillas de cilantro directamente en el suelo.<br>

    6.-Haz surcos poco profundos (unos 1-2 cm) y espacia las semillas a unos 2-3 cm de distancia entre sí. <br>

    7.-Cosecha las hojas cuando la planta tenga al menos 15 cm de altura.<br>
    
    8.-Deshierba para evitar que las malas hierbas compitan con tu cilantro por nutrientes.</h3></td>
`;
}

for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = `  
    <th>Recomendacion:</th>
   <td>  <h3>

    1.-El cilantro necesita sol, pero no demasiado calor..   <br>

    2.-Siembra las semillas a 1-2 cm de profundidad en hileras separadas por 20-25 cm<br>

    3.-El cilantro necesita un riego constante, pero sin encharcar.<br>

    4.-El cilantro no requiere mucho fertilizante. 
</h3></td>
    `;
    
}

    document.getElementById("table").appendChild(tabla);
