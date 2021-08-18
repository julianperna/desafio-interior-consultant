
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');
const titulo = document.querySelector('.titulo');
const descripcion = document.querySelector(".descripcion");
const footer = document.querySelector(".footer-p");
ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    titulo.classList.toggle('desactivado');
    descripcion.classList.toggle("desactivado");
    footer.classList.toggle("desactivado");
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

