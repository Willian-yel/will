const Planta =["      Yuca🍠    "];
const dias =["Julio(del 18 al 24) - Agosto(del 17 al 23) " ];
const mes =["   Julio y Agosto "];


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

    1.-Compra estacas de yuca. Puedes encontrar ramas de yuca (trozos de raíz).<br>

    2.-Selecciona estacas de unos 20-30 cm de largo. <br>

    3.-Añade compost o abono si el suelo es muy pobre, para enriquecerlo y ayudar al crecimiento.<br>

    4.-Planta las estacas en el suelo en un ángulo de unos 45 grados.<br>

    5.-Inserta las estacas a unos 10-15 cm de profundidad en la tierra.<br>

    6.-Deja unos 80-100 cm de distancia.  <br>

    7.-Fertiliza una vez al mes, especialmente si el suelo es pobre.</h3></td>
`;
}

for (let i = 0; i < Planta.length; i++) {
    let fila = tabla.insertRow();
    fila.innerHTML = `  
    <th>Recomendacion:</th>
   <td>  <h3>

    1.-La yuca necesita un clima cálido y soleado.   <br>

    2.-La yuca crece mejor en suelos bien drenados y ligeramente ácidos<br>

    3.-Aplica fertilizantes orgánicos o compost cada 3-4 meses.<br>

    4.-Mantén el área libre de hierbas competidoras.
</h3></td>
    `;
    
}

    document.getElementById("table").appendChild(tabla);
