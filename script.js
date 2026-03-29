






const overlay = document.getElementById('overlay'); 
const overlayBild = document.getElementById('overlay-bild'); // Exakt wie im HTML!
const bilder = [
    'bild1.jpg', 'Bild2.jpg', 'Bild3.jpg', 'Bild4.jpg', 
    'Bild5.jpg', 'Bild6.jpg', 'Bild7.jpg', 'bild8.jpg', 
    'Bild9.jpg', 'Bild10.jpg', 'Bild11.jpg', 'Bild12.jpg'
];
let aktuellerIndex = 0;

function openOverlay(index) {
    aktuellerIndex = index;
    overlayBild.src = bilder[index];
    overlay.style.display = 'flex';
    overlay.classList.add('aktiv');
}

function schliesseOverlay() {
    overlay.style.display = 'none';
    overlay.classList.remove('aktiv');
}





function naechstesBild() {
    aktuellerIndex = (aktuellerIndex + 1) % bilder.length;
    overlayBild.src = bilder[aktuellerIndex];
}

function vorherigesBild() {
    aktuellerIndex = (aktuellerIndex - 1 + bilder.length) % bilder.length;
    overlayBild.src = bilder[aktuellerIndex];
}