/**
 *  Ricreare la navbar di revolut
    Focus è rendere funzionali i menu dropdown all’interno della navigazione principale
*/

$(document).ready(function() {

    var dropdownLink = $('.dropdown-link');
    var dropdownMenu = dropdownLink.next('.dropdown-menu');


    dropdownLink.mouseenter(function () {
        $(this).next(dropdownMenu).show().addClass('active');
    });

    dropdownLink.mouseleave(function () {
        dropdownMenu.hide();

    });

    /* non funziona */








// end document ready
});