function Session() {
    var listUser = new Array();
    var userSession = null;
    
    this.getUserSession = function (){
        return userSession;
    };
    
    this.setUserSession = function (arg){
        userSession = arg;
    };

    this.getListUser = function() {
        return listUser;
    };

    this.setListUser = function(arg) {
        listUser = arg;
    };

    this.addUser = function(id, user) {
        listUser[id] = user;
    };

    this.removeUser = function(id) {
        listUser.splice(id, id);
    };

    this.getListUserLength = function() {
        return listUser.length;
    };

    this.getUser = function(id) {
        return listUser[id];
    };

}

function user() {
    var id = null;
    var Nombre = null;
    var Apellido = null;
    var Apellido2 = null;
    var Cedula = null;
    var Edad = null;

    this.getId = function() {
        return id;
    };

    this.setId = function(argument) {
        id = argument;
    };

    this.getNombre = function() {
        return Nombre;
    };

    this.setNombre = function(argument) {
        Nombre = argument;
    };

    this.getApellido = function() {
        return Apellido;
    };

    this.setApellido = function(argument) {
        Apellido = argument;
    };

    this.getApellido2 = function() {
        return Apellido2;
    };

    this.setApellido2 = function(argument) {
        Apellido2 = argument;
    };

    this.getCedula = function() {
        return Cedula;
    };

    this.setCedula = function(argument) {
        Cedula = argument;
    };

    this.getEdad = function() {
        return Edad;
    };
    
    this.setEdad = function(argument) {
        Edad = argument;
    };
}