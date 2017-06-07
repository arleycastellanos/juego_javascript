/*
** autor: Dubier perez / jeison salgado
*/



console.log ('esto funciona');

var g_seleccion = 1;
var g_score = 0;
var g_correctas = 0;
var g_incorrectas = 0;
var g_puntaje = 0;
var stop = 0;
var g_conjunto = [];

g_conjunto.push( [ [ '1' ] , ["¿Las personas naturales y jurídicas poseerían sobre una obra los derechos morales y patrimoniales?"], ["A) No es posible que las personas jurídicas posean derechos morales debido a que es una empresa, es decir no pueden crear una obra, por otro lado las personas naturales si poseen los derechos morales y patrimoniales."],	["B) No es posible porque las personas jurídicas solo pueden poseer derechos patrimoniales con su debido termino"], ["C) Ninguna de las anteriores"], ["A) No es posible que las personas jurídicas posean derechos morales debido a que es una empresa, es decir no pueden crear una obra, por otro lado las personas naturales si poseen los derechos morales y patrimoniales."]]);
 g_conjunto.push([ [ '2' ] ,["¿Cuál es la forma de protección de software en Colombia?"], ["A) Copyright."],	["B) Model Provisions on the Protection of Computer Software."], ["C) Ninguna de las anteriores"], ["A) Copyright."]]);
 g_conjunto.push([ [ '3' ] ,["¿El software libre o código abierto y software propietario son la misma cosa?"], ["A) No son la misma cosa porque el software libre brinda la opción de libertad de uso, de análisis, de copia y de modificación, a comparación del software propietario o privativo el cual carece de las cuatro libertades ósea que esta restringido."],	["B) Si lo son porque el software son representados por el mismo nombre."], ["C) Ninguna de las anteriores"],	["A) No son la misma cosa porque el software libre brinda la opción de libertad de uso, de análisis, de copia y de modificación, a comparación del software propietario o privativo el cual carece de las cuatro libertades ósea que esta restringido."]]);
 g_conjunto.push([ [ '4' ] ,["¿El copy left es restrictivo?"], ["A) No es restrictivo porque permite la libre distribución de copias y versiones modificadas de una obra u otro trabajo, exigiendo que los mismos derechos sean preservados en las versiones modificadas."],	["B) Si es restrictivo porque se debe añadir una cláusula legal que hace que toda copia o versión modificada."], ["C) Ninguna de las anteriores"], ["A) No es restrictivo porque permite la libre distribución de copias y versiones modificadas de una obra u otro trabajo, exigiendo que los mismos derechos sean preservados en las versiones modificadas."]]);
 g_conjunto.push([ [ '5' ] ,	["¿Los derechos morales podrían no aplicar al software?"], ["A) Si podrían aplicar porque desde el momento mismo de la creación de la obra, se le reconocen a los autores dos clases de prerrogativas: los derechos morales y los derechos patrimoniales."],	["B) No podrían aplicar porque  es un derecho que es inherente a las personas y no puede ser transmitido."], ["C) Ninguna de las anteriores"], ["A) Si podrían aplicar porque desde el momento mismo de la creación de la obra, se le reconocen a los autores dos clases de prerrogativas: los derechos morales y los derechos patrimoniales."]]);		
 g_conjunto.push([ [ '6' ] , ["¿Es correcto y legal descargar cualquier imagen o música desde internet y colocarla en un software solo por necesidad?"], ["A) Porque existe un set de herramientas legales estandarizadas conocidas como las Licencias Creative Commons que, basadas en el derecho de autor, cambian el paradigma del sistema tradicional “Todos los derechos reservados” por una premisa más flexible “Algunos derechos reservados”."],	["B) No, porque si toman la imagen o música y no dan la autoria a su respectivo dueño."], ["C) Ninguna de las anteriores"], ["A) Porque existe un set de herramientas legales estandarizadas conocidas como las Licencias Creative Commons que, basadas en el derecho de autor, cambian el paradigma del sistema tradicional “Todos los derechos reservados” por una premisa más flexible “Algunos derechos reservados”."]]);  
 g_conjunto.push([ [ '7' ] ,	["¿Cualquier contrato laboral es un contrato de prestación de servicios?"], ["A) No, porque el contrato laboral difiere de los aportes al Sistema de Seguridad Social en cambio un contrato de prestación de servicios se caracteriza por ser un acuerdo de voluntades, en donde de forma independiente y autónoma una persona."],	["B) Si, porque recibe un salario por el trabajo realizado e indemnización a comparación de honorarios."], ["C) Ninguna de las anteriores"], ["A) No, porque el contrato laboral difiere de los aportes al Sistema de Seguridad Social en cambio un contrato de prestación de servicios se caracteriza por ser un acuerdo de voluntades, en donde de forma independiente y autónoma una persona."]]);
 g_conjunto.push([["8"],	["¿El contrato de prestación de servicios es ideal cuando se quiere trabajar desde casa?"], ["A) Si, porque trabajaría de forma independiente y autónoma por su voluntad o para otra persona."],	["B) No, porque existe una retribución económica."], ["C) Ninguna de las anteriores"], ["A) Si, porque trabajaría de forma independiente y autónoma por su voluntad o para otra persona."]]);
 g_conjunto.push([["9"], ["¿En el desarrollo de software y un contrato de prestación de servicios los honorarios podrían ser por cualquier valor?"], ["A) Si, debido a que el desarrollador tiene su previo conocimiento y está ejerciendo su trabajo de manera voluntaria y autónoma por un honorario que él estipula."],	["B) No, porque es un acuerdo entre un trabajador bajo una subordinación y dependencia."], ["C) Ninguna de las anteriores"], ["A) Si, debido a que el desarrollador tiene su previo conocimiento y está ejerciendo su trabajo de manera voluntaria y autónoma por un honorario que él estipula."]]);
 g_conjunto.push([["10"],	["¿Un prestador de servicios puede negociar bajo los términos que quiera con su contratante?"], ["A) Si, porque están llegando a un acuerdo que el contratista está ofreciendo."],	["B) Si, porque lo está estipulando por medio de un documento legible."], ["C) Ninguna de las anteriores"], ["A) Si, porque están llegando a un acuerdo que el contratista está ofreciendo."]]);
 g_conjunto.push([["11"],	["¿Un contrato verbal no tiene validez ante el estado?"], ["A) Si, tiene validez porque si en el determinado tiempo en el que trabajo no le <br>pagaron prestaciones sociales, seguridad social puede demandar ante un juez de la<br> república."],	["B) No, tiene validez porque no hay una subordinación. "], ["C) Ninguna de las anteriores"], ["A) Si, tiene validez porque si en el determinado tiempo en el que trabajo no le <br>pagaron prestaciones sociales, seguridad social puede demandar ante un juez de la<br> república."]]);




