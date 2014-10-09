var session =  new Session();

function onclickButton_listar_Usuarios () {
	var listarUsuraio = new listar_Usuarios();
	listarUsuraio.Start();
}

function listar_Usuarios () {
}

listar_Usuarios.prototype.onSuccer = function() {
	$("#listUser").empty();
	var list = '';
	for (var i = 0; i < session.getListUserLength(); i++) {
		var user = session.getUser(i);
		list += '<li id="'+i+'"><a>'+user.getNombre()+'</a></li>';
	};
	$(list).appendTo("#listUser");
};

listar_Usuarios.prototype.onError = function() {
	alert("Error en el servicio");
};

listar_Usuarios.prototype.Start = function() {
	var listUser = new ListUsuarios();
	listUser.getListUsuarios(null,this.onSuccer,this.onError);
};