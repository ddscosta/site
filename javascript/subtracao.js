var cor_normal = "rgba(0, 0, 0, 0)";
var verifica = true;
var verifica_err = true;
var verifica_pul = true;
var ajuda = false;
var reagru = false;
var puloss = true;

function ajudaa(){

   var marcado = document.getElementById('ajuda').checked;

   if(marcado){
      ajuda = true;
      repetirn1();
   }else{
      ajuda = false;
      zera_result();
   }
   
}

function reagrup(){

   var marcado = document.getElementById('reagr').checked;

   if(marcado){
      reagru = true;
      //repetirn1();
   }else{
      reagru = false;
      //zera_result();
   }
   
}

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

   const ru = document.getElementById("ru");
   const rd = document.getElementById("rd");
   const rc = document.getElementById("rc");
   const rm = document.getElementById("rm");

   return rm.innerText+rc.innerText+rd.innerText+ru.innerText+"";

}

function verificar(){

   if(!verifica){return false;}

   if(!verifica_err){return false;}

   if(!verifica_pul){return false;}

   var n1 = getn1();
   var n2 = getn2();
   var res = getresult();

   var in1 = parseInt(n1, 10);
   var in2 = parseInt(n2, 10);
   var ires = parseInt(res, 10);

   var soma = in1-in2;

   console.log(in1+"-"+in2+"="+ires+">>"+soma);

   if( soma == res){
      feliz();
      verifica = false;
   }else{
      triste();
      verifica_err = false;
   }

   /*
   Apos uma verificação false, não contabiliza 'novo' como pulo.
   Será falso apenas ao clicar no botao 'verificar' o que imprede o aumento dos pulos
   */
   puloss = true;

}

function triste(){

   var idan = document.getElementById("idan");
   idan.style.display = 'none';    

   var feliz = document.getElementById("idfeliz");
   feliz.style.display = 'none';    

   var triste = document.getElementById("idtriste");
   triste.style.display = 'block';

   pontuacao("menos");

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
   var pont = localStorage.getItem("pontos_sub");
   var ponti = parseInt(pont, 10);

   var num_err = 0;
   var loc_err = localStorage.getItem("erros_sub");
   var loc_erri = parseInt(loc_err, 10);

   var num_pul = 0;
   var loc_pul = localStorage.getItem("pulos_sub");
   var loc_puli = parseInt(loc_pul, 10);
   

   //tipo:mais, menos, zera, null;

   var pontt = document.getElementById("pontu");

   var input_err = document.getElementById("erros");

   var input_pul = document.getElementById("pulos");

   //var pontarr = pont.innerText.split(' ');

   //var ponti = parseInt(pontarr[1], 10);
   //alert('é igual? ' + (ponti == 'NaN') );

   //alert('é igual? ' + (Number.isNaN(ponti)) );

   console.log('ponti1:' + ponti);

   /*TIPO QUE GANHA PONTOS*/
   if(tipo == 'mais'){

      if(Number.isNaN(ponti)){
         ponti = 1;
      }else{
         ponti = ponti + 1;

      }

   }

   /*TIPO QUE PERDE PONTOS*/
   if(tipo == 'menos'){
      
      /*INICIALIZA PONTOS COM ZERO*/
      if(Number.isNaN(ponti)){
         ponti = 0;
      }

      /*acrescenta erros*/
      if(Number.isNaN(loc_erri)){
         loc_erri = 1;
      }else{
         loc_erri = loc_erri + 1;
      }

      if(Number.isNaN(loc_puli)){
         loc_puli = 1;
      }else{
         loc_puli = loc_puli + 1;
      }

   }

   /*registra os pulos*/
   if(tipo == 'menos_pulo'){
      
      if(Number.isNaN(loc_puli)){
         loc_puli = 1;
      }else{
         loc_puli = loc_puli + 1;
      }

   }

   if(tipo == 'zera'){

      ponti = 0;

   }

   pontt.innerText = "Pontos: "+ponti;

   localStorage.setItem("pontos_sub", ponti);

   console.log('ponti2:' + ponti);

   //const cat = localStorage.getItem("myCat");

   //localStorage.removeItem("myCat");

   input_err.innerText = loc_erri;

   localStorage.setItem("erros_sub", loc_erri);

   console.log('loc_erri:' + loc_erri);


   input_pul.innerText = loc_puli;

   localStorage.setItem("pulos_sub", loc_puli);

   console.log('loc_puli:' + loc_puli);


}

