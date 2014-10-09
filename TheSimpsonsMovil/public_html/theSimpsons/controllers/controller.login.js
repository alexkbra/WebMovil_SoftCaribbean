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

    var content = '<form>';
    content += '	<div>';
    content += '		<label for="correo">Correo:</label>';
    content += '		<input type="email" data-clear-btn="true" name="correo" id="correo" value="" />';
    content += '		<label for="clave">Clave:</label>';
    content += '		<input type="password" data-clear-btn="true" name="clave" id="clave" value="" autocomplete="off" />';
    content += '	</div>';
    content += '	<div>';
    content += '		<a href="#menu" class="ui-shadow ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-check">Ingresar</a>';
    content += '		<a href="#" class="ui-shadow ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-claneo ui-btn-b ui-mini">Cancelar</a>';
    content += '		<label for="recordar">Recordar me:</label>';
    content += '		<select name="recordar" id="recordar" data-role="slider">';
    content += '			<option value="no">No</option>';
    content += '			<option value="si">Si</option>';
    content += '		</select>';
    content += '	</div>';
    content += '</form>';

    var footer = '';
    footer += '<h1>Alex &copy</h1>';
    
    $(header).appendTo('#header_login');
    $(content).appendTo('#content_login');
    $(footer).appendTo('#footer_login');
});