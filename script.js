let titulo = document.getElementById('titulo');
let noticia = document.getElementById('noticia');
let autor = document.getElementById('autor');
let addNoticia = document.getElementById('crearnoti');

class Noticia {
	constructor(titulo, noticia, autor) {
		this.titulo = titulo;
		this.noticia = noticia;
		this.autor = autor;
	}
}

let noticias = [];

function Agregar() {
	if (titulo.value == '') {
		alert('Ingrese un titulo');
	}
	if (noticia.value == '') {
		alert('Ingrese una noticia valida');
	} else {
		let noti = new Noticia(titulo.value, noticia.value, autor.value);
		noticias.push(noti);
		alert('Noticia Agregada.');

		mostrarNoticia();
	}
}

function mostrarNoticia() {
	let cont = document.getElementById('noticias');
	let contenedor = document.createElement('div');
	contenedor.classList.add('divNoticia', 'container', 'border', 'rounded', 'shadow-lg');
	contenedor.innerHTML =
		`<h2 class='text-center mt-4'>${titulo.value}</h2> ` +
		`<p class='cuerponoticia'>${noticia.value}` +
		`<h4 class='autor'>Autor: ${autor.value}.</h4>`;
	cont.appendChild(contenedor);
	//let noti = document.createElement('div');
	//noti.classList.add('divNoticia', 'container', 'border', 'rounded', 'shadow-lg');
	//noti.innerHTML = `<h2 class='text-center'>${titulo.value}</h2> ` + `<p>${noticia.value}`;
	//document.body.appendChild(divNoticias);
}
