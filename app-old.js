const http = require('http');

// // http, nativo de NodeJS
// http.createServer((request, response) => {
//     // request, lo que solicitan
//     // response, lo que el servidor responde al cliente
//     // url : / es la ruta principal
//     // en la request puedo mandar headers, informacion adicional. Util para mandar tokens

//     // response.writeHead(404); // Devuelve en su header un status de 404 que significa que el recurso no fue encontrado
//     // response.writeHead(200); // Devuelve en su header un status de 200 que significa que el recurso se encontró y se devolvió correctamente

//     // response.writeHead(200, { 'Content-Type': 'text/plain' }); // Especifica los headers del backend, en este caso, retorna un archivo de texto
//     // response.write('Hola Mundo'); //Escribe en el stream

//     // response.writeHead(200, { 'Content-Type': 'application/json' }); // Especifica los headers del backend, en este caso, retorna un archivo json
//     // const persona = {
//     //     id: 1,
//     //     nombre: 'Guillermo'
//     // }
//     // response.write(JSON.stringify(persona)); //Escribe en el stream

//     response.setHeader('Content-Disposition', 'attachment; filename=lista.csv'); // Le indica al navegador que descargue el archivo con una extension de archivo y nombre especificos
//     response.writeHead(200, { 'Content-Type': 'application/csv' }); // Especifica los headers del backend, en este caso, retorna un archivo Excel CSV
//     response.write('id,nombre\n');
//     response.write('1,Guillermo\n');
//     response.write('2,Francisco\n');
//     response.write('3,Osvaldo\n');
//     response.write('4,Angel\n');

//     response.end(); //Le dice al stream que ya no se escribiran mas datos
// }).listen(8080); //listen, se pone el puerto en el que se levantará la app

http.createServer(( request, response ) => {
    response.write('Hola Mundo');
    response.end(); //Le dice al stream que ya no se escribiran mas datos
}).listen(8080);

console.log('Escuchando en el puerto', 8080);