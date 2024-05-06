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

   const ru = document.getElementById("ru");
   const rd = document.getElementById("rd");
   const rc = document.getElementById("rc");
   const rm = document.getElementById("rm");

   return rm.innerText+rc.innerText+rd.innerText+ru.innerText+"";

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

   novo();

   verificaStorage();

   exibir();

   repetirn1();

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

function rgrp_d(){
   
   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");

   const imgu = document.getElementById("imgu");
   const imgd = document.getElementById("imgd");

   const vu = document.getElementById("vu");
   const vd = document.getElementById("vd");
   
   const ru = document.getElementById("ru");
   const rd = document.getElementById("rd");

   var u1i = parseInt(u1.innerText, 10);
   var d1i = parseInt(d1.innerText, 10);

   var vu1i = parseInt(vu.innerText, 10);
   var vd1i = parseInt(vd.innerText, 10);

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

      ru.innerText = u1m+"";
      rd.innerText = d1m+"";

      imgu.style.display = 'flex';
      imgd.style.display = 'flex';

   }else{

      //a dezena é maior que zero e não está bloqueada
      if(d1i > 0 && prop_id != 'flex'){

         var u1m = u1i + 10;
         var d1m = d1i - 1;
         
         vu.innerText = u1m+"";
         vd.innerText = d1m+"";

         ru.innerText = u1m+"";
         rd.innerText = d1m+"";

         imgu.style.display = 'flex';
         imgd.style.display = 'flex';

      }else{

         alert('A Dezena deve não ser bloqueada e maior que 0 OU o reagrupamento maior que 0.');
      
      }
   
   }

}

function rgrp_c(){
   
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");

   const imgd = document.getElementById("imgd");
   const imgc = document.getElementById("imgc");

   const vd = document.getElementById("vd");
   const vc = document.getElementById("vc");

   const rd = document.getElementById("rd");
   const rc = document.getElementById("rc");
   
   var d1i = parseInt(d1.innerText, 10);
   var c1i = parseInt(c1.innerText, 10);
   
   var vd1i = parseInt(vd.innerText, 10);
   var vc1i = parseInt(vc.innerText, 10);

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

      rd.innerText = d1m+"";
      rc.innerText = c1m+"";

      imgd.style.display = 'flex';
      imgc.style.display = 'flex';

   }else{

      //a centena é maior que zero e não está bloqueada
      if(c1i > 0 && prop_ic != 'flex'){

         var d1m = d1i + 10;
         var c1m = c1i - 1;

         vd.innerText = d1m+"";
         vc.innerText = c1m+"";

         rd.innerText = d1m+"";
         rc.innerText = c1m+"";

         imgd.style.display = 'flex';
         imgc.style.display = 'flex';

      }else{
         
         alert('A Centena deve não ser bloqueada e maior que 0 OU o reagrupamento maior que 0.');

      }

   }

}

function rgrp_um(){
   
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");

   const imgc = document.getElementById("imgc");
   const imgm = document.getElementById("imgm");

   const vc = document.getElementById("vc");
   const vm = document.getElementById("vm");

   const rc = document.getElementById("rc");
   const rm = document.getElementById("rm");
   
   var c1i = parseInt(c1.innerText, 10);
   var m1i = parseInt(m1.innerText, 10);

   var vc1i = parseInt(vc.innerText, 10);
   var vm1i = parseInt(vm.innerText, 10);

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

      rc.innerText = c1m+"";
      rm.innerText = m1m+"";

      imgc.style.display = 'flex';
      imgm.style.display = 'flex';

   }else{
      
      //a milhar é maior que zero e não está bloqueada
      if(m1i > 0 && prop_im != 'flex'){
      
         var c1m = c1i + 10;
         var m1m = m1i - 1;

         vc.innerText = c1m+"";
         vm.innerText = m1m+"";

         rc.innerText = c1m+"";
         rm.innerText = m1m+"";

         imgc.style.display = 'flex';
         imgm.style.display = 'flex';
         
      }else{
          
         alert('A Milhar deve não ser bloqueada e maior que 0 OU o reagrupamento maior que 0.');

      }

   }

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

   if(vd.innerText != '0'){
      vd.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      if(ru.innerText == '9'){
         vd.style.backgroundColor = cor_normal;
      }     
   }
   if(vc.innerText != '0'){
      vc.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      if(rd.innerText == '9'){
         vc.style.backgroundColor = cor_normal;
      }     
   }
   if(vm.innerText != '0'){
      vm.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      if(rc.innerText == '9'){
         vm.style.backgroundColor = cor_normal;
      }     
   }

}

function exibir_menos(){

   info();
   
   var exibe = document.getElementById("exibe");

   var num1 = localStorage.getItem("mem_1");

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
      num1 + " - " + 
      m2.innerText+c2.innerText+d2.innerText+u2.innerText + " = " + 
      rm.innerText+rc.innerText+rd.innerText+ru.innerText;

}

function novo(){

   verifica = true;

   var num1 = getRandomInt(1, 999);

   /*milhar para ser concatenado*/
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
   
   /número a ser contatenado, de modo que a soma sempre sera menor ou igual a 8, pois caso a reserva seja 1 centena, o resultado sera no maximo 9 milhar/
   //var num_m2 = 8-num_m1;

   var num_m2 = getRandomInt(0, num_m1);

   /*na subtração o número dois sempre vai ser menor que numero um*/
   while(num_m2 <= num_m1 && num2 > num1){
      console.log('-----num1:'+num1 + ' >> num2:'+num2);
      num2 = getRandomInt(1, 999);
      num_m2 = getRandomInt(0, num_m1);
   }

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

   memoriza_sub();

}

function limpar(){

   var num1 = localStorage.getItem("mem_1");

   var num1arr = num1.split('');
   var u1 = num1arr[3];
   var d1 = num1arr[2];
   var c1 = num1arr[1];
   var m1 = num1arr[0];

   //se ainda não acertou então deixa limpar
   if(verifica){
      
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

      limpa_cor_vai_res();

      exibir_menos();
      
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

   exibir_menos();
   
}


function rumenos() {

   const ru = document.getElementById("ru");
   
   var rui = parseInt(ru.innerText, 10);

   ru.innerText = (rui-1)+"";
   
   exibir_menos();

}

function rdmais() {

   const rd = document.getElementById("rd");
   
   var rdi = parseInt(rd.innerText, 10);

   rd.innerText = (rdi+1)+"";
   
   exibir_menos();

}


function rdmenos() {

   const rd = document.getElementById("rd");
   
   var rdi = parseInt(rd.innerText, 10);

   rd.innerText = (rdi-1)+"";
   
   exibir_menos();

}

function rcmais() {

   const rc = document.getElementById("rc");
   
   var rci = parseInt(rc.innerText, 10);

   rc.innerText = (rci+1)+"";
   
   exibir_menos();

}

function rcmenos() {

   const rc = document.getElementById("rc");
   
   var rci = parseInt(rc.innerText, 10);

   rc.innerText = (rci-1)+"";
   
   exibir_menos();

}

function rmmais() {

   const rm = document.getElementById("rm");
   
   var rmi = parseInt(rm.innerText, 10);

   rm.innerText = (rmi+1)+"";
   
   exibir_menos();

}

function rmmenos() {

   const rm = document.getElementById("rm");
   
   var rmi = parseInt(rm.innerText, 10);

   rm.innerText = (rmi-1)+"";
   
   exibir_menos();

}