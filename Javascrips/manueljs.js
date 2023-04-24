// ********************************************************************************
// importacion de modulos y objetos para el manejo de la base de datos de Firestore
// ********************************************************************************
import { obtenerAlumno, agregarUnAlumno, arrayAlumnos } from "./javascripts_mantenimiento_agenda_firestore.js";
import {existe_alumno} from "./javascripts_mantenimiento_agenda_firestore.js";
import {datosAlumno} from "./javascripts_mantenimiento_agenda_firestore.js";
import {agendar_una_clase} from "./javascripts_mantenimiento_agenda_firestore.js";
import {desagendar_una_clase} from "./javascripts_mantenimiento_agenda_firestore.js";
import {consultarAgenda} from "./javascripts_mantenimiento_agenda_firestore.js";
import {verAgendaAlumno} from "./javascripts_mantenimiento_agenda_firestore.js";
import {disponibilidad} from "./javascripts_mantenimiento_agenda_firestore.js";
import {mensaje_agendado} from "./javascripts_mantenimiento_agenda_firestore.js";
import {duracion_agendada} from "./javascripts_mantenimiento_agenda_firestore.js";
import {tema_agendado} from "./javascripts_mantenimiento_agenda_firestore.js";
import {mail_agendados} from "./javascripts_mantenimiento_agenda_firestore.js";
import {arrayClases} from "./javascripts_mantenimiento_agenda_firestore.js";
// *******************************************************************************************
// agregar los eventos "click" y el llamado respectivo a sus funciones del HTML reservar_turno
// *******************************************************************************************
const log_registrarse = document.getElementById("registrate");
log_registrarse.addEventListener('click', openForm );
//const log_nuevo = document.getElementById("myFormx");
//log_nuevo.addEventListener('submit', registrarNuevoUsuario);
const  log_nuevo=document.getElementById("myFormx");
log_nuevo.addEventListener('submit', function(event) 
{
  event.preventDefault(); 
  registrarNuevoUsuario();
});

