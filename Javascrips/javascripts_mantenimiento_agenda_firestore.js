// **************************************************************
// *   MODULOS DE MANEJO DE LA BASE DE DATOS DE FIRESTORE       *
// **************************************************************
//
// Importar la última versión del SDK de Firebase Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, doc, collection, getDocs, query, where, setDoc, updateDoc, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
//
// Configuracion de Firestore
const firebaseConfig = 
{
  apiKey: "AIzaSyDv99Xj4-JLdEjm4UDa5opDtgDVTYBJhmM",
  authDomain: "agenda-de-juan-manuel.firebaseapp.com",
  projectId: "agenda-de-juan-manuel",
  storageBucket: "agenda-de-juan-manuel.appspot.com",
  messagingSenderId: "1007535648282",
  appId: "1:1007535648282:web:af3c4f67e2736f79866ba3"
};
//
// Inicializar la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// *************************************************************
//               Obtener agenda de un dia
// *************************************************************
let existe_agenda
let existe_alumno
let docSnap
let datos
let docSnapAlumno
let datosAlumno
async function  obtenerAgenda (fecha_y_hora_de_la_agenda)
{
  const docId = fecha_y_hora_de_la_agenda;
  const db = getFirestore(app);
  const agendaRef = collection(db, "agenda/clases/clasesPorFecha");
  const docRef = await doc(db, "agenda/clases/clasesPorFecha", docId );
  docSnap = await getDoc(docRef);
  datos= await docSnap.data (); 
  if (docSnap.exists()) 
  {
    existe_agenda=true;
  } 
  else 
  {
    existe_agenda=false;
  }
}
export {obtenerAgenda, existe_agenda, datos};

// ***************************************************************
// Crear un horario de clase en la agenda
// ***************************************************************
async function crear_una_clase (fecha_y_hora_de_la_agenda) 
{
  const db = getFirestore(app);
  const agendaRef = collection(db, "agenda/clases/clasesPorFecha");
  const docId = fecha_y_hora_de_la_agenda;
  let fecha_agenda= fecha_y_hora_de_la_agenda.slice(0, 10);
  let hora_agenda= fecha_y_hora_de_la_agenda.slice(11);
  const docData = 
  {
    disponibilidad: "1",
    duracion: "0",
    tipo: "0",
    email: "",
    fecha: fecha_agenda,
    hora: hora_agenda,
    mensaje: ""
  };
  await setDoc(doc(agendaRef, fecha_y_hora_de_la_agenda), {docData})
    .then(() => {
      //console.log("Documento creado exitosamente.");
    })
    .catch((error) => {
      console.error("Error al crear documento: ", error);
    });
}
export {crear_una_clase};

// **********************************************************
// Eliminar un horario de clase en la agenda
// **********************************************************

async function eliminar_una_clase (fecha_y_hora_de_la_agenda) 
{
  const db = getFirestore(app);
  const agendaRef = collection(db, "agenda/clases/clasesPorFecha");
  const docId = fecha_y_hora_de_la_agenda;
  let fecha_agenda= fecha_y_hora_de_la_agenda.slice(0, 10);
  let hora_agenda= fecha_y_hora_de_la_agenda.slice(11);
  await deleteDoc(doc(agendaRef, fecha_y_hora_de_la_agenda))
    .then(() => {
      //console.log("Documento eliminado exitosamente.");
    })
    .catch((error) => {
      console.error("Error al crear documento: ", error);
    });
}
export {eliminar_una_clase}

// ************************************************************
// agendar una clase para un alumno
// ************************************************************
async function agendar_una_clase (fecha_y_hora_de_la_agenda,dura_a, tipo_a, email_a, fecha_a, hora_a,msg ) 
{
  const db = getFirestore(app);
  const agendaRef = collection(db, "agenda/clases/clasesPorFecha");
  const docId = fecha_y_hora_de_la_agenda;
  let fecha_agenda= fecha_y_hora_de_la_agenda.slice(0, 10);
  let hora_agenda= fecha_y_hora_de_la_agenda.slice(11);
  const docData = {
    disponibilidad: "2",
    duracion: dura_a,
    tipo: tipo_a,
    email: email_a,
    fecha: fecha_a,
    hora: hora_a,
    mensaje: msg
  };
  await updateDoc(doc(agendaRef, fecha_y_hora_de_la_agenda), {docData})
  .then(() => {
    //console.log("Documento actualizado exitosamente.");
  })
  .catch((error) => {
    console.error("Error al actualizar un documento: ", error);
  });
}
export { agendar_una_clase }; 

