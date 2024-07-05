var cor_normal = "rgba(0, 0, 0, 0)";

var corf_uni = "rgba(0, 0, 0, .1)";
var corf_dez = "rgba(0, 0, 0, .2)";
var corf_cen = "rgba(0, 0, 0, .3)";
var corf_mil = "rgba(0, 0, 0, .4)";

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

//ação ao marcar a célula da unidade do 1º Fator(multiplicando)
function fu1(){

   //dois botões que geraram resultado ja estavam ativos
   if(ativ_visor){

      //limpa cores dos botões btn1 e btn2.
      mult_tf_cor(visor_bt1);
      mult_tf_cor(visor_bt2);
      
      ativ_visor=false;
      console.log('ativ_visor_fu1:false');

      //manda visor se limpar
      visor(-1, -1, '', '');
   
   //ativando u1
   }else{
      mult_u1 = true;
      console.log('mult_u1_fu1:true');
      gu1.style.backgroundColor = "rgba(0, 255, 64, 1)"; 
   }
   
   //u2(multiplicador) e u1 ativos, logo se multiplicam no visor
   if(mult_u1 && mult_u2){
      visor(u2, u1, 'u2', 'u1');
   }

   //d2(multiplicador) e u1 ativos, logo se multiplicam no visor
   if(mult_u1 && mult_d2){
      visor(d2, u1, 'd2', 'u1');
   }  
}

//ação ao marcar a célula da dezena do 1º Fator(multiplicando)
function fd1(){

   //dois botões que geraram resultado ja estavam ativos
   if(ativ_visor){

      //limpa cores dos botões btn1 e btn2.
      mult_tf_cor(visor_bt1);
      mult_tf_cor(visor_bt2);
      
      ativ_visor=false;
      console.log('ativ_visor_fd1:false');

      //manda visor se limpar
      visor(-1, -1, '', '');
   
   //ativando d1
   }else{
      mult_d1 = true;
      console.log('mult_d1_fd1:true');
      gd1.style.backgroundColor = "rgba(0, 255, 64, 1)"; 
   }
   
   //d1 e u2(multiplicador) ativos, logo se multiplicam no visor
   if(mult_d1 && mult_u2){
      visor(u2, d1, 'u2', 'd1');
   }

   //d1 e d2(multiplicador) ativos, logo se multiplicam no visor
   if(mult_d1 && mult_d2){
      visor(d2, d1, 'd2', 'd1');
   }  
}

//ação ao marcar a célula da centena do 1º Fator(multiplicando)
function fc1(){

   //dois botões que geraram resultado ja estavam ativos
   if(ativ_visor){

      //limpa cores dos botões btn1 e btn2.
      mult_tf_cor(visor_bt1);
      mult_tf_cor(visor_bt2);
      
      ativ_visor=false;
      console.log('ativ_visor_fc1:false');

      //manda visor se limpar
      visor(-1, -1, '', '');
   
   //ativando c1
   }else{
      mult_c1 = true;
      console.log('mult_c1_fc1:true');
      gc1.style.backgroundColor = "rgba(0, 255, 64, 1)"; 
   }
   
   //c1 e u2(multiplicador) ativos, logo se multiplicam no visor
   if(mult_c1 && mult_u2){
      visor(u2, c1, 'u2', 'c1');
   }

   //c1 e d2(multiplicador) ativos, logo se multiplicam no visor
   if(mult_c1 && mult_d2){
      visor(d2, c1, 'd2', 'c1');
   }
     
}

//ação ao marcar a célula da unidade de milhar do 1º Fator(multiplicando)
function fm1(){

   //dois botões que geraram resultado ja estavam ativos
   if(ativ_visor){

      //limpa cores dos botões btn1 e btn2.
      mult_tf_cor(visor_bt1);
      mult_tf_cor(visor_bt2);
      
      ativ_visor=false;
      console.log('ativ_visor_fm1:false');

      //manda visor se limpar
      visor(-1, -1, '', '');
   
   //ativando m1
   }else{
      mult_m1 = true;
      console.log('mult_m1_fm1:true');
      gm1.style.backgroundColor = "rgba(0, 255, 64, 1)"; 
   }
   
   //m1 e u2(multiplicador) ativos, logo se multiplicam no visor
   if(mult_m1 && mult_u2){
      visor(u2, m1, 'u2', 'm1');
   }

   //m1 e d2(multiplicador) ativos, logo se multiplicam no visor
   if(mult_m1 && mult_d2){
      visor(d2, m1, 'd2', 'm1');
   }
     
}

//ação ao marcar a célula da unidade do 2º Fator(multiplicador)
function fu2(){

   if(ativ_visor){
     
     //limpa cores dos botões btn1 e btn2.
      mult_tf_cor(visor_bt1);
      mult_tf_cor(visor_bt2);
      
      ativ_visor=false;
      console.log('ativ_visor_fu2:false');

      //manda visor se limpar
      visor(-1, -1, '', '');

   }else{
      mult_u2 = true;
      console.log('mult_u2_fu2:true');
      gu2.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }
   
   //u2(multiplicador) e u1 ativos, logo se multiplicam no visor
   if(mult_u2 && mult_u1){
      visor(u1, u2, 'u1', 'u2');
   }
   if(mult_u2 && mult_d1){
      visor(d1, u2, 'd1', 'u2');
   }
   if(mult_u2 && mult_c1){
      visor(c1, u2, 'c1', 'u2');
   }
   if(mult_u2 && mult_m1){
      visor(m1, u2, 'm1', 'u2');
   }
}

//ação ao marcar a célula da dezena do 2º Fator(multiplicador)
//multiplicação por dois digitos ainda não está concluido
function fd2(){

   if(ativ_visor){
     
     //limpa cores dos botões btn1 e btn2.
      mult_tf_cor(visor_bt1);
      mult_tf_cor(visor_bt2);
      
      ativ_visor=false;
      console.log('ativ_visor_fd2:false');

      //manda visor se limpar
      visor(-1, -1, '', '');

   }else{
      mult_d2 = true;
      console.log('mult_d2_fd2:true');
      gd2.style.backgroundColor = "rgba(0, 255, 64, 1)";
   }
   
   //d2(multiplicador) e u1 ativos, logo se multiplicam no visor
   if(mult_d2 && mult_u1){
      visor(u1, d2, 'u1', 'd2');
   }
   if(mult_d2 && mult_d1){
      visor(d1, d2, 'd1', 'd2');
   }
   if(mult_d2 && mult_c1){
      visor(c1, d2, 'c1', 'd2');
   }
   if(mult_d2 && mult_m1){
      visor(m1, d2, 'm1', 'd2');
   }
}

//Visor de apresentação do produto entre dois dígitos escolhidos
//e de captura desse produto para inseri-lo no resultado
function visor(v1, v2, bt1, bt2){

   //v1 e v2 não valores dos botões bt1 e bt2, respectivamente
   //exemplo de string que deve vir em bt1: 'u1'
   
   //guardando os ultimos botões usados no ultimo produto
   visor_bt1 = bt1;
   visor_bt2 = bt2;

   var v1i = -1;
   var v2i = -1;

   //var ex = document.getElementById("exibe");
   var visor_par = document.getElementById("visor_par");
   var visor_res = document.getElementById("visor_res");

   if(visor_bt1 == 'u1' && visor_bt2 == 'u2'){
      v1i = parseInt(u1.innerText,10);
      v2i = parseInt(u2.innerText,10);   
   }else if(visor_bt1 == 'u2' && visor_bt2 == 'u1'){
      v1i = parseInt(u2.innerText,10);
      v2i = parseInt(u1.innerText,10);
   }

   if(visor_bt1 == 'd1' && visor_bt2 == 'u2'){
      v1i = parseInt(d1.innerText,10);
      v2i = parseInt(u2.innerText,10);   
   }else if(visor_bt1 == 'u2' && visor_bt2 == 'd1'){
      v1i = parseInt(u2.innerText,10);
      v2i = parseInt(d1.innerText,10);  
   }

   if(visor_bt1 == 'c1' && visor_bt2 == 'u2'){
      v1i = parseInt(c1.innerText,10);
      v2i = parseInt(u2.innerText,10);   
   }else if(visor_bt1 == 'u2' && visor_bt2 == 'c1'){
      v1i = parseInt(u2.innerText,10);
      v2i = parseInt(c1.innerText,10);  
   }

   if(visor_bt1 == 'm1' && visor_bt2 == 'u2'){
      v1i = parseInt(m1.innerText,10);
      v2i = parseInt(u2.innerText,10);   
   }else if(visor_bt1 == 'u2' && visor_bt2 == 'm1'){
      v1i = parseInt(u2.innerText,10);
      v2i = parseInt(m1.innerText,10);  
   }


   if(visor_bt1 == 'u1' && visor_bt2 == 'd2'){
      v1i = parseInt(u1.innerText,10);
      v2i = parseInt(d2.innerText,10);   
   }else if(visor_bt1 == 'd2' && visor_bt2 == 'u1'){
      v1i = parseInt(d2.innerText,10);
      v2i = parseInt(u1.innerText,10);  
   }

   if(visor_bt1 == 'd1' && visor_bt2 == 'd2'){
      v1i = parseInt(d1.innerText,10);
      v2i = parseInt(d2.innerText,10);   
   }else if(visor_bt1 == 'd2' && visor_bt2 == 'd1'){
      v1i = parseInt(d2.innerText,10);
      v2i = parseInt(d1.innerText,10); 
   }

   if(visor_bt1 == 'c1' && visor_bt2 == 'd2'){
      v1i = parseInt(c1.innerText,10);
      v2i = parseInt(d2.innerText,10);   
   }else if(visor_bt1 == 'd2' && visor_bt2 == 'c1'){
      v1i = parseInt(d2.innerText,10);
      v2i = parseInt(c1.innerText,10); 
   }

   if(visor_bt1 == 'm1' && visor_bt2 == 'd2'){
      v1i = parseInt(m1.innerText,10);
      v2i = parseInt(d2.innerText,10);   
   }else if(visor_bt1 == 'd2' && visor_bt2 == 'm1'){
      v1i = parseInt(d2.innerText,10);
      v2i = parseInt(m1.innerText,10); 
   }
   
   //dois botões já estavão ativos
   if(v1==-1 && v2==-1){

      //ex.innerText = 'aguardando...';
      visor_par.innerText = '[Tabuada]';
      visor_res.innerText = '';

      ativ_visor = false;
      console.log('ativ_visor_visor:false');

   }else{

      ativ_visor = true;
      console.log('ativ_visor_visor:true');

      visor_par.innerText = v1i + ' x ' + v2i + ' = ';
      visor_res.innerText = v1i*v2i;

      //ex.innerText = v1i + ' x ' + v2i + ' = ' + (v1i*v2i);
   }

}