const log_close = document.getElementById("cerrarUsuario");
log_close.addEventListener('click', closeForm );
const log_entrar = document.getElementById("boton_de_login");
log_entrar.addEventListener('click', logIn );
const log_salir = document.getElementById("boton_de_logoff");
log_salir.addEventListener('click', logOff );
const log_actualizarMMyAA = document.getElementById("actualizarMMyAA");
log_actualizarMMyAA.addEventListener('click', actualizarMesyAnioElegidos );
const log_actualizarLaAgenda = document.getElementById("actualizarestaAgenda");
log_actualizarLaAgenda.addEventListener('click', actualizarAgenda );
const log_noactualizarLaAgenda = document.getElementById("noactualizarestaAgenda");
log_noactualizarLaAgenda.addEventListener('click', closeForm1 );
// *********************************************************************************************************      
// agregar los eventos "click" a cada dia del calendario para desplegar formulario para agendar / desagendar
// *********************************************************************************************************      
const log_dia_11=document.getElementById("dia11");
log_dia_11.addEventListener('click', openForm11);
const log_dia_12=document.getElementById("dia12");
log_dia_12.addEventListener('click', openForm12);
const log_dia_13=document.getElementById("dia13");
log_dia_13.addEventListener('click', openForm13);
const log_dia_14=document.getElementById("dia14");
log_dia_14.addEventListener('click', openForm14);
const log_dia_15=document.getElementById("dia15");
log_dia_15.addEventListener('click', openForm15);
const log_dia_16=document.getElementById("dia16");
log_dia_16.addEventListener('click', openForm16);
const log_dia_17=document.getElementById("dia17");
log_dia_17.addEventListener('click', openForm17);
const log_dia_21=document.getElementById("dia21");
log_dia_21.addEventListener('click', openForm21);
const log_dia_22=document.getElementById("dia22");
log_dia_22.addEventListener('click', openForm22);
const log_dia_23=document.getElementById("dia23");
log_dia_23.addEventListener('click', openForm23);
const log_dia_24=document.getElementById("dia24");
log_dia_24.addEventListener('click', openForm24);
const log_dia_25=document.getElementById("dia25");
log_dia_25.addEventListener('click', openForm25);
const log_dia_26=document.getElementById("dia26");
log_dia_26.addEventListener('click', openForm26);
const log_dia_27=document.getElementById("dia27");
log_dia_27.addEventListener('click', openForm27);
const log_dia_31=document.getElementById("dia31");
log_dia_31.addEventListener('click', openForm31);
const log_dia_32=document.getElementById("dia32");
log_dia_32.addEventListener('click', openForm32);
const log_dia_33=document.getElementById("dia33");
log_dia_33.addEventListener('click', openForm33);
const log_dia_34=document.getElementById("dia34");
log_dia_34.addEventListener('click', openForm34);
const log_dia_35=document.getElementById("dia35");
log_dia_35.addEventListener('click', openForm35);
const log_dia_36=document.getElementById("dia36");
log_dia_36.addEventListener('click', openForm36);
const log_dia_37=document.getElementById("dia37");
log_dia_37.addEventListener('click', openForm37);
const log_dia_41=document.getElementById("dia41");
log_dia_41.addEventListener('click', openForm41);
const log_dia_42=document.getElementById("dia42");
log_dia_42.addEventListener('click', openForm42);
const log_dia_43=document.getElementById("dia43");
log_dia_43.addEventListener('click', openForm43);
const log_dia_44=document.getElementById("dia44");
log_dia_44.addEventListener('click', openForm44);
const log_dia_45=document.getElementById("dia45");
log_dia_45.addEventListener('click', openForm45);
const log_dia_46=document.getElementById("dia46");
log_dia_46.addEventListener('click', openForm46);
const log_dia_47=document.getElementById("dia47");
log_dia_47.addEventListener('click', openForm47);
const log_dia_51=document.getElementById("dia51");
log_dia_51.addEventListener('click', openForm51);
const log_dia_52=document.getElementById("dia52");
log_dia_52.addEventListener('click', openForm52);
const log_dia_53=document.getElementById("dia53");
log_dia_53.addEventListener('click', openForm53);
const log_dia_54=document.getElementById("dia54");
log_dia_54.addEventListener('click', openForm54);
const log_dia_55=document.getElementById("dia55");
log_dia_55.addEventListener('click', openForm55);
const log_dia_56=document.getElementById("dia56");
log_dia_56.addEventListener('click', openForm56);
const log_dia_57=document.getElementById("dia57");
log_dia_57.addEventListener('click', openForm57);
const log_dia_61=document.getElementById("dia61");
log_dia_61.addEventListener('click', openForm61);
const log_dia_62=document.getElementById("dia62");
log_dia_62.addEventListener('click', openForm62);
const log_dia_63=document.getElementById("dia63");
log_dia_63.addEventListener('click', openForm63);
const log_dia_64=document.getElementById("dia64");
log_dia_64.addEventListener('click', openForm64);
const log_dia_65=document.getElementById("dia65");
log_dia_65.addEventListener('click', openForm65);
const log_dia_66=document.getElementById("dia66");
log_dia_66.addEventListener('click', openForm66);
const log_dia_67=document.getElementById("dia67");
log_dia_67.addEventListener('click', openForm67);
// **********************************************************************************************************
// funciones de llamada a la apertura del formulario para agendar/desagendar con el parametro correspondiente     
// **********************************************************************************************************
function openForm11 ()
{
openForm1 (11);
}  
function openForm12 ()
{
openForm1 (12);
} 
function openForm13 ()
{
openForm1 (13);
} 
function openForm14 ()
{
openForm1 (14);
} 
function openForm15 ()
{
openForm1 (15);
} 
function openForm16 ()
{
openForm1 (16);
}
function openForm17 ()
{
openForm1 (17);
} 
function openForm21 ()
{
openForm1 (21);
} 
function openForm22 ()
{
openForm1 (22);
} 
function openForm23 ()
{
openForm1 (23);
} 
function openForm24 ()
{
openForm1 (24);
} 
function openForm25 ()
{
openForm1 (25);
} 
function openForm26 ()
{
openForm1 (26);
} 
function openForm27 ()
{
openForm1 (27);
} 
function openForm31 ()
{
openForm1 (31);
} 
function openForm32 ()
{
openForm1 (32);
} 
function openForm33 ()
{
openForm1 (33);
} 
function openForm34 ()
{
openForm1 (34);
} 
function openForm35 ()
{
openForm1 (35);
} 
function openForm36 ()
{
openForm1 (36);
} 
function openForm37 ()
{
openForm1 (37);
} 
function openForm41 ()
{
openForm1 (41);
} 
function openForm42 ()
{
openForm1 (42);
} 
function openForm43 ()
{
openForm1 (43);
} 
function openForm44 ()
{
openForm1 (44);
} 
function openForm45 ()
{
openForm1 (45);
} 
function openForm46 ()
{
openForm1 (46);
} 
function openForm47 ()
{
openForm1 (47);
} 
function openForm51 ()
{
openForm1 (51);
} 
function openForm52 ()
{
openForm1 (52);
} 
function openForm53 ()
{
openForm1 (53);
} 
function openForm54 ()
{
openForm1 (54);
} 
function openForm55 ()
{
openForm1 (55);
} 
function openForm56 ()
{
openForm1 (56);
} 
function openForm57 ()
{
openForm1 (57);
} 
function openForm61 ()
{
openForm1 (61);
} 
function openForm62 ()
{
openForm1 (62);
} 
function openForm63 ()
{
openForm1 (63);
} 
function openForm64 ()
{
openForm1 (64);
} 
function openForm65 ()
{
openForm1 (65);
} 
function openForm66 ()
{
openForm1 (66);
} 
function openForm67 ()
{
openForm1 (67);
} 
// **************************************************************************
// obtener del localstorage el ultimo mail logueado a esta pagina y mostrarlo
// **************************************************************************
let elUltimoMail = JSON.parse (localStorage.getItem ('lastmail'));
if (elUltimoMail!=null) 
{ 
  document.getElementById("correo_electronico").value= elUltimoMail;
}
let logueado = false;
// ***************************************************
// crear el calendario mensual con el mes y año actual
// para mostrar cuando se entra a la pagina
// ***************************************************
let dia_elegido;
let dia_e = 0;
let mailadress; 
let Dia_de_Hoy;  
let mes_de_hoy;
let today= new Date ();
let dia_de_ahora= today.getDate ();
dia_de_ahora++
if (dia_de_ahora<10)
{
  Dia_de_Hoy = ("0"+dia_de_ahora);
}
else
{
  Dia_de_Hoy = dia_de_ahora;
}
let anio = today.getFullYear ();
let mes = today.getMonth ();
mes++;
if (mes<10) 
{
  mes_de_hoy =("0"+mes)
}
else
{
  mes_de_hoy=mes
}
const fecha_de_hoy = (anio+mes_de_hoy+Dia_de_Hoy);
let mesyaniodelcalendariodesplegado;
const mesdelcalendariodesplegado = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let calendario_mensual= [[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0]];
crearCalendarioMensual (mes, anio);
//********************************************************
// desplegar formulario de registracion de nuevo usuario
//********************************************************
function openForm() 
{
  document.getElementById("mail_ya_registrado").style.display = "none";
  document.getElementById("los_mails_no_coinciden").style.display = "none";
  document.getElementById("mensaje_de_mail_no_registrado").style.display=("none");
  document.getElementById("mensaje_de_hacer_logoff").style.display=("none");
  document.getElementById("mensaje_de_obligacion_de_login").style.display=("none");
  document.getElementById("mensaje_de_mail_inactivado").style.display=("none");    
  document.getElementById("myForm").style.display = "block";
} 
//*********************************************************
// cerrar formulario de registracion sin actualizar nada
//*********************************************************
function closeForm() 
{
  document.getElementById("myForm").style.display = "none";
  document.getElementById("mail_ya_registrado").style.display = "none";
  document.getElementById("los_mails_no_coinciden").style.display = "none";
  let form = document.getElementById('myFormx');
  form.reset ()
}
//**********************************************************
// registrar un nuevo usuario
//**********************************************************
async function registrarNuevoUsuario ()
{
  let form = document.getElementById('myFormx');
  let formData = new FormData(form);
  let nuevoEmail=formData.get("emailN")
  let name_alu=formData.get("nombre")
  let ape_alu=formData.get("apellido")
  let tel_alu=formData.get("telefono")
  await buscarAlumnoPorEmail(nuevoEmail);
  if (existe_alumno)
  {
    document.getElementById("mail_ya_registrado").style.display = "block";
  }
  else if (document.getElementsByName('emailN1')[0].value != nuevoEmail)
  {
    document.getElementById("los_mails_no_coinciden").style.display = "block";
  }
  else
  {
    agregarUnAlumno (nuevoEmail, name_alu, ape_alu, tel_alu);
    document.getElementsByName('correo_electronico')[0].value=nuevoEmail;
    logueado=true;
    document.getElementsByClassName("despliegue_de_la_agenda")[0].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[1].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[2].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[3].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[4].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[5].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[6].style.display=("block");
    document.getElementById("haz_click").style.display=("block");
    let nomalu=name_alu;
    let apealu=ape_alu;
    let mensajelogin=("Bienvenido "+ nomalu + " " + apealu + " ! , ya puedes agendar tu clase");
    document.getElementById("mensaje_de_bienvenida").innerHTML= mensajelogin;
    document.getElementById("mensaje_de_bienvenida").style.display=("block");
    document.getElementById("myForm").style.display = "none";
    document.getElementById("mail_ya_registrado").style.display = "none";
    document.getElementById("los_mails_no_coinciden").style.display = "none";
    const ultimoemail = JSON.stringify (mailadress);
    localStorage.setItem('lastmail', ultimoemail); 
    form.reset ()   
    // 
    // actualizar y desplegar nuevamente la tabla de proximas clases agendadas
    // 
    await verAgendaAlumno (mailadress,"futuro");
    for (let jis=0; jis<8;jis++)
    {
      if (arrayClases.length>jis) 
      {
        let ji=jis+1;
        let ddAdesp;
        let mmAdesp;
        let aaaaAdesp;
        aaaaAdesp=arrayClases[jis].fecha_alumno.substr(0, 4);
        mmAdesp=arrayClases[jis].fecha_alumno.substr(5, 2);
        ddAdesp=arrayClases[jis].fecha_alumno.substr(8, 2);
        const fechaAdesp = (ddAdesp+"/"+mmAdesp+"/"+aaaaAdesp);
        const fechaDOM=("claseFecha"+ji);
        document.getElementById(fechaDOM).innerHTML=fechaAdesp;
        document.getElementById(fechaDOM).style.display="inline-block";
        document.getElementById(fechaDOM).style.width="100px"; 
        const horaDOM=("claseHora"+ji);
        document.getElementById(horaDOM).innerHTML=arrayClases[jis].hora_alumno;
        document.getElementById(horaDOM).style.display="inline-block";
        document.getElementById(horaDOM).style.width="40px";
        const tipoDOM=("claseDuracion"+ji);
        document.getElementById(tipoDOM).innerHTML=(arrayClases[jis].duracion_alumno+" min.");
        document.getElementById(tipoDOM).style.display="inline-block"; 
        document.getElementById(tipoDOM).style.width="80px"; 
      }
      else 
      {
        let ji=jis+1
        const fechaDOM=("claseFecha"+ji);
        const horaDOM=("claseHora"+ji);
        const tipoDOM=("claseDuracion"+ji);
        document.getElementById(horaDOM).innerHTML= " ";
        document.getElementById(horaDOM).style.display= "none";
        document.getElementById(tipoDOM).innerHTML= " ";
        document.getElementById(tipoDOM).style.display= "none";
        if (jis==0) 
        {
          document.getElementById(fechaDOM).innerHTML= "No hay clases agendadas";
          document.getElementById(fechaDOM).style.display= "inline-block";
        }
        else
        {
          document.getElementById(fechaDOM).innerHTML= " ";
          document.getElementById(fechaDOM).style.display= "none";
        }
      }
      document.getElementsByClassName("despliegue_de_la_agenda")[0].style.display=("block");
      document.getElementsByClassName("despliegue_de_la_agenda")[1].style.display=("block");
      document.getElementsByClassName("despliegue_de_la_agenda")[2].style.display=("block");
      document.getElementsByClassName("despliegue_de_la_agenda")[3].style.display=("block");
      document.getElementsByClassName("despliegue_de_la_agenda")[4].style.display=("block");
      document.getElementById("mensaje_de_bienvenida").style.display=("block");
      document.getElementsByClassName("despliegue_de_la_agenda")[6].style.display=("block");
      document.getElementById("haz_click").style.display=("block");
    }
  }
}
//*********************************************************
// desplegar la agenda disponible del dia elegido
//*********************************************************
function openForm1(dia_elegido) 
{
  let dia=("dia"+dia_elegido);
  dia_e=parseInt(document.getElementById(dia).innerHTML);
  if (logueado) 
  {
    dia=("dia"+dia_elegido);
    let dia_a_desplegar = (document.getElementById(dia).innerHTML + " de " + mesyaniodelcalendariodesplegado);
    document.getElementById("titu-agenda").innerHTML = ("Agenda del día " + dia_a_desplegar);
    for (let i=0; i<=23; i++)
    {
      let indice_de_dia = parseInt(document.getElementById(dia).innerHTML)-1;
      let imas1=i+1;
      if (disponibilidad [indice_de_dia] [i] == 0 ) 
      {
        document.getElementById("horario-"+imas1).style.display="none";
      }
      else if (disponibilidad [indice_de_dia] [i] == 2 && mail_agendados [indice_de_dia] [i] == mailadress)
      {
        document.getElementById("check-"+imas1).innerHTML="desagendar";
        document.getElementById("horario-"+imas1).style.display="flex";
      }
      else if (disponibilidad [indice_de_dia] [i] == 2 && mail_agendados [indice_de_dia] [i] != mailadress)
      {
        document.getElementById("horario-"+imas1).style.display="none";
      }
      else
      {
        document.getElementById("check-"+imas1).innerHTML="agendar";
        document.getElementById("horario-"+imas1).style.display="flex";
      }
    }
    document.getElementById("miformulario").style.display = "block";
  }
  else
  {
    document.getElementById("mensaje_de_obligacion_de_login").style.display=("block");
  }
    document.getElementsByClassName("despliegue_de_la_agenda")[0].style.display=("none");
    document.getElementsByClassName("despliegue_de_la_agenda")[1].style.display=("none");
    document.getElementsByClassName("despliegue_de_la_agenda")[2].style.display=("none");
    document.getElementsByClassName("despliegue_de_la_agenda")[3].style.display=("none");
    document.getElementsByClassName("despliegue_de_la_agenda")[4].style.display=("none");
    document.getElementById("mensaje_de_bienvenida").style.display=("none");
    document.getElementsByClassName("despliegue_de_la_agenda")[6].style.display=("none");
    document.getElementById("haz_click").style.display=("none");
} 
//*************************************************************
// cerrar la agenda disponible del dia elegido sin actualizar
//************************************************************* 
function closeForm1() 
{
  document.getElementById("miformulario").style.display = "none";
  for (let i=0; i<=23; i++)
  {
    let imas1=i+1;
    document.getElementById("tema-"+imas1).value="0" ;
    document.getElementById("duracion-"+imas1).value="0" ;
    document.getElementById("mensaje-"+imas1).value="puedes dejar un mensaje aqui";
    document.getElementsByName("check-"+imas1) [0].checked=false;
  }
    document.getElementsByClassName("despliegue_de_la_agenda")[0].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[1].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[2].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[3].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[4].style.display=("block");
    document.getElementById("mensaje_de_bienvenida").style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[6].style.display=("block");
    document.getElementById("haz_click").style.display=("block");
}
//***************************************************************
// actualizar agenda del dia elegido
//****************************************************************
async function actualizarAgenda ()
{
  for (let i=1; i<=24; i++)
  {
    if (document.getElementsByName("check-"+i) [0].checked && mail_agendados[dia_e-1][i-1]==mailadress)
    {    
      tema_agendado[dia_e-1][i-1]="";
      duracion_agendada[dia_e-1][i-1]="";
      mensaje_agendado[dia_e-1][i-1]= "";
      mail_agendados[dia_e-1][i-1]=" ";
      disponibilidad[dia_e-1][i-1]=1;
      let alfadia;
      let alfames;
      if (dia_e<10)
      {
        alfadia = ("0"+dia_e);
      } 
      else 
      { 
        alfadia = dia_e;
      }
      if (mes<10) 
      {
        alfames = ("0"+mes);
      } 
      else 
      {
        alfames = mes;
      }
      const fechayhora_a_desagendar = (anio+"-"+alfames+"-"+alfadia+"-"+i);
      await desagendar_una_clase (fechayhora_a_desagendar);
    }
    else if (document.getElementsByName("check-"+i) [0].checked && mail_agendados[dia_e-1][i-1]!=mailadress) 
    {
      tema_agendado[dia_e-1][i-1]=document.getElementById("tema-"+i).value ;
      duracion_agendada[dia_e-1][i-1]=document.getElementById("duracion-"+i).value ;
      mensaje_agendado[dia_e-1][i-1]= document.getElementById("mensaje-"+i).value;
      mail_agendados[dia_e-1][i-1]=mailadress;
      disponibilidad[dia_e-1][i-1]=2;
      let alfadia;
      let alfames;
      if (dia_e<10) 
      {
        alfadia = ("0"+dia_e);
      } 
      else 
      { 
        alfadia = dia_e;
      }
      if (mes<10) 
      {
        alfames = ("0"+mes);
      } 
      else 
      {
        alfames = mes;
      }
      const fechayhora_a_agendar = (anio+"-"+alfames+"-"+alfadia+"-"+i);
      const fechadelaagenda = (anio+"-"+alfames+"-"+alfadia);
      await agendar_una_clase (fechayhora_a_agendar,duracion_agendada[dia_e-1][i-1],tema_agendado[dia_e-1][i-1], mail_agendados[dia_e-1][i-1], fechadelaagenda , i, mensaje_agendado[dia_e-1][i-1] );
    }
    document.getElementById("tema-"+i).value="0"; 
    document.getElementById("duracion-"+i).value="0" ;
    document.getElementById("mensaje-"+i).value="puedes dejar un mensaje aqui";
    document.getElementsByName("check-"+i) [0].checked=false; 
  }
  document.getElementById("miformulario").style.display = "none";
  // 
  // actualizar y desplegar nuevamente la tabla de proximas clases agendadas
  // 
  await verAgendaAlumno (mailadress,"futuro");
  for (let jis=0; jis<8;jis++)
  {
    if (arrayClases.length>jis) 
    {
      let ji=jis+1;
      let ddAdesp;
      let mmAdesp;
      let aaaaAdesp;
      aaaaAdesp=arrayClases[jis].fecha_alumno.substr(0, 4);
      mmAdesp=arrayClases[jis].fecha_alumno.substr(5, 2);
      ddAdesp=arrayClases[jis].fecha_alumno.substr(8, 2);
      const fechaAdesp = (ddAdesp+"/"+mmAdesp+"/"+aaaaAdesp);
      const fechaDOM=("claseFecha"+ji);
      document.getElementById(fechaDOM).innerHTML=fechaAdesp;
      document.getElementById(fechaDOM).style.display="inline-block";
      document.getElementById(fechaDOM).style.width="100px"; 
      const horaDOM=("claseHora"+ji);
      document.getElementById(horaDOM).innerHTML=arrayClases[jis].hora_alumno;
      document.getElementById(horaDOM).style.display="inline-block";
      document.getElementById(horaDOM).style.width="40px";
      const tipoDOM=("claseDuracion"+ji);
      document.getElementById(tipoDOM).innerHTML=(arrayClases[jis].duracion_alumno+" min.");
      document.getElementById(tipoDOM).style.display="inline-block"; 
      document.getElementById(tipoDOM).style.width="80px"; 
    }
    else 
    {
      let ji=jis+1
      const fechaDOM=("claseFecha"+ji);
      const horaDOM=("claseHora"+ji);
      const tipoDOM=("claseDuracion"+ji);
      document.getElementById(horaDOM).innerHTML= " ";
      document.getElementById(horaDOM).style.display= "none";
      document.getElementById(tipoDOM).innerHTML= " ";
      document.getElementById(tipoDOM).style.display= "none";
      if (jis==0) 
      {
        document.getElementById(fechaDOM).innerHTML= "No hay clases agendadas";
        document.getElementById(fechaDOM).style.display= "inline-block";
      }
      else
      {
        document.getElementById(fechaDOM).innerHTML= " ";
        document.getElementById(fechaDOM).style.display= "none";
      }
    }
    document.getElementsByClassName("despliegue_de_la_agenda")[0].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[1].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[2].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[3].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[4].style.display=("block");
    document.getElementById("mensaje_de_bienvenida").style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[6].style.display=("block");
    document.getElementById("haz_click").style.display=("block");
  }
}
// *****************************************************
// crear un calendario mensual
// *****************************************************
async function crearCalendarioMensual (mes, anio)
{
  let aaaa = anio;
  let mm = mes;
  if (mes<10) 
  {
    mm=("0"+mes);
  }
  const aaaaymm = (aaaa+"-"+mm);
  await consultarAgenda (aaaaymm);
  //
  //llenar el mes y año a desplegar en el titulo del calendario
  //
  mesyaniodelcalendariodesplegado = (mesdelcalendariodesplegado[mes-1]+ " de "+ anio);
  document.getElementById("mesyaniodesplegados").innerHTML=mesyaniodelcalendariodesplegado; 
  //
  // determinar el numero del ultimo dia del mes
  //
  let semana = [[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0]];
  let ultimos_dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let ultimo_dia = 0;
  let biciesto = anio % 4;
  if (biciesto==0) 
  { 
    biciesto=1;
  } 
  else 
  {
    biciesto=0;
  }
  if (mes==2)
  {
    ultimo_dia = ultimos_dias [1] +biciesto;
  } 
  else 
  {
    ultimo_dia = ultimos_dias [mes-1];
  }
  //
  // determinar que dia de la semana cae el primer dia del mes
  //
  const d = new Date ( anio+"-"+ mes +"-"+"01" );
  let primer_dia = d.getDay ();
  let f=primer_dia;
  let numero_de_dia_del_mes = 0;
  let i=0;
  //
  // blanquear el background de la primera semana y llamada a la agenda
  //
  for (i=1; i<=7; i++)
  {
    document.getElementById("dia1"+i).style.backgroundColor="white";
    const diaalfa1=("dia1"+i);
    const diaalfa= ("1"+i);
    switch (diaalfa)
    {
      case '11' : document.getElementById(diaalfa1).removeEventListener("click",openForm11)
      break;
      case '12' : document.getElementById(diaalfa1).removeEventListener("click",openForm12)
      break;
      case '13' : document.getElementById(diaalfa1).removeEventListener("click",openForm13)
      break;
      case '14' : document.getElementById(diaalfa1).removeEventListener("click",openForm14)
      break;
      case '15' : document.getElementById(diaalfa1).removeEventListener("click",openForm15)
      break;
      case '16' : document.getElementById(diaalfa1).removeEventListener("click",openForm16)
      break;
      case '17' : document.getElementById(diaalfa1).removeEventListener("click",openForm17)
      break;
    }
    
  }
  //
  // determinar disponibilidad de clases por dias
  //
  let dias_con_clases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for  (let w=0; w<=30; w++)
  {
    let dia_con_disponibilidad = 0;
    for (let j=0; j<=23; j++)
    {
      if (disponibilidad [w] [j] == 1 ||  disponibilidad [w] [j] == 2 && mail_agendados[w][j]==mailadress)
      {
        dia_con_disponibilidad = dia_con_disponibilidad+disponibilidad[w] [j];
      }
    }
    if (dia_con_disponibilidad>=1) 
    { 
      dias_con_clases[w]=1;
    }
  }
  //
  // llenar las semanas con los numeros de dia y modificar DOM con disponibilidad y eventos
  //
  for (i=0; i<=5 ; i++)
  {
    let j=i+1;
    let jalfa=j.toString();
    do
    {
      if (f==7) 
      {
        f=0;
      }
      let g=f+1;
      let galfa=g.toString();
      let fechaAMostrar;
      let mesAMostrar;
      let diaAMostrar;
      if (mes<10)
      {
        mesAMostrar=("0"+mes);
      }
      else
      {
        mesAMostrar=mes
      }
      if (numero_de_dia_del_mes<10)
      {
        diaAMostrar=("0"+numero_de_dia_del_mes);
      }
      else
      {
        diaAMostrar=numero_de_dia_del_mes
      }
      fechaAMostrar = (anio+mesAMostrar+diaAMostrar)
      if (numero_de_dia_del_mes<= 31 && dias_con_clases [numero_de_dia_del_mes] == 1 && fechaAMostrar>fecha_de_hoy) 
      {
        document.getElementById("dia"+j+g).style.backgroundColor="greenyellow"; 
        const diaalfa1 = ("dia"+jalfa+galfa);
        const diaalfa = (jalfa+galfa);
        switch (diaalfa)
        {
          case '11' : document.getElementById(diaalfa1).addEventListener("click",openForm11)
          break;
          case '12' : document.getElementById(diaalfa1).addEventListener("click",openForm12)
          break;
          case '13' : document.getElementById(diaalfa1).addEventListener("click",openForm13)
          break;
          case '14' : document.getElementById(diaalfa1).addEventListener("click",openForm14)
          break;
          case '15' : document.getElementById(diaalfa1).addEventListener("click",openForm15)
          break;
          case '16' : document.getElementById(diaalfa1).addEventListener("click",openForm16)
          break;
          case '17' : document.getElementById(diaalfa1).addEventListener("click",openForm17)
          break;
          case '21' : document.getElementById(diaalfa1).addEventListener("click",openForm21)
          break;
          case '22' : document.getElementById(diaalfa1).addEventListener("click",openForm22)
          break;
          case '23' : document.getElementById(diaalfa1).addEventListener("click",openForm23)
          break;
          case '24' : document.getElementById(diaalfa1).addEventListener("click",openForm24)
          break;
          case '25' : document.getElementById(diaalfa1).addEventListener("click",openForm25)
          break;
          case '26' : document.getElementById(diaalfa1).addEventListener("click",openForm26)
          break;
          case '27' : document.getElementById(diaalfa1).addEventListener("click",openForm27)
          break;
          case '31' : document.getElementById(diaalfa1).addEventListener("click",openForm31)
          break;
          case '32' : document.getElementById(diaalfa1).addEventListener("click",openForm32)
          break;
          case '33' : document.getElementById(diaalfa1).addEventListener("click",openForm33)
          break;
          case '34' : document.getElementById(diaalfa1).addEventListener("click",openForm34)
          break;
          case '35' : document.getElementById(diaalfa1).addEventListener("click",openForm35)
          break;
          case '36' : document.getElementById(diaalfa1).addEventListener("click",openForm36)
          break;
          case '37' : document.getElementById(diaalfa1).addEventListener("click",openForm37)
          break;
          case '41' : document.getElementById(diaalfa1).addEventListener("click",openForm41)
          break;
          case '42' : document.getElementById(diaalfa1).addEventListener("click",openForm42)
          break;
          case '43' : document.getElementById(diaalfa1).addEventListener("click",openForm43)
          break;
          case '44' : document.getElementById(diaalfa1).addEventListener("click",openForm44)
          break;
          case '45' : document.getElementById(diaalfa1).addEventListener("click",openForm45)
          break;
          case '46' : document.getElementById(diaalfa1).addEventListener("click",openForm46)
          break;
          case '47' : document.getElementById(diaalfa1).addEventListener("click",openForm47)
          break;
          case '51' : document.getElementById(diaalfa1).addEventListener("click",openForm51)
          break;
          case '52' : document.getElementById(diaalfa1).addEventListener("click",openForm52)
          break;
          case '53' : document.getElementById(diaalfa1).addEventListener("click",openForm53)
          break;
          case '54' : document.getElementById(diaalfa1).addEventListener("click",openForm54)
          break;
          case '55' : document.getElementById(diaalfa1).addEventListener("click",openForm55)
          break;
          case '56' : document.getElementById(diaalfa1).addEventListener("click",openForm56)
          break;
          case '57' : document.getElementById(diaalfa1).addEventListener("click",openForm57)
          break;
          case '61' : document.getElementById(diaalfa1).addEventListener("click",openForm61)
          break;
          case '62' : document.getElementById(diaalfa1).addEventListener("click",openForm62)
          break;
          case '63' : document.getElementById(diaalfa1).addEventListener("click",openForm63)
          break;
          case '64' : document.getElementById(diaalfa1).addEventListener("click",openForm64)
          break;
          case '65' : document.getElementById(diaalfa1).addEventListener("click",openForm65)
          break;
          case '66' : document.getElementById(diaalfa1).addEventListener("click",openForm66)
          break;
          case '67' : document.getElementById(diaalfa1).addEventListener("click",openForm67)
        }
      }
      else 
      {                  
        document.getElementById("dia"+j+g).style.backgroundColor="white"; 
        const diaalfa1 = ("dia"+jalfa+galfa);
        const diaalfa = (jalfa+galfa);
        switch (diaalfa)
        {
          case '11' : document.getElementById(diaalfa1).removeEventListener("click",openForm11)
          break;
          case '12' : document.getElementById(diaalfa1).removeEventListener("click",openForm12)
          break;
          case '13' : document.getElementById(diaalfa1).removeEventListener("click",openForm13)
          break;
          case '14' : document.getElementById(diaalfa1).removeEventListener("click",openForm14)
          break;
          case '15' : document.getElementById(diaalfa1).removeEventListener("click",openForm15)
          break;
          case '16' : document.getElementById(diaalfa1).removeEventListener("click",openForm16)
          break;
          case '17' : document.getElementById(diaalfa1).removeEventListener("click",openForm17)
          break;
          case '21' : document.getElementById(diaalfa1).removeEventListener("click",openForm21)
          break;
          case '22' : document.getElementById(diaalfa1).removeEventListener("click",openForm22)
          break;
          case '23' : document.getElementById(diaalfa1).removeEventListener("click",openForm23)
          break;
          case '24' : document.getElementById(diaalfa1).removeEventListener("click",openForm24)
          break;
          case '25' : document.getElementById(diaalfa1).removeEventListener("click",openForm25)
          break;
          case '26' : document.getElementById(diaalfa1).removeEventListener("click",openForm26)
          break;
          case '27' : document.getElementById(diaalfa1).removeEventListener("click",openForm27)
          break;
          case '31' : document.getElementById(diaalfa1).removeEventListener("click",openForm31)
          break;
          case '32' : document.getElementById(diaalfa1).removeEventListener("click",openForm32)
          break;
          case '33' : document.getElementById(diaalfa1).removeEventListener("click",openForm33)
          break;
          case '34' : document.getElementById(diaalfa1).removeEventListener("click",openForm34)
          break;
          case '35' : document.getElementById(diaalfa1).removeEventListener("click",openForm35)
          break;
          case '36' : document.getElementById(diaalfa1).removeEventListener("click",openForm36)
          break;
          case '37' : document.getElementById(diaalfa1).removeEventListener("click",openForm37)
          break;
          case '41' : document.getElementById(diaalfa1).removeEventListener("click",openForm41)
          break;
          case '42' : document.getElementById(diaalfa1).removeEventListener("click",openForm42)
          break;
          case '43' : document.getElementById(diaalfa1).removeEventListener("click",openForm43)
          break;
          case '44' : document.getElementById(diaalfa1).removeEventListener("click",openForm44)
          break;
          case '45' : document.getElementById(diaalfa1).removeEventListener("click",openForm45)
          break;
          case '46' : document.getElementById(diaalfa1).removeEventListener("click",openForm46)
          break;
          case '47' : document.getElementById(diaalfa1).removeEventListener("click",openForm47)
          break;
          case '51' : document.getElementById(diaalfa1).removeEventListener("click",openForm51)
          break;
          case '52' : document.getElementById(diaalfa1).removeEventListener("click",openForm52)
          break;
          case '53' : document.getElementById(diaalfa1).removeEventListener("click",openForm53)
          break;
          case '54' : document.getElementById(diaalfa1).removeEventListener("click",openForm54)
          break;
          case '55' : document.getElementById(diaalfa1).removeEventListener("click",openForm55)
          break;
          case '56' : document.getElementById(diaalfa1).removeEventListener("click",openForm56)
          break;
          case '57' : document.getElementById(diaalfa1).removeEventListener("click",openForm57)
          break;
          case '61' : document.getElementById(diaalfa1).removeEventListener("click",openForm61)
          break;
          case '62' : document.getElementById(diaalfa1).removeEventListener("click",openForm62)
          break;
          case '63' : document.getElementById(diaalfa1).removeEventListener("click",openForm63)
          break;
          case '64' : document.getElementById(diaalfa1).removeEventListener("click",openForm64)
          break;
          case '65' : document.getElementById(diaalfa1).removeEventListener("click",openForm65)
          break;
          case '66' : document.getElementById(diaalfa1).removeEventListener("click",openForm66)
          break;
          case '67' : document.getElementById(diaalfa1).removeEventListener("click",openForm67)
        }
      }
      numero_de_dia_del_mes++;
      if (numero_de_dia_del_mes <= ultimo_dia) 
      {
        semana [i] [f] = numero_de_dia_del_mes;
      }
      f++;
    }
    while (f<=6)
  }
  calendario_mensual=semana
  // ************************************************************
  // modificar el DOM con el calendario del mes solicitado
  // ************************************************************
  let m;
  let j;
  for (m=0;m<6;m++) 
  { 
    for (j=0; j<7;j++)
    {
      let x=m+1;
      let y=j+1;
      let alfam=x.toString ();
      let alfaj=y.toString ();
      let dia="dia"+alfam+alfaj;
      if (calendario_mensual[m][j]==0) 
      {
        document.getElementById(dia).innerHTML="  ";
      } 
      else 
      {
        document.getElementById(dia).innerHTML=calendario_mensual[m][j];
      }
    } 
  }
  let anio_alfa = anio.toString ();
  let mes_alfa;
  if (mes>9) 
  {
    mes_alfa = mes.toString ();
  } 
  else 
  {
    mes_alfa="0"+mes;
  }
  let valor_del_mesyanio = (anio_alfa+"-"+mes_alfa);
  let mesyanio="mesyanio";
  document.getElementById("xr1").innerHTML="<input type=\"month\" id=\"mesyanio\"name=\"mesyanio\"value=\""+valor_del_mesyanio+"\"> ";
  if (calendario_mensual [5][0]==' ') 
  {
    let ultima_s = document.getElementById('ultima_semana'); ultima_s.style.cssText ='display:none'; 
  }
  else 
  {
    let ultima_s = document.getElementById('ultima_semana'); 
    ultima_s.style.cssText ="width: 600px ; text-align: center;" ;
  }
}
// ******************************************************
// crear calendario con el mes seleccionado en la pagina
// y mostrarlo
// ******************************************************
function actualizarMesyAnioElegidos ()
{
  let aaaa_mm ;
  aaaa_mm = document.getElementsByName("mesyanio")[0].value;
  let aaaa= aaaa_mm.slice (0,4);
  let mm= aaaa_mm.slice (5,7);
  mes=parseInt(mm);
  anio=parseInt(aaaa);
  crearCalendarioMensual(mes, anio);
}
//**********************************************************
// hacer login del usuario
//**********************************************************
async function logIn ()
{
  document.getElementById("mensaje_de_bienvenida").style.display=("none");
  document.getElementById("mensaje_de_mail_no_registrado").style.display=("none");
  document.getElementById("mensaje_de_hacer_logoff").style.display=("none");
  document.getElementById("mensaje_de_obligacion_de_login").style.display=("none");
  document.getElementById("mensaje_de_mail_inactivado").style.display=("none");    
  mailadress = document.getElementsByName('correo_electronico')[0].value;
  await buscarAlumnoPorEmail(mailadress);
  if (logueado) 
  { 
    document.getElementById("mensaje_de_hacer_logoff").style.display=("block");
  }
  else if (existe_alumno && datosAlumno.telefono == "Admin") 
  {
    window.location.href = "../paginas_html/gestion_de_agenda.html";
  }
  else if ( existe_alumno && datosAlumno.activo == "inactivo")
  {
    document.getElementById("mensaje_de_mail_inactivado").style.display=("block");
  }
  else if (!existe_alumno) 
  {
    document.getElementById("mensaje_de_mail_no_registrado").style.display=("block");
  }
  else
  {
    await verAgendaAlumno (mailadress,"futuro");
    for (let jis=0; jis<8;jis++)
    {
      if (arrayClases.length>jis) 
      {
        let ji=jis+1;
        let ddAdesp;
        let mmAdesp;
        let aaaaAdesp;
        aaaaAdesp=arrayClases[jis].fecha_alumno.substr(0, 4);
        mmAdesp=arrayClases[jis].fecha_alumno.substr(5, 2);
        ddAdesp=arrayClases[jis].fecha_alumno.substr(8, 2);
        const fechaAdesp = (ddAdesp+"/"+mmAdesp+"/"+aaaaAdesp);
        const fechaDOM=("claseFecha"+ji);
        document.getElementById(fechaDOM).innerHTML=fechaAdesp;
        document.getElementById(fechaDOM).style.display="inline-block";
        document.getElementById(fechaDOM).style.width="100px"; 
        const horaDOM=("claseHora"+ji);
        document.getElementById(horaDOM).innerHTML=arrayClases[jis].hora_alumno;
        document.getElementById(horaDOM).style.display="inline-block";
        document.getElementById(horaDOM).style.width="40px";
        const tipoDOM=("claseDuracion"+ji);
        document.getElementById(tipoDOM).innerHTML=(arrayClases[jis].duracion_alumno+" min.");
        document.getElementById(tipoDOM).style.display="inline-block"; 
        document.getElementById(tipoDOM).style.width="80px";  
      }
      else 
      {  
        let ji=jis+1;
        const fechaDOM=("claseFecha"+ji);
        const horaDOM=("claseHora"+ji);
        document.getElementById(horaDOM).innerHTML= " ";
        document.getElementById(horaDOM).style.display= "none";
        const tipoDOM=("claseDuracion"+ji);
        document.getElementById(tipoDOM).innerHTML= " ";
        document.getElementById(tipoDOM).style.display= "none";
        if (jis==0) 
        {
          document.getElementById(fechaDOM).innerHTML= "No hay clases agendadas";
          document.getElementById(fechaDOM).style.display= "block";
        }
        else
        {
          document.getElementById(fechaDOM).innerHTML= " ";
          document.getElementById(fechaDOM).style.display= "none";
        }
      
      }

    }
    logueado=true;
    document.getElementsByClassName("despliegue_de_la_agenda")[0].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[1].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[2].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[3].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[4].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[5].style.display=("block");
    document.getElementsByClassName("despliegue_de_la_agenda")[6].style.display=("block");
    document.getElementById("haz_click").style.display=("block");
    let nomalu=datosAlumno.nombre;
    let apealu=datosAlumno.apellido;
    let mensajelogin=("Bienvenido "+ nomalu + " " + apealu + " ! , ya puedes agendar tu clase");
    document.getElementById("mensaje_de_bienvenida").innerHTML= mensajelogin;
    document.getElementById("mensaje_de_bienvenida").style.display=("block");
    const ultimoemail = JSON.stringify (mailadress);
    localStorage.setItem('lastmail', ultimoemail);
  }   
}
//**********************************************************
// hacer logoff del usuario
//**********************************************************
function logOff ()
{
  document.getElementById("mensaje_de_bienvenida").style.display=("none");
  document.getElementById("mensaje_de_mail_no_registrado").style.display=("none");
  document.getElementById("mensaje_de_hacer_logoff").style.display=("none");
  document.getElementById("mensaje_de_obligacion_de_login").style.display=("none");
  document.getElementById("mensaje_de_mail_inactivado").style.display=("none");
  document.getElementsByClassName("despliegue_de_la_agenda")[0].style.display=("none"); 
  document.getElementsByClassName("despliegue_de_la_agenda")[1].style.display=("none");
  document.getElementsByClassName("despliegue_de_la_agenda")[2].style.display=("none");
  document.getElementsByClassName("despliegue_de_la_agenda")[3].style.display=("none");
  document.getElementsByClassName("despliegue_de_la_agenda")[4].style.display=("none");
  document.getElementsByClassName("despliegue_de_la_agenda")[5].style.display=("none");
  document.getElementsByClassName("despliegue_de_la_agenda")[6].style.display=("none");
  document.getElementById("haz_click").style.display=("none");
  logueado= false;   
}
//**********************************************************
// buscar alumno por email
//**********************************************************
async function buscarAlumnoPorEmail(email) 
{
  await obtenerAlumno (email);
}