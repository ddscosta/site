var cor_normal = "rgba(0, 0, 0, 0)";
var verifica = true;

function getn1(){

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");

   return m1.innerText+c1.innerText+d1.innerText+u1.innerText+"";

}

function getn2(){

   const u2 = document.getElementById("u2");
   const d2 = document.getElementById("d2");
   const c2 = document.getElementById("c2");
   const m2 = document.getElementById("m2");

   return m2.innerText+c2.innerText+d2.innerText+u2.innerText+"";

}

function getresult(){

   const _ru = document.getElementById("_ru");
   const _rd = document.getElementById("_rd");
   const _rc = document.getElementById("_rc");
   const _rm = document.getElementById("_rm");

   return _rm.innerText+_rc.innerText+_rd.innerText+_ru.innerText+"";

}

function verificar(){

   if(!verifica){return false;}

   var n1 = getn1();
   var n2 = getn2();
   var res = getresult();

   var in1 = parseInt(n1, 10);
   var in2 = parseInt(n2, 10);
   var ires = parseInt(res, 10);

   var soma = in1+in2;

   console.log(in1+"+"+in2+"="+ires+">>"+soma);

   if( soma == res){
      feliz();
      verifica = false;
   }else{
      triste();
   }

}

function triste(){

   var idan = document.getElementById("idan");
   idan.style.display = 'none';    

   var feliz = document.getElementById("idfeliz");
   feliz.style.display = 'none';    

   var triste = document.getElementById("idtriste");
   triste.style.display = 'block';

}

function feliz(){

   var idan = document.getElementById("idan");
   idan.style.display = 'none';    

   var feliz = document.getElementById("idfeliz");
   feliz.style.display = 'block';    

   var triste = document.getElementById("idtriste");
   triste.style.display = 'none';

   pontuacao("mais");

}

function info(){
   var idan = document.getElementById("idan");
   idan.style.display = 'block';    

   var feliz = document.getElementById("idfeliz");
   feliz.style.display = 'none';    

   var triste = document.getElementById("idtriste");
   triste.style.display = 'none';
}

function pontuacao(tipo){
   
   var pon = 0;
   var pont = localStorage.getItem("pontos");
   var ponti = parseInt(pont, 10);
   

   //tipo:mais, menos, zera, null;

   var pontt = document.getElementById("pontu");

   //var pontarr = pont.innerText.split(' ');

   //var ponti = parseInt(pontarr[1], 10);
   
   console.log('ponti1:' + ponti);

   if(tipo == 'mais'){

      if(Number.isNaN(ponti)){
         ponti = 1;
      }else{
         ponti = ponti + 1;

      }

   }

   if(tipo == 'zera'){

      ponti = 0;

   }

   pontt.innerText = "Pontos: "+ponti;

   localStorage.setItem("pontos", ponti);

   console.log('ponti2:' + ponti);

   //const cat = localStorage.getItem("myCat");

   //localStorage.removeItem("myCat");


}

function verificaStorage(){
   var pon = 0;
   var pont = localStorage.getItem("pontos");
   var ponti = parseInt(pont, 10);
   
   //tipo:mais, menos, zera, null;
   var pontt = document.getElementById("pontu");
   
   console.log('storage ponti:' + ponti);

   if(Number.isNaN(ponti)){
      ponti = 0;
   }

   document.getElementById("pontu").innerText = "Pontos: " + ponti;

}

function aoiniciar(){

   novo()

   verificaStorage();

   exibir();

}

function reset(){

   if (confirm('Apagar Pontos?')) {
      localStorage.setItem("pontos", 0);
      verificaStorage();
   }

}

function limpa_cor_vai_res() {
   
   document.getElementById("vd").style.backgroundColor = cor_normal;
   document.getElementById("vc").style.backgroundColor = cor_normal;
   document.getElementById("vm").style.backgroundColor = cor_normal;

   document.getElementById("ru").style.backgroundColor = cor_normal;
   document.getElementById("rd").style.backgroundColor = cor_normal;
   document.getElementById("rc").style.backgroundColor = cor_normal;
   document.getElementById("rm").style.backgroundColor = cor_normal;

}