window.onload = function()
{
	document.getElementById('contenedor_frutas').innerHTML = painting_elements();//Pinta las frutas
	setInterval(moving,1500);

	
}

 

function painting_elements() /*inicio de la funcion que imprime todas las imagenes*/
{
	var salida= "";
	for( var i=0; i < g_conjunto.length; i++)
	{

		salida += "<img style='position:absolute;' id="+g_conjunto[i][0]+" class='elementos'  src='img/"+ g_conjunto[i][0] + ".png' onclick='show_date("+i+");'>";
		//console.log(salida);
	}

		
	return salida;

	
}/*fin de esta funcion*/


 function show_date(idx)/* Inicio de la funcion que trae todos los datos para imprimir todas las pregunta  */
    { 
     //g_puntaje += (g_conjunto[idx][g_seleccion]*1);
     //document.getElementById('score').innerHTML = g_puntaje;
     document.getElementById('num_array').value = idx;
     
     document.getElementById('pregunta'). innerHTML = g_conjunto[idx][1];
     document.getElementById('a'). innerHTML = g_conjunto[idx][2];
     document.getElementById('b'). innerHTML = g_conjunto[idx][3];
     document.getElementById('c'). innerHTML = g_conjunto[idx][4];
     //console.log (g_puntaje);
     $('#myModal').modal('show');

     
    }/* final de esta funcion*/

function respuestas(idx)/* funcion que permite ver todos los resultados de las respuestas correctas e incorrectas*/
 {
	
	var id_array = document.getElementById('num_array').value;
	var res = document.getElementById(idx).innerHTML;
	console.log(idx);

	if (res == g_conjunto[id_array][5]) {		
		g_score = parseInt(g_score) + 1;
        document.getElementById('score').innerHTML = g_score;
        console.log("Gano");
        g_correctas = parseInt(g_correctas) + 1;
        console.log("correctas:" + g_correctas);
        $('#myModal').modal('hide');
        document.getElementById(g_conjunto[id_array][0]).style.display='none';
	}else {
		//g_score = parseInt(g_score) - 1;
        //document.getElementById('score').innerHTML = g_score;
		console.log("Perdio");
		g_incorrectas = parseInt(g_incorrectas) + 1;
		console.log("incorrectas:" + g_incorrectas);
		$('#myModal').modal('hide');
		document.getElementById(g_conjunto[id_array][0]).style.display='none';
 }

	stop = parseInt(g_correctas) + parseInt(g_incorrectas);
	console.log(stop + " Respondidas");
	if ( stop == 11 ) {

		alert("Juego terminado");
		console.log("Termino el juego");
		//$('#myModal1').modal('hide');
		var a1= " Respuestas correctas";
		var a2= " Respuestas incorrectas";
		var a3= " Total de preguntas";
		document.getElementById('num_pre').innerHTML = stop + a3;
		//console.log(stop);
		document.getElementById('correc').innerHTML = g_correctas + a1;
		document.getElementById('incorrec').innerHTML = g_incorrectas + a2;
		$('#myModal1').modal('show');

	}

	
		

}/* final de esta funcion*/


function moving() /* funcion que hace mover todas las imagenes */
{
	//console.log(Math.random());
	for (var i = 0; i < g_conjunto.length; i++) {
		var left =Math.floor(Math.random()*(1000 - 100)) + 100;
		var top =Math.floor(Math.random()*(700 - 60)) + 60;

	document.getElementById(g_conjunto[i][0]).style.left=left+"px";
	document.getElementById(g_conjunto[i][0]).style.top=top+"px";
		//g_conjunto[0][3]=parseInt(g_conjunto[0][3])+10;
	}
		

	
}/*fin de esta funcion*/
