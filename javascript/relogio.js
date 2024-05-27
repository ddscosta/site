var vstart = false;
var vstop = false;
var vreset = false;
var vpause = false;

var tmin = 0; //tempo parado na mesma questão

function reset(){

	vreset = true;
	
	sec = 0;
	min = 0;
	hor = 0;
	segundos = 00;
	minutos = 00;
	horas = 00;
	
	if(vpause == true){
	
		vstart = true;
	
	}
	
	if(vstop == true){
		
		vstart = true;
	
	}
	
}

function start(){

	if(vstop == true){

		reset();

	}
	
	vstart = true;
	vstop = false;
	vpause = false;
	vreset = false;

}

function stop(){

	vstop = true;
	vstart = false;
	vpause = false;
	vreset = false;

}

function pause(){

	vpause = true;
	vstart = false;
	vstop = false;
	vreset = false;

}

var sec = 0;
var min = 0;
var hor = 0;
var segundos = 00;
var minutos = 00;
var horas = 00;

//cronômetro de cada item
//atualiza o contador a cada segundo
var x = setInterval(function() {

	if (vstart == true) {

	  if (sec < 59) {

			sec = sec + 1;
	  
	  }else{
		
			sec = 0;
		
			if(min < 59){
				
				min = min + 1;
			
			}else{
			
				min = 0;
			
				hor = hor + 1;
			
			}
	  
	  }
	  
	  if(sec < 10){
		
			segundos = '0' + sec;
	  
	  }else{
			
			segundos = sec;
	  
	  }
	  
	  if(min < 10){
		
			minutos = '0' + min;
	  
	  }else{
		
			minutos = min;
	  
	  }
	  
	  if(hor < 10){
			
			horas = '0' + hor;
	  
	  }else{
			
			horas = hor;
	  
	  }
	  
	  //Mostra o cronometro no elemento com id="relgi" //demo
	  document.getElementById("relgi").innerHTML = horas + ":"
	  + minutos + ":" + segundos;

	}
 
}, 1000);


var psec = 0;
var pmin = 0;
var phor = 0;
var psegundos = 00;
var pminutos = 00;
var phoras = 00;

//cronometro geral
//atualiza a contagem a cada 1 segundo
var y = setInterval(function() {

  if (psec < 59) {
	
		psec = psec + 1;
  
  }else{
	
		psec = 0;
		
		if(pmin < 59){
		
			pmin = pmin + 1;
		
		}else{
		
			pmin = 0;
		
			phor = phor + 1;
		
		}
  
  }
  
  if(psec < 10){
		
		psegundos = '0' + psec;
  
  }else{
	
		psegundos = psec;
  
  }
  
  if(pmin < 10){
	
		pminutos = '0' + pmin;
  
  }else{
	
		pminutos = pmin;
  
  }
  
  if(phor < 10){
		
		phoras = '0' + phor;
  
  }else{
	
		phoras = phor;
  
  }

  var relg = document.getElementById("relg");

  if(relg != null){

		// Mostra o resultado no elemento com id="relg"
		document.getElementById("relg").innerHTML = phoras + ":" + pminutos + ":" + psegundos;	
  
  }

}, 1000);
