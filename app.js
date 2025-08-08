// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombre = document.getElementById('amigo');
let amigos = [];

function agrAmi(){
    let amigo = nombre.value;
    if (amigo != ''){
        console.log(amigo);
        amigos.push(amigo);
        console.log(amigos);
        nombre.value = '';
    }else{
        alert('No se ingresó ningún nombre.');
    }
}