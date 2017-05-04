/**
 * Created by Cursist on 3-5-2017.
 */
// Hieronder de JavaScript calculator

//array met variabele brandstofprijzen, later via api ontsluiten
var brandstofprijzen = [
    1.51,
    1.09,
    0.57
]


// 1. Haal referentie op naar de knop, en sla deze op in een variabele
var knop = document.getElementById('leasebutton');

// 2. voeg EventListener toe, zodat er iets gebeurt
// als op de knop wordt geklikt. In dat geval wordt
// de functie gaOptellen() aangeroepen
knop.addEventListener('click', leaseberekening);

// 3. Definieer de functie ga Optellen:
function leaseberekening() {
    // 3a: Ga referentie ophalen naar de twee tekstvelden.
    var tax2 = document.getElementById('tax2').value;
    var belschijf = document.getElementById('belschijf').value;
    var pvergl = document.getElementById('pvergl').value;
    var bijt = document.getElementById('bijt').value;
    var extr = document.getElementById('extr').value;
    var kmll = document.getElementById('kmll').value;
    var gassprl = document.getElementById('gassprl').value;
    var frkm = document.getElementById('frkm').value;
    var fcrstkm = document.getElementById('fcrstkm').value;

    if (gassprl === 'euro95') {
        gassprl = brandstofprijzen[0];
    } else if (gassprl === 'dsl') {
        gassprl = brandstofprijzen[1];
    } else if (gassprl === 'lpg') {
        gassprl = brandstofprijzen[2];
    }
//laten zien met welke brandstofprijs we rekenen

    var outputVeld = document.getElementById('gassprl').innerText = gassprl;

    //meteen doorrekenen maandelijkse bijtelling

    var result = ((parseFloat(tax2)) * (parseFloat(bijt) / 100) * (parseFloat(belschijf / 100)) / 12 + parseFloat(extr) + parseFloat(pvergl));

    var resultbesparing = ((parseFloat(gassprl) / parseFloat(kmll)) * (parseFloat(fcrstkm)) / 12).toFixed(2);


    // 3c : referentie ophalen naar output veld en resultaat
    // er in wegschrijven.

    var outputVeld = document.getElementById('resultlease').innerText = result;
    var outputVeld = document.getElementById('besparinglease').innerText = resultbesparing;

}


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
    var prkmpy = document.getElementById('prkmpy').value;
    var gasspr = document.getElementById('gasspr').value;
    var mileage = document.getElementById('mileage').value;

    if (gasspr === 'euro95') {
        gasspr = brandstofprijzen[0];
    } else if (gasspr === 'dsl') {
        gasspr = brandstofprijzen[1];
    } else if (gasspr === 'lpg') {
        gasspr = brandstofprijzen[2];
    }
    var outputVeld = document.getElementById('gasspr').innerText = gasspr;

    // 3b : getallen bij elkaar optellen

    var taxmnth = (parseFloat(tax) / 3);
    var gascostmnth = (parseFloat(kmpy) * ((parseFloat(gasspr) / parseFloat(mileage))) - (parseFloat(kmpy) * 0.19) - (((parseFloat(kmpy)*((parseFloat(kmverg)) - 0.19))*0.6) / 12).toFixed(2));
;    var prgascostmnth = (parseFloat(prkmpy) * ((parseFloat(gasspr) / parseFloat(mileage)));

    var result = parseFloat(taxmnth) + parseFloat(insur) + parseFloat(pverg) + parseFloat(mobverg) + parseFloat(kmverg) + (parseFloat(afschr) / 12) + parseFloat(maint) + parseFloat(prgascostmnth) + parseFloat(gascostmnth).toFixed(2);

    // 3c : referentie ophalen naar output veld en resultaat
    // er in wegschrijven.

    var outputVeld = document.getElementById('resultprive').innerText = result;
}



