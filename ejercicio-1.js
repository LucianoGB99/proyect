let alumnos = [];

function calcularPromedio() {
    console.log("")
}

// 1.Solicita los datos: Nombre, Apellido y Notas
// 2.Carga en los array los datos
function CargarAlumno(){
    let nombre;
    let apellido;
    let notas = [];
    let alumno = []; // Array para guardar los datos del alumno y sus notas
    do {
        nombre = prompt('Ingrese el nombre');

    } while( !isNaN(nombre) ) // Valida que el usuario coloco un dato del tipo string

    do{
        apellido = prompt('Ingrese el apellido');

    } while( !isNaN( apellido ) )


    // Solicito notas, 
    do{
        let nota;
        do {
            nota = parseInt(  prompt('Ingrese la nota del Alumno') );
        } while (   !(nota >= 1 && nota <= 10)   )  // Valido que sea entre 1 y 10


        notas.push(nota);

    } while(  confirm('¿Seguir ingresando notas?') );

    // Agregro los datos al array Alumno
    alumno['nombre'] = nombre;
    alumno['apellido'] = apellido;
    alumno['notas'] = notas;


    console.log(alumno);

    // Agrego al array Global

    alumnos.push(alumno);

}

let objeto;

// Recorre los array y renderizar en el HTML los datos
function MostrarDatos(){
    let html = '';
    
    // Recorro el array Global
    for(alumno of alumnos){
       // console.table(alumno);
        let acumulador = 0, promedio= 0;

        html += `<div>
                    <p>${alumno['nombre']} ${ alumno['apellido']}</p>
                    <p>Notas</p>
                    <ul>`
            for(nota of alumno['notas'] ){
                if(  nota < 4 ){
                    html += `<li style="color: red">Notas: ${nota}</li>`;
                } else {
                    html += `<li style="color: green">Notas: ${nota}</li>`;
                    
                }
                acumulador+=nota
            }promedio=acumulador/alumno['notas'].length
            
            html +=  ` <li>promedio: ${promedio}</li>
                    </ul>
                </div>`

    }


    document.querySelector('#info').innerHTML = html;
}