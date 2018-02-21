/**
 * Koodin alkuperainen lahde: https://stackoverflow.com/a/16024472
 */

function muokattuPaivays() {
    var paivays = new Date(document.lastModified);
    var esitysmuoto = paivays.getDate() + "." + (paivays.getMonth() + 1) + "." + paivays.getFullYear();
    return esitysmuoto
}

function muokattuKlo() {
    var paivays = new Date(document.lastModified);
    var sekunnit;
    var minuutit;

    if (paivays.getSeconds() < 10) {
        sekunnit = "0" + paivays.getSeconds();
    } else {
        sekunnit = paivays.getSeconds();
    }

    if (paivays.getMinutes() < 10) {
        minuutit = "0" + paivays.getMinutes();
    } else {
        minuutit = paivays.getMinutes();
    }

    var aikaNyt = paivays.getHours() + ":" + minuutit + ":" + sekunnit;
    return aikaNyt
}

var txt1 = "Sivu on viimeksi päivitetty ";
var txt2 = " klo ";

document.write(txt1);
document.write(muokattuPaivays());