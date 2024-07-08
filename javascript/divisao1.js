var cor_normal = "rgba(0, 0, 0, 0)";

var corf_uni = "rgba(0, 0, 0, .1)";
var corf_dez = "rgba(0, 0, 0, .2)";
var corf_cen = "rgba(0, 0, 0, .3)";
var corf_mil = "rgba(0, 0, 0, .4)";

var corf_ativo = "rgba(0, 255, 64, 1)";

var verifica = true;
var verifica_err = true;
var verifica_pul = true;

var ajuda = false;
var reagru = false;

var puloss = true;
var acertou = false;

var animar = false; /*desativando animação*/


//--------------------------------------------
/*algoritmo da multiplicação*/
//-------------------------------------------

function aoiniciar(){

   dvd_u = document.getElementById('dvd_u');
   dvd_d = document.getElementById('dvd_d');
   dvd_c = document.getElementById('dvd_c');
   dvd_m = document.getElementById('dvd_m');

   dvs_u = document.getElementById('dvs_u');
   dvs_d = document.getElementById('dvs_d');

   q_u = document.getElementById('q_u');
   q_d = document.getElementById('q_d');
   q_c = document.getElementById('q_c');
   q_m = document.getElementById('q_m');

   visor = document.getElementById('visor');


}

//indica se digitos foram apertados
var mult_u1 = false;
var mult_d1 = false;
var mult_c1 = false;
var mult_m1 = false;

var mult_u2 = false;
var mult_d2 = false;
var mult_c2 = false;
var mult_m2 = false;

//indica se o visor foi ativado para apresentar produto de dois digitos
var ativ_visor = false;

//botões dos dois digitos que foram apertados para se multiplicar
var visor_bt1 = ''; //ex.: u1
var visor_bt2 = ''; //ex.: u2

//botao para colocar a resposta dos dois digitos multiplicados
var visor_btr = ''; //ex.: _ru1

//alerta se rd1 recebe digitos multiplicados ou vai pra reserva
var vai_rd1 = false;
var vai_rc1 = false;
var vai_rm1 = false;

//alerta se rd2 recebe digitos multiplicados ou vai pra reserva
var vai_rd2 = false;
var vai_rc2 = false;
var vai_rm2 = false;

//decidindo a quantidade de digitos do numero que vai ser gerado para o multiplicador
var um_dig = false;
var dois_dig = true;
var tres_dig = false;



//valores ativos que foram clicados (se não clicou estao vazios)
var val_dvd_u = '';
var val_dvd_d = '';
var val_dvd_c = '';
var val_dvd_m = '';

//valores ativos que foram clicados (se não clicou estao vazios)
var val_dvs_ud = ''; //unidade e dezena juntos

var val_quo_u = '';
var val_quo_d = '';
var val_quo_c = '';
var val_quo_m = '';

//valor do quociente das diviões parciais
var q_div_temp = '';

//valor do produto parcial entre um numero do quociente e divisor
var q_pro_temp = '';

//valor da subtração parcial entre produto e numero ligeiramente acima
var q_sub_temp = '';

//indica que será feita a operação de subtração
var ativ_sub = false;

//ação ao clicar no dividendo(dvd) unidade
function fdvd_u(){
   
   //preenche/pinta ou descarta/pinta o valor clicado
   if(val_dvd_u == ''){
      val_dvd_u = dvd_u.innerText;
      dvd_u.style.backgroundColor = corf_ativo;
   }else{
      val_dvd_u = '';
      dvd_u.style.backgroundColor = corf_uni;
   }
   
   visor_msg( get_dvd_mark() );

}

//ação ao clicar no dividendo(dvd) dezena
function fdvd_d(){

   //preenche/pinta ou descarta/pinta o valor clicado
   if(val_dvd_d == ''){
      val_dvd_d = dvd_d.innerText;
      dvd_d.style.backgroundColor = corf_ativo;
   }else{
      val_dvd_d = '';
      dvd_d.style.backgroundColor = corf_dez;
   }
   
   visor_msg( get_dvd_mark() );
}

