var cor_normal = "rgba(0, 0, 0, 0)";
var verifica = true;
var verifica_err = true;
var verifica_pul = true;

var ajuda = false;
var reagru = false;

var puloss = true;
var acertou = false;

var animar = false; /*desativando animação*/

function openNav(){

   const flutua = document.getElementById("flutua");
   
   console.log('flt:'+flutua.style.display);

   if(flutua.style.display == 'none'){
      flutua.style.display = 'block';
   }else{
      flutua.style.display = 'none';
   }
    
}

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

/*desativando a animação*/
function animm(){

   var marcado = document.getElementById('anim').checked;

   if(marcado){
      animar = true;
   }else{
      animar = false;
   }
   console.log('animar:'+animar);

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

function get_num1_int(){

   var num1i = 0;

   var num1 = getn1();
   
   if(num1 != ''){
      num1i = parseInt(num1, 10);
   }

   return num1i;
 
}

function get_num2_int(){

   var num2i = 0;

   var num2 = getn2();

   if(num2 != ''){
      num2i = parseInt(num2, 10);
   }

   return num2i;
 
}

function get_numr_int(){

   var numri = 0;

   var numr = getresult();
   
   if(numr != ''){
      numri = parseInt(numr, 10);
   }

   return numri;
 
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
      acertou = true;
   }else{
      triste();
      verifica_err = false;
      acertou = false;
   }

   /*
   Apos uma verificação false, não contabiliza 'novo' como pulo.
   Será falso apenas ao clicar no botao 'verificar' o que impede o aumento dos pulos
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

function get_obj_conta_sub(){

   var num1 = get_num1_int();
   var num2 = get_num2_int();
   var numr = get_numr_int();

   var obj_conta = { num1: num1, num2: num2, numr: numr };

   return obj_conta;

}

var arr_obj_err = [];
var arr_obj_acer = [];
var arr_obj_pul = [];

function pontuacao(tipo){
   
   /*resgatando os dados da sessão*/

   //tipo:mais, menos, zera, null;

   var pon = 0;
   var num_err = 0;
   var num_pul = 0;
   var txt_acertos = '';
   var txt_erros = '';
   var txt_pulos = '';

   var pont = localStorage.getItem("pontos_sub");
   var loc_err = localStorage.getItem("erros_sub");
   var loc_pul = localStorage.getItem("pulos_sub");

   var ponti = parseInt(pont, 10);
   var loc_erri = parseInt(loc_err, 10);
   var loc_puli = parseInt(loc_pul, 10);

   var pontt = document.getElementById("pontu");
   var input_err = document.getElementById("erros");
   var input_pul = document.getElementById("pulos");
   
   console.log('ponti1:' + ponti);


   if(JSON.parse(localStorage.getItem("arr_obj_err_sub")) != null){
       arr_obj_err = JSON.parse(localStorage.getItem("arr_obj_err_sub"));
   }
   if(JSON.parse(localStorage.getItem("arr_obj_acer_sub")) != null){
       arr_obj_acer = JSON.parse(localStorage.getItem("arr_obj_acer_sub"));
   }
   if(JSON.parse(localStorage.getItem("arr_obj_pul_sub")) != null){
       arr_obj_pul = JSON.parse(localStorage.getItem("arr_obj_pul_sub"));
   }

   // console.log('arr_txt_err secao: ' + arr_obj_err);
   // console.log('arr_txt_acer secao: ' + arr_obj_acer);
   // console.log('arr_txt_pul secao: ' + arr_obj_pul);

   var obj_conta = get_obj_conta_sub();

   console.log('obj_conta: ' + obj_conta);

   /*TIPO QUE GANHA PONTOS*/
   if(tipo == 'mais'){
      
      arr_obj_acer.push(obj_conta);
      //arr_txt_acer.push(txt_exibe+'');

      if(Number.isNaN(ponti)){
         ponti = 1;
      }else{
         ponti = ponti + 1;

      }

   }

   /*TIPO QUE PERDE PONTOS*/
   if(tipo == 'menos'){
      
      arr_obj_err.push(obj_conta);
      //arr_txt_err.push(txt_exibe+'');

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

   }

   /*registra os pulos*/
   if(tipo == 'menos_pulo'){
      
      arr_obj_pul.push(obj_conta);
      //arr_txt_pul.push(txt_exibe+'');

      if(Number.isNaN(loc_puli)){
         loc_puli = 1;
      }else{
         loc_puli = loc_puli + 1;
      }

   }

   if(tipo == 'zera'){

      ponti = 0;

   }

   if(Number.isNaN(ponti) ){
      ponti = 0;
   }
   
   pontt.innerText = "Pontos: "+ponti;

   if(Number.isNaN(loc_erri) ){
      loc_erri = 0;
   }

   input_err.innerText = loc_erri;

   if(Number.isNaN(loc_puli) ){
      loc_puli = 0;
   }

   input_pul.innerText = loc_puli;

   console.log('ponti2:' + ponti);
   console.log('loc_erri:' + loc_erri);
   console.log('loc_puli:' + loc_puli);

   localStorage.setItem("pontos_sub", ponti);
   localStorage.setItem("erros_sub", loc_erri);
   localStorage.setItem("pulos_sub", loc_puli);

   localStorage.setItem("arr_obj_err_sub", JSON.stringify(arr_obj_err));
   localStorage.setItem("arr_obj_acer_sub", JSON.stringify(arr_obj_acer));
   localStorage.setItem("arr_obj_pul_sub", JSON.stringify(arr_obj_pul));

   imprimir_hist();

   // console.log('arr_txt_err salvo: ' + arr_obj_err);
   // console.log('arr_txt_acer salvo: ' + arr_obj_acer);
   // console.log('arr_txt_pul salvo: ' + arr_obj_pul);

   // if (localStorage.hasOwnProperty("arr_obj_err_sub")) {
      
   //    JSON.parse( localStorage.getItem("arr_obj_err_sub") ).forEach(objconta => {
      
   //       console.log('conta: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

   //    }); 

   // }

   //console.log(arr_txt_acer);
   //console.log(arr_txt_pul);

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

   if(Number.isNaN(ponti) || ponti_pul == "NaN"){
      ponti = 0;
   }

   if(Number.isNaN(ponti_err) ){
      ponti_err = 0;
   }

   if(Number.isNaN(ponti_pul) ){
      ponti_pul = 0;
   }
   
   console.log(ponti_pul + " >>>>>>> "+ Number.isNaN(ponti_pul) );

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

   const flutua = document.getElementById("flutua");
   flutua.style.display = 'none';

   limpa_anime();

   puloss = true;

   document.getElementById('ajuda').checked = false;

   //novo(); 
  
   verificaStorage();

   exibir();

   if(ajuda){
      repetirn1();
   }else{
      zera_result();
   }
  
}