function verificaStorage(){
   var pon = 0;
   var pont = localStorage.getItem("pontos_sub");
   var ponti = parseInt(pont, 10);

   var pon_err = 0;
   var pont_err = localStorage.getItem("erros_sub");
   var ponti_err = parseInt(pont_err, 10);

   var pon_pul = 0;
   var pont_pul = localStorage.getItem("pulos_sub");
   var ponti_pul = parseInt(pont_pul, 10);
   
   //tipo:mais, menos, zera, null;
   var pontt = document.getElementById("pontu");

   var pontt_err = document.getElementById("erros");

   var pontt_pul = document.getElementById("pulos");
   
   console.log('storage ponti:' + ponti);

   if(Number.isNaN(ponti)){
      ponti = 0;
   }

   if(Number.isNaN(ponti_err)){
      ponti_err = 0;
   }

   if(Number.isNaN(ponti_pul)){
      ponti_pul = 0;
   }

   document.getElementById("pontu").innerText = "Pontos: " + ponti;

   document.getElementById("erros").innerText = ponti_err;

   document.getElementById("pulos").innerText = ponti_pul;

}

function memoriza_sub(){
   
   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");
   
   var num1 = m1.innerText+c1.innerText+d1.innerText+u1.innerText;

   localStorage.setItem("mem_1", num1);
   
   const u2 = document.getElementById("u2");
   const d2 = document.getElementById("d2");
   const c2 = document.getElementById("c2");
   const m2 = document.getElementById("m2");
   
   var num2 = m2.innerText+c2.innerText+d2.innerText+u2.innerText;

   localStorage.setItem("mem_2", num2);

}

function aoiniciar(){

   puloss = true;

   document.getElementById('ajuda').checked = false;

   novo(); 
  
   verificaStorage();

   exibir();

   if(ajuda){
      repetirn1();
   }else{
      zera_result();
   }
  
}

function repetirn1(){

   const ru = document.getElementById("ru");
   const rd = document.getElementById("rd");
   const rc = document.getElementById("rc");
   const rm = document.getElementById("rm");

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");

   ru.innerText = u1.innerText;
   rd.innerText = d1.innerText;
   rc.innerText = c1.innerText;
   rm.innerText = m1.innerText;

}

function zera_result(){
   document.getElementById("ru").innerText = 0;
   document.getElementById("rd").innerText = 0;
   document.getElementById("rc").innerText = 0;
   document.getElementById("rm").innerText = 0;
}