//ação ao clicar no dividendo(dvd) centena
function fdvd_c(){
   //preenche/pinta ou descarta/pinta o valor clicado
   if(val_dvd_c == ''){
      val_dvd_c = dvd_c.innerText;
      dvd_c.style.backgroundColor = corf_ativo;
   }else{
      val_dvd_c = '';
      dvd_c.style.backgroundColor = corf_cen;
   }
   
   visor_msg( get_dvd_mark() );
}

//ação ao clicar no dividendo(dvd) milhar
function fdvd_m(){
  
   

   //indica que deve ser feita uma subtração
   //a primeira subtração que envolve o dividendo sempre será iniciada com a milhar
   if(ativ_sub){

      //o resultado da subtração está na variavel q_sub_temp
      
      //faz a subtração e pega a string para mostrar no visor
      //prefixo da linha minuendo é 'dvd'
      //prefixo da linha subtraendo é 'dvd1'
      var subt_vis = get_subt('dvd', 'dvd1');

      visor_msg( subt_vis );

   }else{

     //preenche/pinta ou descarta/pinta o valor clicado
      if(val_dvd_m == ''){
         val_dvd_m = dvd_m.innerText;
         dvd_m.style.backgroundColor = corf_ativo;
      }else{
         val_dvd_m = '';
         dvd_m.style.backgroundColor = corf_mil;
      }
      
      visor_msg( get_dvd_mark() );

   }

}

//ação ao clicar no divisor(dvs)
function fdvs(){

   //preenche/pinta ou descarta/pinta o valor clicado
   if(val_dvs_ud == ''){

      //guarda valor do divisor
      val_dvs_ud = dvs_d.innerText+dvs_u.innerText;

      //pinta local onde tem valores no divisor
      if(dvs_u.innerText != ''){
         dvs_u.style.backgroundColor = corf_ativo;   
      }
      if(dvs_d.innerText != ''){
         dvs_d.style.backgroundColor = corf_ativo;   
      }
      
   }else{
      val_dvs_ud = '';
      dvs_u.style.backgroundColor = cor_normal;
      dvs_d.style.backgroundColor = cor_normal;
   }

   //vamos efetuar a divisão
   if( get_dvd_mark() != '' ){
      
      //numeros marcados no dividendo
      var divid = get_dvd_mark();

      //numeros marcados no divisor
      var divis = get_dvs_mark();

      var dividi = 0;
      var divisi = 0;  

      if(divid != '' && divis != ''){

         dividi = parseInt(divid, 10);
         divisi = parseInt(divis, 10);

         if(divisi != 0){
            
            q_div_temp = Math.floor(dividi/divisi);
            
            visor_msg( dividi + ' \u00F7 ' + divisi + ' = ' + q_div_temp );

         }else{
            
            q_div_temp = '';

            visor_msg( 'Erro!' );
         }

      }else{
         
         q_div_temp = '';

         visor_msg( '' );

      }

   //vamos efetuar a multiplicação
   }else{
      console.log('vamos mult>>'+q_div_temp+'*'+val_dvs_ud);
      
      //gambiarra para quando for zero
      var qdt = q_div_temp;
      var vdu = val_dvs_ud;
      if(qdt == 0){
         qdt = '0'+qdt;
      }
      if(vdu == 0){
         vdu = '0'+vdu;
      }
      
      if( qdt == '' ||  vdu == ''){

         //limpa o resultado do produto
         q_pro_temp = '';
         console.log('Não há dois valores para multiplicar');

      }else{
         //numeros da última divisão
         var quoc = q_div_temp;

         //numero no divisor
         var divis = val_dvs_ud;

         var quoci = parseInt(quoc, 10);
         var divisi = parseInt(divis, 10);

         //guarda resultado do produto
         q_pro_temp = quoci*divisi;

         visor_msg( quoci + ' x ' + divisi + ' = ' + q_pro_temp );
         //console.log('mult>>'+quoci + ' x ' + divisi + ' = ' + q_pro_temp);

      }
      

   }

}

