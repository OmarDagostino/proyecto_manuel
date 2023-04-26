let mensaje1;
let mensaje2;
const url='../archivos_json/alumnos.json';

obtenerRegistro();

async function obtenerRegistro() 
{
  try 
    {
        const response = await fetch(url);
        const data = await response.json();
        mensaje1 = data.comentario1;
        mensaje2 = data.comentario2;
    } 
catch (error) 
    {
        console.log('Hubo un problema con la solicitud fetch:', error);   
    }
finally
    {
        document.getElementById("primerComentario").innerHTML=mensaje1;
        document.getElementById("segundoComentario").innerHTML=mensaje2;
        //document.getElementById("segundoComentario").innerHTML=mensaje2;
    }
}