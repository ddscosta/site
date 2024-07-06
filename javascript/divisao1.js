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
var val_dvs_u = '';
var val_dvs_d = '';

//valor do quociente das diviões parciais
var q_div = '';

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

   //mult_u1 = true;
   //console.log('mult_u1_fu1:true');
   //dvd_u.style.backgroundColor = "rgba(0, 255, 64, 1)"; 
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

//ação ao clicar no divisor(dvs) unidade
function fdvs_u(){
   
   //preenche/pinta ou descarta/pinta o valor clicado
   if(val_dvs_u == ''){
      val_dvs_u = dvs_u.innerText;
      dvs_u.style.backgroundColor = corf_ativo;
   }else{
      val_dvs_u = '';
      dvs_u.style.backgroundColor = cor_normal;
   }

   //vamos efetuar a divisão
   if( get_dvd_mark() != '' ){
      
      var divid = get_dvd_mark();
      var divis = get_dvs_mark();

      var dividi = parseInt(divid, 10);
      var divisi = parseInt(divis, 10);
      q_div = dividi/divisi;

      visor_msg( dividi + ' \u00F7 ' + divisi + ' = ' + q_div );

   }

}

//ação ao clicar no divisor(dvs) dezena
function fdvs_d(){
   
   //preenche/pinta ou descarta/pinta o valor clicado
   if(val_dvs_d == ''){
      
      val_dvs_d = dvs_d.innerText;
      
      if(val_dvs_d != ''){
         dvs_d.style.backgroundColor = corf_ativo;
      }
      
   }else{
      val_dvs_d = '';
      dvs_d.style.backgroundColor = cor_normal;
   }

}


   // //vamos efetuar a divisão
   // if( get_dvd_mark() != '' ){

   // }


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
   var res = val_dvs_d + val_dvs_u;
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

function aoiniciar(){

   dvd_u = document.getElementById('dvd_u');
   dvd_d = document.getElementById('dvd_d');
   dvd_c = document.getElementById('dvd_c');
   dvd_m = document.getElementById('dvd_m');

   dvs_u = document.getElementById('dvs_u');
   dvs_d = document.getElementById('dvs_d');

   visor = document.getElementById('visor');


}