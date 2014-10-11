
$(document).on("pagecreate", "#login", function(event) {
    var header = '<div data-role="header">';
    header += '	<div data-role="controlgroup" data-type="horizontal" class="ui-mini ui-btn-right">';
    header += '	<a href="#" data-role="button" data-mini="true" data-inline="true" data-icon="claneo" data-theme="b">Cerrrar</a>';
    header += '	</div>';
    header += '	<h6>l</h6>';
    header += '</div>';

    $("#header_login").html(header);

    var content = '<form>';
    content += '	<div>';
    content += '		<label for="correo">Correo:</label>';
    content += '		<input type="email" data-clear-btn="true" name="correo" id="correo" value="" />';
    content += '		<label for="clave">Clave:</label>';
    content += '		<input type="password" data-clear-btn="true" name="clave" id="clave" value="" autocomplete="off" />';
    content += '	</div>';
    content += '	<div>';
    content += '		<a href="#" data-role="button" data-mini="true" data-inline="true" data-theme="a" onclick="eventButtonLogin()">Ingresar</a>';
    content += '		<a href="#" data-role="button" data-mini="true" data-inline="true" data-icon="claneo" data-theme="b">Cancelar</a>';
    content += '		<label for="recordar">Recordar me:</label>';
    content += '		<select name="recordar" id="recordar" data-role="slider">';
    content += '			<option value="no">No</option>';
    content += '			<option value="si">Si</option>';
    content += '		</select>';
    content += '	</div>';
    content += '</form>';
    
    $("#content_login").html(content);
    
    var footer = '<h1>Alex &copy</h1>';
    
    $("#footer_login").html(footer);

});

