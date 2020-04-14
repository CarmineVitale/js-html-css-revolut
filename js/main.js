$(document).ready(function () {
    var menu = $('.dropdown-menu');
    var prodotti = $('li.dropdown a');
    
    prodotti.click(function () { 
        
        menu.not($(this).next('.dropdown-menu')).hide();
        $(this).next('.dropdown-menu').toggle();
        
    });
   
    var language = $('.language');

    language.click(function () { 
        $('i').toggleClass('fa-angle-up');
        
    });




}); // <------END READY