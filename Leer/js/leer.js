function verificacionModo(){
    if (document.getElementById('modoOscuro').checked){
        navegacionPrincipal.classList.add('navegacion-principalDM');
        navegacionPrincipal.classList.remove('navegacion-principal');

        navegacionbotones.classList.add('navegacion-botonesDM');
        navegacionbotones.classList.remove('navegacion-botones');

        modoLectura.classList.add('modoLecturaDM');
        modoLectura.classList.remove('modoLectura');

        iconoOscuro.classList.add('iconos-modoDM');
        iconoOscuro.classList.remove('iconos-modo');

        iconoClaro.classList.add('iconos-modoDM');
        iconoClaro.classList.remove('iconos-modo');

        introduccion.classList.add('introduccionDM');
        introduccion.classList.remove('introduccion');

        pie.classList.add('pieDM');
        pie.classList.remove('pie');

        redes.classList.add('redesDM');
        redes.classList.remove('redes');

        pdfOscuro.style.display = 'block'

        elPDF.style.display = 'none'
        elPDFDM.style.display = 'block'
    }
    else if (document.getElementById("modoClaro").checked){
        navegacionPrincipal.classList.add('navegacion-principal');
        navegacionPrincipal.classList.remove('navegacion-principalDM');

        navegacionbotones.classList.add('navegacion-botones');
        navegacionbotones.classList.remove('navegacion-botonesDM');

        modoLectura.classList.add('modoLectura');
        modoLectura.classList.remove('modoLecturaDM');

        iconoOscuro.classList.add('iconos-modo');
        iconoOscuro.classList.remove('iconos-modoDM');

        iconoClaro.classList.add('iconos-modo');
        iconoClaro.classList.remove('iconos-modoDM');

        introduccion.classList.add('introduccion');
        introduccion.classList.remove('introduccionDM');

        pie.classList.add('pie');
        pie.classList.remove('pieDM');

        redes.classList.add('redes');
        redes.classList.remove('redesDM');

        pdfOscuro.style.display = 'none'

        elPDF.style.display = 'block'
        elPDFDM.style.display = 'none'
    }
}

let botonModoClaro = document.getElementById('modoClaro');
let botonModoOscuro = document.getElementById('modoOscuro');

botonModoClaro.addEventListener('click', verificacionModo);
botonModoOscuro.addEventListener('click', verificacionModo);

// variables a cambiar

let navegacionPrincipal = document.getElementById('navegacionPrincipal');
let navegacionbotones = document.getElementById('navegacion-botones');
let modoLectura = document.getElementById('modoLectura');
let iconoOscuro = document.getElementById('iconoOscuro');
let iconoClaro = document.getElementById('iconoClaro');
let introduccion = document.getElementById('introduccion');
let pdfOscuro = document.getElementById('pdfOscuro');
let elPDF = document.getElementById('elPDF');
let elPDFDM = document.getElementById('elPDFDM');
let pie = document.getElementById('pie');
let redes = document.getElementById('misRedes');

//con esto el pdf en modo oscuro no se ve
pdfOscuro.style.display = 'none'
elPDFDM.style.display = 'none'