function limpa_anime(){

   const u1a = document.getElementById("u1a");
   const d1a = document.getElementById("d1a");
   const c1a = document.getElementById("c1a");
   const m1a = document.getElementById("m1a");

   const vda = document.getElementById("vda");
   const vca = document.getElementById("vca");
   const vma = document.getElementById("vma");

   u1a.style.animation = "none";
   d1a.style.animation = "none";
   c1a.style.animation = "none";
   m1a.style.animation = "none";

   if(vda != null && vca != null && vma != null){
      vda.style.animation = "none";
      vca.style.animation = "none";
      vma.style.animation = "none";
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

/*provocou erro null do ParseInt
// setTimeout(rgrp_d(), 5000);
// setTimeout(rgrp_c(), 5000);
// setTimeout(rgrp_um(), 5000);*/

function rgrp_d(){

   /*https://pt.stackoverflow.com/questions/286001/repetir-uma-anima%C3%A7%C3%A3o-css-toda-vez-que-clico-no-bot%C3%A3o-com-javascript*/
   
   //algarismo da dezena e unidade
   const d1a = document.getElementById("d1a");
   const u1a = document.getElementById("u1a");
   const vda = document.getElementById("vda");
   const vd = document.getElementById("vd");
   const _vd = document.getElementById("_vd");
   const _vu = document.getElementById("_vu");
   const _vd_ant = document.getElementById("_vd_ant");

   const d1 = document.getElementById("d1");
   var d1i = parseInt(d1.innerText, 10);
   const imgu = document.getElementById("imgu");
   const imgd = document.getElementById("imgd");
   var prop_iu = imgu.style.display;
   var prop_id = imgd.style.display;

   if( animar && uni_precisa()  && (d1i > 0 && prop_id != 'flex') && (prop_iu != 'flex') ){

     /*NÃO ALTERAR*/
     d1a.style.animation = "none";
     u1a.style.animation = "none";
     vda.style.animation = "none";
     vd.style.animation = "none";
     _vd.style.animation = "none";
     _vu.style.animation = "none";
     setTimeout(() => d1a.style.animation = 
      "sobe_d 5s linear, pisca_d 4s linear"
      , 5);
     setTimeout(() => u1a.style.animation = 
      "sobe_u 3s linear, pisca_u 2s linear"
      , 5);
     setTimeout(() => vda.style.animation = 
      "direita_d 1s ease-in-out 6"
      , 5);
     setTimeout(() => _vd.style.animation = 
      "ultimo_desl_d 1s ease-in-out forwards, ultimo_d 5s linear"
      , 5);
     setTimeout(() => _vu.style.animation = 
      "ultimo_u 3s linear"
      , 5);
     setTimeout(() => vd.style.animation = 
      "pisca_d 5s linear"
      , 5);

   }else{
      
      //unidade precisa e dezena reagrupou e unidade não
      if(animar && uni_precisa() && prop_id == 'flex' & prop_iu != 'flex'){
         
         /*dezena reag pisca, unidade sobe, 1 dezena vai pra direita*/
           d1a.style.animation = "none";
           u1a.style.animation = "none";
           vda.style.animation = "none";
           vd.style.animation = "none";
           _vd.style.animation = "none";
           _vd_ant.style.animation = "none";
           _vu.style.animation = "none";
           setTimeout(() => u1a.style.animation = 
            "sobe_u 3s linear, pisca_u 2s linear"
            , 5);
           setTimeout(() => vda.style.animation = 
            "direita_d 1s ease-in-out 3"
            , 5);
           setTimeout(() => _vd.style.animation = 
            "ultimo_d 3s linear"
            , 5);
           setTimeout(() => _vd_ant.style.animation = 
            "ultimo_desl_d1 1s ease-in-out forwards, ultimo_rev_d 3s linear forwards"
            , 5);
           setTimeout(() => _vu.style.animation = 
            "ultimo_u 3s linear"
            , 5);
           setTimeout(() => vd.style.animation = 
            "pisca_d 3s linear"
            , 5);

      }

   }
     
   const u1 = document.getElementById("u1");
   var u1i = parseInt(u1.innerText, 10);
   //const d1 = document.getElementById("d1");

   //const imgu = document.getElementById("imgu");
   //const imgd = document.getElementById("imgd");

   const vu = document.getElementById("vu");
   var vui = parseInt(_vu.innerText, 10);
   
   
   /*só faz sentido reagrupar milhar se a centena estiver precisando*/
   const u2 = document.getElementById("u2");
   var u2i = parseInt(u2.innerText, 10);

   if( u1i >= u2i ){
     
      console.log('Unidade Não precisa reagrupar');
      // alert("AQUI NÃO!!");
      alert("UNIDADE NÃO PRECISA!!");
      return false;

   }else{

      if( vui >= u2i ){
         console.log('reagrupar unidade só uma vez basta!');
         alert("UNIDADE NÃO PRECISA!!");
         return false;
      }

   }

   if(_vu.innerText == ''){
      var vuu = 0;   
   }else{
      var vuu = _vu.innerText;   
   }

   if(_vd.innerText == ''){
      var vdd = 0;   
   }else{
      var vdd = _vd.innerText;   
   }
   
   const ru = document.getElementById("ru");
   const rd = document.getElementById("rd");

   var u1i = parseInt(u1.innerText, 10);
   //var d1i = parseInt(d1.innerText, 10);

   var vu1i = parseInt(vuu, 10);
   var vd1i = parseInt(vdd, 10);

   var prop_iu = imgu.style.display;
   console.log('prop_iu: '+prop_iu);

   //var prop_id = imgd.style.display;
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

      if(animar){
         _vd_ant.innerText = _vd.innerText;/*salva uma copia para a animação*/
      }
      _vu.innerText = u1m+"";
      _vd.innerText = d1m+"";
      
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
         
         if(animar){
            _vd_ant.innerText = _vd.innerText;/*salva uma copia para a animação*/
         }
         _vu.innerText = u1m+"";
         _vd.innerText = d1m+"";
         
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

   //algarismo da centena e dezena
   const c1a = document.getElementById("c1a");
   const d1a = document.getElementById("d1a");
   const vca = document.getElementById("vca");
   const vc = document.getElementById("vc");
   const vd = document.getElementById("vd");
   const _vc = document.getElementById("_vc");
   const _vd = document.getElementById("_vd");
   const _vc_ant = document.getElementById("_vc_ant");
   
   const c1 = document.getElementById("c1");
   var c1i = parseInt(c1.innerText, 10);
   const imgd = document.getElementById("imgd");
   const imgc = document.getElementById("imgc");
   var prop_id = imgd.style.display;
   var prop_ic = imgc.style.display;

   if(animar && dez_precisa() && (c1i > 0 && prop_ic != 'flex') && (prop_id != 'flex') ){

     /*NÃO ALTERAR*/
     c1a.style.animation = "none";
     d1a.style.animation = "none";
     vca.style.animation = "none";
     vc.style.animation = "none";
     _vc.style.animation = "none";
     _vd.style.animation = "none";
     setTimeout(() => c1a.style.animation = 
      "sobe_c 5s linear, pisca_c 4s linear"
      , 5);
     setTimeout(() => d1a.style.animation = 
      "sobe_d 3s linear, pisca_c 2s linear"
      , 5);
     setTimeout(() => vca.style.animation = 
      "direita_c 1s ease-in-out 6"
      , 5);
     setTimeout(() => _vc.style.animation = 
      "ultimo_desl_c 1s ease-in-out forwards, ultimo_c 5s linear forwards"
         , 5);
     setTimeout(() => _vd.style.animation = 
      "ultimo_d 3s linear"
      , 5);
     setTimeout(() => vc.style.animation = 
      "pisca_c 5s linear"
      , 5);

   }else{
      
      //dezena precisa e centena reagrupou e dezena não
      if(animar && dez_precisa() && prop_ic == 'flex' & prop_id != 'flex'){
         
         /*centena(vc) reag pisca, dezena(d1a) sobe, 
         1 centena(vca) vai pra direita, 
         a dezena que vai(_vc) aparece por ultimo, 
         a centena que vai anterior(_vc_ant) aparece primeiro e some por ultimo*/
           /*NÃO ALTERAR*/
           d1a.style.animation = "none";
           vca.style.animation = "none";
           vc.style.animation = "none";
           _vc.style.animation = "none";
           _vc_ant.style.animation = "none";
           _vd.style.animation = "none";
           setTimeout(() => d1a.style.animation = 
            "sobe_d 3s linear, pisca_d 2s linear"
            , 5);
           setTimeout(() => vca.style.animation = 
            "direita_c 1s ease-in-out 3"
            , 5);
           setTimeout(() => _vc.style.animation = 
            "ultimo_c 3s linear"
            , 5);
           setTimeout(() => _vc_ant.style.animation = 
            "ultimo_rev_c 3s linear forwards"
            , 5);
           setTimeout(() => _vd.style.animation = 
            "ultimo_d 3s linear"
            , 5);
           setTimeout(() => vc.style.animation = 
            "pisca_c 3s linear"
            , 5);

      }else{ 

         //dezena precisa: dezena reagrupou(cortado) p/ unidade e centena não
         if(animar && dez_precisa() && prop_ic != 'flex' & prop_id == 'flex'){
         
            /*
            fundo da dezena(vd) já reagrupada(cortada) pisca, 
            a centena(c1a) sobe e pisca 
            a centena que vai(_vc) aparece por ultimo,
            1 centena(vca) vai pra direita, 
            a dezena que vai anterior(_vd_ant) aparece primeiro e some por ultimo
            a dezena que vai(_vd) aparece por ultimo
            */
           /*NÃO ALTERAR*/
           vc.style.animation = "none";
           vd.style.animation = "none";
           c1a.style.animation = "none";
           _vc.style.animation = "none";
           vca.style.animation = "none";
           _vd_ant.style.animation = "none";
           _vd.style.animation = "none";
           setTimeout(() => c1a.style.animation = 
            "sobe_c 3s linear, pisca_c 2s linear"
            , 5);
           setTimeout(() => vc.style.animation = 
            "pisca_c 3s linear"
            , 5);
           setTimeout(() => _vc.style.animation = 
            "ultimo_desl_c2 1s ease-in-out forwards, ultimo_c 3s linear"
            , 5);
           setTimeout(() => vca.style.animation = 
            "direita_c2 1s ease-in-out 3"
            , 5);
           setTimeout(() => _vd_ant.style.animation = 
            "ultimo_desl_d 1s ease-in-out forwards, ultimo_rev_d 3s linear forwards"
            , 5);
           setTimeout(() => _vd.style.animation = 
            "ultimo_d 3s linear"
            , 5);
         }

      }

   }


   const d1 = document.getElementById("d1");
   var d1i = parseInt(d1.innerText, 10);
   //const c1 = document.getElementById("c1");

   //const imgd = document.getElementById("imgd");
   //const imgc = document.getElementById("imgc");

   //const vd = document.getElementById("vd");
   const vda = document.getElementById("vda");

   /*só faz sentido reagrupar milhar se a centena estiver precisando*/
   const d2 = document.getElementById("d2");
   var d2i = parseInt(d2.innerText, 10);

   if(d1i >= d2i){
      
      /*exceção: as dezenas são iguais e nulas e a unidade precisa reagrupar: parmite reagrupamento da dezena nula*/
      if( d1i == 0 && d2i == 0 && uni_precisa() ){
         console.log('Exceção: Dezena Não precisa reagrupar mas é nula e a unidade precisa reagrupar');
      }else if(dez_precisa()){
         console.log('Exceção: Dezena Não precisava reagrupar mas depois de ceder 1 precisa reagrupar');
      }else{
         console.log('Dezena Não precisa reagrupar');
         // alert("AQUI NÃO!!");
         alert("DEZENA NÃO PRECISA!!");
         return false;
      }

   }else{
      if(parseInt(_vd.innerText, 10) >= parseInt(d2.innerText, 10)){
         console.log('reagrupar dezena só uma vez basta!');
         alert("DEZENA NÃO PRECISA!!");
         return false;
      }
   }

   if(_vd.innerText == ''){
      var vdd = 0;   
   }else{
      var vdd = _vd.innerText;   
   }

   if(_vc.innerText == ''){
      var vcc = 0;   
   }else{
      var vcc = _vc.innerText;   
   }

   const rd = document.getElementById("rd");
   const rc = document.getElementById("rc");
   
   var d1i = parseInt(d1.innerText, 10);
   //var c1i = parseInt(c1.innerText, 10);
   
   var vd1i = parseInt(vdd, 10);
   var vc1i = parseInt(vcc, 10);

   //var prop_ic = imgc.style.display;
   console.log('prop_ic: '+prop_ic);

   //var prop_id = imgd.style.display;
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

      if(animar){
         _vd_ant.innerText = _vd.innerText;/*salva uma copia para a animação*/
         _vc_ant.innerText = _vc.innerText;/*salva uma copia para a animação*/
      }
      _vd.innerText = d1m+"";
      _vc.innerText = c1m+"";
      
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
         if(animar){
            _vd_ant.innerText = _vd.innerText;/*salva uma copia para a animação*/
            _vc_ant.innerText = _vc.innerText;/*salva uma copia para a animação*/
         }
         _vd.innerText = d1m+"";
         _vc.innerText = c1m+"";
         
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
   
   //algarismo da milhar e centena
   const m1a = document.getElementById("m1a");
   const c1a = document.getElementById("c1a");
   const vm = document.getElementById("vm");
   const _vm = document.getElementById("_vm");
   const vma = document.getElementById("vma");
   const vc = document.getElementById("vc");
   const _vc = document.getElementById("_vc");
   
   const m1 = document.getElementById("m1");
   var m1i = parseInt(m1.innerText, 10);
   const imgc = document.getElementById("imgc");
   const imgm = document.getElementById("imgm");
   var prop_ic = imgc.style.display;
   var prop_im = imgm.style.display;

   if(animar && animar && cen_precisa() && (m1i > 0 && prop_im != 'flex') && (prop_ic != 'flex')){

     /*NÃO ALTERAR*/
     m1a.style.animation = "none";
     c1a.style.animation = "none";
     vm.style.animation = "none";
     _vm.style.animation = "none";
     vma.style.animation = "none";
     _vc.style.animation = "none";
     setTimeout(() => m1a.style.animation = 
      "sobe_m 5s linear, pisca_m 4s linear"
      , 5);
     setTimeout(() => c1a.style.animation = 
      "sobe_c 3s linear, pisca_m 2s linear"
      , 5);
     setTimeout(() => vma.style.animation = 
      "direita_m 1s ease-in-out 6"
      , 5);
     setTimeout(() => _vm.style.animation = 
      "ultimo_m 5s linear"
      , 5);
     setTimeout(() => _vc.style.animation = 
      "ultimo_c 3s linear"
      , 5);
     setTimeout(() => vm.style.animation = 
      "pisca_m 5s linear"
      , 5);

   }else{

      //centena precisa: centena reagrupou(cortado) p/ dezena e milhar não
      if(animar && cen_precisa() && prop_ic == 'flex' & prop_im != 'flex'){
      
         /*
         fundo da centena(vc) já reagrupada(cortada) pisca, 
         a milhar(m1a) sobe e pisca 
         a milhar que vai(_vm) aparece por ultimo,
         1 minhar(vma) vai pra direita, 
         a centena que vai anterior(_vc_ant) aparece primeiro e some por ultimo
         a centena que vai(_vc) aparece por ultimo
         */
        /*NÃO ALTERAR*/
        vc.style.animation = "none";
        m1a.style.animation = "none";
        _vm.style.animation = "none";
        vma.style.animation = "none";
        _vc_ant.style.animation = "none";
        _vc.style.animation = "none";
        setTimeout(() => m1a.style.animation = 
         "sobe_m 3s linear, pisca_m 2s linear"
         , 5);
        setTimeout(() => vc.style.animation = 
         "pisca_c 2s linear"
         , 5);
        setTimeout(() => _vm.style.animation = 
         "ultimo_m 3s linear"
         , 5);
        setTimeout(() => vma.style.animation = 
         "direita_m 1s ease-in-out 3"
         , 5);
        setTimeout(() => _vc_ant.style.animation = 
         "ultimo_desl_c 1s ease-in-out forwards, ultimo_rev_c 3s linear forwards"
         , 5);
        setTimeout(() => _vc.style.animation = 
         "ultimo_c 3s linear"
         , 5);
      }

   }

   const c1 = document.getElementById("c1");
   var c1i = parseInt(c1.innerText, 10);
   //const m1 = document.getElementById("m1");

   //const imgc = document.getElementById("imgc");
   //const imgm = document.getElementById("imgm");

   //const vc = document.getElementById("vc");
  
   /*só faz sentido reagrupar milhar se a centena estiver precisando*/
   const c2 = document.getElementById("c2");
   var c2i = parseInt(c2.innerText, 10);

   if( c1i >= c2i ){
      
      /*exceção: as centenas são iguais e nulas e a dezena precisa reagrupar: parmite reagrupamento da centena nula*/
      if( c1i == 0 && c2i == 0 && dez_precisa() ){
         console.log('Exceção: Centena Não precisa reagrupar mas é nula e a dezena precisa reagrupar');
      }else if(cen_precisa()){
         console.log('Exceção: Centena Não precisava reagrupar mas depois de ceder 1 precisa reagrupar');
      }else{
         console.log('Centena Não precisa reagrupar');
         // alert("AQUI NÃO!!");
         alert("CENTENA NÃO PRECISA!!");
         return false;
      }
      
   }else{
      if(parseInt(_vc.innerText, 10) >= parseInt(c2.innerText, 10)){
         console.log('reagrupar centena só uma vez basta!');
         alert("CENTENA NÃO PRECISA!!");
         return false;
      }
   }

   if(_vc.innerText == ''){
      var vcc = 0;   
   }else{
      var vcc = _vc.innerText;   
   }

   if(_vm.innerText == ''){
      var vmm = 0;   
   }else{
      var vmm = _vm.innerText;   
   }

   const rc = document.getElementById("rc");
   const rm = document.getElementById("rm");
   
   var c1i = parseInt(c1.innerText, 10);
   //var m1i = parseInt(m1.innerText, 10);

   var vc1i = parseInt(vcc, 10);
   var vm1i = parseInt(vmm, 10);

   //var prop_ic = imgc.style.display;
   console.log('prop_ic: '+prop_ic);

   //var prop_im = imgm.style.display;
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

      if(animar){
         _vc_ant.innerText = _vc.innerText;/*salva uma copia para a animação*/
      }
      _vc.innerText = c1m+"";
      _vm.innerText = m1m+"";
      
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
         if(animar){
            _vc_ant.innerText = _vc.innerText;/*salva uma copia para a animação*/
         }
         _vc.innerText = c1m+"";
         _vm.innerText = m1m+"";
         
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

function uni_precisa(){
   const vu = document.getElementById("vu");
   const _vu = document.getElementById("_vu");
   console.log("uni----------------------?"+_vu.innerText);
   const u1 = document.getElementById("u1");
   const u2 = document.getElementById("u2");

   var vui = parseInt(_vu.innerText, 10);
   var u1i = parseInt(u1.innerText, 10);
   var u2i = parseInt(u2.innerText, 10);

   if(u1i < u2i && (_vu.innerText == '' || vui < u2i)){
      return true;
   }

   if(u1i == u2i && vui < u2i ){
      return true;
   }

   return false;

}

function dez_precisa(){
   const vd = document.getElementById("vd");
   const _vd = document.getElementById("_vd");
   const vda = document.getElementById("vda");
   console.log("dez----------------------?"+_vd.innerText);
   const d1 = document.getElementById("d1");
   const d2 = document.getElementById("d2");

   var vdi = parseInt(_vd.innerText, 10);
   var d1i = parseInt(d1.innerText, 10);
   var d2i = parseInt(d2.innerText, 10);

   if(d1i < d2i && (_vd.innerText == '' || vdi < d2i) ){
      return true;
   }

   if( d1i == d2i &&  vdi < d2i ){
      return true;
   }

   return false; 
   
}

function cen_precisa(){
   const vc = document.getElementById("vc");
   const _vc = document.getElementById("_vc");
   console.log("cen----------------------?"+_vc.innerText);
   const c1 = document.getElementById("c1");
   const c2 = document.getElementById("c2");

   var vci = parseInt(_vc.innerText, 10);
   var c1i = parseInt(c1.innerText, 10);
   var c2i = parseInt(c2.innerText, 10);

   if( c1i < c2i && (_vc.innerText == '' || vci < c2i) ){
      return true;
   }

   if( c1i == c2i && vci < c2i ){
      return true;
   }

   return false;

}

function resetar(){
   console.log('Apagando os dados');

   if ( confirm('Apagar Pontos Erros e Pulos?') ) {

      localStorage.setItem("pontos_sub", 0);
      localStorage.setItem("erros_sub", 0);
      localStorage.setItem("pulos_sub", 0);
      verificaStorage();

   }

}

function limpar_hist(){

   localStorage.setItem("arr_obj_err_sub", null);
   localStorage.setItem("arr_obj_acer_sub", null);
   localStorage.setItem("arr_obj_pul_sub", null);

}

function imprimir_hist(){

   // if(JSON.parse(localStorage.getItem("arr_obj_err_sub")) != null){
   //     arr_obj_err = JSON.parse(localStorage.getItem("arr_obj_err_sub"));
   // }
   // if(JSON.parse(localStorage.getItem("arr_obj_acer_sub")) != null){
   //     arr_obj_acer = JSON.parse(localStorage.getItem("arr_obj_acer_sub"));
   // }
   // if(JSON.parse(localStorage.getItem("arr_obj_pul_sub")) != null){
   //     arr_obj_pul = JSON.parse(localStorage.getItem("arr_obj_pul_sub"));
   // }

   if (localStorage.hasOwnProperty("arr_obj_err_sub")) {
      
      JSON.parse( localStorage.getItem("arr_obj_err_sub") ).forEach(objconta => {
      
         console.log('Erro: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

   }

   if (localStorage.hasOwnProperty("arr_obj_acer_sub")) {
      
      JSON.parse( localStorage.getItem("arr_obj_acer_sub") ).forEach(objconta => {
      
         console.log('Acerto: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

   }

   if (localStorage.hasOwnProperty("arr_obj_pul_sub")) {
      
      JSON.parse( localStorage.getItem("arr_obj_pul_sub") ).forEach(objconta => {
      
         console.log('Pulo: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

   }

}

// function reset(){
   
//    console.log('Apagar todos os dados');

//    if (confirm('Apagar Pontos Erros e Pulos?')) {

//       localStorage.setItem("pontos_sub", 0);
//       localStorage.setItem("erros_sub", 0);
//       localStorage.setItem("pulos_sub", 0);
//       verificaStorage();

//    }

// }

function limpa_cores(){
   document.getElementById("vu").style.backgroundColor = cor_normal;
   document.getElementById("vd").style.backgroundColor = cor_normal;
   document.getElementById("vc").style.backgroundColor = cor_normal;
   document.getElementById("vm").style.backgroundColor = cor_normal;
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
   const _vd = document.getElementById("_vd");
   const vda = document.getElementById("vda");
   const vc = document.getElementById("vc");
   const _vc = document.getElementById("_vc");
   const vca = document.getElementById("vca");
   const vm = document.getElementById("vm");
   const _vm = document.getElementById("_vm");
   const vma = document.getElementById("vma");

   //console.log(exibe.innerText);

   exibe.innerText = 
      m1.innerText+c1.innerText+d1.innerText+u1.innerText + " - " + 
      m2.innerText+c2.innerText+d2.innerText+u2.innerText + " = " + 
      rm.innerText+rc.innerText+rd.innerText+ru.innerText;

   if(_vd.innerText != ''){
      vd.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vd.style.backgroundColor = cor_normal;     
   }

   if(_vc.innerText != ''){
      vc.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      vc.style.backgroundColor = cor_normal;  
   }

   if(_vm.innerText != ''){
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
   const u1a = document.getElementById("u1a");
   const d1 = document.getElementById("d1");
   const d1a = document.getElementById("d1a");
   const c1 = document.getElementById("c1");
   const c1a = document.getElementById("c1a");
   const m1 = document.getElementById("m1");
   const m1a = document.getElementById("m1a");

   const u2 = document.getElementById("u2");
   const d2 = document.getElementById("d2");
   const c2 = document.getElementById("c2");
   const m2 = document.getElementById("m2");

   if(num1arr.length == 1){

      u1.innerText = num1arr[0];
      d1.innerText = 0;
      c1.innerText = 0;
      m1.innerText = 0;

      u1a.innerText = num1arr[0];
      d1a.innerText = 0;
      c1a.innerText = 0;
      m1a.innerText = 0;

   }else
   if(num1arr.length == 2){

      u1.innerText = num1arr[1];
      d1.innerText = num1arr[0];
      c1.innerText = 0;
      m1.innerText = 0;

      u1a.innerText = num1arr[1];
      d1a.innerText = num1arr[0];
      c1a.innerText = 0;
      m1a.innerText = 0;

   }else
   if(num1arr.length == 3){

      u1.innerText = num1arr[2];
      d1.innerText = num1arr[1];
      c1.innerText = num1arr[0];
      m1.innerText = 0;

      u1a.innerText = num1arr[2];
      d1a.innerText = num1arr[1];
      c1a.innerText = num1arr[0];
      m1a.innerText = 0;

   }else
   if(num1arr.length == 4){

      u1.innerText = num1arr[3];
      d1.innerText = num1arr[2];
      c1.innerText = num1arr[1];
      m1.innerText = num1arr[0];

      u1a.innerText = num1arr[3];
      d1a.innerText = num1arr[2];
      c1a.innerText = num1arr[1];
      m1a.innerText = num1arr[0];

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
   
   document.getElementById("_vu").innerText = '';
   document.getElementById("_vd").innerText = '';
   document.getElementById("_vc").innerText = '';
   document.getElementById("_vm").innerText = '';

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

   if(!acertou){

      verifica = true;

      verifica_err = true;

      verifica_pul = true;

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

function prepara_impr(){

   var query = location.search.slice(1);
   var partes = query.split('&');
   var chave = '';
   var valor = '';
   partes.forEach(function (parte) {
       var chaveValor = parte.split('=');
       chave = chaveValor[0];
       valor = chaveValor[1];
   });

   console.log("chave: " + chave + " >> valor: " + valor); 

   var erros = document.getElementById('erros');
   var pulos = document.getElementById('pulos');
   var acertos = document.getElementById('acertos');

   var html_err = '';
   var html_ace = '';
   var html_pul = '';

   if (localStorage.hasOwnProperty("arr_obj_err_sub")) {
      
      JSON.parse( localStorage.getItem("arr_obj_err_sub") ).forEach(objconta => {
         
         /*não será impresso os valores*/
         if(chave=='his' && valor=='1'){

            html_err = html_err + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">-</span><hr><span></span></div>";
         
         }else{

            html_err = html_err + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">-</span><hr><span>"+objconta.numr+"</span></div>";
         
         }
         console.log('Erro: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

      erros.innerHTML = html_err;

   }

   if (localStorage.hasOwnProperty("arr_obj_acer_sub")) {
      
      JSON.parse( localStorage.getItem("arr_obj_acer_sub") ).forEach(objconta => {
         
         /*não será impresso os valores*/
         if(chave=='his' && valor=='1'){

            html_ace = html_ace + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">-</span><hr><span></span></div>";
         
         }else{

            html_ace = html_ace + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">-</span><hr><span>"+objconta.numr+"</span></div>";
            
         }
         console.log('Acerto: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

      acertos.innerHTML = html_ace;

   }

   if (localStorage.hasOwnProperty("arr_obj_pul_sub")) {
      
      JSON.parse( localStorage.getItem("arr_obj_pul_sub") ).forEach(objconta => {
      
         /*não será impresso os valores*/
         if(chave=='his' && valor=='1'){

            html_pul = html_pul + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">-</span><hr><span></span></div>";
         
         }else{
         
            html_pul = html_pul + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">-</span><hr><span>"+objconta.numr+"</span></div>";

         }
         console.log('Pulo: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

      pulos.innerHTML = html_pul;

   }
}
