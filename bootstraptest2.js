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




//**************************************
//vanuit opendata.js geplakt
//*******************************************

$(document).ready(function () {


    // 1. Aanhaken van klik op de Zoek knop.
    $('#btnSearch').on('click', zoekKenteken);


    // 2. Functie om kenteken te gaan zoeken
    function zoekKenteken() {


        // 2a. Maak mijn variabelen om de AJAX-call te kunnen uitvoeren
        var KentekenName = $('#txtRdwGewicht').val();
        var rdwUrl = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=';


        // 2b. Stel de jQuery  Ajax-call in.
        $.ajax({
            url: rdwUrl + KentekenName,
            success: verwerkKenteken,
            error: verwerkError
        });


        // 2c. Success handler voor de AJAX-call
        function verwerkKenteken (kenteken) {

            // TODO: verwerk de movies in de UI

            console.log(kenteken); // HOERA we hebben een kenteken

            $('#listKentekenResults').empty();
            for (var i = 0; i < kenteken.length; i++) {
                var newListItem = '<li class="list-group-item">';
                newListItem +='Merk en type: '
                newListItem += kenteken[i].handelsbenaming;
                newListItem += '</li>';
                $('#listKentekenResults').append(newListItem);

                var newListItem = '<li class="list-group-item">';
                newListItem +='Kleur: '
                newListItem += kenteken[i].eerste_kleur;
                newListItem += '</li>';
                $('#listKentekenResults').append(newListItem)

                var newListItem = '<li class="list-group-item">';
                newListItem +='Gewicht: '
                newListItem += kenteken[i].massa_ledig_voertuig;
                newListItem += '</li>';
                $('#listKentekenResults').append(newListItem)


                var newListItem = '<li class="list-group-item">';
                newListItem +='Carosserievorm:  '
                newListItem += kenteken[i].inrichting;
                newListItem += '</li>';
                $('#listKentekenResults').append(newListItem)
            }
        }



        // 2d. Error handler voor de AJAX-call
        function verwerkError(xhr, errorText, errorStatus) {
            alert('FOUT:! ' + errorText)
        }



        //3a kentekenurl voor brandstof

        var KentekenName = $('#txtRdwGewicht').val();
        var rdwUrl = 'https://opendata.rdw.nl/resource/8ys7-d773.json?kenteken=';


        // 3b. Stel de jQuery  Ajax-call in.
        $.ajax({
            url: rdwUrl + KentekenName,
            success: verwerkBrandstof,
            error: verwerkError
        });


        // 2c. Success handler voor de AJAX-call
        function verwerkBrandstof (brandstof) {

            // TODO: verwerk de movies in de UI

            console.log(brandstof); // HOERA we hebben movies
            for (var i = 0; i < brandstof.length;
                 $('#mileage').val(brandstof[i].brandstofverbruik_gecombineerd));




        }




    }
})















//*****************************************************************
//********************************************************************

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
    var prgascostmnth = (parseFloat(prkmpy) * ((parseFloat(gasspr) / parseFloat(mileage))));

    var result = parseFloat(taxmnth) + parseFloat(insur) + parseFloat(pverg) + parseFloat(mobverg) + parseFloat(kmverg) + (parseFloat(afschr) / 12) + parseFloat(maint) + parseFloat(prgascostmnth) + parseFloat(gascostmnth).toFixed(2);

    // 3c : referentie ophalen naar output veld en resultaat
    // er in wegschrijven.

    var outputVeld = document.getElementById('resultprive').innerText = result;
}