function exibir(){

   info();
   
   var exibe = document.getElementById("exibe");

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");

   const u2 = document.getElementById("u2");
   const d2 = document.getElementById("d2");
   const c2 = document.getElementById("c2");
   const m2 = document.getElementById("m2");

   const _ru = document.getElementById("_ru");
   const _rd = document.getElementById("_rd");
   const _rc = document.getElementById("_rc");
   const _rm = document.getElementById("_rm");

   const _vd = document.getElementById("_vd");
   const _vc = document.getElementById("_vc");
   const vm = document.getElementById("vm");

   //console.log(exibe.innerText);

   exibe.innerText = 
      m1.innerText+c1.innerText+d1.innerText+u1.innerText + " + " + 
      m2.innerText+c2.innerText+d2.innerText+u2.innerText + " = " + 
      _rm.innerText+_rc.innerText+_rd.innerText+_ru.innerText;

   if(_vd.innerText != '0'){
      vd.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      if(_ru.innerText == '9'){
         vd.style.backgroundColor = cor_normal;
      }     
   }
   if(_vc.innerText != '0'){
      vc.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      if(_rd.innerText == '9'){
         vc.style.backgroundColor = cor_normal;
      }     
   }
   if(vm.innerText != '0'){
      vm.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      if(_rc.innerText == '9'){
         vm.style.backgroundColor = cor_normal;
      }     
   }

}

function novo(){

   verifica = true;

   var num1 = getRandomInt(1, 999);

   var num_m1 = getRandomInt(0, 8);

   console.log('num_m1:'+num_m1);

   var num1s = num1+""+num_m1;

   var num1arr = num1s.split('');

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");

   const u2 = document.getElementById("u2");
   const d2 = document.getElementById("d2");
   const c2 = document.getElementById("c2");
   const m2 = document.getElementById("m2");

   if(num1arr.length == 1){

      u1.innerText = num1arr[0];
      d1.innerText = 0;
      c1.innerText = 0;
      m1.innerText = 0;

   }else
   if(num1arr.length == 2){

      u1.innerText = num1arr[0];
      d1.innerText = num1arr[1];
      c1.innerText = 0;
      m1.innerText = 0;

   }else
   if(num1arr.length == 3){

      u1.innerText = num1arr[0];
      d1.innerText = num1arr[1];
      c1.innerText = num1arr[2];
      m1.innerText = 0;

   }else
   if(num1arr.length == 4){

      u1.innerText = num1arr[0];
      d1.innerText = num1arr[1];
      c1.innerText = num1arr[2];
      m1.innerText = num1arr[3];

   }  

   var num2 = getRandomInt(1, 999);
   
   var num_m2 = 8-num_m1;

   console.log('num_m2:'+num_m2);

   var num2s = num2+""+num_m2;

   var num2arr = num2s.split('');

   if(num2arr.length == 1){

      u2.innerText = num2arr[0];
      d2.innerText = 0;
      c2.innerText = 0;
      m2.innerText = 0;

   }else
   if(num2arr.length == 2){

      u2.innerText = num2arr[0];
      d2.innerText = num2arr[1];
      c2.innerText = 0;
      m2.innerText = 0;

   }else
   if(num2arr.length == 3){

      u2.innerText = num2arr[0];
      d2.innerText = num2arr[1];
      c2.innerText = num2arr[2];
      m2.innerText = 0;

   }else
   if(num2arr.length == 4){

      u2.innerText = num2arr[0];
      d2.innerText = num2arr[1];
      c2.innerText = num2arr[2];
      m2.innerText = num2arr[3];

   }

   limpar();

}

