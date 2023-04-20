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
const log_consultar_alumnos = document.getElementById("consultar_alumnos_activos")
log_consultar_alumnos.addEventListener('click', consularListaAlumnos_activos )
const log_consultar_alumnos1 = document.getElementById("consultar_alumnos_inactivos")
log_consultar_alumnos1.addEventListener('click', consularListaAlumnos_inactivos )
const log_consultar_agenda_alumno = document.getElementById("consultar_agenda_alumno")
log_consultar_agenda_alumno.addEventListener('click', consularAgendaDeUnAlumno )

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
import {consultarAlumnos} from "./javascripts_mantenimiento_agenda_firestore.js";
import {verAgendaAlumno} from "./javascripts_mantenimiento_agenda_firestore.js";
import {datos} from "./javascripts_mantenimiento_agenda_firestore.js";
import {existe_agenda} from "./javascripts_mantenimiento_agenda_firestore.js";
import {existe_alumno} from "./javascripts_mantenimiento_agenda_firestore.js";
import {datosAlumno} from "./javascripts_mantenimiento_agenda_firestore.js";
import {arrayAlumnos} from "./javascripts_mantenimiento_agenda_firestore.js";
import {arrayClases} from "./javascripts_mantenimiento_agenda_firestore.js";

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
        if (existe_agenda && datos.docData.disponibilidad == "1")  
            {
                agendar_una_clase 
                (
                fechaYHora,
                document.getElementById("duracion-a").value,
                document.getElementById("tema-a").value,
                document.getElementById("email-a").value,
                fecha,
                hora, 
                "clase agendada por el profesor" 
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
    if (correo_i=="") 
    {
    document.getElementById("mensaje").innerHTML = ("Debes ingresar un email ");
    document.getElementById("mensaje").style.display = ("Block");
    document.getElementById("mensaje").style.backgroundColor = ("Red");
    document.getElementById("mensaje").style.color = ("Yellow"); 
    }
    else 
    {
        await obtenerAlumno (correo_i)
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
}
async function reactivarAlumno ()
{
    let correo_r= document.getElementById("correo_electronico_r").value
    if (correo_r=="") 
    {
        document.getElementById("mensaje").innerHTML = ("Debes ingresar un email");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("Red");
        document.getElementById("mensaje").style.color = ("Yellow");    
    }
    else
    { 
        await obtenerAlumno (correo_r)
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
}
function consularListaAlumnos_activos ()
{
    consularListaAlumnos ("activo")
}
function consularListaAlumnos_inactivos ()
{
    consularListaAlumnos ("inactivo")
}

async function consularListaAlumnos (actividad)
{
    const log_volver_m = document.getElementById("VolverAMantenimiento1")
            log_volver_m.addEventListener('click', volverAMantenimiento1)  
    
        await consultarAlumnos (actividad)
        if (actividad=="activo") 
        {
            document.getElementById("alumnos_activos").style.display='block'
            document.getElementById("alumnos_inactivos").style.display='none'
        } 
        else
        {
            document.getElementById("alumnos_activos").style.display='none'
            document.getElementById("alumnos_inactivos").style.display='block'
        

        }
        const contenedorx = document.querySelector('#secciondealumnos');
        const nuevaseccion = document.createElement('table');
        contenedorx.appendChild(nuevaseccion);
        nuevaseccion.classList.add ("paraborrar")

    let indiceAlumnos = arrayAlumnos.length

    for (let indi_alu=0 ; indi_alu<indiceAlumnos; indi_alu++)
    {
        // 
        // crear el DOM con el padron de alumnos
        //
        const contenedor = document.querySelector('.paraborrar');
        const nuevoRenglon = document.createElement('tr');
        contenedor.appendChild(nuevoRenglon);
        const nuevoElemento = document.createElement('td');
        nuevoElemento.textContent = (arrayAlumnos[indi_alu].emailAlumno);
        nuevoElemento.style.width = '280px'
        nuevoElemento.style.textAlign = 'left'
        nuevoElemento.style.paddingLeft = '20px'
        nuevoRenglon.appendChild (nuevoElemento);
        const nuevoElemento1 = document.createElement('td');
        nuevoElemento1.textContent = (arrayAlumnos[indi_alu].nombreAlumno);
        nuevoElemento1.style.width = '280px'
        nuevoElemento1.style.textAlign = 'left'
        nuevoElemento1.style.paddingLeft = '20px'
        nuevoRenglon.appendChild (nuevoElemento1);
        const nuevoElemento2 = document.createElement('td');
        nuevoElemento2.textContent = (arrayAlumnos[indi_alu].apellidoAlumno);
        nuevoElemento2.style.width = '380px'
        nuevoElemento2.style.textAlign = 'left'
        nuevoElemento2.style.paddingLeft = '20px'
        nuevoRenglon.appendChild (nuevoElemento2);
        const nuevoElemento3 = document.createElement('td');
        nuevoElemento3.textContent = (arrayAlumnos[indi_alu].telefonoAlumno);
        nuevoElemento3.style.width = '150px'
        nuevoRenglon.appendChild (nuevoElemento3);
    }
    document.getElementsByTagName("main")[0].style.display=("none")
    document.getElementsByTagName("main")[2].style.display=("block")
    console.log (arrayAlumnos)

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
function volverAMantenimiento1 ()
{
    let indiceAlumnos = arrayAlumnos.length 
    arrayAlumnos.splice(0,indiceAlumnos)
    const DOMaborrar = document.querySelector(".paraborrar");
    DOMaborrar.remove ()  
    document.getElementsByTagName("main")[0].style.display=("block")
    document.getElementsByTagName("main")[2].style.display=("none")
}

async function consularAgendaDeUnAlumno ()
{
    const log_volver_m = document.getElementById("VolverAMantenimiento2")
            log_volver_m.addEventListener('click', volverAMantenimiento2)  
    let alumno_a_consultar = document.getElementById("correo_electronico_va").value
    if (alumno_a_consultar == "")   
    {
        document.getElementById("mensaje").innerHTML = ("Debes ingresar un email");
        document.getElementById("mensaje").style.display = ("Block");
        document.getElementById("mensaje").style.backgroundColor = ("Red");
        document.getElementById("mensaje").style.color = ("Yellow");    
    } 
    else
    { 
        await obtenerAlumno (alumno_a_consultar)
            if (existe_alumno) 
            {
                const identificacion_alumno = (datosAlumno.nombre + " "+datosAlumno.apellido+ "   MAIL : "+alumno_a_consultar)
                document.getElementById("alumno_consultado").innerHTML=identificacion_alumno
                
            } 
            else
            {
                const identificacion_alumno = ("no existe alumno en el padron  "+"   MAIL : "+alumno_a_consultar)
                document.getElementById("alumno_consultado").innerHTML=identificacion_alumno
            }
            let tiempo
            if (document.getElementById("futuro").value=="futuro")
            {
                document.getElementById("futuras_clases").style.display="block";
                document.getElementById("pasadas_clases").style.display="none";          
                tiempo = "futuro"
            }
            else
            {
                document.getElementById("futuras_clases").style.display="none";
                document.getElementById("pasadas_clases").style.display="block";          
                tiempo = "pasado"
            }
            await verAgendaAlumno (alumno_a_consultar,tiempo)
                    
            const contenedorxa = document.querySelector('#secciondeagenda');
            const nuevasecciona = document.createElement('table');
            contenedorxa.appendChild(nuevasecciona);
            nuevasecciona.classList.add ("paraborrara");
            let indiceClases = arrayClases.length

        for (let indi_cla=0 ; indi_cla<indiceClases; indi_cla++)
        {
            // 
            // crear DOM las clases del alumno
            //
            const contenedora = document.querySelector('.paraborrara');
            const nuevoRenglona = document.createElement('tr');
            contenedora.appendChild(nuevoRenglona);
            const nuevoElementoa = document.createElement('td');
            nuevoElementoa.textContent = (arrayClases[indi_cla].fecha_alumno);
            nuevoElementoa.style.width = '120px'
            nuevoElementoa.style.textAlign = 'left'
            nuevoElementoa.style.paddingLeft = '20px'
            nuevoRenglona.appendChild (nuevoElementoa);
            const nuevoElementoa1 = document.createElement('td');
            nuevoElementoa1.textContent = (arrayClases[indi_cla].hora_alumno);
            nuevoElementoa1.style.width = '40px'
            nuevoElementoa1.style.textAlign = 'left'
            nuevoElementoa1.style.paddingLeft = '20px'
            nuevoRenglona.appendChild (nuevoElementoa1);
            const nuevoElementoa2 = document.createElement('td');
            nuevoElementoa2.textContent = ((arrayClases[indi_cla].duracion_alumno)+" min.");
            nuevoElementoa2.style.width = '72px'
            nuevoElementoa2.style.textAlign = 'left'
            nuevoElementoa2.style.paddingLeft = '10px'
            nuevoRenglona.appendChild (nuevoElementoa2);
            const nuevoElementoa3 = document.createElement('td');
            nuevoElementoa3.textContent = (arrayClases[indi_cla].tipo_alumno);
            nuevoElementoa3.style.width = '120px'
            nuevoRenglona.appendChild (nuevoElementoa3);
            const nuevoElementoa4 = document.createElement('td');
            nuevoElementoa4.textContent = (arrayClases[indi_cla].mensaje_alumno);
            nuevoElementoa4.style.width = '320px'
            nuevoRenglona.appendChild (nuevoElementoa4);
        }
        document.getElementsByTagName("main")[0].style.display=("none")
        document.getElementsByTagName("main")[3].style.display=("block")
        
    }
}
function volverAMantenimiento2 ()
{
    document.getElementById("correo_electronico_va").value=null
    document.getElementById("futuro").value="futuro"
    let indiceAlumnosa = arrayClases.length 
    arrayClases.splice(0,indiceAlumnosa)
    const DOMaborrara = document.querySelector(".paraborrara");
    DOMaborrara.remove ()  
    document.getElementsByTagName("main")[0].style.display=("block")
    document.getElementsByTagName("main")[3].style.display=("none")
}