function rgrp_d(){
   
   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");

   const imgu = document.getElementById("imgu");
   const imgd = document.getElementById("imgd");

   const vu = document.getElementById("vu");
   const vd = document.getElementById("vd");
   
   if(vu.innerText == ''){
      var vuu = 0;   
   }else{
      var vuu = vu.innerText;   
   }

   if(vd.innerText == ''){
      var vdd = 0;   
   }else{
      var vdd = vd.innerText;   
   }
   
   const ru = document.getElementById("ru");
   const rd = document.getElementById("rd");

   var u1i = parseInt(u1.innerText, 10);
   var d1i = parseInt(d1.innerText, 10);

   var vu1i = parseInt(vuu, 10);
   var vd1i = parseInt(vdd, 10);

   var prop_iu = imgu.style.display;
   console.log('prop_iu: '+prop_iu);

   var prop_id = imgd.style.display;
   console.log('prop_id: '+prop_id);

   //o reagrupamento da dezena é maior que zero
   if(vd1i > 0){

      //a unidade já foi reagrupada e está bloqueada
      if(prop_iu == 'flex'){
          var u1m = vu1i + 10;
      }else{
         var u1m = u1i + 10;
      }

      /*if(vu1i > 0){
         var u1m = vu1i + 10;
      }else{
         var u1m = u1i + 10;
      }*/

      //var u1m = vu1i + 10;
      var d1m = vd1i - 1;

      vu.innerText = u1m+"";
      vd.innerText = d1m+"";

      if(ajuda){
         ru.innerText = u1m+"";
         rd.innerText = d1m+"";
      }

      imgu.style.display = 'flex';
      imgd.style.display = 'flex';

   }else{

      //a dezena é maior que zero e não está bloqueada
      if(d1i > 0 && prop_id != 'flex'){

         if(u1i > 0 && prop_iu != 'flex'){
            var u1m = u1i + 10;
         }else{
            var u1m = vu1i + 10;
         }

         if(d1i > 0 && prop_id != 'flex'){
            var d1m = d1i - 1;
         }else{
            var d1m = vd1i - 1;
         }

         //var u1m = u1i + 10;
         //var d1m = d1i - 1;
         
         vu.innerText = u1m+"";
         vd.innerText = d1m+"";

         if(ajuda){
            ru.innerText = u1m+"";
            rd.innerText = d1m+"";
         }

         imgu.style.display = 'flex';
         imgd.style.display = 'flex';

      }else{

         // alert('A Dezena deve não ser bloqueada e maior que 0 OU o reagrupamento maior que 0.');
         alert('ESTÁ VAZIO!!');
      
      }
   
   }

   if(imgu.style.display == 'flex'){
      vu.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vu.style.backgroundColor = cor_normal;
   }

   if(imgd.style.display == 'flex'){
      vd.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vd.style.backgroundColor = cor_normal;
   }

}

function rgrp_c(){
   
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");

   const imgd = document.getElementById("imgd");
   const imgc = document.getElementById("imgc");

   const vd = document.getElementById("vd");
   const vc = document.getElementById("vc");

   if(vd.innerText == ''){
      var vdd = 0;   
   }else{
      var vdd = vd.innerText;   
   }

   if(vc.innerText == ''){
      var vcc = 0;   
   }else{
      var vcc = vc.innerText;   
   }

   const rd = document.getElementById("rd");
   const rc = document.getElementById("rc");
   
   var d1i = parseInt(d1.innerText, 10);
   var c1i = parseInt(c1.innerText, 10);
   
   var vd1i = parseInt(vdd, 10);
   var vc1i = parseInt(vcc, 10);

   var prop_ic = imgc.style.display;
   console.log('prop_ic: '+prop_ic);

   var prop_id = imgd.style.display;
   console.log('prop_id: '+prop_id);

   //o reagrupamento da centena é maior que zero
   if(vc1i > 0){

      //a dezena já foi reagrupada e está bloqueada
      if(prop_id == 'flex'){
          var d1m = vd1i + 10;
      }else{
         var d1m = d1i + 10;
      }

      /*
      if(vd1i > 0){
         var d1m = vd1i + 10;
      }else{
         var d1m = d1i + 10;
      }*/
      
      //var d1m = vd1i + 10;
      var c1m = vc1i - 1;

      vd.innerText = d1m+"";
      vc.innerText = c1m+"";

      if(ajuda){
         rd.innerText = d1m+"";
         rc.innerText = c1m+"";
      }

      imgd.style.display = 'flex';
      imgc.style.display = 'flex';

   }else{

      //a centena é maior que zero e não está bloqueada
      if(c1i > 0 && prop_ic != 'flex'){

         if(c1i > 0 && prop_ic != 'flex'){
            var c1m = c1i - 1;
         }else{
            var c1m = vc1i - 1;
         }

         if(d1i > 0 && prop_id != 'flex'){
            var d1m = d1i + 10;
         }else{
            var d1m = vd1i + 10;
         }

         //var d1m = d1i + 10;
         //var c1m = c1i - 1;

         vd.innerText = d1m+"";
         vc.innerText = c1m+"";

         if(ajuda){
            rd.innerText = d1m+"";
            rc.innerText = c1m+"";
         }

         imgd.style.display = 'flex';
         imgc.style.display = 'flex';

      }else{
         
         // alert('A Centena deve não ser bloqueada e maior que 0 OU o reagrupamento maior que 0.');
         alert('ESTÁ VAZIO!!');

      }

   }

   if(imgc.style.display == 'flex'){
      vc.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vc.style.backgroundColor = cor_normal;
   }
   
   if(imgd.style.display == 'flex'){
      vd.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vd.style.backgroundColor = cor_normal;
   }

}

