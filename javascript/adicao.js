function getn1(){

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");

   return c1.innerText+d1.innerText+u1.innerText+"";

}

function getn2(){

   const u2 = document.getElementById("u2");
   const d2 = document.getElementById("d2");
   const c2 = document.getElementById("c2");

   return c2.innerText+d2.innerText+u2.innerText+"";

}

function getresult(){

   const ru = document.getElementById("ru");
   const rd = document.getElementById("rd");
   const rc = document.getElementById("rc");
   const rm = document.getElementById("rm");

   return rm.innerText+rc.innerText+rd.innerText+ru.innerText+"";

}

function verificar(){
   var n1 = getn1();
   var n2 = getn2();
   var res = getresult();

   var in1 = parseInt(n1, 10);
   var in2 = parseInt(n2, 10);
   var ires = parseInt(res, 10);

   var soma = in1+in2;

console.log(in1+"+"+in2+"="+ires+">>"+soma);
   if( soma == res){
      var idan = sdocument.getElementById("idan");
      id="idan"
      element.style.visibility = 'hidden';      // Hide
      element.style.visibility = 'visible';     // Show

      alert("acertou");
   }else{
      alert("errou");
   }

}

function aoiniciar(){

   exibir();

}

function exibir(){

   var exibe = document.getElementById("exibe");

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");

   const u2 = document.getElementById("u2");
   const d2 = document.getElementById("d2");
   const c2 = document.getElementById("c2");

   const ru = document.getElementById("ru");
   const rd = document.getElementById("rd");
   const rc = document.getElementById("rc");
   const rm = document.getElementById("rm");


   //console.log(exibe.innerText);

   exibe.innerText = 
      c1.innerText+d1.innerText+u1.innerText + " + " + 
      c2.innerText+d2.innerText+u2.innerText + " = " + 
      rm.innerText+rc.innerText+rd.innerText+ru.innerText;

}
// const ru = document.getElementById("ru");
// const rd = document.getElementById("rd");
// const rc = document.getElementById("rc");

// const vd = document.getElementById("vd");
// const vc = document.getElementById("vc");
// const vm = document.getElementById("vm");

// const u1 = document.getElementById("u1");
// const d1 = document.getElementById("d1");
// const c1 = document.getElementById("c1");

// const u2 = document.getElementById("u2");
// const d2 = document.getElementById("d2");
// const c2 = document.getElementById("c2");

function novo(){

   var num1 = getRandomInt(1, 999);

   var num1s = num1+"";

   var num1arr = num1s.split('');

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");

   const u2 = document.getElementById("u2");
   const d2 = document.getElementById("d2");
   const c2 = document.getElementById("c2");

   if(num1arr.length == 1){

      u1.innerText = num1arr[0];
      d1.innerText = 0;
      c1.innerText = 0;

   }else
   if(num1arr.length == 2){

      u1.innerText = num1arr[0];
      d1.innerText = num1arr[1];
      c1.innerText = 0;

   }else
   if(num1arr.length == 3){

      u1.innerText = num1arr[0];
      d1.innerText = num1arr[1];
      c1.innerText = num1arr[2];

   }  

   var num2 = getRandomInt(1, 999);

   var num2s = num2+"";

   var num2arr = num2s.split('');

   if(num2arr.length == 1){

      u2.innerText = num2arr[0];
      d2.innerText = 0;
      c2.innerText = 0;

   }else
   if(num2arr.length == 2){

      u2.innerText = num2arr[0];
      d2.innerText = num2arr[1];
      c2.innerText = 0;

   }else
   if(num2arr.length == 3){

      u2.innerText = num2arr[0];
      d2.innerText = num2arr[1];
      c2.innerText = num2arr[2];

   }

   limpar();

}