// *******************************************************************
// Desagendar una clase 
// *******************************************************************
async function desagendar_una_clase (fecha_y_hora_de_la_agenda,dura_a, tipo_a, email_a, fecha_a, hora_a ) 
{
  const db = getFirestore(app);
  const agendaRef = collection(db, "agenda/clases/clasesPorFecha");
  const docId = fecha_y_hora_de_la_agenda;
  let fecha_agenda= fecha_y_hora_de_la_agenda.slice(0, 10);
  let hora_agenda= fecha_y_hora_de_la_agenda.slice(11);
  const docData = {
    disponibilidad: "1",
    duracion: "",
    tipo: "",
    email: "",
    fecha: fecha_agenda,
    hora: hora_agenda,
    mensaje: "clase desagendada"
  };
  await updateDoc(doc(agendaRef, fecha_y_hora_de_la_agenda), {docData})
  .then(() => {
    //console.log("Documento actualizado exitosamente.");
  })
  .catch((error) => {
    console.error("Error al actualizar un documento: ", error);
  });
}
export { desagendar_una_clase }; 

// ******************************************************************
// consultar los datos de un alumno
// ******************************************************************
async function  obtenerAlumno (email_consulta)
{
  const docId = email_consulta;
  const db = getFirestore(app);
  const agendaRef = collection(db, "agenda/clases/alumnos");
  const docRef = await doc(db, "agenda/clases/alumnos", docId );
  docSnapAlumno = await getDoc(docRef);
  datosAlumno= await docSnapAlumno.data ();
  if (docSnapAlumno.exists()) 
  {
    existe_alumno=true;
  } 
  else 
  {
    existe_alumno=false
  }
}
export {obtenerAlumno, existe_alumno, datosAlumno};

// ******************************************************************
// Inactivar a un alumno
// ******************************************************************
async function inactivarUnAlumno (elmail) 
{
  const db = getFirestore(app);
  const agendaRef = collection(db, "agenda/clases/alumnos");
  const docId = elmail;
  const docData = { activo: "inactivo" };
  await updateDoc(doc(agendaRef, docId), {activo: "inactivo"})
  .then(() => {
    console.log("Documento actualizado exitosamente.");
  })
  .catch((error) => {
    console.error("Error al actualizar un documento: ", error);
  });
}
export { inactivarUnAlumno }; 

// *******************************************************************
// Agregar un alumno nuevo
// *******************************************************************
async function agregarUnAlumno (elmail, nombreAlu, apellidoAlu, telefonoAlu) 
{
  const db = getFirestore(app);
  const agendaRef = collection(db, "agenda/clases/alumnos");
  const docId = elmail;
  await setDoc(doc(agendaRef, docId), 
  {email:elmail,
    nombre:nombreAlu,
    apellido:apellidoAlu,
    telefono:telefonoAlu,
    activo:"activo"})
  .then(() => {
    //console.log("Documento actualizado exitosamente.");
  })
  .catch((error) => {
    console.error("Error al actualizar un documento: ", error);
  });
}
export { agregarUnAlumno }; 

// ******************************************************************
// Re-Activar un alumno
// ******************************************************************
async function reactivarUnAlumno (elmail) 
{
  const db = getFirestore(app);
  const agendaRef = collection(db, "agenda/clases/alumnos");
  const docId = elmail;
  await updateDoc(doc(agendaRef, docId), {activo: "activo"})
  .then(() => {
    //console.log("Documento actualizado exitosamente.");
  })
  .catch((error) => {
    console.error("Error al actualizar un documento: ", error);
  });
}
export { reactivarUnAlumno }; 

// ************************************************************
// Obtener los datos de la Agenda de todo un mes 
// ************************************************************
let mail_agendados = new Array(31); 
let tema_agendado = new Array(31); 
let duracion_agendada = new Array(31); 
let mensaje_agendado = new Array(31); 
let disponibilidad = new Array(31); 
async function consultarAgenda (mesyanio)
{
  for(let ixi = 0; ixi < 31; ixi++) 
  {
    disponibilidad [ixi] = new Array(24);
    tema_agendado [ixi] = new Array(24);
    duracion_agendada [ixi] = new Array(24);
    mensaje_agendado [ixi] = new Array(24);
    mail_agendados [ixi] = new Array(24); 
  }
  for (let chj =0; chj <= 30; chj++) 
  {
    disponibilidad [chj].splice (0,23);
    tema_agendado [chj].splice (0,23);
    duracion_agendada [chj].splice (0,23);
    mensaje_agendado [chj].splice (0,23);
    mail_agendados [chj].splice (0,23);
  }  
  const mesyaniodesde = (mesyanio + "-00");
  const mesyaniohasta = (mesyanio + "-32");
  const db = getFirestore(app);
  const q= query (collection(db, "agenda/clases/clasesPorFecha") , where("docData.fecha", ">=", mesyaniodesde) , where("docData.fecha", "<=", mesyaniohasta)) ;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach ((doc) => 
  { 
    let fecha_docData = doc.data().docData.fecha ;
    let dd_docData = parseInt (fecha_docData.slice (8));
    dd_docData--;
    let hh_docData = parseInt (doc.data().docData.hora);
    hh_docData--;
    let disponumerica = parseInt (doc.data().docData.disponibilidad)
    if (isNaN.disponumerica) 
    {
      disponumerica=0
    }
    disponibilidad [dd_docData] [hh_docData] = disponumerica;
    mail_agendados [dd_docData] [hh_docData] = doc.data().docData.email;
    tema_agendado [dd_docData] [hh_docData] = doc.data().docData.tipo;
    duracion_agendada [dd_docData] [hh_docData] = doc.data().docData.duracion;
    mensaje_agendado [dd_docData] [hh_docData] = doc.data().docData.mensaje;
  });
}
export {consultarAgenda, disponibilidad, mail_agendados, tema_agendado, duracion_agendada, mensaje_agendado}; 