//mudança de cor para verde, ao acionar o botao
function mult_tf_cor(btn){

   //exemplo btn='u1'

   if(btn == 'u1'){
       
       mult_u1 = false;
       gu1.style.backgroundColor = corf_uni;
       
       console.log('mult_u1_mult2_tf_cor:false');

   }

   if(btn == 'd1'){
       
       mult_d1 = false;
       gd1.style.backgroundColor = corf_dez;
       
       console.log('mult_d1_mult2_tf_cor:false');

   }

   if(btn == 'c1'){
       
       mult_c1 = false;
       gc1.style.backgroundColor = corf_cen;
       
       console.log('mult_c1_mult2_tf_cor:false');

   }

   if(btn == 'm1'){
       
       mult_m1 = false;
       gm1.style.backgroundColor = corf_mil;
       
       console.log('mult_m1_mult2_tf_cor:false');

   }
  

   if(btn == 'u2'){
      
      mult_u2 = false;
      gu2.style.backgroundColor = corf_uni;

      console.log('mult_u2_mult2_tf_cor:false');

   }

   if(btn == 'd2'){
      
      mult_d2 = false;
      gd2.style.backgroundColor = corf_dez;

      console.log('mult_d2_mult2_tf_cor:false');

   }

}

//ação ao marcar a célula do resultado da unidade gerada pelo 1º dígito do 2º Fator(multiplicador)
function fru1(){
 
   //dois botões que geraram resultado ja estão ativos
   if(ativ_visor){

      visor_btr = '_ru1';

      //inserir o resultado parcial
      ins_rpar();

      exibir();

   }

}

//ação ao marcar a célula do resultado da dezena gerada pelo 1º dígito do 2º Fator(multiplicador)
function frd1(){
   
   //ao colocar resultado na dezena do primeiro resultado parcial, altera-se o _vc_orig para _rc1
   document.getElementById('_vc_orig').innerText = '_rc1';

   var _rd1 = document.getElementById('_rd1');
   var _vd = document.getElementById('_vd');
   var _vd_orig = document.getElementById('_vd_orig');
   
   var _rd1a = document.getElementById('_rd1a');
   var vd = document.getElementById('vd');
   var _vda = document.getElementById('_vda');
   
   //dois botões que geraram resultado ja estão ativos
   if(ativ_visor){

      visor_btr = '_rd1';

      //se a valor de vai_rd1 está ativado então rd1 nao recebe resultado, mas eleva o resultado pra reserva
      if(vai_rd1 && _rd1.innerText != '0'){
         
         //animação para subir o resultado para reserva
          _rd1a.style.animation = "none";
          _vd.style.animation = "none";
          vd.style.animation = "none";
          setTimeout(() => _rd1a.style.animation = 
              "sobe_d 2s linear, pisca_d 1.5s linear"
              , 0);
          setTimeout(() => _vd.style.animation = 
             "ultimo_d 2s linear"
             , 0);
          setTimeout(() => vd.style.animation = 
             "pisca_d 2s linear"
             , 0);

         //sobe o resultado para reserva
         _vd.innerText = _rd1.innerText;
         _vda.innerText = _rd1.innerText;
         _rd1.innerText = 0;

         vai_rd1 = false;

      }else{
         //inserir o resultado parcial
         ins_rpar();   
      }

      exibir();

   }
   
}

//ação ao marcar a célula do resultado da dezena gerada pelo 2º dígito do 2º Fator(multiplicador)
function frd2(){
   
   //ao colocar resultado na dezena do segundo resultado parcial, altera-se o _vc_orig para _rc2
   document.getElementById('_vc_orig').innerText = '_rc2';

   var _rd2 = document.getElementById('_rd2');
   var _vd = document.getElementById('_vd');
   var _vd_orig = document.getElementById('_vd_orig');
   
   var _rd2a = document.getElementById('_rd2a');
   var vd = document.getElementById('vd');
   var _vda = document.getElementById('_vda');
   
   //dois botões que geraram resultado ja estão ativos
   if(ativ_visor){

      visor_btr = '_rd2';

      //se a valor de vai_rd2 está ativado então rd2 nao recebe resultado, mas eleva o resultado pra reserva
      if(vai_rd2 && _rd2.innerText != '0'){
         
         //animação para subir o resultado para reserva
          _rd2a.style.animation = "none";
          _vd.style.animation = "none";
          vd.style.animation = "none";
          setTimeout(() => _rd2a.style.animation = 
              "sobe_d 2s linear, pisca_d 1.5s linear"
              , 0);
          setTimeout(() => _vd.style.animation = 
             "ultimo_d 2s linear"
             , 0);
          setTimeout(() => vd.style.animation = 
             "pisca_d 2s linear"
             , 0);

         //sobe o resultado para reserva
         _vd.innerText = _rd2.innerText;
         _vda.innerText = _rd2.innerText;
         _rd2.innerText = 0;

         vai_rd2 = false;

      }else{
         //inserir o resultado parcial
         ins_rpar();   
      }

      exibir();

   }
   
}

//ação ao marcar a célula do resultado da centena gerada pelo 1º dígito do 2º Fator(multiplicador)
function frc1(){
   
   //ao colocar resultado na centena do primeiro resultado parcial, altera-se o _vm_orig para _rm1
   document.getElementById('_vm_orig').innerText = '_rm1';

   var _rc1 = document.getElementById('_rc1');
   var _vc = document.getElementById('_vc');
   var _vc_orig = document.getElementById('_vc_orig');
   
   var _rc1a = document.getElementById('_rc1a');
   var vc = document.getElementById('vc');
   var _vca = document.getElementById('_vca');

   //dois botões que geraram resultado ja estão ativos
   if(ativ_visor){

      visor_btr = '_rc1';

      //se a valor de vai_rc1 está ativado então rc1 nao recebe resultado, mas eleva o resultado pra reserva
      if(vai_rc1 && _rc1.innerText != '0'){
         
         //animação para subir o resultado para reserva
          _rc1a.style.animation = "none";
          _vc.style.animation = "none";
          vc.style.animation = "none";
          setTimeout(() => _rc1a.style.animation = 
              "sobe_c 2s linear, pisca_c 1.5s linear"
              , 0);
          setTimeout(() => _vc.style.animation = 
             "ultimo_c 2s linear"
             , 0);
          setTimeout(() => vc.style.animation = 
             "pisca_c 2s linear"
             , 0);

         //sobe o resultado para reserva
         _vc.innerText = _rc1.innerText;
         _vca.innerText = _rc1.innerText;
         _rc1.innerText = 0;
         
         vai_rc1 = false;

      }else{
         //inserir o resultado parcial
         ins_rpar();   
      }

      exibir();

   }
   
}

//ação ao marcar a célula do resultado da centena gerada pelo 2º dígito do 2º Fator(multiplicador)
function frc2(){
   
   //ao colocar resultado na centena do segundo resultado parcial, altera-se o _vm_orig para _rm2
   document.getElementById('_vm_orig').innerText = '_rm2';

   var _rc2 = document.getElementById('_rc2');
   var _vc = document.getElementById('_vc');
   var _vc_orig = document.getElementById('_vc_orig');
   
   var _rc2a = document.getElementById('_rc2a');
   var vc = document.getElementById('vc');
   var _vca = document.getElementById('_vca');

   //dois botões que geraram resultado ja estão ativos
   if(ativ_visor){

      visor_btr = '_rc2';

      //se a valor de vai_rc2 está ativado então rc2 nao recebe resultado, mas eleva o resultado pra reserva
      if(vai_rc2 && _rc2.innerText != '0'){
         
         //animação para subir o resultado para reserva
          _rc2a.style.animation = "none";
          _vc.style.animation = "none";
          vc.style.animation = "none";
          setTimeout(() => _rc2a.style.animation = 
              "sobe2_c 2s linear, pisca2_c 1.5s linear"
              , 0);
          setTimeout(() => _vc.style.animation = 
             "ultimo2_c 2s linear"
             , 0);
          setTimeout(() => vc.style.animation = 
             "pisca2_c 2s linear"
             , 0);

         //sobe o resultado para reserva
         _vc.innerText = _rc2.innerText;
         _vca.innerText = _rc2.innerText;
         _rc2.innerText = 0;
         
         vai_rc2 = false;

      }else{
         //inserir o resultado parcial
         ins_rpar();   
      }

      exibir();

   }
   
}

//ação ao marcar a célula do resultado da uni_milhar gerada pelo 1º dígito do 2º Fator(multiplicador)
function frm1(){
   
   var _rm1 = document.getElementById('_rm1');
   var _vm = document.getElementById('_vm');
   var _vm_orig = document.getElementById('_vm_orig');
   
   var _rm1a = document.getElementById('_rm1a');
   var vm = document.getElementById('vm');
   var _vma = document.getElementById('_vma');

   //dois botões que geraram resultado ja estão ativos
   if(ativ_visor){

      visor_btr = '_rm1';

      //se a valor de vai_rc1 está ativado então rc1 nao recebe resultado, mas eleva o resultado pra reserva
      if(vai_rm1 && _rm1.innerText != '0'){
         
         //animação para subir o resultado para reserva
          _rm1a.style.animation = "none";
          _vm.style.animation = "none";
          vm.style.animation = "none";
          setTimeout(() => _rm1a.style.animation = 
              "sobe_m 2s linear, pisca_m 1.5s linear"
              , 0);
          setTimeout(() => _vm.style.animation = 
             "ultimo_m 2s linear"
             , 0);
          setTimeout(() => vm.style.animation = 
             "pisca_m 2s linear"
             , 0);

         //sobe o resultado para reserva
         _vm.innerText = _rm1.innerText;
         _vma.innerText = _rm1.innerText;
         _rm1.innerText = 0;
         
         vai_rm1 = false;

      }else{
         //inserir o resultado parcial
         ins_rpar();   
      }

      exibir();

   }
   
}

