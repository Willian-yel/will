const Planta =["      Tomate🍅    "];
const dias =["Abril(del 9 al 15) - Mayo(del  7 al 13) " ];
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
   <td>  <h3>  

    1.-Ubicaun lugar soleado con buena tierra.<br>

    2.-Haz agujeros de 1 cm de profundidad.<br>

    3.-Pon varias semillas en cada agujero de 8-9 semillas.<br>

    4.-Mantén la tierra húmeda, pero no encharcada.<br>

    5.-Deja unos 60 cm entre cada planta para que crezcan bien.<br>

    6.-Cuando tengan varios tallos, corta los que no crecen bien para que la planta concentre energía.    <br>

    7.-Cuando los tomates estén rojos y firmes, ¡cosechalos!.</h3></td>
`;
}

for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = `  
    <th>Recomendacion:</th>
   <td>  <h3>

    1.-El tomate necesita calor, temperaturas entre 20-30°C.. <br>

    2.-Esta planta prefieren suelos ligeros, bien aireados y ricos en materia orgánica.  <br>

    3.-El tomates necesitan espacio para crecer.<br>

    4.-Los tomates requieren riego constante, pero no toleran el exceso de agua. 

</h3></td>
    `;
    
}

    document.getElementById("table").appendChild(tabla);
