/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).on("pagecreate", "#login", function(event) {

    var header = '';
    header += '<div data-role="header">';
    header += '	<div data-role="controlgroup" data-type="horizontal" class="ui-mini ui-btn-right">';
    header += '	<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-delete ui-btn-b">Cerrar</a>';
    header += '	</div>';
    header += '	<h6>l</h6>';
    header += '</div>';

    var $content = $('<form>'
            + '	<div>'
            + '		<label for="correo">Correo:</label>'
            + '		<input type="email" data-clear-btn="true" name="correo" id="correo" value="" />'
            + '		<label for="clave">Clave:</label>'
            + '		<input type="password" data-clear-btn="true" name="clave" id="clave" value="" autocomplete="off" />'
            + '	</div>'
            + '	<div>'
            + '		<a href="#menu" class="ui-shadow ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-check">Ingresar</a>'
            + '		<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-claneo ui-btn-b ui-mini">Cancelar</a>'
            + '		<label for="recordar">Recordar me:</label>'
            + '		<select name="recordar" id="recordar" data-role="slider">'
            + '			<option value="no">No</option>'
            + '			<option value="si">Si</option>'
            + '		</select>'
            + '	</div>'
            + '</form>');

    var footer = '';
    footer += '<h1>Alex &copy</h1>';

    $(header).appendTo('#header_login');
    $content.appendTo('#content_login');
    $(footer).appendTo('#footer_login');
});