function fq_u(){

   if(q_div_temp != ''){
      
      q_u.innerText = q_div_temp;

   }else{
      
      q_u.innerText = 0;

   }

}

function fq_d(){

   if(q_div_temp != ''){
      
      q_d.innerText = q_div_temp;

   }else{
      
      q_d.innerText = 0;

   }

}

function fq_c(){

   if(q_div_temp != ''){
      
      q_c.innerText = q_div_temp;

   }else{
      
      q_c.innerText = 0;

   }

}

//clicou na milhar do quociente
function fq_m(){

   //preenche/pinta ou descarta/pinta o valor clicado
   // if(q_m == ''){
   //    q_m = dvd_m.innerText;
   //    dvd_m.style.backgroundColor = corf_ativo;
   // }else{
   //    val_dvd_m = '';
   //    dvd_m.style.backgroundColor = corf_mil;
   // }

   if(q_div_temp == 0){
      q_div_temp = q_div_temp+'';
   }

   //o valor da divisão já foi inserido no quociente. Por ser o passo final da divisão, vamos resetar tudo
   if(q_div_temp == q_m.innerText){
      
      //limpa dividendo e divisor e quociente
      
      limpa_val_divid();
      limpa_cor_divid();

      limpa_val_divis();
      limpa_cor_divis();

      limpa_val_quoc();
      limpa_cor_quoc();

      //inicia proxima fase da divisão: produto entre numero do quociente e divisor
      
      visor_msg( q_m.innerText );
      q_m.style.backgroundColor = corf_ativo;

   //vamos inserir o resultado da divisao
   }else{

      //não há resultado de divisão na variavel q_div_temp
      // if(q_div_temp == ''){

      //    q_m.innerText = 0;
         
      // }else{
         
         q_m.innerText = q_div_temp;

         q_m.style.backgroundColor = corf_ativo;

     // }

   }

}

//escreve resultado da multiplicação
function fdvd1(ord){
   
   console.log('q_pro_temp:'+q_pro_temp);

  
   //quando q_pro_temp é zero precisamos transformar em string
   if(q_pro_temp == 0){
      q_pro_temp = q_pro_temp+'';
   }

    //escreve o resultado do produto
   if(q_pro_temp != ''){
      
      var arr_qpro = (q_pro_temp+'').split('');
        
      //clicou-se na linha1(produto) a ser subtraido da linha acima
      
      //coloca resultado da variavel q_pro_temp
      if(ord == 'u'){
         set_prod('dvd1', 3, arr_qpro);
      }
      if(ord == 'd'){
        set_prod('dvd1', 2, arr_qpro);
      }
      if(ord == 'c'){
        set_prod('dvd1', 1, arr_qpro);
      }
      if(ord == 'm'){
         set_prod('dvd1', 0, arr_qpro);
      }

      //por enquanto vamos permitir uma só tentativa de posicionar esse valor
      q_pro_temp = '';  

   //inicia o processo de subtração
   }else{

      limpa_val_divid();
      limpa_cor_divid();

      limpa_val_divis();
      limpa_cor_divis();

      limpa_val_quoc();
      limpa_cor_quoc();

      //captura o resultado da multiplicação presente nesta linha
      var nlin1 = get_lin_num('dvd1');

      if(nlin1 == 0){
         nlin1 = nlin1+'';
      }

      if(nlin1 != ''){
         
         q_pro_temp = nlin1;
         visor_msg( nlin1 );
         ativ_sub = true;
         console.log('ativ_sub:'+ativ_sub);

      }else{

         q_pro_temp = '';
         visor_msg( '' );
         ativ_sub = false;
         console.log('ativ_sub:'+ativ_sub);

      }
      

   }

}

