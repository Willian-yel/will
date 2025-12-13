 function mostrar() {
            let largo = parseFloat(document.getElementById('largo').value);
            let ancho = parseFloat(document.getElementById('ancho').value);
            let tipo = document.getElementById('tipo').value; 
            let nombre = document.getElementById('nombre').value;

            const distancia = 0.3;

            let op = largo * ancho;

            let suma1 = Math.floor(largo / distancia);
            let suma2 = Math.floor(ancho / distancia);

            let total = suma1 * suma2;
            let semillas = total * 2;
            let kilos = semillas / 3333;

            let contenido = '';
            let tableborder = 1000;

            if (tipo === 'cuadrado' || tipo === 'rectangulo') {
                contenido += `<h3>Hola ${nombre}</h3>`;
                contenido += `<table border="1" cellpadding="5">
                    <tr><th>Área total (m²)</th><td>${op}</td></tr>
                    <tr><th>Orificios posibles</th><td>${total}</td></tr>
                    <tr><th>Total de semillas</th><td>${semillas}</td></tr>
                    <tr><th>Kilos de semillas</th><td>${kilos.toFixed(3)}</td></tr>
                </table>`;
            } else if (tipo === 'triangulo' || tipo === 'irregular') {
                contenido += `<p>El cálculo para este tipo de terreno no está definido en el código.</p>`;
            }

            document.getElementById('resultado').innerHTML = contenido;
        }