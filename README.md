# pfmea
# exchange1
# exchange-2.0
# exchange1
# apqp


Este repositorio contiene el server configurado de tal forma que funciona para despliegue en vercel, en app.js se inicia la aplicacion y de ahi se conecta a src/routes/index.js, el cual contiene la ruta de acceso a la base de datos renderizando en la vista home el formulario para ingresar la clave que permite el acceso a la base de datos remota en mongo atlas.

la apariencia del proyecto es controlado con la vista styles.ejs

Una vez ingresada y validada la contraseña de la base de datos se direcciona a a una lista que contiene los usuarios registrados en users.ejs, desde donde se pueden registrar mas usuarios con la funcion duplicar que se renderiza desde la vista userdup.ejs

este mismo repositorio contiene los archivos para la aplicacion exchange solo se deben usar los archivos terminacion temp.

Se construye una aplicacion que permita el acceso a una url separada para ingresar datos.

para mejorar la seguridad, antes de ingresar a la edicion de datos se debe elegir un usuario de una lista cargada por el administrador e ingresar una contraseña, solo si es correcta se puede renderizar la vista que contiene los comandos de edicion en la vista comercial1.ejs

La primer vista incluye seleccionar un cliente y las funciones para agregar un numero de parte. con la ruta /par/id del cliente seleccionado.

La vista commercial1.ejs contiene el formulario que debe llenarse en una junta de factibilidad, por cuanto se determina el nivel de ppap y las caracteristicas del producto.

En la linea 117 de index.js se reemplaza la plantilla a renderizar cust por commercial, la cual contiene los estilos que permiten el uso de modo oscuro. 

Para poder acceder a la vista el usuario debe elegir su nombre de una lista e ingresar una clave de acceso (password registrado previamente en la base de datos) en un formulario, si es correcta se renderiza comercial1 que es la pagina de edicion. Los accesos generan un registro de fecha y hora, ademas los cambios tambien generan un registro de usuario fecha y hora.

DESCRIPCION DE LAS VISTAS

La aplicacion esta diseñada para cargar datos a traves de diferentes formularios en las siguientes categorias:

1.- Usuarios
2.- Organizaciones
3.- Clientes
4.- Productos
5.- Operaciones
6.- Caracteristicas
7.- Modos de falla
6.- Procedimientos

y despues vienen los formatos que se alimentan con la informacion que esta contenida en la base de datos: PSW, flowchart.


cada formulario contiene 3 vistas, en la primera de despliega una lista que contiene los elementos de los cuales cada uno tiene un id. (users.ejs, orgs.ejs, custs.ejs, parts.ejs, opers.ejs, chrcs.ejs, fmeas y procs.ejs) el id sirve para poder ingresar datos al formulario. 

La segunda vista muestra los datos de un solo elemento seleccionado y permite editar el contenido asi como  tambien es posible borrar el elemento completo. (user.ejs, org.ejs)

La tercer vista permite editar un elemento que ya ha sido ingresado previamente (useredit.ejs, orgedit.ejs)

La primer vista se conecta a la segunda por medio de dos etiquetas ejemplo:

<a href="/fme/edit/<%= fmeas[i]._id %>" class="edit-btn">Editar</a>

<a href="/paf/<%= fmeas[i]._id %>" class="edit-btn">Registrar plan de acción</a>

y  tiene correspondencia en las ruta registradas en index.js para renderizar la segunda vista.


router.get("/fme/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const fmeas = await Fme.findById(id);
    res.render("fmeaedit", {fmeas});
});

esta vista da acceso a la siguiente categoria con la etiqueta 

<a href="/paf/<%= fmeas[i]._id %>" class="edit-btn">Registrar plan de acción</a>

a la cual corresponde la siguiente ruta.
 router.get("/fme/:id", async (req, res) => {
    const { id } = req.params;
    const par = await Par.findById(id);
    const fme = await Chr.findById(id);
    const ope = await Ope.findById(id);
    res.render("fmea", {par, ope, fme});

    Los datos de cada elemento se envian a la siguiente vista de manera que se vaya integrando la informacion, lo cual permitira accederlos por medio de funciones de seleccion o busqueda, por ejemplo: un modo de falla esta relacionado a un numero de operacion; un numero de parte; un cliente; y una organizacion. Sin embargo el sistema escribe esta relacion de manera automatica, sin tener que estar ingresando los datos en cada modo de falla, el usuario solo se encargar de registrar la informacion minima requerida en el formulario de cada elemento.

    La relacion que existe entre las bases de datos es muy importante, ya que se petende que el acceso a los datos permite ser filtrados usando diferentes campos, por lo que es necesario que se vaya armando la cadena conforme se ingresa la informacion:

    la base de datos que corresponde a la organización incluye el nombre que posetriormente se usara en los reportes de diagrama de flujo, pcp y fmea. De esta se deriva la bd de clientes, que incluyen el nombre del cliente 




PFMEA

se agrega la plantilla fmeaprint, para renderizar los registros en el formato de la AIAG, esto requiere que se reciban los datos del backend en grupo de elementos, la cantidad de elementos se ajusta en la linea 308 de index.js y el espacio entre elementos se ajusta en la linea 148 de fmeaprint.

PROMPTS usados con IA para mejorar la eficiencia

"considerando el siguiente codigo, por favor me puedes crear una vista en ejs que permita ingresar la"

"como puedo usar webpack para unir todos los archivos de mi codigo en uno solo."