function rgrp_um(){
   
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");

   const imgc = document.getElementById("imgc");
   const imgm = document.getElementById("imgm");

   const vc = document.getElementById("vc");
   const vm = document.getElementById("vm");

   if(vc.innerText == ''){
      var vcc = 0;   
   }else{
      var vcc = vc.innerText;   
   }

   if(vm.innerText == ''){
      var vmm = 0;   
   }else{
      var vmm = vm.innerText;   
   }

   const rc = document.getElementById("rc");
   const rm = document.getElementById("rm");
   
   var c1i = parseInt(c1.innerText, 10);
   var m1i = parseInt(m1.innerText, 10);

   var vc1i = parseInt(vcc, 10);
   var vm1i = parseInt(vmm, 10);

   var prop_ic = imgc.style.display;
   console.log('prop_ic: '+prop_ic);

   var prop_im = imgm.style.display;
   console.log('prop_im: '+prop_im);

   //o reagrupamento da milhar é maior que zero
   if(vm1i > 0){

      //a centena já foi reagrupada e está bloqueada
      if(prop_ic == 'flex'){
          var c1m = vc1i + 10;
      }else{
         var c1m = c1i + 10;
      }

      /*if(vc1i > 0){
         var c1m = vc1i + 10;
      }else{
         var c1m = c1i + 10;
      }*/
      
      //var c1m = vc1i + 10;
      var m1m = vm1i - 1;

      vc.innerText = c1m+"";
      vm.innerText = m1m+"";

      if(ajuda){
         rc.innerText = c1m+"";
         rm.innerText = m1m+"";
      }

      imgc.style.display = 'flex';
      imgm.style.display = 'flex';

   }else{



      //a milhar é maior que zero e não está bloqueada
      if(m1i > 0 && prop_im != 'flex'){
         
         if(m1i > 0 && prop_im != 'flex'){
            var m1m = m1i - 1;
         }else{
            var m1m = vm1i - 1;
         }

         if(c1i > 0 && prop_ic != 'flex'){
            var c1m = c1i + 10;
         }else{
            var c1m = vc1i + 10;
         }

         //var c1m = c1i + 10;
         //var m1m = m1i - 1;

         vc.innerText = c1m+"";
         vm.innerText = m1m+"";

         if(ajuda){
            rc.innerText = c1m+"";
            rm.innerText = m1m+"";
         }

         imgc.style.display = 'flex';
         imgm.style.display = 'flex';
         
      }else{
          
         // alert('A Milhar deve não ser bloqueada e maior que 0 OU o reagrupamento maior que 0.');
         alert('ESTÁ VAZIO!!');

      }

   }

   if(imgm.style.display == 'flex'){
      vm.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vm.style.backgroundColor = cor_normal;
   }
   
   if(imgc.style.display == 'flex'){
      vc.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vc.style.backgroundColor = cor_normal;
   }

}

function reset(){

   if (confirm('Apagar Pontos Erros e Pulos?')) {
      localStorage.setItem("pontos_sub", 0);
      localStorage.setItem("erros_sub", 0);
      localStorage.setItem("pulos_sub", 0);
      verificaStorage();
   }

}

function limpa_cores(){
   document.getElementById("vu").style.backgroundColor = cor_normal;
   document.getElementById("vd").style.backgroundColor = cor_normal;
   document.getElementById("vc").style.backgroundColor = cor_normal;
   document.getElementById("vm").style.backgroundColor = cor_normal;
}

