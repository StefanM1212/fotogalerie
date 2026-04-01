



const overlay = document.getElementById('overlay'); 
const overlayBild = document.getElementById('overlay-bild'); // Exakt wie im HTML!


const galeriebilder = document.querySelectorAll('.foto-bild');
const bilder = Array.from(galeriebilder).map(img => img.src);

const fotoButtons = document.querySelectorAll('.foto-button');

const photocard = document.querySelectorAll('.foto-karte');

const aktuelleKarte = document.querySelector('.foto-karte.aktiv');

const leftArrow = document.querySelector('.nav-pfeil-links');
const rightArrow = document.querySelector('.nav-pfeil-rechts');



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


document.addEventListener('keydown', function(event) {
    if (overlay.classList.contains('aktiv')) {
        // Overlay ist offen → Bild wechseln
        if (event.key === 'ArrowLeft') {vorherigesBild(); leftArrow.classList.add('pressed'); 
 
            setTimeout(function() {
        leftArrow.classList.remove('pressed');
    }, 300);
         }
        
        
        
         if (event.key === 'ArrowRight') {naechstesBild(); rightArrow.classList.add('pressed'); 

setTimeout(function() {
        rightArrow.classList.remove('pressed');
    }, 300);





         }

    
    }
    else {
        // Overlay ist geschlossen → Rahmen bewegen
        if (event.key === 'ArrowLeft') aktivesKarteMinus();
        if (event.key === 'ArrowRight') aktivesKartePlus();
    }


});





function aktivesKartePlus() {
    const aktuelleKarte = document.querySelector('.foto-karte.aktiv');
    if (aktuelleKarte) aktuelleKarte.classList.remove('aktiv');
    
    aktuellerIndex = (aktuellerIndex + 1) % photocard.length;
    photocard[aktuellerIndex].classList.add('aktiv');
}

function aktivesKarteMinus() {
    const aktuelleKarte = document.querySelector('.foto-karte.aktiv');
    if (aktuelleKarte) aktuelleKarte.classList.remove('aktiv');
    
    aktuellerIndex = (aktuellerIndex - 1 + photocard.length) % photocard.length;
    photocard[aktuellerIndex].classList.add('aktiv');
}


document.addEventListener('keydown', enertoopen);

function enertoopen (event) { 
const aktuelleKarte = document.querySelector('.foto-karte.aktiv');
if (event.key === 'Enter') {
    openOverlay(Array.from(photocard).indexOf(aktuelleKarte));
}
}

document.addEventListener('keydown', pressexit);

function pressexit (event) {
if (event.key === 'Escape') {
    schliesseOverlay();
}
}