//escreve resultado da subtracao
function fdvd2(ord){
   
   console.log('q_sub_temp:'+q_sub_temp);
   console.log('q_prodd_temp:'+q_pro_temp);
  
   //quando q_pro_temp é zero precisamos transformar em string
   if(q_sub_temp == 0){
      q_sub_temp = q_sub_temp+'';
   }

    //escreve o resultado da subtração
   if(q_sub_temp != ''){
      
      var arr_qsub = (q_sub_temp+'').split('');
        
      //clicou-se na linha2(subtração)
      
      //coloca o resultado da variavel q_sub_temp
      if(ord == 'u'){
         set_subt('dvd2', 3, arr_qsub);
      }
      if(ord == 'd'){
        set_subt('dvd2', 2, arr_qsub);
      }
      if(ord == 'c'){
        set_subt('dvd2', 1, arr_qsub);
      }
      if(ord == 'm'){
         set_subt('dvd2', 0, arr_qsub);
      }

      
      //por enquanto vamos permitir uma só tentativa de posicionar esse valor
      q_sub_temp = ''; 

      //encerrando a subtração
      ativ_sub = false;

   }else{
   
      limpa_val_divid();
      limpa_cor_divid();

      limpa_val_divis();
      limpa_cor_divis();

      limpa_val_quoc();
      limpa_cor_quoc();

      limpa_cor_resto('dvd1');
      limpa_cor_resto('dvd2');

      ativ_sub = false;
   
   }

   // }else{
      
   //    limpa_val_divid();
   //    limpa_cor_divid();

   //    limpa_val_divis();
   //    limpa_cor_divis();

   //    limpa_val_quoc();
   //    limpa_cor_quoc();

   //    ativ_sub = false;

   // }

}

function visor_msg(msg){
   if(msg == ''){
      visor.innerText = '[Tabuada]';
   }else{
      visor.innerText = msg;
   }
   
}

//retorna os números do dividendo que estão marcados
function get_dvd_mark(){
   var res = val_dvd_m + val_dvd_c + val_dvd_d + val_dvd_u;
   if(res != ''){
      var resi = parseInt(res, 10);
      return resi;
   }else{
      return '';
   }
  
}

//retorna os números do dividendo que estão marcados
function get_dvs_mark(){
   var res = val_dvs_ud;
   if(res != ''){
      var resi = parseInt(res, 10);
      return resi;
   }else{
      return '';
   }
  
}

function get_dividendo(){
   var dvd_u = document.getElementById('dvd_u');
   var dvd_d = document.getElementById('dvd_d');
   var dvd_c = document.getElementById('dvd_c');
   var dvd_m = document.getElementById('dvd_m');

   var res = dvd_m.innerText + dvd_c.innerText + dvd_d.innerText + dvd_u.innerText;
   var resi = parseInt(res, 10);
   return resi;

}

function get_divisor(){
   var dvs_u = document.getElementById('dvs_u');
   var dvs_d = document.getElementById('dvs_d');
   
   var res = dvd_d.innerText + dvd_u.innerText;
   var resi = parseInt(res, 10);
   return resi;

}

//retorna os números de uma linha especifica
function get_lin_num(pre){

   var dvd1_u = document.getElementById(pre+'_u');
   var dvd1_d = document.getElementById(pre+'_d');
   var dvd1_c = document.getElementById(pre+'_c');
   var dvd1_m = document.getElementById(pre+'_m');

   var num = dvd1_m.innerText + dvd1_c.innerText + dvd1_d.innerText + dvd1_u.innerText;
   var numi = '';

   console.log('num_'+pre+':'+num);

   if(num == 0){
      num = num+'';
   }

   if( num != ''){
      numi = parseInt(num, 10);
      return numi;
   }

   return '';
   
}