/*
function limpa_cor_vai_res() {
   
   document.getElementById("vd").style.backgroundColor = cor_normal;
   document.getElementById("vc").style.backgroundColor = cor_normal;
   document.getElementById("vm").style.backgroundColor = cor_normal;

   document.getElementById("ru").style.backgroundColor = cor_normal;
   document.getElementById("rd").style.backgroundColor = cor_normal;
   document.getElementById("rc").style.backgroundColor = cor_normal;
   document.getElementById("rm").style.backgroundColor = cor_normal;

}*/

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

   const ru = document.getElementById("ru");
   const rd = document.getElementById("rd");
   const rc = document.getElementById("rc");
   const rm = document.getElementById("rm");

   const vd = document.getElementById("vd");
   const vc = document.getElementById("vc");
   const vm = document.getElementById("vm");

   //console.log(exibe.innerText);

   exibe.innerText = 
      m1.innerText+c1.innerText+d1.innerText+u1.innerText + " - " + 
      m2.innerText+c2.innerText+d2.innerText+u2.innerText + " = " + 
      rm.innerText+rc.innerText+rd.innerText+ru.innerText;

   if(vd.innerText != ''){
      vd.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vd.style.backgroundColor = cor_normal;     
   }

   if(vc.innerText != ''){
      vc.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vc.style.backgroundColor = cor_normal;  
   }

   if(vm.innerText != ''){
      vm.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vm.style.backgroundColor = cor_normal;
   }

}

/*completa numeros com zeros a esquerda até completar o tatal de 4 digitos*/
function completa(num){
   
   var nums = num+"";

   var numarr = nums.split('');

   var novonum = '';

   if(numarr.length == 1){

      novonum = '000'+numarr[0];

   }else
   if(numarr.length == 2){

      novonum = '00'+numarr[0]+numarr[1];

   }else
   if(numarr.length == 3){

      novonum = '0'+numarr[0]+numarr[1]+numarr[2];

   }else
   if(numarr.length == 4){
      
      novonum = numarr[0]+numarr[1]+numarr[2]+numarr[3];

   }
   
   return novonum;

}