//ação ao marcar a célula do resultado da uni_milhar gerada pelo 2º dígito do 2º Fator(multiplicador)
function frm2(){
   
   var _rm2 = document.getElementById('_rm2');
   var _vm = document.getElementById('_vm');
   var _vm_orig = document.getElementById('_vm_orig');
   
   var _rm2a = document.getElementById('_rm2a');
   var vm = document.getElementById('vm');
   var _vma = document.getElementById('_vma');

   //dois botões que geraram resultado ja estão ativos
   if(ativ_visor){

      visor_btr = '_rm2';

      //se a valor de vai_rc1 está ativado então rc1 nao recebe resultado, mas eleva o resultado pra reserva
      if(vai_rm2 && _rm2.innerText != '0'){
         
         //animação para subir o resultado para reserva
          _rm2a.style.animation = "none";
          _vm.style.animation = "none";
          vm.style.animation = "none";
          setTimeout(() => _rm2a.style.animation = 
              "sobe2_m 2s linear, pisca2_m 1.5s linear"
              , 0);
          setTimeout(() => _vm.style.animation = 
             "ultimo2_m 2s linear"
             , 0);
          setTimeout(() => vm.style.animation = 
             "pisca2_m 2s linear"
             , 0);

         //sobe o resultado para reserva
         _vm.innerText = _rm2.innerText;
         _vma.innerText = _rm2.innerText;
         _rm2.innerText = 0;
         
         vai_rm2 = false;

      }else{
         //inserir o resultado parcial
         ins_rpar();   
      }

      exibir();

   }
   
}

//insere resposta parcial entre dois digitos
function ins_rpar(){
   
   //para dá piscadas
   var ru1 = document.getElementById('ru1');
   var rd1 = document.getElementById('rd1');
   var rc1 = document.getElementById('rc1');
   var rm1 = document.getElementById('rm1');

   //para dá piscadas
   var ru2 = document.getElementById('ru2');
   var rd2 = document.getElementById('rd2');
   var rc2 = document.getElementById('rc2');
   var rm2 = document.getElementById('rm2');

   //para inserir resposta
   var _ru1 = document.getElementById('_ru1');
   var _rd1 = document.getElementById('_rd1');
   var _rc1 = document.getElementById('_rc1');
   var _rm1 = document.getElementById('_rm1');

   //para inserir resposta
   var _ru2 = document.getElementById('_ru2');
   var _rd2 = document.getElementById('_rd2');
   var _rc2 = document.getElementById('_rc2');
   var _rm2 = document.getElementById('_rm2');

   //para animação
   var _rd1a = document.getElementById('_rd1a');
   var _rc1a = document.getElementById('_rc1a');
   var _rm1a = document.getElementById('_rm1a');

   //para animação
   var _rd2a = document.getElementById('_rd2a');
   var _rc2a = document.getElementById('_rc2a');
   var _rm2a = document.getElementById('_rm2a');

   //insere na unidade e dezena
   if(visor_btr == '_ru1'){

      var numarr = visor_res.innerText.split('');

      if(numarr.length == 1){
         _ru1.innerText = numarr[0];

         //pisca a unidade onde irá inserir
         ru1.style.animation = "none";
         setTimeout(() => ru1.style.animation = 
            "pisca_u 1s linear"
            , 0);

      }
      if(numarr.length == 2){
         _ru1.innerText = numarr[1];
         _rd1.innerText = numarr[0];

         //pisca a unidade e dezena onde irá inserir
         ru1.style.animation = "none";
         rd1.style.animation = "none";
         setTimeout(() => ru1.style.animation = 
            "pisca_u 1s linear"
            , 0);
         setTimeout(() => rd1.style.animation = 
            "pisca_d 1s linear"
            , 0);

         _rd1a.innerText = numarr[0]; 

         //ativa o botao "vai_rd1"
         vai_rd1 = true;

      }
      
   }

   if(visor_btr == '_rd1'){

      var numarr = visor_res.innerText.split('');

      if(numarr.length == 1){
         _rd1.innerText = numarr[0];

         //pisca a dezena onde irá inserir
         rd1.style.animation = "none";
         setTimeout(() => rd1.style.animation = 
            "pisca_d 1s linear"
            , 0);

         _rd1a.innerText = numarr[0];   
      }
      if(numarr.length == 2){
         _rd1.innerText = numarr[1];
         _rc1.innerText = numarr[0]; 

         //pisca a dezena e centena onde irá inserir
         rd1.style.animation = "none";
         rc1.style.animation = "none";
         setTimeout(() => rd1.style.animation = 
            "pisca_d 1s linear"
            , 0);
         setTimeout(() => rc1.style.animation = 
            "pisca_c 1s linear"
            , 0);

         _rd1a.innerText = numarr[1];
         _rc1a.innerText = numarr[0]; 

         //ativa o botao "vai_rc1"
         vai_rc1 = true; 

      }

   }

   if(visor_btr == '_rd2'){

      var numarr = visor_res.innerText.split('');

      if(numarr.length == 1){
         _rd2.innerText = numarr[0];

         //pisca a dezena onde irá inserir
         rd2.style.animation = "none";
         setTimeout(() => rd2.style.animation = 
            "pisca_d 1s linear"
            , 0);

         _rd2a.innerText = numarr[0];   
      }
      if(numarr.length == 2){
         _rd2.innerText = numarr[1];
         _rc2.innerText = numarr[0]; 

         //pisca a dezena e centena onde irá inserir
         rd2.style.animation = "none";
         rc2.style.animation = "none";
         setTimeout(() => rd2.style.animation = 
            "pisca_d 1s linear"
            , 0);
         setTimeout(() => rc2.style.animation = 
            "pisca_c 1s linear"
            , 0);

         _rd2a.innerText = numarr[1];
         _rc2a.innerText = numarr[0]; 

         //ativa o botao "vai_rc1"
         vai_rc2 = true; 

      }

   }

   if(visor_btr == '_rc1'){

      var numarr = visor_res.innerText.split('');

      if(numarr.length == 1){
         _rc1.innerText = numarr[0];

         //pisca a centena onde irá inserir
         rc1.style.animation = "none";
         setTimeout(() => rc1.style.animation = 
            "pisca_c 1s linear"
            , 0);

         _rc1a.innerText = numarr[0];   
      }
      if(numarr.length == 2){
         _rc1.innerText = numarr[1];
         _rm1.innerText = numarr[0]; 

         //pisca a centena e milhar onde irá inserir
         rc1.style.animation = "none";
         rm1.style.animation = "none";
         setTimeout(() => rc1.style.animation = 
            "pisca_c 1s linear"
            , 0);
         setTimeout(() => rm1.style.animation = 
            "pisca_m 1s linear"
            , 0);

         _rc1a.innerText = numarr[1];
         _rm1a.innerText = numarr[0]; 

         //ativa o botao "vai_rc1"
         vai_rm1 = true; 

      }
      
   }

   if(visor_btr == '_rc2'){

      var numarr = visor_res.innerText.split('');

      if(numarr.length == 1){
         _rc2.innerText = numarr[0];

         //pisca a centena onde irá inserir
         rc2.style.animation = "none";
         setTimeout(() => rc2.style.animation = 
            "pisca_c 1s linear"
            , 0);

         _rc2a.innerText = numarr[0];   
      }
      if(numarr.length == 2){
         _rc2.innerText = numarr[1];
         _rm2.innerText = numarr[0]; 

         //pisca a centena e milhar onde irá inserir
         rc2.style.animation = "none";
         rm2.style.animation = "none";
         setTimeout(() => rc2.style.animation = 
            "pisca_c 1s linear"
            , 0);
         setTimeout(() => rm2.style.animation = 
            "pisca_m 1s linear"
            , 0);

         _rc2a.innerText = numarr[1];
         _rm2a.innerText = numarr[0]; 

         //ativa o botao "vai_rc1"
         vai_rm2 = true; 

      }
      
   }

   if(visor_btr == '_rm1'){
      _rm1.innerText = visor_res.innerText;

      //pisca a milhar onde irá inserir
      rm1.style.animation = "none";
      setTimeout(() => rm1.style.animation = 
         "pisca_m 1s linear"
         , 0);

      _rm1a.innerText = visor_res.innerText;
   }

   if(visor_btr == '_rm2'){
      _rm2.innerText = visor_res.innerText;

      //pisca a milhar onde irá inserir
      rm2.style.animation = "none";
      setTimeout(() => rm2.style.animation = 
         "pisca_m 1s linear"
         , 0);

      _rm2a.innerText = visor_res.innerText;
   }

}

//função desce a dezena para se somar com digito correto
function fvd(){
   
   var _vd = document.getElementById('_vd');
   var _vd_orig = document.getElementById('_vd_orig');
   var _rd1 = document.getElementById('_rd1');
   var _rc1 = document.getElementById('_rc1');
   var dig = 0;

   var _rd1a = document.getElementById('_rd1a');
   var _rc1a = document.getElementById('_rc1a');
   var _vda = document.getElementById('_vda');
   var rd1 = document.getElementById('rd1');
   var rc1 = document.getElementById('rc1');
   var _rd1_ant = document.getElementById('_rd1_ant');
   var _rc1_ant = document.getElementById('_rc1_ant');
   
   //desce a dezena e soma com quem deve somar
   if(_vd.innerText != '0'){

      //soma com _rd1
      if(_vd_orig.innerText == '_rd1'){

         dig = parseInt(_rd1.innerText, 10) + parseInt(_vd.innerText, 10);
         
         if(dig > 9){

            //animação para descer a reserva para o resultado
            _vda.style.animation = "none";

            rd1.style.animation = "none";
            rc1.style.animation = "none";

            _rd1_ant.style.animation = "none";
            _rc1_ant.style.animation = "none";

            _rd1.style.animation = "none";
            _rc1.style.animation = "none";
           
            _rd1a.style.animation = "none";
            _rc1a.style.animation = "none";
           
            setTimeout(() => _vda.style.animation = 
               "desce_d 2s linear, pisca_d 1.5s linear"
               , 0);

            setTimeout(() => rd1.style.animation = 
               "pisca_d 2s linear"
               , 0);
            setTimeout(() => rc1.style.animation = 
               "pisca_c 2s linear"
               , 0);

            setTimeout(() => _rd1_ant.style.animation = 
               "primeiro_d 2s linear"
               , 0);
            setTimeout(() => _rc1_ant.style.animation = 
               "primeiro_c 2s linear"
               , 0);

            setTimeout(() => _rd1.style.animation = 
               "ultimo_d 2s linear"
               , 0);
             setTimeout(() => _rc1.style.animation = 
               "ultimo_c 2s linear"
               , 0);

            setTimeout(() => _rd1a.style.animation = 
               "ultimo_d 2s linear"
               , 0);
            setTimeout(() => _rc1a.style.animation = 
               "ultimo_c 2s linear"
               , 0);
            

            //salva uma copia do anterior
            _rd1_ant.innerText = parseInt(_rd1.innerText, 10);
            _rc1_ant.innerText = parseInt(_rc1.innerText, 10);

            //altera o resultado que será apresentado
            _rd1.innerText = dig - 10;
            _rc1.innerText = parseInt(_rc1.innerText, 10) + 1; 
            
            //altera o resultado que sera usado na animação
            _rd1a.innerText = _rd1.innerText
            _rc1a.innerText = _rc1.innerText;
            

            //ativa o botao "vai_rc1"
            vai_rc1 = true;

         }else{

            //animação para descer a reserva para o resultado
            _vda.style.animation = "none";

            rd1.style.animation = "none";

            _rd1_ant.style.animation = "none";

            _rd1.style.animation = "none";
            
            setTimeout(() => _vda.style.animation = 
               "desce_d 2s linear, pisca_d 1.5s linear"
               , 0);

            setTimeout(() => rd1.style.animation = 
               "pisca_d 2s linear"
               , 0);

            setTimeout(() => _rd1_ant.style.animation = 
               "primeiro_d 2s linear"
               , 0);

            setTimeout(() => _rd1.style.animation = 
               "ultimo_d 2s linear"
               , 0);
            
            _rd1_ant.innerText = parseInt(_rd1.innerText, 10);

            _rd1.innerText = dig;

            _rd1a.innerText = dig;
         }

         _vd.innerText = 0;

      }

      exibir();

   }

}

