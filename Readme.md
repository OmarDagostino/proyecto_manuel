Proyecto Manuel

1) Descripcion General

Se trata de una pagina de oferta de clases de canto o guitarra del Profesor Juan Manuel Falguera.

En la página de Inicio se da una breve descripcion del profesor, la técnica vocal empleada y las clases de guitarra.

La trayectoria del profesor se puede apreciar en la página titulada Acerca de mi.

Los precios de las clases se pueden ver en la página de Tarifas

La pagina de contacto solo ofrece un teléfono para comunicarse (esta pendiente la funcionalidad de mail con un captcha)

En la página de comentarios de Alumnos se pueden ver los mensajes que le han dejado al profesor respecto de las clases y el método de enseñanza.

En la pagina de Agendar una clase (sin duda la mas interesante desde el punto de vista técnico), se puede hacer Log In con el correo electrónico (no se requiere contraseña, y los mails son convertidos automaticamente a minusculas), y si nunca se entró a la pagina, se puede registrar con solo el email, nombre y apellido, teléfono (opcional). No se hace chequeo de existencia de mail, ni se envía mail de confirmación, solo tiene que tener un formato de mail válido. Se utiliza el localstorage para almacenar el ultimo correo electronico con que se hizo Log In.
Una vez hecho el LogIn se muestra un calendario del mes en curso, con los días que tienen disponibilidad horaria con fondo verde. Haciendo click sobre el día elegido, se abre la agenda de horarios disponibles para ese día, dando la posibilidad de agendar una clase (o desagendarla si la persona que hizo el LogIn la había agendado previamente). Solo hay que hacer click sobre el check que dice agendar (o desagendar) y luego apretar el boton de actualizar agenda. Si no se desea actualizar la agenda hay un boton para ello. 
Tanto cuando se hace LogIn o cuando se actualiza un día de la agenda, aparecen las próximas clases agendadas del alumno en una tabla al costado del calendario.
Se puede elegir el mes que se desee, para desplegar la disponibilidad de horarios. Luego de elegir el mes deseado hay que oprimir el boton Ver clases disponibles.
Por último, si se ingresa con el mail del profesor (esto es jmfalguera@gmail.com), que esta grabado como Administrador en la base de datos, se abrira automaticamente una pagina de mantenimiento de datos. 


La pagina de mantenimiento de la agenda solicita una contraseña para asegurarse que administrador sea el que ingresa (todavia no es funcional este requerimiento y solo hay que hacer LogIn sin datos).
Cuando se hace LogIn se desplegaran las funciones de mantenimiento de la agenda, a saber : 
* agregar horarios de clases
* eliminar horarios de clases
* agendar una clase para un alumno
* desagendar una clase
* ver la agenda de un día
* desplegar un calendario mensual con el resumen de actividades de cada dia (clases agendadas y disponibles)
* inactivar un alumno
* re-activar un alumno
* ver el padron de alumnos (activos o inactivos)
* ver todas las clases agendadas de un alumno (futuras o pasadas a eleccion)

2) Tecnologías utilizadas

El proyecto se realizó en HTML, CSS y Javascript. Se utiliza la base de datos gratuita de Firestore (en modo de prueba). 

3) Temas Pendientes de la version 6.3

    a) crear la funcionalidad de un tiempo acotado (puede ser unos 10 minutos), para actualizar la agenda, luego del cual se debe forzar un log off. Durante ese tiempo ningun otro alumno podría estar agendando la clases, en cuyo caso se le informaría que debe ingresar mas tarde por estar la función ocupada por otro alumno.
    Otra alterativa a evaluar es consultar la disponibilidad inmediatamente antes de actualizar el registro de la agenda y dar un mensaje de aviso si el estado de disponible cambio, y en ese caso no actualizar.
    b) crear la funcionalidad de envio de mail al profesor en la pagina de contacto con un captcha (para evitar los boots automáticos) .
    