function novo(){
   
   var str_pulos = document.getElementById('pulos').innerText;
   var int_pulos = parseInt(str_pulos, 10);

   /*
   apos carregamento da página: puloss = true;
   novo() é chamada, não aumenta pulo: puloss = false
   após verificar resultado: puloss = true, não deixa aumentar pulos
   após clicar em novo: puloss = false;
   registrando o número de pulos(operação não realizada)*/
   if(!puloss){

      pontuacao('menos_pulo');

      int_pulos = int_pulos + 1;

      document.getElementById('pulos').innerText = int_pulos;

   }else{
      puloss = false;
   }

   /*controlando a exibição de números que precisam de reagrupamento*/
   if(reagru){
      document.getElementById('reagr').checked = true;
   }else{
      document.getElementById('reagr').checked = false;
   }

   /*controlando o número de digitos que os números devem ter*/
   var de = document.getElementById('de');
   var dei = parseInt(de.value, 10);

   console.log('de:'+de.value);

   var ate = document.getElementById('ate');
   var atei = parseInt(ate.value, 10);

   console.log('ate:'+ate.value);

   //ordenando os numeros corretamente
   if(dei > atei){
      var temp = dei;
      dei = atei;
      atei = temp;
   }

   if(dei>0 && dei<=9999){
      var des = dei;
   }else{
      var des = 9999;
   }

   if(atei>0 && atei<=9999){
      var ates = atei;
   }else{
      var ates = 9999;
   }

   console.log('des:'+des);
   console.log('ates:'+ates);

   verifica = true;

   verifica_err = true;

   var reagrupavel = true;
   var num1 = 0;
   var num2 = 0;
   var num1s = '';
   var num1arr = '';
   var num2s = '';
   var num2arr = '';

   if(reagru){

      while(reagrupavel){
         
         console.log("procurando numeros que permitam reagrupamentos");

         num1 = getRandomInt(des, ates);

         num1s = completa(num1);

         num1arr = num1s.split('');
         
         num2 = getRandomInt(des, num1);

         num2s = completa(num2);

         num2arr = num2s.split('');

         if(num1arr[1] < num2arr[1] || num1arr[2] < num2arr[2] || num1arr[3] < num2arr[3]){
            
            console.log(num1arr[1] +"<"+ num2arr[1] +" || "+ num1arr[2] +"<"+ num2arr[2] +" || "+ num1arr[3] +"<"+ num2arr[3]);

            reagrupavel = false;

         }else{
            console.log(num1s + " e " + num2s + " não obedeceu o pardrao para reagrupar");
         }
         

      }

   }else{

      console.log("sem forçar reagrupamento");

      num1 = getRandomInt(des, ates);

      num1s = completa(num1);

      num1arr = num1s.split('');
      
      num2 = getRandomInt(des, num1);

      num2s = completa(num2);

      num2arr = num2s.split('');

   }

   //var num1 = getRandomInt(1, 9999);
   // var num1 = getRandomInt(des, ates);

   // var num1s = num1+"";

   // var num1arr = num1s.split('');
   
   // var num2 = getRandomInt(des, num1);

   // var num2s = num2+"";

   // var num2arr = num2s.split('');

   console.log('numero 1 gerado: '+num1s);

   console.log('numero 2 gerado: '+num2s);

   /*milhar para ser concatenado*/
   //var num_m1 = getRandomInt(0, 8);

   //console.log('num_m1:'+num_m1);

   //var num1s = num1+""+num_m1;

   

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

      u1.innerText = num1arr[1];
      d1.innerText = num1arr[0];
      c1.innerText = 0;
      m1.innerText = 0;

   }else
   if(num1arr.length == 3){

      u1.innerText = num1arr[2];
      d1.innerText = num1arr[1];
      c1.innerText = num1arr[0];
      m1.innerText = 0;

   }else
   if(num1arr.length == 4){

      u1.innerText = num1arr[3];
      d1.innerText = num1arr[2];
      c1.innerText = num1arr[1];
      m1.innerText = num1arr[0];

   }  

   //var num2 = getRandomInt(1, 999);
   
   /*/número a ser contatenado, de modo que a soma sempre sera menor ou igual a 8, pois caso a reserva seja 1 centena, o resultado sera no maximo 9 milhar/
   //var num_m2 = 8-num_m1;*/

   //var num_m2 = getRandomInt(0, num_m1);

   /*na subtração o número dois sempre vai ser menor que numero um*/
   /*while(num_m2 <= num_m1 && num2 > num1){
      console.log('-----num1:'+num1 + ' >> num2:'+num2);
      num2 = getRandomInt(1, 999);
      num_m2 = getRandomInt(0, num_m1);
   }*/

   //console.log('num_m2:'+num_m2);

   //var num2s = num2+""+num_m2;

   

   if(num2arr.length == 1){

      u2.innerText = num2arr[0];
      d2.innerText = 0;
      c2.innerText = 0;
      m2.innerText = 0;

   }else
   if(num2arr.length == 2){

      u2.innerText = num2arr[1];
      d2.innerText = num2arr[0];
      c2.innerText = 0;
      m2.innerText = 0;

   }else
   if(num2arr.length == 3){

      u2.innerText = num2arr[2];
      d2.innerText = num2arr[1];
      c2.innerText = num2arr[0];
      m2.innerText = 0;

   }else
   if(num2arr.length == 4){

      u2.innerText = num2arr[3];
      d2.innerText = num2arr[2];
      c2.innerText = num2arr[1];
      m2.innerText = num2arr[0];

   }

   //limpar();

   //memoriza_sub();

   //remove o traço de bloqueios
   remove_block();

   //limpa reagrupamentos
   limpa_regrup();

   //repete maior numero no resultado
   if(ajuda){
      repetirn1();
   }else{
      zera_result();
   }

   //limpa as cores do reagrupamento
   limpa_cores();

   //exibe a operação e sua resposta dentro do retangulo
   exibir();

   //limpa_result();


}