//função desce centena para se somar com digito correto
function fvc(){
   
   var _vc = document.getElementById('_vc');
   var _vc_orig = document.getElementById('_vc_orig');
   var _rc1 = document.getElementById('_rc1');
   
   var _rc1a = document.getElementById('_rc1a');
   var _rm1a = document.getElementById('_rm1a');
   var _vca = document.getElementById('_vca');
   var rc1 = document.getElementById('rc1');
   var _rc1_ant = document.getElementById('_rc1_ant');
   var _rm1_ant = document.getElementById('_rm1_ant');

   //desce a dezena e soma com quem deve somar
   if( _vc.innerText != '0' ){

      //soma com _rd1
      if(_vc_orig.innerText == '_rc1'){
         
         dig = parseInt(_rc1.innerText, 10) + parseInt(_vc.innerText, 10);
         
         if(dig > 9){

            //animação para descer a reserva para o resultado
            _vca.style.animation = "none";

            rc1.style.animation = "none";
            rm1.style.animation = "none";

            _rc1_ant.style.animation = "none";
            _rm1_ant.style.animation = "none";

            _rc1.style.animation = "none";
            _rm1.style.animation = "none";

            _rc1a.style.animation = "none";
            _rm1a.style.animation = "none";
           
            setTimeout(() => _vca.style.animation = 
               "desce_c 2s linear, pisca_c 1.5s linear"
               , 0);

            setTimeout(() => rc1.style.animation = 
               "pisca_c 2s linear"
               , 0);
            setTimeout(() => rm1.style.animation = 
               "pisca_m 2s linear"
               , 0);

            setTimeout(() => _rc1_ant.style.animation = 
               "primeiro_c 2s linear"
               , 0);
            setTimeout(() => _rm1_ant.style.animation = 
               "primeiro_m 2s linear"
               , 0);

            setTimeout(() => _rc1.style.animation = 
               "ultimo_c 2s linear"
               , 0);
            setTimeout(() => _rm1.style.animation = 
               "ultimo_m 2s linear"
               , 0);

            setTimeout(() => _rc1a.style.animation = 
               "ultimo_c 2s linear"
               , 0);
            setTimeout(() => _rm1a.style.animation = 
               "ultimo_m 2s linear"
               , 0);
            

            //salva uma copia do anterior
            _rc1_ant.innerText = parseInt(_rc1.innerText, 10);
            _rm1_ant.innerText = parseInt(_rm1.innerText, 10);

            //altera o resultado que será apresentado
            _rc1.innerText = dig - 10;
            _rm1.innerText = parseInt(_rm1.innerText, 10) + 1; 

            //altera o resultado que sera usado na animação
            _rc1a.innerText = _rc1.innerText;
            _rm1a.innerText = _rm1.innerText;

            //ativa o botao "vai_rc1"
            vai_rm1 = true;

         }else{

            //animação para descer a reserva para o resultado
            _vca.style.animation = "none";

            rc1.style.animation = "none";

            _rc1_ant.style.animation = "none";

            _rc1.style.animation = "none";
            
            setTimeout(() => _vca.style.animation = 
               "desce_c 2s linear, pisca_c 1.5s linear"
               , 0);

            setTimeout(() => rc1.style.animation = 
               "pisca_c 2s linear"
               , 0);

            setTimeout(() => _rc1_ant.style.animation = 
               "primeiro_c 2s linear"
               , 0);

            setTimeout(() => _rc1.style.animation = 
               "ultimo_c 2s linear"
               , 0);
            

            _rc1_ant.innerText = parseInt(_rc1.innerText, 10);

            _rc1.innerText = dig;

            _rc1a.innerText = dig;

         }

         _vc.innerText = 0;
         
      }

      //soma com _rd2
      if(_vc_orig.innerText == '_rc2'){
         
         dig = parseInt(_rc2.innerText, 10) + parseInt(_vc.innerText, 10);
         
         if(dig > 9){

            //animação para descer a reserva para o resultado
            _vca.style.animation = "none";

            rc2.style.animation = "none";
            rm2.style.animation = "none";

            _rc2_ant.style.animation = "none";
            _rm2_ant.style.animation = "none";

            _rc2.style.animation = "none";
            _rm2.style.animation = "none";

            _rc2a.style.animation = "none";
            _rm2a.style.animation = "none";
           
            setTimeout(() => _vca.style.animation = 
               "desce2_c 2s linear, pisca2_c 1.5s linear"
               , 0);

            setTimeout(() => rc2.style.animation = 
               "pisca2_c 2s linear"
               , 0);
            setTimeout(() => rm2.style.animation = 
               "pisca2_m 2s linear"
               , 0);

            setTimeout(() => _rc2_ant.style.animation = 
               "primeiro2_c 2s linear"
               , 0);
            setTimeout(() => _rm2_ant.style.animation = 
               "primeiro2_m 2s linear"
               , 0);

            setTimeout(() => _rc2.style.animation = 
               "ultimo2_c 2s linear"
               , 0);
            setTimeout(() => _rm2.style.animation = 
               "ultimo2_m 2s linear"
               , 0);

            setTimeout(() => _rc2a.style.animation = 
               "ultimo2_c 2s linear"
               , 0);
            setTimeout(() => _rm2a.style.animation = 
               "ultimo2_m 2s linear"
               , 0);
            

            //salva uma copia do anterior
            _rc2_ant.innerText = parseInt(_rc2.innerText, 10);
            _rm2_ant.innerText = parseInt(_rm2.innerText, 10);

            //altera o resultado que será apresentado
            _rc2.innerText = dig - 10;
            _rm2.innerText = parseInt(_rm2.innerText, 10) + 1; 

            //altera o resultado que sera usado na animação
            _rc2a.innerText = _rc2.innerText;
            _rm2a.innerText = _rm2.innerText;

            //ativa o botao "vai_rc1"
            vai_rm2 = true;

         }else{

            //animação para descer a reserva para o resultado
            _vca.style.animation = "none";

            rc2.style.animation = "none";

            _rc2_ant.style.animation = "none";

            _rc2.style.animation = "none";
            
            setTimeout(() => _vca.style.animation = 
               "desce2_c 2s linear, pisca2_c 1.5s linear"
               , 0);

            setTimeout(() => rc2.style.animation = 
               "pisca2_c 2s linear"
               , 0);

            setTimeout(() => _rc2_ant.style.animation = 
               "primeiro2_c 2s linear"
               , 0);

            setTimeout(() => _rc2.style.animation = 
               "ultimo2_c 2s linear"
               , 0);
            

            _rc2_ant.innerText = parseInt(_rc2.innerText, 10);

            _rc2.innerText = dig;

            _rc2a.innerText = dig;

         }

         _vc.innerText = 0;
         
      }

      exibir();

   }

}

//função desce milhar para se somar com digito correto
function fvm(){
   
   var _vm = document.getElementById('_vm');
   var _vm_orig = document.getElementById('_vm_orig');
   var _rm1 = document.getElementById('_rm1');
   
   var _rm1a = document.getElementById('_rm1a');
   var _vma = document.getElementById('_vma');
   var rm1 = document.getElementById('rm1');
   var _rm1_ant = document.getElementById('_rm1_ant');

   //desce a dezena e soma com quem deve somar
   if(_vm.innerText != '0'){

      //soma com _rm1
      if(_vm_orig.innerText == '_rm1'){
         
         dig = parseInt(_rm1.innerText, 10) + parseInt(_vm.innerText, 10);
         
         if(dig > 9){
            //não devia ter acontecido, corriga na criação do número
         }else{

            //animação para descer a reserva para o resultado
            _vma.style.animation = "none";
            rm1.style.animation = "none";
            _rm1_ant.style.animation = "none";
            _rm1.style.animation = "none";
            
            setTimeout(() => _vma.style.animation = 
               "desce_m 2s linear, pisca_m 1.5s linear"
               , 0);

            setTimeout(() => rm1.style.animation = 
               "pisca_m 2s linear"
               , 0);

            setTimeout(() => _rm1_ant.style.animation = 
               "primeiro_m 2s linear"
               , 0);

            setTimeout(() => _rm1.style.animation = 
               "ultimo_m 2s linear"
               , 0);
            

            _rm1_ant.innerText = parseInt(_rm1.innerText, 10);

            _rm1.innerText = dig;

            _rm1a.innerText = dig;
            
         }

         _vm.innerText = 0;
      }

      //soma com _rm2
      if(_vm_orig.innerText == '_rm2'){
         
         dig = parseInt(_rm2.innerText, 10) + parseInt(_vm.innerText, 10);
         
         if(dig > 9){
            //não devia ter acontecido, corriga na criação do número
         }else{

            //animação para descer a reserva para o resultado
            _vma.style.animation = "none";
            rm2.style.animation = "none";
            _rm2_ant.style.animation = "none";
            _rm2.style.animation = "none";
            
            setTimeout(() => _vma.style.animation = 
               "desce2_m 2s linear, pisca2_m 1.5s linear"
               , 0);

            setTimeout(() => rm2.style.animation = 
               "pisca2_m 2s linear"
               , 0);

            setTimeout(() => _rm2_ant.style.animation = 
               "primeiro2_m 2s linear"
               , 0);

            setTimeout(() => _rm2.style.animation = 
               "ultimo2_m 2s linear"
               , 0);
            

            _rm2_ant.innerText = parseInt(_rm2.innerText, 10);

            _rm2.innerText = dig;

            _rm2a.innerText = dig;
            
         }

         _vm.innerText = 0;
      }

      exibir();

   }

}

