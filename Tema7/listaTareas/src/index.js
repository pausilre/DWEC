let listaTareas = []; 
obtenerLista();
document.getElementById('anyadir').addEventListener('click', incluirEnLista);

function obtenerLista(){
    if(localStorage.getItem("lista")){
        listaTareas = JSON.parse(localStorage.getItem("lista"));
        listaTareas.forEach(tarea => {
            document.getElementById("listado").innerHTML+=`<li>${tarea}</li>`;
        });
    }
}

function incluirEnLista(e){
    const tarea = document.getElementById("campoTarea").value;
    document.getElementById("listado").innerHTML+=`<li>${tarea}</li>`;
    listaTareas.push(tarea);
    localStorage.setItem("lista",JSON.stringify(listaTareas));
}
