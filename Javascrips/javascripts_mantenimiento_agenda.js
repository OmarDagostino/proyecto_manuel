window.addEventListener('DOMContentLoaded',() => {})
const log_entrar = document.getElementById("boton_de_login")
log_entrar.addEventListener('click', logIn )
const log_salir = document.getElementById("boton_de_logout")
log_salir.addEventListener('click', logOut )
const log_agregar = document.getElementById("agregar_clases")
log_agregar.addEventListener('click', agregarClases )
const log_eliminar = document.getElementById("eliminar_clases")
log_eliminar.addEventListener('click', eliminarClases )
const log_agendar = document.getElementById("agendar_clases")
log_agendar.addEventListener('click', agendarClases )
const log_desagendar = document.getElementById("desagendar_clases")
log_desagendar.addEventListener('click', desagendarClases )
const log_ver = document.getElementById("ver_agenda")
log_ver.addEventListener('click', verAgenda )
const log_inactivar = document.getElementById("inactivar_alumno")
log_inactivar.addEventListener('click', inactivarAlumno )
const log_reactivar = document.getElementById("reactivar_alumno")
log_reactivar.addEventListener('click', reactivarAlumno )
const log_volver_i = document.getElementById("volver_inicio")
log_volver_i.addEventListener('click', volverInicio )
const log_volver_r = document.getElementById("volver_reserva")
log_volver_r.addEventListener('click', volverReservarTurno )
let fecha
let hora
let tiene_error = false
let fecha_a_visualizar
import { obtenerAgenda, obtenerAlumno } from "./javascripts_mantenimiento_agenda_firestore.js";
import { crear_una_clase } from "./javascripts_mantenimiento_agenda_firestore.js";
import { eliminar_una_clase } from "./javascripts_mantenimiento_agenda_firestore.js";
import {agendar_una_clase} from "./javascripts_mantenimiento_agenda_firestore.js";
import {desagendar_una_clase} from "./javascripts_mantenimiento_agenda_firestore.js";
import {inactivarUnAlumno} from "./javascripts_mantenimiento_agenda_firestore.js";
import {reactivarUnAlumno} from "./javascripts_mantenimiento_agenda_firestore.js";
import {datos} from "./javascripts_mantenimiento_agenda_firestore.js";
import {existe_agenda} from "./javascripts_mantenimiento_agenda_firestore.js";
import {existe_alumno} from "./javascripts_mantenimiento_agenda_firestore.js";
import {datosAlumno} from "./javascripts_mantenimiento_agenda_firestore.js";
function validarFechaYHora (fecha, hora)
{
    tiene_error = false
    if (hora < 1 || hora >= 25 || isNaN(hora) )
    {
        document.getElementById("mensaje").innerHTML = ("Debes ingresar un horario valido");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("Red");
        document.getElementById("mensaje").style.color = ("Yellow");        
        tiene_error = true
    }
else if (fecha == "" )
    {
        document.getElementById("mensaje").innerHTML = ("Debes ingresar una fecha");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("Red");
        document.getElementById("mensaje").style.color = ("Yellow");        
        tiene_error =true
    }
}
async function agregarClases ()
{
  
    fecha= document.getElementsByName("fecha-n")[0].value 
    hora = parseInt(document.getElementsByName("hora-n")[0].value) 
    document.getElementById("mensaje").style.display = ("none");
    validarFechaYHora (fecha, hora)
    if (tiene_error) 
    {
      
    }
    else 
    {
        let fechaYHora = (fecha+"-"+ hora)
        await obtenerAgenda (fechaYHora)
        if (existe_agenda) 
        {
        document.getElementById("mensaje").innerHTML = ("La clase que quieres crear ya existe");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("Red");
        document.getElementById("mensaje").style.color = ("Yellow");    
        }
        else
        {
            crear_una_clase (fechaYHora)
        document.getElementById("mensaje").innerHTML = ("La clase "+ fechaYHora + " ha sido incorporada a tu agenda");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("lightgreen");
        document.getElementById("mensaje").style.color = ("black");
        const myForm = document.getElementById("miformulario");
        myForm.reset();   
        } 
      
    }
}
async function eliminarClases ()
{
    fecha= document.getElementsByName("fecha-e")[0].value 
    hora = parseInt(document.getElementsByName("hora-e")[0].value) 
    document.getElementById("mensaje").style.display = ("none");
    validarFechaYHora (fecha, hora)
    if (tiene_error) 
    {
   
    }
    else 
        {
            let fecha_a_eliminar = (document.getElementsByName("fecha-e")[0].value +"-"+ hora);
            await obtenerAgenda (fecha_a_eliminar);
        if (existe_agenda) 
        {
            eliminar_una_clase (fecha_a_eliminar)
            document.getElementById("mensaje").innerHTML = ("La clase " + fecha_a_eliminar + " ha sido borrada de tu agenda");
            document.getElementById("mensaje").style.display = ("Block");
            document.getElementById("mensaje").style.backgroundColor = ("lightgreen");
            document.getElementById("mensaje").style.color = ("black");    
            const myForm = document.getElementById("miformulario");
            myForm.reset();
        }
        else
        {
        document.getElementById("mensaje").innerHTML = ("La clase que quieres eliminar no existe");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("Red");
        document.getElementById("mensaje").style.color = ("Yellow");    
        } 
      
    }
        
}
async function  agendarClases ()
{
    fecha= document.getElementsByName("fecha-a")[0].value 
    hora = parseInt(document.getElementsByName("hora-a")[0].value) 
    document.getElementById("mensaje").style.display = ("none");
    validarFechaYHora (fecha, hora)
    if (tiene_error) 
    {
      
    }
    else 
    {
        let fechaYHora = (fecha+"-"+ hora)
        await obtenerAgenda (fechaYHora)
        console.log ("disponibilidad")
        console.log (existe_agenda)
        console.log (datos.docData.disponibilidad)
        if (existe_agenda && datos.docData.disponibilidad == "1")  
            {
                agendar_una_clase 
                (
                fechaYHora,
                document.getElementById("duracion-a").value,
                document.getElementById("tema-a").value,
                document.getElementById("email-a").value,
                fecha,
                hora 
                )
                document.getElementById("mensaje").innerHTML = ("La clase " + fechaYHora + " ha sido agendada");
                document.getElementById("mensaje").style.display = ("Block");
                document.getElementById("mensaje").style.backgroundColor = ("lightgreen");
                document.getElementById("mensaje").style.color = ("black");    
                const myForm = document.getElementById("miformulario");
                myForm.reset();
            }
        else if (existe_agenda && datos.docData.disponibilidad == "2")  
        {
            document.getElementById("mensaje").innerHTML = ("La clase que quieres a agendar ya esta agendada");
            document.getElementById("mensaje").style.display = ("Block");
            document.getElementById("mensaje").style.backgroundColor = ("Red");
            document.getElementById("mensaje").style.color = ("Yellow");    
             
        }
        else {
        document.getElementById("mensaje").innerHTML = ("La clase que quieres agendar no existe");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("Red");
        document.getElementById("mensaje").style.color = ("Yellow");    
        
            
        } 
      
    }

}
async function desagendarClases ()
{
    fecha= document.getElementsByName("fecha-d")[0].value 
    hora = parseInt(document.getElementsByName("hora-d")[0].value) 
    document.getElementById("mensaje").style.display = ("none");
    validarFechaYHora (fecha, hora)
    if (tiene_error) 
    {
       
    }
    else 
        {
            let fecha_a_desagendar = (document.getElementsByName("fecha-d")[0].value +"-"+ hora);
            await obtenerAgenda (fecha_a_desagendar)
            if (existe_agenda && datos.docData.disponibilidad == "2")  
                {
                    desagendar_una_clase 
                    (
                    fecha_a_desagendar
                    )
                    document.getElementById("mensaje").innerHTML = ("La clase " + fecha_a_desagendar + " ha pasado al estado de disponible");
                    document.getElementById("mensaje").style.display = ("Block");
                    document.getElementById("mensaje").style.backgroundColor = ("lightgreen");
                    document.getElementById("mensaje").style.color = ("black");    
                    const myForm = document.getElementById("miformulario");
                    myForm.reset();
                }
            else if (existe_agenda && datos.docData.disponibilidad == "1")  
            {
                document.getElementById("mensaje").innerHTML = ("La clase que quieres a desagendar no esta agendada");
                document.getElementById("mensaje").style.display = ("Block");
                document.getElementById("mensaje").style.backgroundColor = ("Red");
                document.getElementById("mensaje").style.color = ("Yellow");    
                 
            }
            else {
            document.getElementById("mensaje").innerHTML = ("La clase que quieres desagendar no existe");
            document.getElementById("mensaje").style.display = ("Block");
            document.getElementById("mensaje").style.backgroundColor = ("Red");
            document.getElementById("mensaje").style.color = ("Yellow");    
            
                
            } 
        }

}
async function verAgenda ()
{
    fecha= document.getElementsByName("fecha-v")[0].value 
    hora = 1
    document.getElementById("mensaje").style.display = ("none");
    validarFechaYHora (fecha, hora)
    if (tiene_error) 
    {
        
    }
    else 
        {
            fecha_a_visualizar = document.getElementsByName("fecha-v")[0].value;
            document.getElementsByTagName("main")[0].style.display=("none")
            document.getElementsByTagName("main")[1].style.display=("inline")
            console.log (fecha_a_visualizar)
            let ddav = fecha_a_visualizar.slice(8)
            let mmav = fecha_a_visualizar.substr(5, 2)
            let aaaaav = fecha_a_visualizar.slice(0, 4)
            document.getElementById("fecha_a_desplegar").innerHTML=(ddav+ " / "+ mmav + " / " + aaaaav)
            const log_volver_m = document.getElementById("VolverAMantenimiento")
            log_volver_m.addEventListener('click', volverAMantenimiento)          
            for (let i=1; i<=24; i++)
                        {
                            await obtenerAgenda (fecha_a_visualizar+"-"+i);
                            if (existe_agenda) 
                            {
                                console.log ("existe")
                                console.log (i)
                                document.getElementById("hora-de-clase-"+i).style.display=("inline-box !important")
                                document.getElementsByClassName("columna1")[i].innerHTML= (i + "hs.")
                                if (datos.docData.disponibilidad=="1") {document.getElementsByClassName("columna2")[i].innerHTML= "disp."} 
                                else if (datos.docData.disponibilidad=="2") {document.getElementsByClassName("columna2")[i].innerHTML= "ocup."}
                                else { document.getElementsByClassName("columna2")[i].innerHTML=datos.docData.disponibilidad}
                                if (datos.docData.duracion != "0" && datos.docData.duracion != "" ) { document.getElementsByClassName("columna3")[i].innerHTML= (datos.docData.duracion + "min.")}
                                else {document.getElementsByClassName("columna3")[i].innerHTML= " "}
                                document.getElementsByClassName("columna4")[i].innerHTML= datos.docData.tipo
                                document.getElementsByClassName("columna5")[i].innerHTML= datos.docData.email
                                if (datos.docData.email != "")
                                {
                                    await obtenerAlumno (datos.docData.email)
                                    if (existe_alumno) 
                                    {
                                        document.getElementsByClassName("columna6")[i].innerHTML= ( datosAlumno.apellido + " " + datosAlumno.nombre)
                                        document.getElementsByClassName("columna7")[i].innerHTML= (datosAlumno.telefono)
                                    }
                                    else 
                                    {
                                        document.getElementsByClassName("columna6")[i].innerHTML= "alumno no registrado"
                                        document.getElementsByClassName("columna7")[i].innerHTML= ""
                                    }
                                }
                                else 
                                {
                                    document.getElementsByClassName("columna6")[i].innerHTML= ""
                                    document.getElementsByClassName("columna7")[i].innerHTML= ""
                                }
                                document.getElementsByClassName("columna8")[i].innerHTML= datos.docData.mensaje
                                
                            }
                            else
                            {
                                document.getElementById("hora-de-clase-"+i).style.display=("none !important")
                            }
                            
                        }
        }
        const myForm = document.getElementById("miformulario");
        myForm.reset();
}
async function inactivarAlumno ()
{
    let correo_i= document.getElementById("correo_electronico_i").value 
    await obtenerAlumno (correo_i)
    console.log ("el mail")
    console.log (correo_i)
    console.log (existe_alumno)
    console.log (datosAlumno.apellido)
    if (existe_alumno) 
    { 
        if (datosAlumno.activo=="inactivo")
        {
            document.getElementById("mensaje").innerHTML = ("El alumno que quieres inactivar ya esta inactivo");
            document.getElementById("mensaje").style.display = ("Block");
            document.getElementById("mensaje").style.backgroundColor = ("Red");
            document.getElementById("mensaje").style.color = ("Yellow");    
        }
        else
        { 
            await inactivarUnAlumno (correo_i)
            document.getElementById("mensaje").innerHTML = ("El alumno " + correo_i + " ha sido inactivado");
            document.getElementById("mensaje").style.display = ("Block");
            document.getElementById("mensaje").style.backgroundColor = ("lightgreen");
            document.getElementById("mensaje").style.color = ("black");    
            const myForm = document.getElementById("miformulario");
            myForm.reset(); 
        }
    }
    else 
    {
        document.getElementById("mensaje").innerHTML = ("El alumno que quieres inactivar no existe");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("Red");
        document.getElementById("mensaje").style.color = ("Yellow");    
        
    }
}
async function reactivarAlumno ()
{
    let correo_r= document.getElementById("correo_electronico_r").value 
    await obtenerAlumno (correo_r)
    console.log (correo_r)
    console.log (existe_alumno)
    console.log (datosAlumno.activo)
    if (existe_alumno) 
    { 
        if (datosAlumno.activo=="activo")
        {
            document.getElementById("mensaje").innerHTML = ("El alumno que quieres re-activar ya esta activo");
            document.getElementById("mensaje").style.display = ("Block");
            document.getElementById("mensaje").style.backgroundColor = ("Red");
            document.getElementById("mensaje").style.color = ("Yellow");    
        }
        else
        { 
            await reactivarUnAlumno (correo_r)
            document.getElementById("mensaje").innerHTML = ("El alumno " + correo_r + " ha sido reactivado ");
            document.getElementById("mensaje").style.display = ("Block");
            document.getElementById("mensaje").style.backgroundColor = ("lightgreen");
            document.getElementById("mensaje").style.color = ("black"); 
            const myForm = document.getElementById("miformulario");
            myForm.reset();
           
        }
    }
    else 
    {
        document.getElementById("mensaje").innerHTML = ("El alumno que quieres reactivar no existe");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("Red");
        document.getElementById("mensaje").style.color = ("Yellow");    
        
    }
}
function logIn ()
{
    document.getElementById("actividades").style.display="inline-block"
}
function logOut ()
{
    document.getElementById("actividades").style.display="none"
}

function volverInicio ()
{
    window.location.href = "../index.html"
}
function volverReservarTurno ()
{
    window.location.href = "../paginas_html/reservar_turno.html"
}
function volverAMantenimiento ()
{
    for ( let iii=1; iii<=24; iii++)
    {
        for (let ff=1; ff<=8; ff++)
        {
            const quecolumna = ("columna"+ff)
            document.getElementsByClassName(quecolumna)[iii].innerHTML=""
        }
    }
    document.getElementsByTagName("main")[0].style.display=("block")
    document.getElementsByTagName("main")[1].style.display=("none")
}