function set_num1(num1, completo){
   
   var num1c = 0;
   var u1 = document.getElementById('u1');
   var d1 = document.getElementById('d1');
   var c1 = document.getElementById('c1');
   var m1 = document.getElementById('m1');

   if(completo){

      var num1c = completa(num1);
      var num1arr = num1c.split('');

      u1.innerText = num1arr[3];
      d1.innerText = num1arr[2];
      c1.innerText = num1arr[1];
      m1.innerText = num1arr[0];

   }else{
      var num1arr = (num1+'').split('');

      if(num1arr.length == 1){
         u1.innerText = num1arr[0];
         d1.innerText = '';
         c1.innerText = '';
         m1.innerText = '';

      }else if(num1arr.length == 2){
         u1.innerText = num1arr[1];
         d1.innerText = num1arr[0];
         c1.innerText = '';
         m1.innerText = '';

      }else if(num1arr.length == 3){
         u1.innerText = num1arr[2];
         d1.innerText = num1arr[1];
         c1.innerText = num1arr[0];
         m1.innerText = '';

      }else if(num1arr.length == 4){
         u1.innerText = num1arr[3];
         d1.innerText = num1arr[2];
         c1.innerText = num1arr[1];
         m1.innerText = num1arr[0];
      }
      
   }

}

function set_num2(num2, completo){
   
   var num2c = 0;
   var u2 = document.getElementById('u2');
   var d2 = document.getElementById('d2');
   var c2 = document.getElementById('c2');
   var m2 = document.getElementById('m2');

   if(completo){

      var num2c = completa(num2);
      var num2arr = num2c.split('');

      u2.innerText = num2arr[3];
      d2.innerText = num2arr[2];
      c2.innerText = num2arr[1];
      m2.innerText = num2arr[0];

   }else{
      var num2arr = (num2+'').split('');

      if(num2arr.length == 1){
         u2.innerText = num2arr[0];
         d2.innerText = '';
         c2.innerText = '';
         m2.innerText = '';

      }else if(num2arr.length == 2){
         u2.innerText = num2arr[1];
         d2.innerText = num2arr[0];
         c2.innerText = '';
         m2.innerText = '';

      }else if(num2arr.length == 3){
         u2.innerText = num2arr[2];
         d2.innerText = num2arr[1];
         c2.innerText = num2arr[0];
         m2.innerText = '';

      }else if(num2arr.length == 4){
         u2.innerText = num2arr[3];
         d2.innerText = num2arr[2];
         c2.innerText = num2arr[1];
         m2.innerText = num2arr[0];
      }
      
   }

}

function limpa_cor_vai1(){

   document.getElementById("_vd").style.backgroundColor = cor_normal;
   document.getElementById("_vc").style.backgroundColor = cor_normal;
   document.getElementById("_vm").style.backgroundColor = cor_normal;

}

function limpa_val_vai1(){
   document.getElementById("_vd").innerText = 0;
   document.getElementById("_vc").innerText = 0;
   document.getElementById("_vm").innerText = 0;

   document.getElementById("_vc1").innerText = '';
   document.getElementById("_vm1").innerText = '';

}

function limpa_cor_fat(){
   document.getElementById("u1_").style.backgroundColor = corf_uni;
   document.getElementById("d1_").style.backgroundColor = corf_dez;
   document.getElementById("c1_").style.backgroundColor = corf_cen;
   document.getElementById("m1_").style.backgroundColor = corf_mil;

   document.getElementById("u2").style.backgroundColor = corf_uni;
   document.getElementById("d2").style.backgroundColor = corf_dez;
   document.getElementById("c2").style.backgroundColor = corf_cen;
   document.getElementById("m2").style.backgroundColor = corf_mil;

}

function limpa_res(){
   document.getElementById("_ru1").innerText = 0;
   document.getElementById("_rd1").innerText = 0;
   document.getElementById("_rc1").innerText = 0;
   document.getElementById("_rm1").innerText = 0;

   document.getElementById("_rd1a").innerText = 0;

   document.getElementById("_rd2").innerText = 0;
   document.getElementById("_rc2").innerText = 0;
   document.getElementById("_rm2").innerText = 0;

   document.getElementById("_rd2a").innerText = 0;

   document.getElementById("_rru1").innerText = 0;
   document.getElementById("_rrd1").innerText = 0;
   document.getElementById("_rrc1").innerText = 0;
   document.getElementById("_rrm1").innerText = 0;

   document.getElementById("_rrd1a").innerText = 0;
}

//--------------------------------------------------------------------