// ***********************************************************************
// Obtener los datos del padron de alumnos (activos o inactivos)
// ***********************************************************************
class Alumno 
{
  constructor (emailAlumno, nombreAlumno, apellidoAlumno, telefonoAlumno)
  {
    this.emailAlumno=emailAlumno
    this.nombreAlumno=nombreAlumno
    this.apellidoAlumno=apellidoAlumno
    this.telefonoAlumno=telefonoAlumno
  }
};
let alumnos;
let arrayAlumnos = [];
async function consultarAlumnos (activo_solicitado)
{
  const db = getFirestore(app);
  const q= query (collection(db, "agenda/clases/alumnos") , where("activo", "==", activo_solicitado)) ;
  const querySnapshotAlumnos = await getDocs(q);
  querySnapshotAlumnos.forEach ((doc) => 
  { 
    if (doc.data().telefono!="Admin") 
    {
       alumnos = new Alumno 
       ( 
        doc.data ().email, 
        doc.data ().nombre, 
        doc.data ().apellido,
        doc.data ().telefono
       )
       arrayAlumnos.push (alumnos)
    }    
  });
}
export {consultarAlumnos, arrayAlumnos}; 

// ************************************************************************
// Obtener las clases agendadas de un alumno (futuras o pasadas)
// ************************************************************************
class Aagenda_de_un_alumno 
{
  constructor (fecha_alumno, hora_alumno, duracion_alumno,tipo_alumno, mensaje_alumno )
  {
    this.fecha_alumno=fecha_alumno
    this.hora_alumno=hora_alumno
    this.duracion_alumno=duracion_alumno
    this.tipo_alumno=tipo_alumno
    this.mensaje_alumno=mensaje_alumno
  }
}
let clases_del_alumno;
let arrayClases = [];
async function verAgendaAlumno (mail_solicitado, futuro)
{
  arrayClases.splice(0, arrayClases.length);
  const fechaActual = new Date();
  let mes_de_hoy;
  let dia_de_hoy;
  const dia_de_h = fechaActual.getDate() ;
  const mes_de_h = fechaActual.getMonth() + 1; 
  if (mes_de_h<10) 
  { 
    mes_de_hoy= ("0"+mes_de_h)
  }
  else 
  {
    mes_de_hoy = mes_de_h
  }
  if (dia_de_h<10) 
  { 
    dia_de_hoy= ("0"+dia_de_h)
  }
  else 
  {
    dia_de_hoy = dia_de_h
  }
  const anio_de_hoy = fechaActual.getFullYear();
  const fecha_a_consultar = (anio_de_hoy+"-"+mes_de_hoy+"-"+dia_de_hoy);
  const db = getFirestore(app);
  let q;
  if (futuro=="futuro") 
  {
    q= query (collection(db, "agenda/clases/clasesPorFecha") , where("docData.email", "==", mail_solicitado) , where("docData.fecha", ">", fecha_a_consultar)) ;
  }
  else 
  {
    q= query (collection(db, "agenda/clases/clasesPorFecha") , where("docData.email", "==", mail_solicitado) , where("docData.fecha", "<=", fecha_a_consultar)) ;
  }
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach ((doc) => 
  { 
    clases_del_alumno = new Aagenda_de_un_alumno
       ( 
        doc.data ().docData.fecha, 
        doc.data ().docData.hora, 
        doc.data ().docData.duracion,
        doc.data ().docData.tipo,
        doc.data ().docData.mensaje,
       )
       arrayClases.push (clases_del_alumno)
  });
}
export {verAgendaAlumno, arrayClases} 