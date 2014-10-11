$(document).ready(function() {

});

function conectar() {

    var serverUrl = "http://192.168.50.155/base/service/";
    var endpointUrl = null;
    var soapDoneMethod = null;
    var soapfailMethod = null;
    var data = null;

    this.getServerUrl = function() {
        return serverUrl;
    };

    this.setServerUrl = function(argument) {
        serverUrl = argument;
    };

    this.getEndpointUrl = function() {
        return endpointUrl;
    };

    this.setEndpointUrl = function(argument) {
        endpointUrl = argument;
    };

    this.getSoapDoneMethod = function() {
        return soapDoneMethod;
    };

    this.setSoapDoneMethod = function(argument) {
        soapDoneMethod = argument;
    };

    this.getSoapfailMethod = function() {
        return soapfailMethod;
    };

    this.setSoapfailMethod = function(argument) {
        soapfailMethod = argument;
    };

    this.getData = function() {
        return data;
    };

    this.setData = function(argument) {
        data = argument;
    };

}

conectar.prototype.sendSoapRequest = function(callback, callbackError) {
    try {
        var doneMethod = this.getSoapDoneMethod();
        var failMethod = this.getSoapfailMethod();
        $.ajax({
            type: "POST",
            dataType: "xml",
            url: this.getEndpointUrl(),
            data: this.getData(),
            success: function(argument) {
                doneMethod(argument, callback);
            },
            error: function(argument) {
                failMethod(argument, callbackError);
            },
            statusCode: {
                404: function() {
                    alert("page not found");
                }
            }
        });
    } catch (ex) {
        alert(ex);
    }

}

conectar.prototype.getConectar = function(action, callback, callbackError, data) {
    this.setEndpointUrl(this.getServerUrl() + action);
    this.setSoapDoneMethod(callback);
    this.setSoapfailMethod(callbackError);
    this.setData(data);
}

function ListUsuarios() {

    var action = "GetUser";

    this.getAction = function() {
        return action;
    };
    this.setAction = function(argument) {
        action = argument;
    };
}

ListUsuarios.prototype.getListUsuarios = function(parametros, callback, callbackError) {
    try {
        var con = new conectar();
        con.getConectar(this.getAction(), this.callback, this.callbackError, parametros);
        con.sendSoapRequest(callback, callbackError);
    } catch (ex) {

    }
};

ListUsuarios.prototype.callback = function(data, callback) {
    $(data).find('Users').each(function(index) {
        var resultUser = new user();
        resultUser.setId($(this).find('id').text());
        resultUser.setNombre($(this).find('Nombre').text());
        resultUser.setApellido($(this).find('Apellido').text());
        resultUser.setApellido2($(this).find('Apellido2').text());
        resultUser.setCedula($(this).find('Cedula').text());
        resultUser.setEdad($(this).find('Edad').text());
        session.addUser(index, resultUser);
    });
    if (callback) {
        callback();
    }
};

ListUsuarios.prototype.callbackError = function(data, callbackError) {
    if (callbackError) {
        callbackError();
    }
};

function login() {
    var action = "LoginServlet";

    this.getAction = function() {
        return action;
    };
    this.setAction = function(argument) {
        action = argument;
    };
}

login.prototype.loginUser = function(name, password, callback, callbackError) {
    try {
        var con = new conectar();
        var parametros = {name: name, password: password};
        con.getConectar(this.getAction(), this.callback, this.callbackError, parametros);
        con.sendSoapRequest(callback, callbackError);
    } catch (ex) {

    }
};

login.prototype.callback = function(data, callback) {
    $(data).find('Users').each(function(index) {
        var resultUser = new user();
        resultUser.setId($(this).find('id').text());
        resultUser.setNombre($(this).find('Nombre').text());
        resultUser.setApellido($(this).find('Apellido').text());
        resultUser.setApellido2($(this).find('Apellido2').text());
        resultUser.setCedula($(this).find('Cedula').text());
        resultUser.setEdad($(this).find('Edad').text());
        session.setUserSession(resultUser);
    });
    if (callback) {
        callback();
    }
};

login.prototype.callbackError = function(data, callbackError) {
    if (callbackError) {
        callbackError();
    }
};