function set_prod(pre, ini, arr_qpro){
   
   var ini_opt = ['m','c','d','u'];
   
   /*
   pre:prefixo...div1
   ini:inicio da insersao...0
   arr_qpro: array com o resultado do produto
   */

   if(arr_qpro.length == 1){
      document.getElementById(pre+'_'+ini_opt[ini]).innerText = arr_qpro[0];
      
      document.getElementById(pre+'_'+ini_opt[ini]).style.backgroundColor = corf_ativo;
   }
   
   if(arr_qpro.length == 2){
      document.getElementById(pre+'_'+ini_opt[ini]).innerText = arr_qpro[0];
      document.getElementById(pre+'_'+ini_opt[ini+1]).innerText = arr_qpro[1];

      document.getElementById(pre+'_'+ini_opt[ini]).style.backgroundColor = corf_ativo;
      document.getElementById(pre+'_'+ini_opt[ini+1]).style.backgroundColor = corf_ativo;
   }

   if(arr_qpro.length == 3){
      document.getElementById(pre+'_'+ini_opt[ini]).innerText = arr_qpro[0];
      document.getElementById(pre+'_'+ini_opt[ini+1]).innerText = arr_qpro[1];
      document.getElementById(pre+'_'+ini_opt[ini+2]).innerText = arr_qpro[2];
      
      document.getElementById(pre+'_'+ini_opt[ini]).style.backgroundColor = corf_ativo;
      document.getElementById(pre+'_'+ini_opt[ini+1]).style.backgroundColor = corf_ativo;
      document.getElementById(pre+'_'+ini_opt[ini+2]).style.backgroundColor = corf_ativo;
   }
   if(arr_qpro.length == 4){
      document.getElementById(pre+'_'+ini_opt[ini]).innerText = arr_qpro[0];
      document.getElementById(pre+'_'+ini_opt[ini+1]).innerText = arr_qpro[1];
      document.getElementById(pre+'_'+ini_opt[ini+2]).innerText = arr_qpro[2];
      document.getElementById(pre+'_'+ini_opt[ini+3]).innerText = arr_qpro[3];

      document.getElementById(pre+'_'+ini_opt[ini]).style.backgroundColor = corf_ativo;
      document.getElementById(pre+'_'+ini_opt[ini+1]).style.backgroundColor = corf_ativo;
      document.getElementById(pre+'_'+ini_opt[ini+2]).style.backgroundColor = corf_ativo;
      document.getElementById(pre+'_'+ini_opt[ini+3]).style.backgroundColor = corf_ativo;
   }

}

//pega o valor do produto que está na linha pre, ex.: 'dvd1'
function get_subt(pre_mi, pre_su){

   var vu = document.getElementById(pre_mi+'_u');
   var vc = document.getElementById(pre_mi+'_c');
   var vd = document.getElementById(pre_mi+'_d');
   var vm = document.getElementById(pre_mi+'_m');

   //pega o valor do produto que está na linha pre, ex.: 'dvd1'
   if( q_pro_temp != '' && pre_su == 'dvd1'){

      subt = q_pro_temp+'';
      var subti = parseInt(subt, 10);

      //pinta os numeros considerados na subtração de acordo com a quantidade de dígitos do subtraendo
      
      //pega o valor que está na linha imediatamente acima, i.e. dividendo e seleciona-o
      var minu = get_dividendo()+'';
      var minuu = '';
      
      console.log('subt:'+subt);
      console.log('tamanho:'+subt.length);

      if(subt.length > 0){
         vm.style.backgroundColor = corf_ativo;
         minuu = minuu + minu[0];
      }
      if(subt.length > 1){
         vc.style.backgroundColor = corf_ativo;
         minuu = minuu + minu[1];
      }
      if(subt.length > 2){
         vd.style.backgroundColor = corf_ativo;
         minuu = minuu + minu[2];
      }
      if(subt.length > 3){
         vu.style.backgroundColor = corf_ativo;
         minuu = minuu + minu[3];
      }

      
      var minuui = parseInt(minuu, 10);

      //faz a sutração e guarda para inserir quando a linha abaixo for clicada
      q_sub_temp = (minuui - subti);

      
  
      return minuu + ' - ' + subt + ' = ' + q_sub_temp;

      //visor_msg( subt + ' - ' + minu + ' = ' + q_sub_temp );

   }

}

