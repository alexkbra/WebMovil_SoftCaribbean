/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).on("pagecreate", "#menu", function() {
    $header = $('<div data-role="header">'
            + '<div data-role="controlgroup" data-type="horizontal" class="ui-mini ui-btn-right">'
            + '<a href="#login" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-delete ui-btn-b">Cerrar</a>'
            + '</div>'
            + '<h6>bien</h6>'
            + '</div>');

    $content = $('<p>Notas</p>'
            + '<div>'
            + '<a href="#menu1" class="ui-btn ui-shadow ui-corner-all ui-btn-inline ui-btn-mini">Menu</a>'
            + '</div>');
    
    $footer = $('');
    
    $header.appendTo('#header_menu');
    $content.appendTo('#content_menu');
    $footer.appendTo('#footer_menu');
});

