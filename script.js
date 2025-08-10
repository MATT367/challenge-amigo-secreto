// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* VARIABLES */
const nombre = document.getElementById('amigo');//Campo para ingresar nombres
const lista = document.getElementById('listaAmigos');//Campo para mostrar nombres
const resul = document.getElementById('resultado');//Campo para sortear nombres

let amigos = [];//Nombres de los amigos
let listaN  = [];//El amigo seleccionado

/* VARIABLES */ 

function agrAmi(){
    let amigo = nombre.value.trim();
    //Si hay algo algun valor distinto a vacío en el campo de ingreso se inicia
    if (amigo != ''){ 
        //Evalua que ese amigo no esté escrito ya y  en caso de que no esté lo agrega
        if(!amigos.includes(amigo)){
            amigos.push(amigo);
        }
        else{
            //Caso contrario le avisa
            alert('¡Ya ingresaste ese nombre!');
        }
    }else{
        //Caso contrario se pide que ingrese un nombre
        alert('No se ingresó ningún nombre.');
    }
    nombre.value = '';//Se limpia  el campo
}

function listado(){
    //Se limpia el campo para evitar redundancias
    lista.innerHTML = '';
    
    for(let x=0; x<amigos.length ; x++){
        //Por cada puesto ocupado en la lista con nombres se crea un elemento de lista
        const nueAmi = document.createElement('li');
        nueAmi.innerHTML = (amigos[x])
        lista.appendChild(nueAmi);
    }
}

function sortearAmigo(){
    //Se limpia el campo para evitar mala comprensión
    resul.innerHTML = '';

    //Se evalua la cantidad mínima, si no la supera sale de la función
    if (amigos.length < 3){
        alert("Se requiere de al menos 3 amigos para generar un sorteo.");
        return;
    }
    //Se evalua si ya se sortearon todas las posiciones de los amigos, si se sortearon todos sale de la función
    if (amigos.length === listaN.length){
        alert('¡Ya se sortearon todos los amigos!');
        return;
    }
    
    //Iniciamos el número del amigo
    let numGen;
    //Creamos un doWhile que se ejecuta hasta que salga un amigo no sorteado, usamos do para que entre en el bucle sí o sí
    do{
        numGen = Math.floor(Math.random()*amigos.length);
    } while (listaN.includes(numGen));
    //Ahora sí guardamos la posición del amigo
    listaN.push(numGen);

    //Creamos un espacio para enseñar que amigo se sorteó
    let amiGen = document.createElement('h2');
    amiGen.innerHTML = amigos[numGen];
    resul.appendChild(amiGen);
}

function reiniciar(){
    //Una función para reestablecer todos los valores
    resul.innerHTML = '';
    lista.innerHTML = '';
    listaN = []
    amigos = []
}