function remove_block(){
   const imgu = document.getElementById("imgu");
   const imgd = document.getElementById("imgd");
   const imgc = document.getElementById("imgc");
   const imgm = document.getElementById("imgm");

   imgu.style.display = 'none';
   imgd.style.display = 'none'; 
   imgc.style.display = 'none'; 
   imgm.style.display = 'none';    

}

function limpa_regrup(){
   
   document.getElementById("vu").innerText = '';
   document.getElementById("vd").innerText = '';
   document.getElementById("vc").innerText = '';
   document.getElementById("vm").innerText = '';

   if(ajuda){
      document.getElementById("ru").innerText = document.getElementById("u1").innerText;
      document.getElementById("rd").innerText = document.getElementById("d1").innerText;
      document.getElementById("rc").innerText = document.getElementById("c1").innerText;
      document.getElementById("rm").innerText = document.getElementById("m1").innerText;
   }
}

function limpa_result(){

   document.getElementById("ru").innerText = 0;
   document.getElementById("rd").innerText = 0;
   document.getElementById("rc").innerText = 0;
   document.getElementById("rm").innerText = 0;

}

function limpar(){
   
   /*
   var num1 = localStorage.getItem("mem_1");

   var num1arr = num1.split('');
   var u1 = num1arr[3];
   var d1 = num1arr[2];
   var c1 = num1arr[1];
   var m1 = num1arr[0];*/

   //se ainda não acertou então deixa limpar
   if(verifica){
      
      //zera o resultado da subtração
      limpa_result();

      //zera o reagrupamento
      limpa_regrup();

      //remove os bloqueior (traço inclinado que corta os números reagrupados)
      remove_block();

      //limpa as cores do reagrupamento
      limpa_cores();

      /*document.getElementById("u1").innerText = u1+"";
      document.getElementById("d1").innerText = d1+"";
      document.getElementById("c1").innerText = c1+"";
      document.getElementById("m1").innerText = m1+"";*/

      /*const u1 = document.getElementById("u1");
      const d1 = document.getElementById("d1");
      const c1 = document.getElementById("c1");
      const m1 = document.getElementById("m1");

      document.getElementById("ru").innerText = u1.innerText;
      document.getElementById("rd").innerText = d1.innerText;
      document.getElementById("rc").innerText = c1.innerText;
      document.getElementById("rm").innerText = m1.innerText;

      document.getElementById("vd").innerText = 0;
      document.getElementById("vc").innerText = 0;
      document.getElementById("vm").innerText = 0;*/

      //limpa_cor_vai_res();

   }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function rumais() {

   const ru = document.getElementById("ru");
   
   var rui = parseInt(ru.innerText, 10);

   ru.innerText = (rui+1)+"";

   exibir();
   
}


function rumenos() {

   const ru = document.getElementById("ru");
   
   var rui = parseInt(ru.innerText, 10);

   ru.innerText = (rui-1)+"";
   
   exibir();

}

function rdmais() {

   const rd = document.getElementById("rd");
   
   var rdi = parseInt(rd.innerText, 10);

   rd.innerText = (rdi+1)+"";
   
   exibir();

}


function rdmenos() {

   const rd = document.getElementById("rd");
   
   var rdi = parseInt(rd.innerText, 10);

   rd.innerText = (rdi-1)+"";
   
   exibir();

}

function rcmais() {

   const rc = document.getElementById("rc");
   
   var rci = parseInt(rc.innerText, 10);

   rc.innerText = (rci+1)+"";
   
   exibir();

}

function rcmenos() {

   const rc = document.getElementById("rc");
   
   var rci = parseInt(rc.innerText, 10);

   rc.innerText = (rci-1)+"";
   
   exibir();

}

function rmmais() {

   const rm = document.getElementById("rm");
   
   var rmi = parseInt(rm.innerText, 10);

   rm.innerText = (rmi+1)+"";
   
   exibir();

}

function rmmenos() {

   const rm = document.getElementById("rm");
   
   var rmi = parseInt(rm.innerText, 10);

   rm.innerText = (rmi-1)+"";
   
   exibir();

}
