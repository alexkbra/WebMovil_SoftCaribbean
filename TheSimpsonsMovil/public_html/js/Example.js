function Persona(n){
	this.nombre=n;
}

function Estudiante(asunto,nombre){
	Persona.call(this,nombre);
}

Estudiante.prototype = new Persona();

Persona.prototype.diHola = function(){
	alert('Hola soy '+this.nombre);
} 

Persona.prototype.caminar = function(){
	alert('Camina ');
}

/*Estudiante.prototype= Object.create(Persona.prototype);
Estudiante.prototype.constructor=Estudiante;*/

Estudiante.prototype.diAdios= function(){
	alert('Adios');
}

Estudiante.prototype.diHola = function(){
	alert('Hola '+this.nombre);
}

function main(){
	var Estudiante1=new Estudiante("Bryan","Ing. Informarica");
	/*Estudiante1.diHola();
	Estudiante.diHola();
	Estudiante1.caminar();
	Estudiante1.diAdios();*/
	alert(Estudiante1 instanceof Persona);
	alert(Estudiante1 instanceof Estudiante);
}