let numeroAdivinar = 0;
let formulario = document.querySelector('#formulario');
console.log(formulario)
//agregar eventos desde js
formulario.addEventListener('submit', adivinar);

function comenzarJuego(){
   numeroAdivinar = Math.floor(Math.random()*(6-1 +1) + 1)
}

function adivinar(e){
    e.preventDefault();
    let numeroIngresado = document.querySelector('#inputAdivinar').value;
    console.log(numeroIngresado)
    if(numeroIngresado == numeroAdivinar){
        alert('Adivinaste!')
    }else if (numeroAdivinar < numeroIngresado){
        alert("¡Fallaste! Tu número " +numeroIngresado+ " es mayor al número mágico ")
    }
    else{
        alert("¡Fallaste! Tu número " +numeroIngresado+ " es menor al número mágico ")
    }
}