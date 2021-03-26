let btnNombre = document.getElementById('nombreConfirmar');
let btnNoticia = document.getElementById('noticiaPublicar');
let btnVerNoticia = document.getElementById('verNoticia');
let btnNuevaNoticia = document.getElementById('nuevaNoticia');

function panelNoticia() {
	if (autor.value == '') {
		alert('Ingrese su nombre.');
	} else {
		let nombreOcultar = document.getElementById('nombreAutor');
		nombreOcultar.classList.remove('visible');

		console.log('clase borrada');

		let NoticiaPublicar = document.getElementById('panelNoticia');
		NoticiaPublicar.classList.add('visible');
		console.log('clase agregada');
	}
}

function verNoticias() {
	let panelNoticia = document.getElementById('panelNoticia');
	panelNoticia.classList.remove('visible');

	let noticias = document.getElementById('verNoticias');
	noticias.classList.add('visible');
}
function volverPanel() {
	let noticias = document.getElementById('verNoticias');
	noticias.classList.remove('visible');

	let panelNoticia = document.getElementById('panelNoticia');
	panelNoticia.classList.add('visible');
}

function volverNombre() {
	let NoticiaPublicar = document.getElementById('panelNoticia');
	NoticiaPublicar.classList.remove('visible');
	console.log('clase agregada');

	let nombreOcultar = document.getElementById('nombreAutor');
	nombreOcultar.classList.add('visible');

	console.log('clase borrada');
}
