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

   var nome_aln = document.getElementById("nome_aln");

   var nome_aluno_adi = '';
   var nome_aluno_sec_adi = '';
   
   /*pega o nome do input*/
   if(nome_aln != null){
      
      nome_aluno_adi = nome_aln.value;     
      
      console.log('nome no input: ' + nome_aluno_adi);
   }else{
   
      console.log('nome null no input');
   
   }

   console.log('prop. flutua:'+flutua.style.display);

   /*mostra o menu*/
   if(flutua.style.display == 'none' || flutua.style.display == ''){

      flutua.style.display = 'block';
      
      /*recupera nome da sessao*/
      if(localStorage.getItem("nome_aluno_adi") != null){
      
         nome_aluno_sec_adi = localStorage.getItem("nome_aluno_adi");
         
         document.getElementById("nome_aln").value = nome_aluno_sec_adi;

         /*antes de inserir o nome da secao no input verifica se sao iguais*/
         // if( nome_aluno_sec_sub == nome_aluno_sub ){
         
         //    document.getElementById("nome_aln").value = nome_aluno_sec_sub;
         
         // }else{
            
         //    if ( confirm('Apagar Histórico de ' + nome_aluno_sec_sub + '?') ) {
         //       limpar_hist();
         //       document.getElementById("nome_aln").value = nome_aluno_sec_sub;
         //    }

         // }
         
         console.log('nome recuperado da secao: ' + nome_aluno_sec_adi);
      
      }else{
         
         console.log('nome vazio na secao');
      
      }

   /*esconde o menu*/  
   }else{
      
      flutua.style.display = 'none';

      if(nome_aluno_adi != ''){

         if(localStorage.getItem("nome_aluno_adi") != null){
         
            nome_aluno_sec_adi = localStorage.getItem("nome_aluno_adi");
         
         }

         /*antes de inserir o nome do input na secao verifica se sao iguais*/
         if( nome_aluno_sec_adi == nome_aluno_adi ){
         
            /*nomes iguais não há necessidade de escluir dados*/
           
         }else{
            
            /*se nao apagar os dados, eles são incorporados ao novo nome*/
            if ( confirm('Apagar Histórico de ' + nome_aluno_sec_adi + '?') ) {
               limpar_hist();
            }

         }

         /*apagando ou nao os dados do historico, o nome vai mudar*/
         localStorage.setItem("nome_aluno_adi", nome_aluno_adi);

         console.log('salvou nome na secao: ' + nome_aluno_adi); 

      }else{
         console.log('NAO salvou nome na secao'); 
      }
      
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

   const _ru = document.getElementById("_ru");
   const _rd = document.getElementById("_rd");
   const _rc = document.getElementById("_rc");
   const _rm = document.getElementById("_rm");

   console.log('_rm: ' + _rm.innerText + '_rc: ' + _rc.innerText + '_rd: ' + _rd.innerText + '_ru: ' + _ru.innerText);

   return _rm.innerText+_rc.innerText+_rd.innerText+_ru.innerText+"";

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

   var soma = in1+in2;

   console.log(in1+"+"+in2+"="+ires+">>"+soma);

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

function get_obj_conta_adi(){

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

   var pont = localStorage.getItem("pontos_adi");
   var loc_err = localStorage.getItem("erros_adi");
   var loc_pul = localStorage.getItem("pulos_adi");

   var ponti = parseInt(pont, 10);
   var loc_erri = parseInt(loc_err, 10);
   var loc_puli = parseInt(loc_pul, 10);

   var pontt = document.getElementById("pontu");
   var input_err = document.getElementById("erros");
   var input_pul = document.getElementById("pulos");

   if(JSON.parse(localStorage.getItem("arr_obj_err_adi")) != null){
       arr_obj_err = JSON.parse(localStorage.getItem("arr_obj_err_adi"));
   }
   if(JSON.parse(localStorage.getItem("arr_obj_acer_adi")) != null){
       arr_obj_acer = JSON.parse(localStorage.getItem("arr_obj_acer_adi"));
   }
   if(JSON.parse(localStorage.getItem("arr_obj_pul_adi")) != null){
       arr_obj_pul = JSON.parse(localStorage.getItem("arr_obj_pul_adi"));
   }

   var obj_conta = get_obj_conta_adi();

   console.log('obj_conta: ' + obj_conta);

   /*TIPO QUE GANHA PONTOS*/
   if(tipo == 'mais'){

      arr_obj_acer.push(obj_conta);

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

   localStorage.setItem("pontos_adi", ponti);
   localStorage.setItem("erros_adi", loc_erri);
   localStorage.setItem("pulos_adi", loc_puli);

   localStorage.setItem("arr_obj_err_adi", JSON.stringify(arr_obj_err));
   localStorage.setItem("arr_obj_acer_adi", JSON.stringify(arr_obj_acer));
   localStorage.setItem("arr_obj_pul_adi", JSON.stringify(arr_obj_pul));

   var tempo_adi = document.getElementById("relg").innerText;

   localStorage.setItem("tempo_adi", tempo_adi);
   
   imprimir_hist();

   //localStorage.setItem("pontos", ponti);

   //console.log('ponti2:' + ponti);
//
   //const cat = localStorage.getItem("myCat");

   //localStorage.removeItem("myCat");


}

function verificaStorage(){

   var pon = 0;
   var pont = localStorage.getItem("pontos_adi");
   var ponti = parseInt(pont, 10);

   var pon_err = 0;
   var pont_err = localStorage.getItem("erros_adi");
   var ponti_err = parseInt(pont_err, 10);

   var pon_pul = 0;
   var pont_pul = localStorage.getItem("pulos_adi");
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

function aoiniciar(){

   /*escondendo o menu flutuante*/
   const flutua = document.getElementById("flutua");
   flutua.style.display = 'none';

   limpa_anime();

   puloss = true;

   //novo()

   verificaStorage();

   exibir();

   if(ajuda){
      repetirn1();
   }else{
      zera_result();
   }

}

function limpa_anime(){

   const vda = document.getElementById("vda");
   const vca = document.getElementById("vca");
   const vma = document.getElementById("vma");

   if(vda != null && vca != null && vma != null){
      vda.style.animation = "none";
      vca.style.animation = "none";
      vma.style.animation = "none";
   }
   
}

function repetirn1(){

   const _ru = document.getElementById("_ru");
   const _rd = document.getElementById("_rd");
   const _rc = document.getElementById("_rc");
   const _rm = document.getElementById("_rm");

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");

   _ru.innerText = u1.innerText;
   _rd.innerText = d1.innerText;
   _rc.innerText = c1.innerText;
   _rm.innerText = m1.innerText;

}

function zera_result(){
   document.getElementById("_ru").innerText = 0;
   document.getElementById("_rd").innerText = 0;
   document.getElementById("_rc").innerText = 0;
   document.getElementById("_rm").innerText = 0;
}

function reset(){

   if (confirm('Apagar Pontos?')) {
      localStorage.setItem("pontos_adi", 0);
      verificaStorage();
   }

}

function resetar(){
   console.log('Apagando os dados');

   if ( confirm('Apagar Pontos Erros e Pulos?') ) {

      localStorage.setItem("pontos_adi", 0);
      localStorage.setItem("erros_adi", 0);
      localStorage.setItem("pulos_adi", 0);
      verificaStorage();

   }

}
function limpar_hist(){

   localStorage.setItem("arr_obj_err_adi", null);
   localStorage.setItem("arr_obj_acer_adi", null);
   localStorage.setItem("arr_obj_pul_adi", null);

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

   if (localStorage.hasOwnProperty("arr_obj_err_adi")) {
      
      JSON.parse( localStorage.getItem("arr_obj_err_adi") ).forEach(objconta => {
      
         console.log('Erro: ' + objconta.num1 + ' + ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

   }

   if (localStorage.hasOwnProperty("arr_obj_acer_adi")) {
      
      JSON.parse( localStorage.getItem("arr_obj_acer_adi") ).forEach(objconta => {
      
         console.log('Acerto: ' + objconta.num1 + ' + ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

   }

   if (localStorage.hasOwnProperty("arr_obj_pul_adi")) {
      
      JSON.parse( localStorage.getItem("arr_obj_pul_adi") ).forEach(objconta => {
      
         console.log('Pulo: ' + objconta.num1 + ' + ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

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
   const _vm = document.getElementById("_vm");

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
   if(_vm.innerText != '0'){
      vm.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }else{
      if(_rc.innerText == '9'){
         vm.style.backgroundColor = cor_normal;
      }     
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

   var nsatisfaz = true;
   var num1 = 0;
   var num2 = 0;
   var num1s = '';
   var num1arr = '';
   var num2s = '';
   var num2arr = '';

   while(nsatisfaz){

      num1 = getRandomInt(des, ates);
      num1s = completa(num1);
      num1arr = num1s.split('');

      num2 = getRandomInt(des, num1);
      num2s = completa(num2);
      num2arr = num2s.split('');

      var cm1 = parseInt( (num1arr[0]+num1arr[1]+""), 10);
      var cm2 = parseInt( (num2arr[0]+num2arr[1]+""), 10);
      console.log('num1:'+num1);
      console.log('num2:'+num2);
      console.log('cm1: ' + cm1);
      console.log('cm2: ' + cm2);

      if( (cm1 + cm2) < 100 ){
         nsatisfaz = false;
      }else{
         console.log('A soma passou de 9999!!');
      }

   }

   // var num_m1 = getRandomInt(0, 8);

   // console.log('num_m1:'+num_m1);

   // var num1s = num1+""+num_m1;

   // var num1arr = num1s.split('');

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");

   const u2 = document.getElementById("u2");
   const d2 = document.getElementById("d2");
   const c2 = document.getElementById("c2");
   const m2 = document.getElementById("m2");

    u1.innerText = num1arr[3];
    d1.innerText = num1arr[2];
    c1.innerText = num1arr[1];
    m1.innerText = num1arr[0];

    u2.innerText = num2arr[3];
    d2.innerText = num2arr[2];
    c2.innerText = num2arr[1];
    m2.innerText = num2arr[0];

   // if(num1arr.length == 1){

   //    u1.innerText = num1arr[0];
   //    d1.innerText = 0;
   //    c1.innerText = 0;
   //    m1.innerText = 0;

   // }else
   // if(num1arr.length == 2){

   //    u1.innerText = num1arr[0];
   //    d1.innerText = num1arr[1];
   //    c1.innerText = 0;
   //    m1.innerText = 0;

   // }else
   // if(num1arr.length == 3){

   //    u1.innerText = num1arr[0];
   //    d1.innerText = num1arr[1];
   //    c1.innerText = num1arr[2];
   //    m1.innerText = 0;

   // }else
   // if(num1arr.length == 4){

   //    u1.innerText = num1arr[0];
   //    d1.innerText = num1arr[1];
   //    c1.innerText = num1arr[2];
   //    m1.innerText = num1arr[3];

   // }  

   // var num2 = getRandomInt(des, ates);
   
   // var num_m2 = 8-num_m1;

   // console.log('num_m2:'+num_m2);

   // var num2s = num2+""+num_m2;

   // var num2arr = num2s.split('');

   // if(num2arr.length == 1){

   //    u2.innerText = num2arr[0];
   //    d2.innerText = 0;
   //    c2.innerText = 0;
   //    m2.innerText = 0;

   // }else
   // if(num2arr.length == 2){

   //    u2.innerText = num2arr[0];
   //    d2.innerText = num2arr[1];
   //    c2.innerText = 0;
   //    m2.innerText = 0;

   // }else
   // if(num2arr.length == 3){

   //    u2.innerText = num2arr[0];
   //    d2.innerText = num2arr[1];
   //    c2.innerText = num2arr[2];
   //    m2.innerText = 0;

   // }else
   // if(num2arr.length == 4){

   //    u2.innerText = num2arr[0];
   //    d2.innerText = num2arr[1];
   //    c2.innerText = num2arr[2];
   //    m2.innerText = num2arr[3];

   // }

   limpar();

}

function limpa_result(){

   document.getElementById("_ru").innerText = 0;
   document.getElementById("_rd").innerText = 0;
   document.getElementById("_rc").innerText = 0;
   document.getElementById("_rm").innerText = 0;

}

function limpar(){

   //se ainda não acertou então deixa limpar
   if(verifica){

      //zera o resultado da subtração
      //limpa_result();

      document.getElementById("_ru").innerText = 0;
      document.getElementById("_rd").innerText = 0;
      document.getElementById("_rc").innerText = 0;
      document.getElementById("_rm").innerText = 0;

      document.getElementById("_vd").innerText = 0;
      document.getElementById("_vc").innerText = 0;
      document.getElementById("_vm").innerText = 0;

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
   const _vm = document.getElementById("_vm");
   const _rda = document.getElementById("_rda");
  
   var conts = _vm.innerText+_vc.innerText+_vd.innerText+_ru.innerText;
   
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
   			
            if(animar){

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
            
            }
   		
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
   const _vm = document.getElementById("_vm");
   const _rda = document.getElementById("_rda");

   var conts = _vm.innerText+_vc.innerText+_vd.innerText+_ru.innerText;
   
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

               if(animar){

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

               }

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

            if(animar){

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

            }

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

   const _vm = document.getElementById("_vm");
   const _rd = document.getElementById("_rd");
   const _vc = document.getElementById("_vc");
   const _rca = document.getElementById("_rca");
   
   var conts = _vm.innerText+_vc.innerText+_rd.innerText;
   
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
   			
            if(animar){

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

            }

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

   const _vm = document.getElementById("_vm");
   const _vc = document.getElementById("_vc");
   const _rd = document.getElementById("_rd");
   const _rca = document.getElementById("_rca");

   var conts = _vm.innerText+vc.innerText+_rd.innerText;
   
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

               if(animar){

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

               }

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
   			
            if(animar){

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

            }

   		}else{

            _rd.innerText = rud+"";
            _vc.innerText = ruc+"";
            _rca.innerText = ruc+"";
   		
   		}
   		
   }
   
   
   exibir();

}

function rcmais() {

   const rc = document.getElementById("rc");
   const vm = document.getElementById("vm");

   const _rc = document.getElementById("_rc");
   const _vm = document.getElementById("_vm");
   const _rma = document.getElementById("_rma");

   var conts = _vm.innerText+_rc.innerText;
   
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
         
         _rc.innerText = ruc;
         _rma.innerText = rum;
         _vm.innerText = rum;

         console.log(rum +'>>'+ ruc);

         //faz efeito no acrescimo das dezenas
         if(ruc == 0){
            
            if(animar){

               _vm.style.animation = "none";
               vm.style.animation = "none";
               _rma.style.animation = "none";
               rc.style.animation = "none";
               
               setTimeout(() => _rma.style.animation = 
               "sobe_m 2s linear, pisca_m 1s linear"
               , 5);
               setTimeout(() => _vm.style.animation = 
               "ultimo_m 2s linear"
               , 5);
               setTimeout(() => rc.style.animation = 
               "pisca_c 2s linear"
               , 5);
               setTimeout(() => vm.style.animation = 
               "pisca_m 2s linear"
               , 5);

            }

         }else{

            _rc.innerText = ruc+"";

            _vm.innerText = rum+"";
         
         }
         
   }
   

   exibir();

}

function rcmenos() {

   const rc = document.getElementById("rc");
   const vm = document.getElementById("vm");

   const _vm = document.getElementById("_vm");
   const _rc = document.getElementById("_rc");
   const _rm = document.getElementById("_rm");
   const _rma = document.getElementById("_rma");

   var conts = _vm.innerText+_rc.innerText;
   
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
            _rm.innerText = rum+"";
            _vm.innerText = rum+"";

            console.log('-1<conti<10::ruc: ' + ruc);

            console.log('-1<conti<10::rum: ' + rum);

         }else{

            var ruc = parseInt(contarr[0], 10);

            console.log('ruc: ' + ruc);

            var rum = 0;

            if(ruc == 9){

               _rc.innerText = ruc+"";
               _vm.innerText = rum+"";
               _rm.innerText = rum+"";
               _rma.innerText = rum+"";

               if(animar){

                  _rma.style.animation = "none";
                  _vm.style.animation = "none";
                  rc.style.animation = "none";
                  vm.style.animation = "none";
                  
                  setTimeout(() => _rma.style.animation = 
                  "sobe_m 2s linear, pisca_m 1s linear"
                  , 5);
                  setTimeout(() => _vm.style.animation = 
                  "ultimo_m 2s linear"
                  , 5);
                  setTimeout(() => rc.style.animation = 
                  "pisca_c 2s linear"
                  , 5);
                  setTimeout(() => vm.style.animation = 
                  "pisca_m 2s linear"
                  , 5);

               }

            }else{

               _rc.innerText = contis;

               _vm.innerText = "0";
               _rm.innerText = "0";
               _rma.innerText = "0";

            }
         
         }
         
   }else

   if(conti>9 && conti <100){

         var contarr = contis.split('');
         
         var ruc = parseInt(contarr[1], 10);
         
         var rum = parseInt(contarr[0], 10);

         console.log('9<conti<100::rum: ' + rum);

         console.log('9<conti<100::ruc: ' + ruc);

         //faz efeito no acrescimo das dezenas
         if(ruc == 9){
            
            _rc.innerText = ruc;
            _vm.innerText = rum;
            _rma.innerText = rum;
            
            if(animar){

               _rma.style.animation = "none";
               _vm.style.animation = "none";
               rc.style.animation = "none";
               vm.style.animation = "none";
               setTimeout(() => _rma.style.animation = 
               "sobe_m 2s linear, pisca_m 1s linear"
               , 5);
               setTimeout(() => _vm.style.animation = 
               "ultimo_m 2s linear"
               , 5);
               setTimeout(() => rc.style.animation = 
               "pisca_c 2s linear"
               , 5);
               setTimeout(() => vm.style.animation = 
               "pisca_m 2s linear"
               , 5);

            }

         }else{

            _rc.innerText = ruc+"";
            _vm.innerText = rum+"";
            _rma.innerText = rum+"";
         
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

function prepara_impr(){

   if(localStorage.getItem("nome_aluno_adi") != null){
      
      nome_aluno_adi = localStorage.getItem("nome_aluno_adi");
   
      document.getElementById("nome_aln").value = nome_aluno_adi;
   
      console.log('nome recuperado da secao: ' + nome_aluno_adi);
   
   }

   if(localStorage.getItem("tempo_adi") != null){
      
      tempo_adi = localStorage.getItem("tempo_adi");
   
      document.getElementById("tempo_adi").innerText = tempo_adi;
   
      console.log('tempo recuperado da secao: ' + tempo_adi);
   
   }
    
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

   if(chave == 'del'){
      if(confirm('Apagar histórico de impressão?')){
         limpar_hist();
      }
   }

   var erros = document.getElementById('erros');
   var pulos = document.getElementById('pulos');
   var acertos = document.getElementById('acertos');

   var html_err = '';
   var html_ace = '';
   var html_pul = '';

   if (localStorage.hasOwnProperty("arr_obj_err_adi")) {
      
      var parse = JSON.parse( localStorage.getItem("arr_obj_err_adi") );

      if(parse != null){
   
         parse.forEach(objconta => {
            
            /*não será impresso os valores*/
            if(chave=='his' && valor=='1'){

               html_err = html_err + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">+</span><hr><span></span></div>";
            
            }else{

               html_err = html_err + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">+</span><hr><span>"+objconta.numr+"</span></div>";
            
            }
            console.log('Erro: ' + objconta.num1 + ' + ' + objconta.num2 + ' = ' + objconta.numr );

         }); 

      }

      erros.innerHTML = html_err;

   }

   if (localStorage.hasOwnProperty("arr_obj_acer_adi")) {
      
      var parse = JSON.parse( localStorage.getItem("arr_obj_acer_adi") );

      if(parse != null){

         parse.forEach(objconta => {
            
            /*não será impresso os valores*/
            if(chave=='his' && valor=='1'){

               html_ace = html_ace + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">+</span><hr><span></span></div>";
            
            }else{

               html_ace = html_ace + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">+</span><hr><span>"+objconta.numr+"</span></div>";
               
            }
            console.log('Acerto: ' + objconta.num1 + ' + ' + objconta.num2 + ' = ' + objconta.numr );

         }); 

      }

      acertos.innerHTML = html_ace;

   }

   if (localStorage.hasOwnProperty("arr_obj_pul_adi")) {
      
      var parse = JSON.parse( localStorage.getItem("arr_obj_pul_adi") );

      if(parse != null){

         parse.forEach(objconta => {
         
            /*não será impresso os valores*/
            if(chave=='his' && valor=='1'){

               html_pul = html_pul + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">+</span><hr><span></span></div>";
            
            }else{
            
               html_pul = html_pul + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">+</span><hr><span>"+objconta.numr+"</span></div>";

            }
            console.log('Pulo: ' + objconta.num1 + ' + ' + objconta.num2 + ' = ' + objconta.numr );

         });

      } 

      pulos.innerHTML = html_pul;

   }
}
