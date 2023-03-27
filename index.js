let menos = document.getElementById('-');
let count = document.getElementById('count');
let mas = document.getElementById('+');
let reset = document.getElementById('0');

menos.addEventListener('click',menorar);
mas.addEventListener('click',sumar);
reset.addEventListener('click',resetear);


function menorar() {
    count.innerHTML--;
}

function sumar() {
    count.innerHTML++;
    
}

function resetear () {
    count.innerHTML = 0;
}
