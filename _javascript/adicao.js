
function rumais() {

   const ru = document.getElementById("ru");
   const vd = document.getElementById("vd");
   const vc = document.getElementById("vc");
   const vm = document.getElementById("vm");

   var conts = vm.innerText+vc.innerText+vd.innerText+ru.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti + 1;

   contis = conti+"";

   if(conti>-1 && conti<10){
   
   		ru.innerText = contis;

   }else

   if(conti>9 && conti <100){

   		var contarr = contis.split('');
   		
   		var ruu = parseInt(contarr[1], 10);
   		
   		var rud = parseInt(contarr[0], 10);
   		console.log(rud +'>>'+ ruu);

   		//faz efeito no acrescimo das dezenas
   		if(ruu == 0){
   			
   			ru.innerText = contis+"";
   			
   			var corru = ru.style.backgroundColor;
   			var corvd = vd.style.backgroundColor;
   			
   			ru.style.backgroundColor = "rgb(0, 255, 64)";
   			vd.style.backgroundColor = "rgb(0, 255, 64)";

   			setTimeout(function ruvd(){
				
				console.log(rud +'>>'+ ruu);

				ru.innerText = ruu+"";

			   	vd.innerText = rud+"";

			   	ru.style.backgroundColor = corru;
   				
   				vd.style.backgroundColor = corvd;

			}, 2000, ruu, rud, corru, corvd);

   		}else{

   			ru.innerText = ruu+"";

   			vd.innerText = rud+"";
   		
   		}
   		
   }
   
}


function rumenos() {

   const ru = document.getElementById("ru");
   const vd = document.getElementById("vd");
   const vc = document.getElementById("vc");
   const vm = document.getElementById("vm");

   var conts = vm.innerText+vc.innerText+vd.innerText+ru.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   console.log('contis >> '+contis);

   if(conti>-1 && conti<10){
   	
   		var contarr = contis.split('');

   		if(contarr.length > 1 ){

   			var ruu = parseInt(contarr[1], 10);
   		
	   		var rud = parseInt(contarr[0], 10);

	   		ru.innerText = ruu+"";

			vd.innerText = rud+"";

	   		console.log(rud +'>>'+ ruu);

   		}else{

   			var ruu = parseInt(contarr[0], 10);

   			var rud = 0;

   			if(ruu == 9){

   				var corru = ru.style.backgroundColor;
	   			var corvd = vd.style.backgroundColor;
	   			
	   			ru.style.backgroundColor = "rgb(0, 255, 64)";
	   			vd.style.backgroundColor = "rgb(0, 255, 64)";

	   			setTimeout(function ruvd(){
					
					console.log(rud +'>>'+ ruu);

					ru.innerText = ruu+"";

				   	vd.innerText = rud+"";

				   	ru.style.backgroundColor = corru;
	   				
	   				vd.style.backgroundColor = corvd;

				}, 2000, ruu, rud, corru, corvd);

   			}else{

   				ru.innerText = contis;

   				vd.innerText = "0";

   			}
   		
   		}
   		

   }else

   if(conti>9 && conti <100){

   		var contarr = contis.split('');
   		
   		var ruu = parseInt(contarr[1], 10);
   		
   		var rud = parseInt(contarr[0], 10);

   		console.log(rud +'>>'+ ruu);

   		//faz efeito no acrescimo das dezenas
   		if(ruu == 9){
   			
   			ru.innerText = contis+"";
   			
   			var corru = ru.style.backgroundColor;
   			var corvd = vd.style.backgroundColor;
   			
   			ru.style.backgroundColor = "rgb(0, 255, 64)";
   			vd.style.backgroundColor = "rgb(0, 255, 64)";

   			setTimeout(function ruvd(){
				
				console.log(rud +'>>'+ ruu);

				ru.innerText = ruu+"";

			   	vd.innerText = rud+"";

			   	ru.style.backgroundColor = corru;
   				
   				vd.style.backgroundColor = corvd;

			}, 2000, ruu, rud, corru, corvd);

   		}else{

   			ru.innerText = ruu+"";

   			vd.innerText = rud+"";
   		
   		}
   		
   }
   
}

function rdmais() {

   const rd = document.getElementById("rd");
   const vc = document.getElementById("vc");
   const vm = document.getElementById("vm");

   var conts = vm.innerText+vc.innerText+rd.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti + 1;

   contis = conti+"";

   if(conti>-1 && conti<10){
   
   		rd.innerText = contis;

   }else

   if(conti>9 && conti <100){

   		var contarr = contis.split('');
   		
   		var rud = parseInt(contarr[1], 10);
   		
   		var ruc = parseInt(contarr[0], 10);
   		console.log(ruc +'>>'+ rud);

   		//faz efeito no acrescimo das dezenas
   		if(rud == 0){
   			
   			rd.innerText = contis+"";
   			
   			var corrd = rd.style.backgroundColor;
   			var corvc = vc.style.backgroundColor;
   			
   			rd.style.backgroundColor = "rgb(0, 255, 64)";
   			vc.style.backgroundColor = "rgb(0, 255, 64)";

   			setTimeout(function rdvc(){
				
				console.log(ruc +'>>'+ rud);

				rd.innerText = rud+"";

			   	vc.innerText = ruc+"";

			   	rd.style.backgroundColor = corrd;
   				
   				vc.style.backgroundColor = corvc;

			}, 2000, rud, ruc, corrd, corvc);

   		}else{

   			rd.innerText = rud+"";

   			vc.innerText = ruc+"";
   		
   		}
   		
   }
   
}


function rdmenos() {

   const rd = document.getElementById("rd");
   const vc = document.getElementById("vc");
   const vm = document.getElementById("vm");

   var conts = vm.innerText+vc.innerText+rd.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   console.log('contis >> '+contis);

   if(conti>-1 && conti<10){
   	
   		var contarr = contis.split('');

   		if(contarr.length > 1 ){

   			var rud = parseInt(contarr[1], 10);
   		
	   		var ruc = parseInt(contarr[0], 10);

	   		rd.innerText = rud+"";

			vc.innerText = ruc+"";

	   		console.log(ruc +'>>'+ rud);

   		}else{

   			rd.innerText = contis;

   			vc.innerText = "0";
   		
   		}
   		

   }else

   if(conti>9 && conti <100){

   		var contarr = contis.split('');
   		
   		var rud = parseInt(contarr[1], 10);
   		
   		var ruc = parseInt(contarr[0], 10);

   		console.log(ruc +'>>'+ rud);

   		//faz efeito no acrescimo das dezenas
   		if(rud == 9){
   			
   			rd.innerText = contis+"";
   			
   			var corrd = rd.style.backgroundColor;
   			var corvc = vc.style.backgroundColor;
   			
   			rd.style.backgroundColor = "rgb(0, 255, 64)";
   			vc.style.backgroundColor = "rgb(0, 255, 64)";

   			setTimeout(function rdvc(){
				
				console.log(ruc +'>>'+ rud);

				rd.innerText = rud+"";

			   	vc.innerText = ruc+"";

			   	rd.style.backgroundColor = corrd;
   				
   				vc.style.backgroundColor = corvc;

			}, 2000, rud, ruc, corrd, corvc);

   		}else{

   			rd.innerText = rud+"";

   			vc.innerText = ruc+"";
   		
   		}
   		
   }
   
}