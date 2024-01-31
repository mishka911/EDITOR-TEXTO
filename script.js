function agregarElemento() {
    // Crear un nuevo elemento textarea
    var nuevoElemento = document.createElement('textarea');
    nuevoElemento.placeholder = 'Ingresa una ventaja o desventaja';
    
    // Obtener el contenedor de la lista y agregar el nuevo elemento
    var lista = document.getElementById('lista');
    lista.appendChild(nuevoElemento);
}

function imprimirPDF() {
    // Obtener el contenido del encabezado y los editores
    const encabezado = "<h1 style='font-weight: bold; text-align: center;'>Propuesta</h1>";
    const encabezado1 = "<h2><em>Detalle del programa a usar</em></h2>";
    const encabezado2 = "<h2><em>Análisis de ventajas y desventajas</em></h2>";
    const editorContent1 = document.getElementById('editor1').value;
    const editorContent2 = obtenerContenidoEditor2(); // Utilizamos la función para obtener todo el contenido del editor 2

    // Console log para verificar el contenido del editor 2
    console.log(editorContent2);

    // Formatear las ventajas y desventajas como un listado
    const ventajasDesventajas = editorContent2.split('\n').map(item => `<li>${item}</li>`).join('');

    // Crear un objeto de ventana nueva
    const ventana = window.open('', '_blank');

    // Construir el contenido del documento PDF
    ventana.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <style>
            body {
                font-family: 'Nanum Myeongjo', serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }
            .container {
                display: flex;
                justify-content: space-between;
                flex-direction: column; /* Para que los elementos se apilen verticalmente */
                align-items: center; /* Para centrar los elementos horizontalmente */
                
            }
            .column {
                width: 100%; /* Ancho de cada columna */
                margin-bottom: 20px; /* Espacio entre las columnas */
               
            }
         
        </style>
    </head>
    <body>
        <div class="container">
            ${encabezado}
            <br> <br> 
            ${encabezado1}
            <div class="column">${editorContent1}</div>
            <div class="column">
                <ul>
                ${encabezado2}
                    ${ventajasDesventajas}
                </ul>
            </div>
        </div>
    </body>
    </html>
`);

// Cerrar la ventana después de cargar el contenido
ventana.document.close();
// Imprimir el documento
ventana.print();
}

// Función para obtener el contenido del segundo editor
function obtenerContenidoEditor2() {
    const editor2 = document.getElementById('lista'); // Modifica para obtener el contenido del elemento lista
    const elementos = editor2.querySelectorAll('textarea');
    let contenido = '';
    elementos.forEach(elemento => {
        contenido += elemento.value.trim() + '\n';
    });
    return contenido.trim();
}
