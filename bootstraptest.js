/**
 * Created by Cursist on 3-5-2017.
 */
// Hieronder de JavaScript calculator

// 1. Haal referentie op naar de knop, en sla deze op in een variabele
var knop = document.getElementById('leasebutton');

// 2. voeg EventListener toe, zodat er iets gebeurt
// als op de knop wordt geklikt. In dat geval wordt
// de functie gaOptellen() aangeroepen
knop.addEventListener('click', leaseberekening);

// 3. Definieer de functie ga Optellen:
function leaseberekening() {
    // 3a: Ga referentie ophalen naar de twee tekstvelden.
    var tax2    = document.getElementById('tax2').value;
    var pvergl     = document.getElementById('pvergl').value;
    var extr     = document.getElementById('extr').value;
    var frkm     = document.getElementById('frkm').value;
    var fcrstkm     = document.getElementById('fcrstkm').value;



    // 3b : getallen bij elkaar optellen
    var result    = parseInt(tax2) + parseInt(pvergl) + parseInt(extr) + parseInt(frkm) + parseInt(fcrstkm) ;

    // 3c : referentie ophalen naar output veld en resultaat
    // er in wegschrijven.
    var outputVeld = document.getElementById('resultlease').innerText = result;
}




/**
 * Created by Cursist on 3-5-2017.
 */
// Hieronder de JavaScript calculator

// 1. Haal referentie op naar de knop, en sla deze op in een variabele
var knop2 = document.getElementById('privebutton');

// 2. voeg EventListener toe, zodat er iets gebeurt
// als op de knop wordt geklikt. In dat geval wordt
// de functie gaOptellen() aangeroepen
knop2.addEventListener('click', priveberekening);

// 3. Definieer de functie ga Optellen:
function priveberekening() {
    // 3a: Ga referentie ophalen naar de twee tekstvelden.
    var tax = document.getElementById('tax').value;
    var insur = document.getElementById('insur').value;
    var pverg = document.getElementById('pverg').value;
    var mobverg = document.getElementById('mobverg').value;
    var kmverg = document.getElementById('kmverg').value;
    var afschr = document.getElementById('afschr').value;
    var maint = document.getElementById('maint').value;
    var kmpy = document.getElementById('kmpy').value;
// moet berekend worden met open date CBS op basis van uitklapkeuze    var gasspr     = document.getElementById('gasspr').value;
    var mileage = document.getElementById('mileage').value;


    // 3b : getallen bij elkaar optellen
    var result = parseInt(tax) + parseInt(insur) + parseInt(pverg) + parseInt(mobverg) + parseInt(kmverg) + parseInt(afschr) + parseInt(maint) + +parseInt(kmpy) + parseInt(mileage);

    // 3c : referentie ophalen naar output veld en resultaat
    // er in wegschrijven.
    var outputVeld = document.getElementById('resultprive').innerText = result;
}
