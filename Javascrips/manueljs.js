let logueado = false
class alumno 
{
  constructor(emailAlumno, nombreAlumno, apellidoAlumno, telefonoAlumno, fechaAlumno, estadoAlumno)
  {
    this.emailAlumno = emailAlumno;
    this.nombreAlumno =nombreAlumno;
    this.apellidoAlumno =apellidoAlumno;
    this.telefonoAlumno =telefonoAlumno;
    this.fechaAlumno =fechaAlumno;
    this.estadoAlumno =estadoAlumno;
  }
}
const alumnado = [new alumno ("juandelospalotes@unmail.com","juan","delospalotes","08109999999","1/04/2023","inactivo"),
                  new alumno ("otroalumno@unmail.com","otro","mas ","08109999999","1/04/2023","activo")]

// array con la disponibilidad horaria del mes por dia y horas (dentro de cada dia)
//
let disponibilidad = 
        [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ]

// ***************************************************
// crear el calendario mensual con el mes y año actual
// para mostrar cuando se entra a la pagina
// ***************************************************
let dia_elegido
let mailadress
let today= new Date ();
let mes = today.getMonth ()
mes++
let mesyaniodelcalendariodesplegado
const mesdelcalendariodesplegado = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let anio = today.getFullYear ()
let aaaa
let mm
let calendario_mensual
crearCalendarioMensual (mes, anio)
modificarDOM ()
//********************************************************
// desplegar formulario de registracion de nuevo usuario
//********************************************************
function openForm() 
{   
    document.getElementById("myForm").style.display = "block";
} 
//*********************************************************
// cerrar formulario de registracion sin actualizar nada
//*********************************************************
function closeForm() 
{
    document.getElementById("myForm").style.display = "none";
    document.getElementById("mail_ya_registrado").style.display = "none"
    document.getElementById("los_mails_no_coinciden").style.display = "none"
}
//**********************************************************
// registrar un nuevo usuario
//**********************************************************
function registrarNuevoUsuario ()
{
  let nuevoEmail = document.getElementsByName('emailN')[0].value
  if (buscarAlumnoPorEmail(nuevoEmail)!=-1) 
  {
    document.getElementById("mail_ya_registrado").style.display = "block"
  }
  else if (document.getElementsByName('emailN1')[0].value != nuevoEmail)
  {
    document.getElementById("los_mails_no_coinciden").style.display = "block"
  }
  else
  {
    let nuevoAlumno = new alumno(nuevoEmail, document.getElementsByName('nombre')[0].value,document.getElementsByName('apellido')[0].value, document.getElementsByName('telefono')[0].value, today, "activo");
    alumnado.push(nuevoAlumno);
    document.getElementsByName('correo_electronico')[0].value=nuevoEmail
    logIn ()
    document.getElementById("myForm").style.display = "none";
    document.getElementById("mail_ya_registrado").style.display = "none"
    document.getElementById("los_mails_no_coinciden").style.display = "none"
  }
  
  
}
//*********************************************************
// desplegar la agenda disponible del dia elegido
//*********************************************************
function openForm1(dia_elegido) 
{
  if (logueado) 
    {
      let dia=("dia"+dia_elegido)
      let dia_a_desplegar = (document.getElementById(dia).innerHTML) + " de " + mesyaniodelcalendariodesplegado
      document.getElementById("titu-agenda").innerHTML = "Agenda del día " + dia_a_desplegar
      for (i=0; i<=23; i++)
      {
        let indice_de_dia = parseInt(document.getElementById(dia).innerHTML)-1
        let imas1=i+1
        console.log (indice_de_dia)
        console.log (i)
        if (disponibilidad [indice_de_dia] [i] == 0) {document.getElementById("horario-"+imas1).style.display="none"}
        else {document.getElementById("horario-"+imas1).style.display="flex"}
      }
      document.getElementById("miformulario").style.display = "block";
    }
  else
    {
      document.getElementById("mensaje_de_obligacion_de_login").style.display=("block")
    }
} 
//*************************************************************
// cerrar la agenda disponible del dia elegido sin actualizar
//************************************************************* 
function closeForm1() 
{
    document.getElementById("miformulario").style.display = "none";
}
//***************************************************************
// actualizar agenda del dia elegido
//****************************************************************
function actualizarAgenda ()
{
  /*document.getElementById("miformulario").style.display = "block";*/
}
// *****************************************************
// crear un calendario mensual
// *****************************************************
function crearCalendarioMensual (mes, anio)
    {
        //llenar el mes y año a desplegar en el titulo del calendario
        //
        mesyaniodelcalendariodesplegado = (mesdelcalendariodesplegado[mes-1]+ " de "+ anio)
        document.getElementById("mesyaniodesplegados").innerHTML=mesyaniodelcalendariodesplegado 
        //
        // determinar el numero del ultimo dia del mes
        let semana = [[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0]]
        let ultimos_dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        let ultimo_dia = 0
        let biciesto = anio % 4
        if (biciesto==0) { biciesto=1} else {biciesto=0}
        if (mes==2){ultimo_dia = ultimos_dias [1] +biciesto} else {ultimo_dia = ultimos_dias [mes-1]}
        //
        // determinar que dia de la semana cae el primer dia del mes
        const d = new Date ( anio+"-"+ mes +"-"+"01" )
        let primer_dia = d.getDay ()
        let f=primer_dia
        let numero_de_dia_del_mes = 0
        let i=0
        //
        // blanquear el background de la primera semana y llamada a la agenda
        for (i=1; i<=7; i++)
        {
          document.getElementById("dia1"+i).style.backgroundColor="white";
          document.getElementById("dia1"+i).removeAttribute('onclick')
        }
        //
        // determinar disponibilidad de clases por dias
        let dias_con_clases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        

       for  (w=0; w<=30; w++)
        {
          let dia_con_disponibilidad = 0
          for (j=0; j<=23; j++)
          {
            dia_con_disponibilidad = dia_con_disponibilidad+disponibilidad[w] [j]
          }
          if (dia_con_disponibilidad>=1) { dias_con_clases[w]=1}
        }

        //
        // llenar las semanas con los numeros de dia y modificar DOM con disponibilidad
        for (i=0; i<=5 ; i++)
        {
            let j=i+1
            let jalfa=j.toString()
            do
            {
                if (f==7) {f=0}
                let g=f+1
                let galfa=g.toString()
                if (numero_de_dia_del_mes<= 31 && dias_con_clases [numero_de_dia_del_mes] == 1) 
                {
                  const open = ("openForm1("+jalfa+galfa+")")
                  document.getElementById("dia"+j+g).setAttribute("onclick",open)
                  document.getElementById("dia"+j+g).style.backgroundColor="greenyellow"; 
                }
                else 
                {                
                  document.getElementById("dia"+j+g).removeAttribute('onclick')
                  document.getElementById("dia"+j+g).style.backgroundColor="white"; 
                  
                }
                numero_de_dia_del_mes++
                if (numero_de_dia_del_mes <= ultimo_dia) {semana [i] [f] = numero_de_dia_del_mes}
                f++
            }
            while (f<=6)
        }
        calendario_mensual=semana
        return (calendario_mensual)
    }
