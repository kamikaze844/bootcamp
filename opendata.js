/**
 * Created by Cursist on 5-5-2017.
 */
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

            $('#listBrandstofResults').empty();
            for (var i = 0; i < brandstof.length; i++) {
                var newListItem = '<li class="list-group-item">';
                newListItem +='Brandstof: '
                newListItem += brandstof[i].brandstof_omschrijving;
                newListItem += '</li>';
                $('#listBrandstofResults').append(newListItem);



                var newListItem = '<li class="list-group-item">';
                newListItem +='Verbruik: '
                newListItem += brandstof[i].brandstofverbruik_gecombineerd;
                newListItem += '</li>';
                $('#listBrandstofResults').append(newListItem);
            }
        }




    }
})