function limpar(){

   document.getElementById("ru").innerText = 0;
   document.getElementById("rd").innerText = 0;
   document.getElementById("rc").innerText = 0;
   document.getElementById("rm").innerText = 0;

   document.getElementById("vd").innerText = 0;
   document.getElementById("vc").innerText = 0;
   document.getElementById("vm").innerText = 0;

   exibir();

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

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

               exibir();

			}, 2000, ruu, rud, corru, corvd);

   		}else{

   			ru.innerText = ruu+"";

   			vd.innerText = rud+"";
   		
   		}
   		
   }

   exibir();
   
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

                  exibir();

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

               exibir();

			}, 2000, ruu, rud, corru, corvd);

   		}else{

   			ru.innerText = ruu+"";

   			vd.innerText = rud+"";
   		
   		}
   		
   }
   
   
   exibir();

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

               exibir();

			}, 2000, rud, ruc, corrd, corvc);

   		}else{

   			rd.innerText = rud+"";

   			vc.innerText = ruc+"";
   		
   		}
   		
   }
   

   exibir();

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

               exibir();

			}, 2000, rud, ruc, corrd, corvc);

   		}else{

   			rd.innerText = rud+"";

   			vc.innerText = ruc+"";
   		
   		}
   		
   }
   
   
   exibir();

}

function rcmais() {

   const rc = document.getElementById("rc");
   const vm = document.getElementById("vm");

   var conts = vm.innerText+rc.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti + 1;

   contis = conti+"";

   if(conti>-1 && conti<10){
   
         rc.innerText = contis;

   }else

   if(conti>9 && conti <100){

         var contarr = contis.split('');
         
         var ruc = parseInt(contarr[1], 10);
         
         var rum = parseInt(contarr[0], 10);
         console.log(rum +'>>'+ ruc);

         //faz efeito no acrescimo das dezenas
         if(ruc == 0){
            
            rc.innerText = contis+"";
            
            var corrc = rc.style.backgroundColor;
            var corvm = vm.style.backgroundColor;
            
            rc.style.backgroundColor = "rgb(0, 255, 64)";
            vm.style.backgroundColor = "rgb(0, 255, 64)";

            setTimeout(function rcvm(){
            
            console.log(rum +'>>'+ ruc);

            rc.innerText = ruc+"";

               vm.innerText = rum+"";

               rc.style.backgroundColor = corrc;
               
               vm.style.backgroundColor = corvm;

               exibir();

         }, 2000, ruc, rum, corrc, corvm);

         }else{

            rc.innerText = ruc+"";

            vm.innerText = rum+"";
         
         }
         
   }
   

   exibir();

}

function rcmenos() {

   const rc = document.getElementById("rc");
   const vm = document.getElementById("vm");

   var conts = vm.innerText+rc.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   console.log('contis >> '+contis);

   if(conti>-1 && conti<10){
      
         var contarr = contis.split('');

         if(contarr.length > 1 ){

            var ruc = parseInt(contarr[1], 10);
         
            var rum = parseInt(contarr[0], 10);

            rc.innerText = ruc+"";

         vm.innerText = rum+"";

            console.log(rum +'>>'+ ruc);

         }else{

            rc.innerText = contis;

            vm.innerText = "0";
         
         }
         

   }else

   if(conti>9 && conti <100){

         var contarr = contis.split('');
         
         var ruc = parseInt(contarr[1], 10);
         
         var rum = parseInt(contarr[0], 10);

         console.log(rum +'>>'+ ruc);

         //faz efeito no acrescimo das dezenas
         if(ruc == 9){
            
            rc.innerText = contis+"";
            
            var corrc = rc.style.backgroundColor;
            var corvm = vm.style.backgroundColor;
            
            rc.style.backgroundColor = "rgb(0, 255, 64)";
            vm.style.backgroundColor = "rgb(0, 255, 64)";

            setTimeout(function rcvm(){
            
            console.log(rum +'>>'+ ruc);

            rc.innerText = ruc+"";

               vm.innerText = rum+"";

               rc.style.backgroundColor = corrc;
               
               vm.style.backgroundColor = corvm;

               exibir();

         }, 2000, ruc, rum, corrc, corvm);

         }else{

            rc.innerText = ruc+"";

            vm.innerText = rum+"";
         
         }
         
   }
   
   
   exibir();

}

function rmmais() {

   const rm = document.getElementById("rm");

   var conts = rm.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti + 1;

   contis = conti+"";

   if(conti>-1 && conti<10){
   
         rm.innerText = contis;

   }
   
   
   exibir();

}

function rmmenos() {

   const rm = document.getElementById("rm");
  
   var conts = rm.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   console.log('contis >> '+contis);

   if(conti>-1 && conti<10){
      
      rm.innerText = contis;
  
   }
   
   
   exibir();

}