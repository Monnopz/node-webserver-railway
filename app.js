require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT; // Lee el puerto del enviroment (local o produccion)

// Middleware, funcion que se ejecuta antes de hacer otra accion
// Servir contenido estatico
// El archivo a servir debe ser nombrado mediante estandar
// Por ejemplo, index. Si se llamara diferente, habria que especificarlo en la url
// app.use( express.static('public') ); // Esta linea (use) tiene prioridad sobre las rutas de abajo (get)

// app.get('/hola-mundo', (request, response) => { //Las rutas se definen asi
//     response.send('Hello World');
// });

// app.get('*', (request, response) => { //Comodin, incluye sub-urls
//     response.sendFile(__dirname + '/public/404.html'); //__dirname es una variable global que indica el path absoluto desde donde esta la raiz del proyecto de node
// });

// app.listen(port, () => {
//     console.log('Corriendo en el puerto', port);
// });

//Extensions es para reconocer archivos sin sus extensiones
// app.use( express.static('public', { extensions: ['html'] }) ); // Esta linea (use) tiene prioridad sobre las rutas de abajo (get)

// app.get('*', (request, response) => { //Comodin, incluye sub-urls
//     response.sendFile(__dirname + '/public/404.html'); //__dirname es una variable global que indica el path absoluto desde donde esta la raiz del proyecto de node
// });

// app.listen(port, () => {
//     console.log('Corriendo en el puerto', port);
// });


// Handlebars son paginas dinamicas renderizables desde el backend. Son recomendados para soluciones sencillas.
// Handlebars es una extension de un lenguaje llamado Mustache que tiene como peculariedad el uso de dobles llaves {{}}
// Handlebars prerenderiza en el backend la pagina y entrega al cliente la pagina ya hecha, en un unico elemento
// Cuando son soluciones mas complejas, se utiliza Angular, Vue, React, etc
// Otra ventaja de los Handlebars es que se puede reutilizar codigo e implementarlo en otras vistas
//MVC, Modelo Vista Controlador, parte del funcionamiento de Handlebars
//La carpeta de vistas se tiene que llamar views, por defecto, debido a la configuracion predeterminada de Handlebars

// Handlebars
app.set('view engine', 'hbs'); // Setear el engine de Handlebars; quitar esta linea si no queremos renderizar vistas en el backend
hbs.registerPartials(__dirname + '/views/partials', (err) => {}); //Para utilizar partials, o componentes que se repetiran en varias plantillas .hbs

app.use( express.static('public', { extensions: ['html'] }) ); // Esta linea (use) tiene prioridad sobre las rutas de abajo (get)

app.get('/', (request, response) => { 
    response.render('home', {
        nombre: 'Monnopz',
        titulo: 'Curso de Node'
    }); // Renderiza, con hbs, la vista; el segundo argumento son las opciones a enviar a la plantilla
});

app.get('/generic', (request, response) => { 
    response.render('generic', {
        nombre: 'Monnopz',
        titulo: 'Curso de Node'
    }); // Renderiza, con hbs, la vista; el segundo argumento son las opciones a enviar a la plantilla
});

app.get('/elements', (request, response) => { 
    response.render('elements', {
        nombre: 'Monnopz',
        titulo: 'Curso de Node'
    }); // Renderiza, con hbs, la vista; el segundo argumento son las opciones a enviar a la plantilla
});


app.get('*', (request, response) => { //Comodin, incluye sub-urls
    response.sendFile(__dirname + '/public/404.html'); //__dirname es una variable global que indica el path absoluto desde donde esta la raiz del proyecto de node
});

app.listen(port, () => {
    console.log('Corriendo en el puerto', port);
});