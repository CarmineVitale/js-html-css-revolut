$(document).ready(function () {
    var menu = $('.dropdown-menu');
    var prodotti = $('li.dropdown a');
    
    prodotti.click(function () { 
       menu.toggle();
       
        
    });
});