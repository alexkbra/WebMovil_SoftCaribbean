/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).on("pagebeforeshow", "#login",function (event){
   
    
});

function eventButtonLogin(){
    var loginUsuario = new login_Usuario();
    loginUsuario.Start();
}

function login_Usuario () {
}

login_Usuario.prototype.onSuccer = function() {
        if(session.getUserSession()!= null){
            alert("Entro");
        }else{
            alert("No Entro");
        }
};

login_Usuario.prototype.onError = function() {
    alert("Error");
};

login_Usuario.prototype.Start = function() {
	var loginUser = new login();
        var name = $("#correo").val();
        var password = $("#clave").val();
	loginUser.loginUser(name,password,this.onSuccer,this.onError);
};