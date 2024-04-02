function cambiarImagen() {
    var screenWidth = window.innerWidth;
    var imagen = document.getElementById("big");
    var bar1 = document.getElementById('bar1');
    var bar2 = document.getElementById('bar2');
    var bar3 = document.getElementById('bar3');

    if (screenWidth < 250) {
        imagen.src = "LOGO4.png"; // Cambiar a LOGO4.png cuando el ancho es menor que 250px
    } else if (screenWidth < 650) {
        imagen.src = "LOGO3.png"; // Cambiar a LOGO3.png cuando el ancho es menor que 650px
        bar1.src = 'WA3.png';
        bar2.src = 'LI3.png';
        bar3.src = 'GM3.png';
    } else if (screenWidth < 1100) {
        imagen.src = "LOGO2.png"; // Cambiar a LOGO2.png cuando el ancho es menor que 1100px
        bar1.src = 'WA2.png';
        bar2.src = 'LI2.png';
        bar3.src = 'GM2.png';
    } else {
        imagen.src = "LOGO.png"; // Imagen por defecto
        bar1.src = 'WA1.png';
        bar2.src = 'LI1.png';
        bar3.src = 'GM1.png';
    } 
}

window.onload = cambiarImagen;
window.onresize = cambiarImagen;

function ShowHide(subtitle) {
    var section = document.getElementById(subtitle);
    var button = document.getElementById("btnH");

    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerText = "SUMMARY ▼";
    } else {
        section.style.display = "none";
        button.innerText = "SUMMARY ►";
    }
}


function ShowHide2(subtitle2) {
    var section = document.getElementById(subtitle2);
    var button = document.getElementById("btnH2");

    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerText = "EXPERIENCE ▼";
    } else {
        section.style.display = "none";
        button.innerText = "EXPERIENCE ►";
    }
}

function ShowHide3(subtitle3) {
    var section = document.getElementById(subtitle3);
    var button = document.getElementById("btnH3");

    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerText = "EDUCATION AND SKILLS ▼";
    } else {
        section.style.display = "none";
        button.innerText = "EDUCATION AND SKILLS ►";
    }
}

    // JavaScript para controlar la aplicación
    let currentPage = 1;
    const faces = document.querySelectorAll('.face');

    function mostrarPagina(page) {
        currentPage = page;
        faces.forEach(face => face.classList.add('hidden'));
        document.getElementById('face' + page).classList.remove('hidden');
    }

    function retroceder() {
        if (currentPage > 1) {
            mostrarPagina(currentPage - 1);
        }
    }

    function avanzar() {
        if (currentPage < faces.length) {
            mostrarPagina(currentPage + 1);
        }
    }

    function reproducirAudio(audioIndex) {
        // Aquí podrías agregar lógica para reproducir el audio correspondiente al índice recibido
        console.log("Reproduciendo audio " + audioIndex);
    }

    // Mostrar la primera página al cargar la aplicación
    mostrarPagina(currentPage);




    function mostrarFace3a() {
  // Ocultar todos los divs
  document.getElementById("face1").classList.add("hidden");
  document.getElementById("face2").classList.add("hidden");
  document.getElementById("face3b").classList.add("hidden");

  // Mostrar solo face3a
  document.getElementById("face3a").classList.remove("hidden");
}

function mostrarFace3b() {
  // Ocultar todos los divs
  document.getElementById("face1").classList.add("hidden");
  document.getElementById("face2").classList.add("hidden");
  document.getElementById("face3a").classList.add("hidden");

  // Mostrar solo face3b
  document.getElementById("face3b").classList.remove("hidden");
}

// Asigna las funciones a los eventos onclick de los botones
document.getElementById("botonLearn").onclick = mostrarFace3a;
document.getElementById("botonForum").onclick = mostrarFace3b;












window.onload = cambiarImagen;
window.onresize = cambiarImagen;

function ShowHide(subtitle) {
    var section = document.getElementById(subtitle);
    var button = document.getElementById("btnH4");

    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerText = "PERFIL LABORAL ▼";
    } else {
        section.style.display = "none";
        button.innerText = "PERFIL LABORAL ►";
    }
}


function ShowHide2(subtitle2) {
    var section = document.getElementById(subtitle2);
    var button = document.getElementById("btnH5");

    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerText = "EXPERIENCIA ▼";
    } else {
        section.style.display = "none";
        button.innerText = "EXPERIENCIA ►";
    }
}

function ShowHide3(subtitle3) {
    var section = document.getElementById(subtitle3);
    var button = document.getElementById("btnH6");

    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerText = "FORMACIÓN ▼";
    } else {
        section.style.display = "none";
        button.innerText = "FORMACIÓN ►";
    }
}