function set_subt(pre, ini, arr_qsub){

   var ini_opt = ['m','c','d','u'];
   
   var qs = (q_sub_temp+'').length;
   var qp = (q_pro_temp+'').length;

   console.log('qs:'+qs+'>>qp:'+qp);
   
   if( (qp - qs) == 1){
      document.getElementById(pre+'_'+ini_opt[ini]).innerText = 0;
      document.getElementById(pre+'_'+ini_opt[ini]).style.backgroundColor = corf_ativo;
      ini = ini+1;
   }else
   if( (qp - qs) == 2){
      document.getElementById(pre+'_'+ini_opt[ini]).innerText = 0;
      document.getElementById(pre+'_'+ini_opt[ini+1]).innerText = 0;
      document.getElementById(pre+'_'+ini_opt[ini]).style.backgroundColor = corf_ativo;
      document.getElementById(pre+'_'+ini_opt[ini+1]).style.backgroundColor = corf_ativo;
      ini = ini+2;
   }else
   if( (qp - qs) == 3){
      document.getElementById(pre+'_'+ini_opt[ini]).innerText = 0;
      document.getElementById(pre+'_'+ini_opt[ini+1]).innerText = 0;
      document.getElementById(pre+'_'+ini_opt[ini+2]).innerText = 0;
      document.getElementById(pre+'_'+ini_opt[ini]).style.backgroundColor = corf_ativo;
      document.getElementById(pre+'_'+ini_opt[ini+1]).style.backgroundColor = corf_ativo;
      document.getElementById(pre+'_'+ini_opt[ini+2]).style.backgroundColor = corf_ativo;
      ini = ini+3;
   }

   /*
   pre:prefixo...div1
   ini:inicio da insersao...0
   arr_qsub: array com o resultado da subtração
   */

   if(arr_qsub.length > 0){
      document.getElementById(pre+'_'+ini_opt[ini]).innerText = arr_qsub[0];
      document.getElementById(pre+'_'+ini_opt[ini]).style.backgroundColor = corf_ativo;
   }
   
   if(arr_qsub.length > 1){
      document.getElementById(pre+'_'+ini_opt[ini+1]).innerText = arr_qsub[1];
      document.getElementById(pre+'_'+ini_opt[ini+1]).style.backgroundColor = corf_ativo;
   }

   if(arr_qsub.length > 2){
      document.getElementById(pre+'_'+ini_opt[ini+2]).innerText = arr_qsub[2];
      document.getElementById(pre+'_'+ini_opt[ini+2]).style.backgroundColor = corf_ativo;
   }
   if(arr_qsub.length > 3){
      document.getElementById(pre+'_'+ini_opt[ini+3]).innerText = arr_qsub[3];
      document.getElementById(pre+'_'+ini_opt[ini+3]).style.backgroundColor = corf_ativo;
   }

}

function limpa_val_divid(){
   val_dvd_u = '';
   val_dvd_d = '';
   val_dvd_c = '';
   val_dvd_m = '';

}

function limpa_val_divis(){
   val_dvs_ud = '';
}

function limpa_val_quoc(){
   val_quo_u = '';
   val_quo_d = '';
   val_quo_c = '';
   val_quo_m = '';
}

function limpa_cor_divid(){
   dvd_u.style.backgroundColor = corf_uni;
   dvd_d.style.backgroundColor = corf_dez;
   dvd_c.style.backgroundColor = corf_cen;
   dvd_m.style.backgroundColor = corf_mil;

}

function limpa_cor_divis(){
   dvs_u.style.backgroundColor = cor_normal;
   dvs_d.style.backgroundColor = cor_normal;
}

function limpa_cor_quoc(){
      q_u.style.backgroundColor = cor_normal;
      q_d.style.backgroundColor = cor_normal;
      q_c.style.backgroundColor = cor_normal;
      q_m.style.backgroundColor = cor_normal;
}

function limpa_cor_resto(pre){
   
   document.getElementById(pre+'_u').style.backgroundColor = corf_uni;
   document.getElementById(pre+'_d').style.backgroundColor = corf_dez;
   document.getElementById(pre+'_c').style.backgroundColor = corf_cen;
   document.getElementById(pre+'_m').style.backgroundColor = corf_mil;

}