function openNav(){

   const flutua = document.getElementById("flutua");

   var nome_aln = document.getElementById("nome_aln");

   var nome_aluno_mult2 = '';
   var nome_aluno_sec_mult2 = '';
   
   /*pega o nome do input*/
   if(nome_aln != null){
      
      nome_aluno_mult2 = nome_aln.value;     
      
      console.log('nome no input: ' + nome_aluno_mult2);
   }else{
   
      console.log('nome null no input');
   
   }

   console.log('prop. flutua:'+flutua.style.display);

   /*mostra o menu*/
   if(flutua.style.display == 'none' || flutua.style.display == ''){

      flutua.style.display = 'block';
      
      /*recupera nome da sessao*/
      if(localStorage.getItem("nome_aluno_mult2") != null){
      
         nome_aluno_sec_mult2 = localStorage.getItem("nome_aluno_mult2");
         
         document.getElementById("nome_aln").value = nome_aluno_sec_mult2;

         /*antes de inserir o nome da secao no input verifica se sao iguais*/
         // if( nome_aluno_sec_mult2 == nome_aluno_mult2 ){
         
         //    document.getElementById("nome_aln").value = nome_aluno_sec_mult2;
         
         // }else{
            
         //    if ( confirm('Apagar Histórico de ' + nome_aluno_sec_mult2 + '?') ) {
         //       limpar_hist();
         //       document.getElementById("nome_aln").value = nome_aluno_sec_mult2;
         //    }

         // }
         
         console.log('nome recuperado da secao: ' + nome_aluno_sec_mult2);
      
      }else{
         
         console.log('nome vazio na secao');
      
      }

   /*esconde o menu*/  
   }else{
      
      flutua.style.display = 'none';

      if(nome_aluno_mult2 != ''){

         if(localStorage.getItem("nome_aluno_mult2") != null){
         
            nome_aluno_sec_mult2 = localStorage.getItem("nome_aluno_mult2");
         
         }

         /*antes de inserir o nome do input na secao verifica se sao iguais*/
         if( nome_aluno_sec_mult2 == nome_aluno_mult2 ){
         
            /*nomes iguais não há necessidade de escluir dados*/
           
         }else{
            
            /*se nao apagar os dados, eles são incorporados ao novo nome*/
            // if ( confirm('Apagar Histórico de ' + nome_aluno_sec_mult2 + '?') ) {
            //    limpar_hist();
            // }

         }

         /*apagando ou nao os dados do historico, o nome vai mudar*/
         localStorage.setItem("nome_aluno_mult2", nome_aluno_mult2);

         console.log('salvou nome na secao: ' + nome_aluno_mult2); 

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

   const _rru1 = document.getElementById("_rru1");
   const _rrd1 = document.getElementById("_rrd1");
   const _rrc1 = document.getElementById("_rrc1");
   const _rrm1 = document.getElementById("_rrm1");

   return _rrm1.innerText+_rrc1.innerText+_rrd1.innerText+_rru1.innerText+"";

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

   var produto = in1*in2;

   console.log(in1+"x"+in2+"="+ires+">>"+produto);

   if( produto == res){
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

function get_obj_conta_mult2(){

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

   var pont = localStorage.getItem("pontos_mult2");
   var loc_err = localStorage.getItem("erros_mult2");
   var loc_pul = localStorage.getItem("pulos_mult2");

   var ponti = parseInt(pont, 10);
   var loc_erri = parseInt(loc_err, 10);
   var loc_puli = parseInt(loc_pul, 10);

   var pontt = document.getElementById("pontu");
   var input_err = document.getElementById("erros");
   var input_pul = document.getElementById("pulos");

   console.log('ponti1:' + ponti);


   if(JSON.parse(localStorage.getItem("arr_obj_err_mult2")) != null){
       arr_obj_err = JSON.parse(localStorage.getItem("arr_obj_err_mult2"));
   }
   if(JSON.parse(localStorage.getItem("arr_obj_acer_mult2")) != null){
       arr_obj_acer = JSON.parse(localStorage.getItem("arr_obj_acer_mult2"));
   }
   if(JSON.parse(localStorage.getItem("arr_obj_pul_mult2")) != null){
       arr_obj_pul = JSON.parse(localStorage.getItem("arr_obj_pul_mult2"));
   }

   // console.log('arr_txt_err secao: ' + arr_obj_err);
   // console.log('arr_txt_acer secao: ' + arr_obj_acer);
   // console.log('arr_txt_pul secao: ' + arr_obj_pul);

   var obj_conta = get_obj_conta_mult2();

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

   localStorage.setItem("pontos_mult2", ponti);
   localStorage.setItem("erros_mult2", loc_erri);
   localStorage.setItem("pulos_mult2", loc_puli);

   localStorage.setItem("arr_obj_err_mult2", JSON.stringify(arr_obj_err));
   localStorage.setItem("arr_obj_acer_mult2", JSON.stringify(arr_obj_acer));
   localStorage.setItem("arr_obj_pul_mult2", JSON.stringify(arr_obj_pul));

   var tempo_mult2 = document.getElementById("relg").innerText;

   localStorage.setItem("tempo_mult2", tempo_mult2);
   
   imprimir_hist();

}

function verificaStorage(){
   var pon = 0;
   var pont = localStorage.getItem("pontos_mult2");
   var ponti = parseInt(pont, 10);

   var pon_err = 0;
   var pont_err = localStorage.getItem("erros_mult2");
   var ponti_err = parseInt(pont_err, 10);

   var pon_pul = 0;
   var pont_pul = localStorage.getItem("pulos_mult2");
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

function memoriza_mult2(){
   
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

    //altera cor de fundo do titulo para avisar que há dados no hitorico ou pontos
   aviso_dados();

   //atalho para abrir link pelo veyon master e apagar dados e pontos sem confirmação, exemplo: pelo parametro get usando a chave del all ou seja delall=1
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
   //.../adicao1.html?del
   if(chave == 'del'){
      //perigoso: apaga tudo sem confirmação
      limpar_hist();
      resetar_noconfirm();
      window.history.replaceState("object or string", "Title", "multiplicacao2.html");
   }

   gu1 = document.getElementById('u1_');
   gd1 = document.getElementById('d1_');
   gc1 = document.getElementById('c1_');
   gm1 = document.getElementById('m1_');

   gu2 = document.getElementById('u2');
   gd2 = document.getElementById('d2');
   gc2 = document.getElementById('c2');
   gm2 = document.getElementById('m2');

   /*escondendo o menu flutuante*/
   const flutua = document.getElementById("flutua");
   flutua.style.display = 'none';

   limpa_anime();

   puloss = true;

   // document.getElementById('ajuda').checked = false;

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

   const _ru1 = document.getElementById("_ru1");
   const _rd1 = document.getElementById("_rd1");
   const _rc1 = document.getElementById("_rc1");
   const _rm1 = document.getElementById("_rm1");

   const u1 = document.getElementById("u1");
   const d1 = document.getElementById("d1");
   const c1 = document.getElementById("c1");
   const m1 = document.getElementById("m1");

   _ru1.innerText = u1.innerText;
   _rd1.innerText = d1.innerText;
   _rc1.innerText = c1.innerText;
   _rm1.innerText = m1.innerText;

}

function zera_result(){

   document.getElementById("_ru1").innerText = 0;
   document.getElementById("_rd1").innerText = 0;
   document.getElementById("_rc1").innerText = 0;
   document.getElementById("_rm1").innerText = 0;

   document.getElementById("_rd1a").innerText = 0;

   document.getElementById("_rd2").innerText = 0;
   document.getElementById("_rc2").innerText = 0;
   document.getElementById("_rm2").innerText = 0;

   document.getElementById("_rd2a").innerText = 0;

   document.getElementById("_rru1").innerText = 0;
   document.getElementById("_rrd1").innerText = 0;
   document.getElementById("_rrc1").innerText = 0;
   document.getElementById("_rrm1").innerText = 0;

   document.getElementById("_rrd1a").innerText = 0;


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

   const _rd1 = document.getElementById("_rd1");
   const _rc1 = document.getElementById("_rc1");
   
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
         _rd1.innerText = d1m+"";
         _rc1.innerText = c1m+"";
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
            _rd1.innerText = d1m+"";
            _rc1.innerText = c1m+"";
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

   const _rc1 = document.getElementById("_rc1");
   const _rm1 = document.getElementById("_rm1");
   
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
         _rc1.innerText = c1m+"";
         _rm1.innerText = m1m+"";
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
            _rc1.innerText = c1m+"";
            _rm1.innerText = m1m+"";
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

      localStorage.setItem("pontos_mult2", 0);
      localStorage.setItem("erros_mult2", 0);
      localStorage.setItem("pulos_mult2", 0);
      verificaStorage();

   }

}

function resetar_noconfirm(){
   console.log('Apagando os dados de sessão exibidos no html sem confirmação');

      //zera os dados na sessão
      localStorage.setItem("pontos_mult2", 0);
      localStorage.setItem("erros_mult2", 0);
      localStorage.setItem("pulos_mult2", 0);
      
      //pega os dados da sessão e escreve no html
      verificaStorage();

}

function limpar_hist(){

   localStorage.setItem("arr_obj_err_mult2", null);
   localStorage.setItem("arr_obj_acer_mult2", null);
   localStorage.setItem("arr_obj_pul_mult2", null);

}

function imprimir_hist(){

   // if(JSON.parse(localStorage.getItem("arr_obj_err_mult2")) != null){
   //     arr_obj_err = JSON.parse(localStorage.getItem("arr_obj_err_mult2"));
   // }
   // if(JSON.parse(localStorage.getItem("arr_obj_acer_mult2")) != null){
   //     arr_obj_acer = JSON.parse(localStorage.getItem("arr_obj_acer_mult2"));
   // }
   // if(JSON.parse(localStorage.getItem("arr_obj_pul_mult2")) != null){
   //     arr_obj_pul = JSON.parse(localStorage.getItem("arr_obj_pul_mult2"));
   // }

   if (localStorage.hasOwnProperty("arr_obj_err_mult2")) {
      
      JSON.parse( localStorage.getItem("arr_obj_err_mult2") ).forEach(objconta => {
      
         console.log('Erro: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

   }

   if (localStorage.hasOwnProperty("arr_obj_acer_mult2")) {
      
      JSON.parse( localStorage.getItem("arr_obj_acer_mult2") ).forEach(objconta => {
      
         console.log('Acerto: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

   }

   if (localStorage.hasOwnProperty("arr_obj_pul_mult2")) {
      
      JSON.parse( localStorage.getItem("arr_obj_pul_mult2") ).forEach(objconta => {
      
         console.log('Pulo: ' + objconta.num1 + ' - ' + objconta.num2 + ' = ' + objconta.numr );

      }); 

   }

}

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

   const _rru1 = document.getElementById("_rru1");
   const _rrd1 = document.getElementById("_rrd1");
   const _rrc1 = document.getElementById("_rrc1");
   const _rrm1 = document.getElementById("_rrm1");

   exibe.innerText = 
      m2.innerText+c2.innerText+d2.innerText+u2.innerText + " x " + 
      m1.innerText+c1.innerText+d1.innerText+u1.innerText + " = " + 
      _rrm1.innerText+_rrc1.innerText+_rrd1.innerText+_rru1.innerText;

}

function exibir_mult2(){

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

   const _ru1 = document.getElementById("_ru1");
   const _rd1 = document.getElementById("_rd1");
   const _rc1 = document.getElementById("_rc1");
   const _rm1 = document.getElementById("_rm1");

   const vca = document.getElementById("vca");
   const vda = document.getElementById("vda");
   const vma = document.getElementById("vma");

   const vc = document.getElementById("vc");
   const vd = document.getElementById("vd");
   const vm = document.getElementById("vm");
   
  

   const _vd = document.getElementById("_vd");
   const _vc = document.getElementById("_vc");
   const _vm = document.getElementById("_vm");

   //console.log(exibe.innerText);

   exibe.innerText = 
      m1.innerText+c1.innerText+d1.innerText+u1.innerText + " x " + 
      m2.innerText+c2.innerText+d2.innerText+u2.innerText + " = " + 
      _rm1.innerText+_rc1.innerText+_rd1.innerText+_ru1.innerText;

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
   //Ajustes iniciais
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
      // if(reagru){
      //    document.getElementById('reagr').checked = true;
      // }else{
      //    document.getElementById('reagr').checked = false;
      // }

      /*controlando o número de digitos que os números devem ter*/
      var de = document.getElementById('de');
      var dei = parseInt(de.value, 10);

      console.log('de:'+de.value);

      var de2 = document.getElementById('de2');
      var de2i = parseInt(de2.value, 10);

      console.log('de2:'+de2.value);
     
      var ate = document.getElementById('ate');
      var atei = parseInt(ate.value, 10);

      console.log('ate:'+ate.value);

      var ate2 = document.getElementById('ate2');
      var ate2i = parseInt(ate2.value, 10);

      console.log('ate2:'+ate2.value);

      //não permitimos apenas 1 digito no multiplicador
      if(de2i < 10){
         var de2i = 10;
         var de2s = de2i;
      }

      if(ate2i < 10){
         var ate2i = 10;
         var ate2s = ate2i;
      }

      //ordenando os numeros corretamente (caso digitem de <maior> até <menor>!!! )
      if(dei > atei){
         var temp = dei;
         dei = atei;
         atei = temp;
      }

      //multiplicador
      if(de2i > ate2i){
         var temp = de2i;
         de2i = ate2i;
         ate2i = temp;
      }

      if(dei>0 && dei<=9999){
         var des = dei;
      }else{
         var des = 9999;
      }

      //multiplicador
      if(de2i>0 && de2i<=9999){
         var de2s = de2i;
      }else{
         var de2s = 9999;
      }

      if(atei>0 && atei<=9999){
         var ates = atei;
      }else{
         var ates = 9999;
      }

      //multiplicador
      if(ate2i>0 && ate2i<=9999){
         var ate2s = ate2i;
      }else{
         var ate2s = 9999;
      }

      console.log('de2s:'+de2s);
      console.log('ate2s:'+ate2s);

      verifica = true;

      verifica_err = true;

      var nlimitado = true;

      var num1 = 0;
      var num2 = 0;

   //gerando números que figure um multiplicação por apenas um dígito
   if(um_dig){

      num2 = getRandomInt(de2s, ate2s);

      while(nlimitado){
         
         console.log('procurando numeros que ao multiplicar não extrapolem 4 digitos');

         num1 = getRandomInt(des, ates);

         prod = num1 * num2;

         if( prod < 10000 ){

            console.log('produto: ' + num1 + ' x ' + num2 + ' = ' + prod + ' aceito.');
            nlimitado = false;

         }else{
            console.log('produto: ' + num1 + ' x ' + num2 + ' = ' + prod + ' extrapolou 9999.');
         }

      }

   }else if(dois_dig){

      num2 = getRandomInt(de2s, ate2s);

      while(nlimitado){
         
         console.log('procurando numeros que ao multiplicar não extrapolem 4 digitos');

         num1 = getRandomInt(des, ates);

         prod = num1 * num2;

         if( prod < 10000 ){

            console.log('produto: ' + num1 + ' x ' + num2 + ' = ' + prod + ' aceito.');
            nlimitado = false;

         }else{
            console.log('produto: ' + num1 + ' x ' + num2 + ' = ' + prod + ' extrapolou 9999.');
         }

      }

   //ainda não implementado
   }else if(tres_dig){

   }

   //false: não completa os digitos vazios com zero
   set_num1(num1, false);
   set_num2(num2, false);

   //limpa cores
   limpa_cor_vai1();

   //limpa cores fatores
   limpa_cor_fat();
   
   //limpa valores
   limpa_val_vai1();

   //limpa resultado
   limpa_res();

   //exibe a operação e seu resultado dentro do retangulo
   exibir();

   //limpando a tabuada
   visor_par.innerText = '[Tabuada]';
   visor_res.innerText = '';


}

function novo_mult2(){
   
   /*ajuste inicial*/
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

   //memoriza_mult2();

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
      document.getElementById("_ru1").innerText = document.getElementById("u1").innerText;
      document.getElementById("_rd1").innerText = document.getElementById("d1").innerText;
      document.getElementById("_rc1").innerText = document.getElementById("c1").innerText;
      document.getElementById("_rm1").innerText = document.getElementById("m1").innerText;
   }
}

function limpa_result(){

   document.getElementById("_ru1").innerText = 0;
   document.getElementById("_rd1").innerText = 0;
   document.getElementById("_rc1").innerText = 0;
   document.getElementById("_rm1").innerText = 0;

   document.getElementById("_rd1a").innerText = 0;

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
      
      //limpa cores
      limpa_cor_vai1();

      //limpa cores fatores
      limpa_cor_fat();
      
      //limpa valores
      limpa_val_vai1();

      //limpa resultado
      limpa_res();

      //exibe a operação e seu resultado dentro do retangulo
      exibir();

      //limpando a tabuada
      visor_par.innerText = '[Tabuada]';
      visor_res.innerText = '';

      //zera o resultado da subtração
      //limpa_result();

      //zera o reagrupamento
      //limpa_regrup();

      //remove os bloqueior (traço inclinado que corta os números reagrupados)
      //remove_block();

      //limpa as cores do reagrupamento
      //limpa_cores();

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

   //desabilita tabuada (e inserção automatica de valores) quando iniciamos a soma
   limpa_tabuada();

   const _rru1 = document.getElementById("_rru1");
   
   var rui = parseInt(_rru1.innerText, 10);

   if( rui > 8){
       _rru1.innerText = 9;
   }else{
       _rru1.innerText = rui+1;
   }

   //_rru1.innerText = (rui+1)+"";

   exibir();
   
}

function rumenos() {

   limpa_tabuada();

   const _rru1 = document.getElementById("_rru1");
   
   var rui = parseInt(_rru1.innerText, 10);

   if( rui < 1){
       _rru1.innerText = 0;
   }else{
       _rru1.innerText = rui-1;
   }

   //_rru1.innerText = (rui-1)+"";
   
   exibir();

}

function rdmais() {

   limpa_tabuada();

   const _rrd1 = document.getElementById("_rrd1");

   const rc1 = document.getElementById("rc1");
   const rrc1 = document.getElementById("rrc1");
   
   const _rrc1a = document.getElementById("_rrc1a");
   
   var rdi = parseInt(_rrd1.innerText, 10);

   const _vc1 = document.getElementById("_vc1");
  
   var conts = _vc1.innerText+_rrd1.innerText;
   var conti = parseInt(conts, 10);
   conti = conti + 1;
   if(conti>-1 && conti<10){
      _rrd1.innerText = conti;
      //_rrc1a.innerText = conti;
   }else{

      if(conti>9 && conti <100){
            
            var contis = conti+'';
            
            var contarr = contis.split('');
            
            var rud = parseInt(contarr[1], 10);
            
            var ruc = parseInt(contarr[0], 10);
            
            _rrd1.innerText = rud;
            
            //_rca.innerText = ruc;
            _rrc1a.innerText = ruc;
            _vc1.innerText = ruc;

            //console.log(ruc +'>>'+ rud);

            //faz efeito no acrescimo das dezenas
            if(rud == 0){
               
               if(animar){

                  _vc1.style.animation = "none";
                  _rrc1a.style.animation = "none";
                  rrc1.style.animation = "none";
                  rc1.style.animation = "none";
                  
                  setTimeout(() => _rrc1a.style.animation = 
                  "soberr_c 2s linear, pisca_c 1s linear"
                  , 5);
                  setTimeout(() => _vc1.style.animation = 
                  "ultimo_c 2s linear"
                  , 5);
                  setTimeout(() => rrc1.style.animation = 
                  "pisca_c 2s linear"
                  , 5);
                  setTimeout(() => rc1.style.animation = 
                  "pisca_c 2s linear"
                  , 5);

               }

            }else{

               _rrd1.innerText = rud;
               _rrc1a.innerText = ruc;
               _vc1.innerText = ruc;
            
            }
            
      }

   }

  // _rrd1.innerText = rdi+1;

   //_rrd1a.innerText = rdi+1;
   
   exibir();

}

function rdmenos() {

   limpa_tabuada();

   const _vc1 = document.getElementById("_vc1");

   const _rrd1 = document.getElementById("_rrd1");
   
   const rc1 = document.getElementById("rc1");
   const rrc1 = document.getElementById("rrc1");

   const _rrc1a = document.getElementById("_rrc1a");

   var rdi = parseInt(_rrd1.innerText, 10);


   var conts = _vc1.innerText+_rrd1.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   //console.log('contis >> '+contis);

   if(conti>-1 && conti<10){
      
         var contarr = contis.split('');

         if(contarr.length > 1 ){

            var rud = parseInt(contarr[1], 10);
         
            var ruc = parseInt(contarr[0], 10);

            _rrd1.innerText = rud;
            
            //_rc.innerText = ruc+"";
            _rrc1a.innerText = ruc;
            _vc1.innerText = ruc+"";

            //console.log('-1<conti<10::rud: ' + rud);

            //console.log('-1<conti<10::ruc: ' + ruc);

         }else{

            var rud = parseInt(contarr[0], 10);

            console.log('rud: ' + rud);

            var ruc = 0;

            if(rud == 9){

               _rrd1.innerText = rud;
               

               _rrc1a.innerText = ruc;
               _vc1.innerText = ruc;
               //_rc.innerText = ruc+"";
               //_rca.innerText = ruc+"";



               if(animar){

                  _vc1.style.animation = "none";
                  _rrc1a.style.animation = "none";
                  rrc1.style.animation = "none";
                  rc1.style.animation = "none";
                  
                  setTimeout(() => _rrc1a.style.animation = 
                  "soberr_c 2s linear, pisca_c 1s linear"
                  , 5);
                  setTimeout(() => _vc1.style.animation = 
                  "ultimo_c 2s linear"
                  , 5);
                  setTimeout(() => rrc1.style.animation = 
                  "pisca_d 2s linear"
                  , 5);
                  setTimeout(() => rc1.style.animation = 
                  "pisca_c 2s linear"
                  , 5);

               }

            }else{

               _rrd1.innerText = contis;
               
               _vc1.innerText = "0";
               _rrc1a.innerText = 0;
               //_rc.innerText = "0";
               //_rca.innerText = "0";

            }
         
         }
         
   }else

      if(conti>9 && conti <100){

         var contarr = contis.split('');
         
         var rud = parseInt(contarr[1], 10);
         
         var ruc = parseInt(contarr[0], 10);

         //console.log('9<conti<100::ruc: ' + ruc);

         //console.log('9<conti<100::rud: ' + rud);

         //faz efeito no acrescimo das dezenas
         if(rud == 9){
            
            _rrd1.innerText = rud;

            _vc1.innerText = ruc;
            _rrc1a.innerText = ruc;

            //_rca.innerText = ruc;
            
            _vc1.style.animation = "none";
            _rrc1a.style.animation = "none";
            rrc1.style.animation = "none";
            rc1.style.animation = "none";
            
            setTimeout(() => _rrc1a.style.animation = 
            "soberr_c 2s linear, pisca_c 1s linear"
            , 5);
            setTimeout(() => _vc1.style.animation = 
            "ultimo_c 2s linear"
            , 5);
            setTimeout(() => rrc1.style.animation = 
            "pisca_d 2s linear"
            , 5);
            setTimeout(() => rc1.style.animation = 
            "pisca_c 2s linear"
            , 5);

         }else{

            _rrd1.innerText = rud+"";
            
            _vc1.innerText = ruc+"";
            _rrc1a.innerText = ruc;
            //_rca.innerText = ruc+"";
         
         }
         
   }

   //_rrd1.innerText = (rdi-1)+"";

   //_rrd1a.innerText = (rdi-1)+"";
   
   exibir();

}

function rcmais() {

   limpa_tabuada();

   const _rrc1 = document.getElementById("_rrc1");
   
   const _rrm1a = document.getElementById("_rrm1a");

   var rci = parseInt(_rrc1.innerText, 10);

   const _vm1 = document.getElementById("_vm1");
   //const _vc1 = document.getElementById("_vc1");
  
   var conts = _vm1.innerText+_rrc1.innerText;
   var conti = parseInt(conts, 10);
   conti = conti + 1;
   if(conti>-1 && conti<10){
      _rrc1.innerText = conti;
      //_rrm1a.innerText = conti;
   }else{

      if(conti>9 && conti <100){
            
            var contis = conti+'';
            
            var contarr = contis.split('');
            
            var ruc = parseInt(contarr[1], 10);
            
            var rum = parseInt(contarr[0], 10);
            
            _rrc1.innerText = ruc;

            _rrm1a.innerText = rum;
            _vm1.innerText = rum;

            //console.log(ruc +'>>'+ rud);

            //faz efeito no acrescimo das dezenas
            if(ruc == 0){
               
               if(animar){

                  _vm1.style.animation = "none";
                  _rrm1a.style.animation = "none";
                  rrm1.style.animation = "none";
                  rm1.style.animation = "none";
                  
                  setTimeout(() => _rrm1a.style.animation = 
                  "soberr_m 2s linear, pisca_m 1s linear"
                  , 5);
                  setTimeout(() => _vm1.style.animation = 
                  "ultimo_m 2s linear"
                  , 5);
                  setTimeout(() => rrm1.style.animation = 
                  "pisca_m 2s linear"
                  , 5);
                  setTimeout(() => rm1.style.animation = 
                  "pisca_m 2s linear"
                  , 5);

               }

            }else{

               _rrc1.innerText = ruc+"";
               _rrm1a.innerText = rum;
               _vm1.innerText = rum+"";
            
            }
            
      }

   }

   //_rrc1.innerText = (rci+1)+"";
   
   exibir();

}

function rcmenos() {

   limpa_tabuada();

   const _vm1 = document.getElementById("_vm1");

   const _rrc1 = document.getElementById("_rrc1");

   const rm1 = document.getElementById("rm1");
   const rrm1 = document.getElementById("rrm1");

   const _rrm1a = document.getElementById("_rrm1a");
   
   var rci = parseInt(_rrc1.innerText, 10);


   var conts = _vm1.innerText+_rrc1.innerText;
   
   var conti = parseInt(conts, 10);

   conti = conti - 1;

   contis = conti+"";

   //console.log('contis >> '+contis);

   if(conti>-1 && conti<10){
      
         var contarr = contis.split('');

         if(contarr.length > 1 ){

            var ruc = parseInt(contarr[1], 10);
         
            var rum = parseInt(contarr[0], 10);

            _rrc1.innerText = ruc;
            
            //_rc.innerText = ruc+"";
            _vm1.innerText = rum;
            _rrm1a.innerText = rum;

            //console.log('-1<conti<10::rud: ' + rud);

            //console.log('-1<conti<10::ruc: ' + ruc);

         }else{

            var ruc = parseInt(contarr[0], 10);

            //console.log('rud: ' + rud);

            var rum = 0;

            if(ruc == 9){

               _rrc1.innerText = ruc;
               
               _vm1.innerText = rum;
               _rrm1a.innerText = rum;
               //_rc.innerText = ruc+"";
               //_rca.innerText = ruc+"";

               if(animar){

                  _vm1.style.animation = "none";
                  _rrm1a.style.animation = "none";
                  rrm1.style.animation = "none";
                  rm1.style.animation = "none";
                  
                  setTimeout(() => _rrm1a.style.animation = 
                  "soberr_m 2s linear, pisca_m 1s linear"
                  , 5);
                  setTimeout(() => _vm1.style.animation = 
                  "ultimo_m 2s linear"
                  , 5);
                  setTimeout(() => rrm1.style.animation = 
                  "pisca_m 2s linear"
                  , 5);
                  setTimeout(() => rm1.style.animation = 
                  "pisca_m 2s linear"
                  , 5);

               }

            }else{

               _rrc1.innerText = contis;
               
               _vm1.innerText = 0;
               _rrm1a.innerText = 0;
               //_rc.innerText = "0";
               //_rca.innerText = "0";

            }
         
         }
         
   }else

      if(conti>9 && conti <100){

         var contarr = contis.split('');
         
         var ruc = parseInt(contarr[1], 10);
         
         var rum = parseInt(contarr[0], 10);

         //console.log('9<conti<100::ruc: ' + ruc);

         //console.log('9<conti<100::rud: ' + rud);

         //faz efeito no acrescimo das dezenas
         if(ruc == 9){
            
            _rrc1.innerText = ruc;
            
            _vm1.innerText = rum;
            _rrm1a.innerText = rum;
            

            //_rca.innerText = ruc;
            
            if(animar){

               _vm1.style.animation = "none";
               _rrm1a.style.animation = "none";
               rrm1.style.animation = "none";
               rm1.style.animation = "none";
               
               setTimeout(() => _rrm1a.style.animation = 
               "soberr_m 2s linear, pisca_m 1s linear"
               , 5);
               setTimeout(() => _vm1.style.animation = 
               "ultimo_m 2s linear"
               , 5);
               setTimeout(() => rrm1.style.animation = 
               "pisca_m 2s linear"
               , 5);
               setTimeout(() => rm1.style.animation = 
               "pisca_m 2s linear"
               , 5);

            }

         }else{

            _rrc1.innerText = ruc;
            
            _vm1.innerText = rum;
            _rrm1a.innerText = rum;
            //_rca.innerText = ruc+"";
         
         }
         
   }

   //_rrc1.innerText = (rci-1)+"";
   
   exibir();

}

function rmmais() {

   limpa_tabuada();

   const _rrm1 = document.getElementById("_rrm1");
   
   var rmi = parseInt(_rrm1.innerText, 10);

   if(rmi > 8){
      _rrm1.innerText = 9;
   }else{
      _rrm1.innerText = rmi+1;
   }

   //_rrm1.innerText = (rmi+1)+"";
   
   exibir();

}

function rmmenos() {

   limpa_tabuada();

   const _rrm1 = document.getElementById("_rrm1");
   
   var rmi = parseInt(_rrm1.innerText, 10);

   if(rmi < 1){
      _rrm1.innerText = 0;
   }else{
      _rrm1.innerText = rmi-1;
   }

   //_rrm1.innerText = (rmi-1);
   
   exibir();

}

function limpa_tabuada(){

   //limpando a tabuada
   visor_par.innerText = '[Tabuada]';
   visor_res.innerText = '';

   //limpa cores dos botões btn1 e btn2.
   mult_tf_cor(visor_bt1);
   mult_tf_cor(visor_bt2);

}

function prepara_impr(){

   if(localStorage.getItem("nome_aluno_mult2") != null){
      
      nome_aluno_mult2 = localStorage.getItem("nome_aluno_mult2");
   
      document.getElementById("nome_aln").value = nome_aluno_mult2;
   
      console.log('nome recuperado da secao: ' + nome_aluno_mult2);
   
   }

   if(localStorage.getItem("tempo_mult2") != null){
      
      tempo_mult2 = localStorage.getItem("tempo_mult2");
   
      document.getElementById("tempo_mult2").innerText = tempo_mult2;
   
      console.log('tempo recuperado da secao: ' + tempo_mult2);
   
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

   // if(chave == 'del'){
   //    if(confirm('Apagar histórico de impressão?')){
   //       limpar_hist();
   //    }
   // }

   var erros = document.getElementById('erros');
   var pulos = document.getElementById('pulos');
   var acertos = document.getElementById('acertos');

   var erros_lin = document.getElementById('erros_lin');
   var pulos_lin = document.getElementById('pulos_lin');
   var acertos_lin = document.getElementById('acertos_lin');

   var n_err = document.getElementById('n_err');
   var n_pul = document.getElementById('n_pul');
   var n_ace = document.getElementById('n_ace');
   var n_err_lin = document.getElementById('n_err_lin');
   var n_pul_lin = document.getElementById('n_pul_lin');
   var n_ace_lin = document.getElementById('n_ace_lin');

   var html_err = '';
   var html_ace = '';
   var html_pul = '';

   var html_err_lin = '';
   var html_ace_lin = '';
   var html_pul_lin = '';

   if (localStorage.hasOwnProperty("arr_obj_err_mult2")) {
      
      var parse = JSON.parse( localStorage.getItem("arr_obj_err_mult2") );

      if(parse != null){

         n_err.innerText = "("+parse.length+")";
         n_err_lin.innerText = "("+parse.length+")";
   
         parse.forEach(objconta => {
            
            /*não será impresso os valores*/
            if(chave=='his' && valor=='1'){

               html_err = html_err + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span></span></div>";
               html_err_lin = html_err_lin + "<li>"+objconta.num2+" x "+objconta.num1+"</li>";

            }else{

               html_err = html_err + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span>"+objconta.numr+"</span></div>";
               html_err_lin = html_err_lin + "<li>"+objconta.num2+" x "+objconta.num1+" = "+objconta.numr+"</li>";
            
            }
            console.log('Erro: ' + objconta.num2 + ' x ' + objconta.num1 + ' = ' + objconta.numr );

         }); 

      }

      erros.innerHTML = html_err;
      erros_lin.innerHTML = '<ol>'+html_err_lin+'</ol>';

   }

   if (localStorage.hasOwnProperty("arr_obj_acer_mult2")) {
      
      var parse = JSON.parse( localStorage.getItem("arr_obj_acer_mult2") );

      if(parse != null){

         n_ace.innerText = "("+parse.length+")";
         n_ace_lin.innerText = "("+parse.length+")";

         parse.forEach(objconta => {
            
            /*não será impresso os valores*/
            if(chave=='his' && valor=='1'){

               html_ace = html_ace + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span></span></div>";
               html_ace_lin = html_ace_lin + "<li>"+objconta.num2+" x "+objconta.num1+"</li>";
            
            }else{

               html_ace = html_ace + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span>"+objconta.numr+"</span></div>";
               html_ace_lin = html_ace_lin + "<li>"+objconta.num2+" x "+objconta.num1+" = "+objconta.numr+"</li>";
               
            }
            console.log('Acerto: ' + objconta.num2 + ' x ' + objconta.num1 + ' = ' + objconta.numr );

         }); 

      }

      acertos.innerHTML = html_ace;
      acertos_lin.innerHTML = '<ol>'+html_ace_lin+'</ol>';

   }

   if (localStorage.hasOwnProperty("arr_obj_pul_mult2")) {
      
      var parse = JSON.parse( localStorage.getItem("arr_obj_pul_mult2") );

      if(parse != null){

         n_pul.innerText = "("+parse.length+")";
         n_pul_lin.innerText = "("+parse.length+")";

         parse.forEach(objconta => {
         
            /*não será impresso os valores*/
            if(chave=='his' && valor=='1'){

               html_pul = html_pul + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span></span></div>";
               html_pul_lin = html_pul_lin + "<li>"+objconta.num2+" x "+objconta.num1+"</li>";
            
            }else{
            
               html_pul = html_pul + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span>"+objconta.numr+"</span></div>";
               html_pul_lin = html_pul_lin + "<li>"+objconta.num2+" x "+objconta.num1+" = "+objconta.numr+"</li>";

            }
            console.log('Pulo: ' + objconta.num2 + ' x ' + objconta.num1 + ' = ' + objconta.numr );

         });

      } 

      pulos.innerHTML = html_pul;
      pulos_lin.innerHTML = '<ol>'+html_pul_lin+'</ol>';

   }
}

//altera-se a cor de fundo do titulo amarelo como aviso
function aviso_dados(){

   var titulo = document.getElementById("principal");

   var parse_err_mult2_st = false;
   var parse_acer_mult2_st = false;
   var parse_pul_mult2_st = false;

    if (localStorage.hasOwnProperty("arr_obj_err_mult2")) {
         
         var parse_err_mult2 = JSON.parse( localStorage.getItem("arr_obj_err_mult2") );

         if(parse_err_mult2 != null && parse_err_mult2.length > 0){
             parse_err_mult2_st = true;
         }
    }
            
   if (localStorage.hasOwnProperty("arr_obj_acer_mult2")) {
         
         var parse_acer_mult2 = JSON.parse( localStorage.getItem("arr_obj_acer_mult2") );

         if(parse_acer_mult2 != null && parse_acer_mult2.length > 0){
             parse_acer_mult2_st = true;
         }
    }

   if (localStorage.hasOwnProperty("arr_obj_pul_mult2")) {
         
         var parse_pul_mult2 = JSON.parse( localStorage.getItem("arr_obj_pul_mult2") );

         if(parse_pul_mult2 != null && parse_pul_mult2.length > 0){
             parse_pul_mult2_st = true;
         }
   }

   var mult_pt = localStorage.getItem("pontos_mult2");
   var mult_er = localStorage.getItem("erros_mult2");
   var mult_pu = localStorage.getItem("pulos_mult2");

   var mult_pt_i = parseInt(mult_pt, 10);
   var mult_er_i = parseInt(mult_er, 10);
   var mult_pu_i = parseInt(mult_pu, 10);

   //caso haja dados no histórico ou pontos acumulado altera-se a cor de fundo do titulo amarelo como aviso
   if( parse_err_mult2_st ||  parse_acer_mult2_st || parse_pul_mult2_st || mult_pt_i > 0 || mult_er_i > 0 || mult_pu_i > 0 ){
        titulo.style.background = "#dfdf7f";
   }else{
       titulo.style.background = "#97e697";
   }

}