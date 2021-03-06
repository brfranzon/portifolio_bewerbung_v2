var jahr = 2222, monat = 2, tag = 22, stunde = 22, minute = 22, sekunde = 22; // Ziel-Datum in MEZ
var zielDatum = new Date(jahr, monat - 1, tag, stunde, minute, sekunde);

function countdown() {
  startDatum = new Date(); // Aktuelles Datum

  // Countdown berechnen und anzeigen, bis Ziel-Datum erreicht ist
  if (startDatum < zielDatum) {

    var jahre = 0, monate = 0, tage = 0, stunden = 0, minuten = 0, sekunden = 0;

    // Jahre
    while (startDatum < zielDatum) {
      jahre++;
      startDatum.setFullYear(startDatum.getFullYear() + 1);
    }
    startDatum.setFullYear(startDatum.getFullYear() - 1);
    jahre--;

    // Monate
    while (startDatum < zielDatum) {
      monate++;
      startDatum.setMonth(startDatum.getMonth() + 1);
    }
    startDatum.setMonth(startDatum.getMonth() - 1);
    monate--;

    // Tage
    while (startDatum.getTime() + (24 * 60 * 60 * 1000) < zielDatum) {
      tage++;
      startDatum.setTime(startDatum.getTime() + (24 * 60 * 60 * 1000));
    }

    // Stunden
    stunden = Math.floor((zielDatum - startDatum) / (60 * 60 * 1000));
    startDatum.setTime(startDatum.getTime() + stunden * 60 * 60 * 1000);

    // Minuten
    minuten = Math.floor((zielDatum - startDatum) / (60 * 1000));
    startDatum.setTime(startDatum.getTime() + minuten * 60 * 1000);

    // Sekunden
    sekunden = Math.floor((zielDatum - startDatum) / 1000);

    // Anzeige formatieren
    (jahre != 1) ? jahre = jahre + " Jahre,  " : jahre = jahre + " Jahr,  ";
    (monate != 1) ? monate = monate + " Monate,  " : monate = monate + " Monat,  ";
    (tage != 1) ? tage = tage + " Tage,  " : tage = tage + " Tag,  ";
    (stunden != 1) ? stunden = stunden + " Stunden,  " : stunden = stunden + " Stunde,  ";
    (minuten != 1) ? minuten = minuten + " Minuten und " : minuten = minuten + " Minute und ";
    if (sekunden < 10) sekunden = "0" + sekunden;
    (sekunden != 1) ? sekunden = sekunden + " Sekunden" : sekunden = sekunden + " Sekunde";

    document.countdownform.countdowninput.value = jahre + monate + tage + stunden + minuten + sekunden + " bis zum 22.2.2222, 22:22:22 Uhr.";

    setTimeout('countdown()', 200);
  }
  // Anderenfalls alles auf Null setzen
  else document.countdownform.countdowninput.value = "0 Jahre,  0 Monate,  0 Tage,  0 Stunden,  0 Minuten  und  00 Sekunden";
}


// Grafiken vorladen
Grafik = new Array(15);
for (i = 0; i < 15; i++) {
  Grafik[i] = new Image();
  Grafik[i].src = "Globen/" + i + ".gif";
}

i = 14;
function rotation() {
  document.getElementsByTagName('img')["globus"].src = "Globen/" + i + ".gif";
  if (i > 0) i--; else i = 14;

  setTimeout('rotation()', 100);
}


// cursor
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