function limpar(){

   //se ainda não acertou então deixa limpar
   if(verifica){
      
      document.getElementById("_ru").innerText = 0;
      document.getElementById("_rd").innerText = 0;
      document.getElementById("_rc").innerText = 0;
      document.getElementById("_rm").innerText = 0;

      document.getElementById("_vd").innerText = 0;
      document.getElementById("_vc").innerText = 0;
      document.getElementById("vm").innerText = 0;

      limpa_cor_vai_res();

      exibir();
      
   }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function rumais() {

   const ru = document.getElementById("ru");
   const _ru = document.getElementById("_ru");
   const _vd = document.getElementById("_vd");
   const vd = document.getElementById("vd");
   const _vc = document.getElementById("_vc");
   const vm = document.getElementById("vm");
   const _rda = document.getElementById("_rda");
  
   var conts = vm.innerText+_vc.innerText+_vd.innerText+_ru.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti + 1;

   contis = conti+"";

   if(conti>-1 && conti<10){
   
   		_ru.innerText = contis;
         ru.style.backgroundColor = cor_normal;

   }else

   if(conti>9 && conti <100){

   		var contarr = contis.split('');
   		
   		var ruu = parseInt(contarr[1], 10);
   		
   		var rud = parseInt(contarr[0], 10);

         _ru.innerText = ruu;
         _rda.innerText = rud;
         _vd.innerText = rud;
        
   		console.log(rud +'>>'+ ruu);

   		//faz efeito no acrescimo das dezenas
   		if(ruu == 0){
   			
            _rda.style.animation = "none";
            _vd.style.animation = "none";
            ru.style.animation = "none";
            vd.style.animation = "none";
            setTimeout(() => _rda.style.animation = 
            "sobe_d 2s linear, pisca_d 1s linear"
            , 5);
            setTimeout(() => _vd.style.animation = 
            "ultimo_d 2s linear"
            , 5);
            setTimeout(() => ru.style.animation = 
            "pisca_u 2s linear"
            , 5);
            setTimeout(() => vd.style.animation = 
            "pisca_d 2s linear"
            , 5);

   		}else{

   			_ru.innerText = ruu+"";

   			_vd.innerText = rud+"";
   		
   		}
   		
   }

   exibir();
   
}


function rumenos() {

   const _ru = document.getElementById("_ru");
   const _vd = document.getElementById("_vd");
   const ru = document.getElementById("ru");
   const vd = document.getElementById("vd");
   const _vc = document.getElementById("_vc");
   const vm = document.getElementById("vm");
   const _rda = document.getElementById("_rda");

   var conts = vm.innerText+_vc.innerText+_vd.innerText+_ru.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   console.log('conti: ' + conti);

   if(conti>-1 && conti<10){
   	
   		var contarr = contis.split('');

   		if(contarr.length > 1 ){

   			var ruu = parseInt(contarr[1], 10);
   		
	   		var rud = parseInt(contarr[0], 10);

	   		_ru.innerText = ruu+"";
            _rd.innerText = rud+"";
			   _vd.innerText = rud+"";

	   		console.log('-1<conti<10::rud: ' + rud);

            console.log('-1<conti<10::ruu: ' + ruu);

         //número menor que 10
   		}else{

   			var ruu = parseInt(contarr[0], 10);

            console.log('ruu: ' + ruu);

   			var rud = 0;

   			if(ruu == 9){

               _ru.innerText = ruu+"";
               _vd.innerText = rud+"";
               _rd.innerText = rud+"";
               _rda.innerText = rud+"";

               _rda.style.animation = "none";
               _vd.style.animation = "none";
               ru.style.animation = "none";
               vd.style.animation = "none";
               setTimeout(() => _rda.style.animation = 
               "sobe_d 2s linear, pisca_d 1s linear"
               , 5);
               setTimeout(() => _vd.style.animation = 
               "ultimo_d 2s linear"
               , 5);
               setTimeout(() => ru.style.animation = 
               "pisca_u 2s linear"
               , 5);
               setTimeout(() => vd.style.animation = 
               "pisca_d 2s linear"
               , 5);

   			}else{

   				_ru.innerText = contis;

   				_vd.innerText = "0";
               _rd.innerText = "0";
               _rda.innerText = "0";

   			}
   		
   		}
   		
   }else

   if(conti>9 && conti <100){

   		var contarr = contis.split('');
   		
   		var ruu = parseInt(contarr[1], 10);
   		
   		var rud = parseInt(contarr[0], 10);

         console.log('9<conti<100::rud: ' + rud);

         console.log('9<conti<100::ruu: ' + ruu);

   		//faz efeito no acrescimo das dezenas
   		if(ruu == 9){
   			
            _ru.innerText = ruu;
            _vd.innerText = rud;
            _rda.innerText = rud;

            _rda.style.animation = "none";
            _vd.style.animation = "none";
            ru.style.animation = "none";
            vd.style.animation = "none";
            setTimeout(() => _rda.style.animation = 
            "sobe_d 2s linear, pisca_d 1s linear"
            , 5);
            setTimeout(() => _vd.style.animation = 
            "ultimo_d 2s linear"
            , 5);
            setTimeout(() => ru.style.animation = 
            "pisca_u 2s linear"
            , 5);
            setTimeout(() => vd.style.animation = 
            "pisca_d 2s linear"
            , 5);

   		}else{

   			_ru.innerText = ruu+"";
   			_vd.innerText = rud+"";
            _rda.innerText = rud+"";
   		
   		}
   		
   }
   
   exibir();

}

function rdmais() {

   const rd = document.getElementById("rd");
   const vc = document.getElementById("vc");
   const vm = document.getElementById("vm");

   const _rd = document.getElementById("_rd");
   const _vc = document.getElementById("_vc");
   const _rca = document.getElementById("_rca");
   
   var conts = vm.innerText+_vc.innerText+_rd.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti + 1;

   contis = conti+"";

   if(conti>-1 && conti<10){
   
   		_rd.innerText = contis;

   }else

   if(conti>9 && conti <100){

   		var contarr = contis.split('');
   		
   		var rud = parseInt(contarr[1], 10);
   		
   		var ruc = parseInt(contarr[0], 10);
   		
         _rd.innerText = rud;
         _rca.innerText = ruc;
         _vc.innerText = ruc;

         console.log(ruc +'>>'+ rud);

   		//faz efeito no acrescimo das dezenas
   		if(rud == 0){
   			
            _vc.style.animation = "none";
            vc.style.animation = "none";
            _rca.style.animation = "none";
            rd.style.animation = "none";
            
            setTimeout(() => _rca.style.animation = 
            "sobe_c 2s linear, pisca_c 1s linear"
            , 5);
            setTimeout(() => _vc.style.animation = 
            "ultimo_c 2s linear"
            , 5);
            setTimeout(() => rd.style.animation = 
            "pisca_d 2s linear"
            , 5);
            setTimeout(() => vc.style.animation = 
            "pisca_c 2s linear"
            , 5);

   		}else{

   			_rd.innerText = rud+"";

   			_vc.innerText = ruc+"";
   		
   		}
   		
   }
   

   exibir();

}


function rdmenos() {

   const rd = document.getElementById("rd");
   const vc = document.getElementById("vc");
   const vm = document.getElementById("vm");

   const _vc = document.getElementById("_vc");
   const _rd = document.getElementById("_rd");
   const _rca = document.getElementById("_rca");

   var conts = vm.innerText+vc.innerText+_rd.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   console.log('contis >> '+contis);

   if(conti>-1 && conti<10){
   	
   		var contarr = contis.split('');

   		if(contarr.length > 1 ){

   			var rud = parseInt(contarr[1], 10);
   		
	   		var ruc = parseInt(contarr[0], 10);

            _rd.innerText = rud+"";
            _rc.innerText = ruc+"";
            _vc.innerText = ruc+"";

            console.log('-1<conti<10::rud: ' + rud);

            console.log('-1<conti<10::ruc: ' + ruc);

   		}else{

            var rud = parseInt(contarr[0], 10);

            console.log('rud: ' + rud);

            var ruc = 0;

            if(rud == 9){

               _rd.innerText = rud+"";
               _vc.innerText = ruc+"";
               _rc.innerText = ruc+"";
               _rca.innerText = ruc+"";

               _rca.style.animation = "none";
               _vc.style.animation = "none";
               rd.style.animation = "none";
               vc.style.animation = "none";
               
               setTimeout(() => _rca.style.animation = 
               "sobe_c 2s linear, pisca_c 1s linear"
               , 5);
               setTimeout(() => _vc.style.animation = 
               "ultimo_c 2s linear"
               , 5);
               setTimeout(() => rd.style.animation = 
               "pisca_d 2s linear"
               , 5);
               setTimeout(() => vc.style.animation = 
               "pisca_c 2s linear"
               , 5);

            }else{

      			_rd.innerText = contis;

               _vc.innerText = "0";
               _rc.innerText = "0";
               _rca.innerText = "0";

            }
   		
   		}
   		
   }else

   if(conti>9 && conti <100){

   		var contarr = contis.split('');
   		
   		var rud = parseInt(contarr[1], 10);
   		
   		var ruc = parseInt(contarr[0], 10);

         console.log('9<conti<100::ruc: ' + ruc);

         console.log('9<conti<100::rud: ' + rud);

   		//faz efeito no acrescimo das dezenas
   		if(rud == 9){
   			
            _rd.innerText = rud;
            _vc.innerText = ruc;
            _rca.innerText = ruc;
   			
            _rca.style.animation = "none";
            _vc.style.animation = "none";
            rd.style.animation = "none";
            vc.style.animation = "none";
            setTimeout(() => _rca.style.animation = 
            "sobe_c 2s linear, pisca_c 1s linear"
            , 5);
            setTimeout(() => _vc.style.animation = 
            "ultimo_c 2s linear"
            , 5);
            setTimeout(() => rd.style.animation = 
            "pisca_d 2s linear"
            , 5);
            setTimeout(() => vc.style.animation = 
            "pisca_c 2s linear"
            , 5);

   		}else{

            _rd.innerText = rud+"";
            _vc.innerText = ruc+"";
            _rca.innerText = ruc+"";
   		
   		}
   		
   }
   
   
   exibir();

}

function rcmais() {

   const _rc = document.getElementById("_rc");
   const vm = document.getElementById("vm");

   var conts = vm.innerText+_rc.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti + 1;

   contis = conti+"";

   if(conti>-1 && conti<10){
   
         _rc.innerText = contis;

   }else

   if(conti>9 && conti <100){

         var contarr = contis.split('');
         
         var ruc = parseInt(contarr[1], 10);
         
         var rum = parseInt(contarr[0], 10);
         console.log(rum +'>>'+ ruc);

         //faz efeito no acrescimo das dezenas
         if(ruc == 0){
            
            _rc.innerText = contis+"";
            
            // var corrc = rc.style.backgroundColor;
            // var corvm = vm.style.backgroundColor;
            
            var corrc = cor_normal;
            var corvm = cor_normal;

            rc.style.backgroundColor = "rgb(0, 255, 64)";
            vm.style.backgroundColor = "rgb(0, 255, 64)";

            setTimeout(function rcvm(){
            
            console.log(rum +'>>'+ ruc);

            _rc.innerText = ruc+"";

               vm.innerText = rum+"";

               rc.style.backgroundColor = corrc;
               
               vm.style.backgroundColor = corvm;

               exibir();

         }, 1000, ruc, rum, corrc, corvm);

         }else{

            _rc.innerText = ruc+"";

            vm.innerText = rum+"";
         
         }
         
   }
   

   exibir();

}

function rcmenos() {

   const _rc = document.getElementById("_rc");
   const vm = document.getElementById("vm");

   var conts = vm.innerText+_rc.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   console.log('contis >> '+contis);

   if(conti>-1 && conti<10){
      
         var contarr = contis.split('');

         if(contarr.length > 1 ){

            var ruc = parseInt(contarr[1], 10);
         
            var rum = parseInt(contarr[0], 10);

            _rc.innerText = ruc+"";

         vm.innerText = rum+"";

            console.log(rum +'>>'+ ruc);

         }else{

            _rc.innerText = contis;

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
            
            _rc.innerText = contis+"";
            
            // var corrc = rc.style.backgroundColor;
            // var corvm = vm.style.backgroundColor;

            var corrc = cor_normal;
            var corvm = cor_normal;
            
            rc.style.backgroundColor = "rgb(0, 255, 64)";
            vm.style.backgroundColor = "rgb(0, 255, 64)";

            setTimeout(function rcvm(){
            
            console.log(rum +'>>'+ ruc);

            _rc.innerText = ruc+"";

               vm.innerText = rum+"";

               rc.style.backgroundColor = corrc;
               
               vm.style.backgroundColor = corvm;

               exibir();

         }, 1000, ruc, rum, corrc, corvm);

         }else{

            _rc.innerText = ruc+"";

            vm.innerText = rum+"";
         
         }
         
   }
   
   
   exibir();

}

function rmmais() {

   const _rm = document.getElementById("_rm");

   var conts = _rm.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti + 1;

   contis = conti+"";

   if(conti>-1 && conti<10){
   
         _rm.innerText = contis;

   }
   
   
   exibir();

}

function rmmenos() {

   const _rm = document.getElementById("_rm");
  
   var conts = _rm.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   console.log('contis >> '+contis);

   if(conti>-1 && conti<10){
      
      _rm.innerText = contis;
  
   }
   
   
   exibir();

}