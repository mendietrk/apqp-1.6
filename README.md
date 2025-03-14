# pfmea
# exchange1
# exchange-2.0
# exchange1
# apqp


Este repositorio contiene el server configurado de tal forma que funciona para despliegue en vercel, en app.js se inicia la aplicacion y de ahi se conecta a src/routes/index.js, el cual contiene la ruta de acceso a la base de datos renderizando en la vista home el formulario para ingresar la clave que permite el acceso a la base de datos remota en mongo atlas.

la apariencia del proyecto es controlado con la vista styles.ejs

Una vez ingresada y validada la contraseña de la base de datos se direcciona a a una lista que contiene los usuarios registrados en users-ejs, desde donde se pueden registrar mas usuarios con la funcion duplicar que se renderiza desde la vista userdup.ejs

este mismo repositorio contiene los archivos para la aplicacion exchange solo se deben usar los archivos terminacion temp.

considerando el siguiente codigo, por favor me puedes crear una vista en ejs que permita ingresar la 

como puedo usar webpack para unir todos los archivos de mi codigo en uno solo.

Se construye una aplicacion que permita el acceso a una url separada para ingresar datos.

La primer vista incluye seleccionar un cliente y las funciones para agregar un numero de parte. con la ruta /par/id del cliente seleccionado.

La vista commercial.ejs contiene el formulario que debe llenarse en una junta de factibilidad, por cuanto se determina el nivel de ppap y las caracteristicas del producto.

En la linea 117 de index.js se reemplaza la plantilla a renderizar cust por commercial, la cual contiene los estilos que permiten el uso de modo oscuro. 

Para poder acceder a la vista el usuario debe elegir su nombre de una lista e ingresar una clave de acceso (password registrado previamente en la base de datos) en un formulario, si es correcta se renderiza comercial1 que es la pagina de edicion. Los accesos generan un registro de fecha y hora, ademas los cambios tambien generan un registro de usuario fecha y hora.

