



const overlay = document.getElementById('overlay'); 
const overlayBild = document.getElementById('overlay-bild'); // Exakt wie im HTML!


const galeriebilder = document.querySelectorAll('.foto-bild');
const bilder = Array.from(galeriebilder).map(img => img.src);

const fotoButtons = document.querySelectorAll('.foto-button');

fotoButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        openOverlay(index);
    });
});


let aktuellerIndex = 0;

function openOverlay(index) {
    aktuellerIndex = index;
    overlayBild.src = bilder[index];
    overlay.classList.add('aktiv');
}


overlay.addEventListener('click', schliesseOverlay);

function schliesseOverlay() {
    overlay.classList.remove('aktiv');
}

document.querySelector('.overlay-background').addEventListener('click', schliesseOverlay);



document.querySelector('.nav-pfeil-links').addEventListener('click', vorherigesBild);
document.querySelector('.nav-pfeil-rechts').addEventListener('click', naechstesBild);

function vorherigesBild() {
    aktuellerIndex = (aktuellerIndex - 1 + bilder.length) % bilder.length;
    event.stopPropagation(); // Verhindert, dass der Klick das Overlay schließt
    overlayBild.src = bilder[aktuellerIndex];
}

function naechstesBild() {
    aktuellerIndex = (aktuellerIndex + 1) % bilder.length;
     event.stopPropagation();
    overlayBild.src = bilder[aktuellerIndex];
}