// ************************************************************
// modificar el DOM con el calendario del mes solicitado
// ************************************************************
function modificarDOM ()
{
    let m
    let j
    for (m=0;m<6;m++) 
    { 
        for (j=0; j<7;j++)
        {
            let x=m+1
            let y=j+1
            let alfam=x.toString ()
            let alfaj=y.toString ()
            let dia="dia"+alfam+alfaj
            if (calendario_mensual[m][j]==0) {document.getElementById(dia).innerHTML="  "} else {document.getElementById(dia).innerHTML=calendario_mensual[m][j]}
        } 
    }
    let anio_alfa = anio.toString ()
    let mes_alfa
    if (mes>9) {mes_alfa = mes.toString ()} else {mes_alfa="0"+mes}
    let valor_del_mesyanio = (anio_alfa+"-"+mes_alfa)
    let mesyanio="mesyanio"
    document.getElementById("xr1").innerHTML="<input type=\"month\" id=\"mesyanio\"name=\"mesyanio\"value=\""+valor_del_mesyanio+"\"> "
    if (calendario_mensual [5][0]==' ') {let ultima_s = document.getElementById('ultima_semana'); ultima_s.style.cssText ='display:none'; }
    else {let ultima_s = document.getElementById('ultima_semana'); ultima_s.style.cssText ="width: 600px ; text-align: center;" }
}
// ******************************************************
// crear calendario con el mes seleccionado en la pagina
// y mostrarlo
// ******************************************************
function actualizarMesyAnioElegidos ()
{
    let aaaa_mm 
    aaaa_mm = document.getElementsByName("mesyanio")[0].value
    aaaa= aaaa_mm.slice (0,4)
    mm= aaaa_mm.slice (5,7)
    mes=parseInt(mm)
    anio=parseInt(aaaa)
    crearCalendarioMensual(mes, anio)
    modificarDOM ()
}
//**********************************************************
// hacer login del usuario
//**********************************************************
function logIn ()
{
    document.getElementById("mensaje_de_bienvenida").style.display=("none")
    document.getElementById("mensaje_de_mail_no_registrado").style.display=("none")
    document.getElementById("mensaje_de_hacer_logoff").style.display=("none")
    document.getElementById("mensaje_de_obligacion_de_login").style.display=("none")
    mailadress = document.getElementsByName('correo_electronico')[0].value;
    if (logueado) 
    { 
      document.getElementById("mensaje_de_hacer_logoff").style.display=("block")
    }
    else if (buscarAlumnoPorEmail(mailadress)==-1) 
    {
      document.getElementById("mensaje_de_mail_no_registrado").style.display=("block")
    }
    else 
    {
      logueado=true
      let indice_alumnado = (buscarAlumnoPorEmail(mailadress))
      let nomalu=alumnado[indice_alumnado].nombreAlumno
      let apealu=alumnado[indice_alumnado].apellidoAlumno
      let mensajelogin=("Bienvenido "+ nomalu + " " + apealu + " ! , ya puedes agendar tu clase")
      document.getElementById("mensaje_de_bienvenida").innerHTML= mensajelogin
      document.getElementById("mensaje_de_bienvenida").style.display=("block")
    }   
}
//**********************************************************
// hacer logoff del usuario
//**********************************************************
function logOff ()
{
  document.getElementById("mensaje_de_bienvenida").style.display=("none")
  document.getElementById("mensaje_de_mail_no_registrado").style.display=("none")
  document.getElementById("mensaje_de_hacer_logoff").style.display=("none")
  document.getElementById("mensaje_de_obligacion_de_login").style.display=("none")
   
  logueado= false   
}
//**********************************************************
// buscar alumno por email
//**********************************************************
function buscarAlumnoPorEmail(email) 
{
  return alumnado.findIndex(alumno => alumno.emailAlumno === email);
}