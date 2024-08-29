var verifica = true;
var verifica_err = true;
var verifica_pul = true;

var ajuda = false;
var reagru = false;

var puloss = true;
var acertou = false;

var animar = false; /*desativando animação*/

//decidindo a quantidade de digitos do numero que vai ser gerado para o multiplicador
var um_dig = false;
var dois_dig = true;
var tres_dig = false;

//--------------------------------------------
/*algoritmo da divisão tentativa 2(com matriz arrays e objetos)*/
//-------------------------------------------

var nlin = ''; // 1,2,3,4,5,6,7,8,9,''
var ocol = ''; // m, c, d, u, ''
var pcol = ''; // dd, ds, q, r, ''

//permite o aluno fazer a divisão sem ajuda (automação de tabuada)
var solo = false;

//resultados parciais ao clicar nas celulas
   //dividendo inicial
   var dvd = 0;

   //divisor que sera usado no produto
   var dvsp = 0;
   
   //resultado parcial de uma divisão
   var rquo = '';

   //quociente selecionado para o produto
   var quop = '';

   //resultado do produto parcial 
   var rpro = '';

   //resultado de uma subtração 
   var rsub = '';

   //digito do dividendo a ser baixado
   var dvdb = '';

   //novo dividendo a ser dividido
   var ndvd = '';

   //guarda a ordem(m,c,d,u) e a parte(dd, ds, r, q) clicada para escrever o que o aluno digitar
   var escr_ocol = '';
   var escr_pcol = '';
   var escr_nlin = '';

   //sinal que permite o evento do teclado escrever na celula referenciada por escr_ocol e escr_pcol
   var escreva = false;

//ação ao clicar em qualquer célula da tabela
$('#tb_divisao tbody td').on('click', function() {
  
   //prerequisitos iniciais 
      // console.log( $(this).attr('class') );
      // console.log( $(this).attr('id') );
      // console.log( $(this).text() );
      // console.log( $(this).closest('tr').attr('class') );
      
      //localiza o nome da classe da linha clicada
      var lin = $(this).closest('tr').attr('class');

      //classes não encontradas
      if(lin == undefined){
         
         nlin = '';

      //elemento tr com três caracteres(letra, espaço, número). ex.: l 1, ou seja, linha 1
      }else if(lin.length > 2){
         
         var arlin = lin.split(' ');

         if(arlin[0] == 'l'){
            nlin = arlin[1];
         }else{
            nlin = '';
         }

      //elemento tr menos de 3 caracteres
      }else{
         nlin = '';
      }

      console.log( 'numero da linha: '+nlin );

      var col = $(this).attr('class');

      if(col == undefined){
         ocol = '';
         pcol = '';
      }else if(col.length > 2){
         var arcol = col.split(' ');
         if( (arcol[0] == 'm' || arcol[0] == 'c' || arcol[0] == 'd' || arcol[0] == 'u') && (arcol[1] == 'dd' || arcol[1] == 'ds' || arcol[1] == 'q' || arcol[1] == 'r') ){
            ocol = arcol[0];
            pcol = arcol[1];
         }else{
            ocol = '';
            pcol = '';
         }
      }else{
         ocol = '';
         pcol = '';
      }

      //guarda a ordem e a parte clicada para inserir valores digitado pelo usuario, apenas se for r>1 e q
      if(pcol=='r' || pcol=='q'){
         escr_ocol = ocol;
         escr_pcol = pcol;
         escr_nlin = nlin;
      }
      

      console.log( 'ordem(ocol): '+ocol );

      console.log( 'partes(pcol): '+pcol );

   //a usuario faz a divisão sem nenhuma ajuda
   if(solo){

      if(pcol == 'r' || pcol == 'q'){
         
         console.log('Usuário solo: faz sua propria divisão');
         //permite selecionar restos a partir da linha 2 e quociente
         un_sel_rr();
         un_sel_qu();
         selv(this, ocol, pcol);

         //permite digitar um número na celula
         //sinal que permite o evento do teclado escrever na celula referenciada por escr_ocol e escr_pcol
         escreva = true;
        

      }else{

         escreva = false;

      }

   }else{

      //não deixa escrever teclas digitadas
      escreva = false;

      //se clicarmos na linha 1
      if(nlin == 1){

         // visorp_msg('Passo 1: Escolher Dividendo...');

         //se clicarmos no dividendo
         if(pcol == 'dd'){

            visorp_msg('Passo 1.1: Escolher Dividendo  e...');

            //ideia: sempre que clicar no dividendo inicia-se a divisão novamente
            //f_div
            //f_div_1;
            //f_div_2 = false;
            //f_div_3 = false;

            //fase de divisão e seleção do dividendo está ativada
            if(f_div && f_div_1){

               //f_div
               //f_div_1;
               f_div_2 = false;
               f_div_3 = false;

               console.log( 'fase de divisão e seleção do dividendo está ativada');
               
               //seleciona o célula usando uma cor(verde)
               dvd = sel_dd(this, ocol, pcol);

            }

            /*
            //fase da subtração está ativada
            if(f_sub && f_sub_1){

               //f_sub
               //f_sub_1;
               f_sub_2 = true;
               //f_div_3;

               //seleciona o dividendo para a subtração e guarda resultado
               rsub = sel_dds(this, ocol, pcol, rpro);


            }*/

            //a fase de baixar valores do dividendo
            if(f_bai && f_bai_1){

               visorp_msg('Passo 4.1: Escolher Novo Dividendo...');

               //f_bai
               //f_bai_1;
               f_bai_2 = true;
               //f_bai_3;

               //remove as seleções do dividendo e dos restos
               un_sel_dd();
               un_sel_rr();

               //seleciona valor do dividendo a ser baixado
               dvdb = sel_dd(this, ocol, pcol);

            }

         }

         //se clicarmos no divisor
         if(pcol == 'ds'){

            //a fase 1 da divisão esta ativa, ou seja há números selecionados no dividendo
            if(f_div && f_div_1){

               visorp_msg('Passo 1.2: Escolher Divisor e...');

               //f_div
               //f_div_1;
               f_div_2 = true;
               //f_div_3

               //seleciona o célula usando uma cor(verde)
               rquo = sel_ds(this, ocol, pcol);

               console.log('quo divisao:'+rquo);

            }


            //a fase 2 de escolha do quociente está ativa, ou seja, ha numeros selecionados no quociente
            if(f_mul && f_mul_1){

               visorp_msg('Passo 2.2: Multiplicar pelo Divisor e...');

               //seleciona a célula do divisor usando para o produto
               dvsp = sel_dsp(this, ocol, pcol);

               //f_mul
               //f_mul_1
               f_mul_2 = true;
               //f_mul_3

               //escreve o quociente
               // $(this).html(quo);

                console.log('dvsp:'+dvsp);

            }

            //já deve haver um novo dividendo selecionado. vamos reiniciar o processo de divisão
            if(f_bai && f_bai_1 && f_bai_2){

               visorp_msg('Passo 4.3: Continuar Dividindo!!!');

               f_div = true;
               f_div_1 = true;
               f_div_2 = true;
               //f_div_3

               f_bai = false;
               f_bai_1 = false;
               f_bai_2 = false;

               //seleciona o dividor e retorna o resultado da divisão
               rquo = sel_ds2(this, ocol, pcol);

               console.log('resultado da divisão rquo:'+rquo);

            }

         }

      }

      //se clicarmos na linha 3
      if(nlin == 3){

         //se clicarmos no quociente
         if(pcol == 'q'){

            //as 3 primeiras fases foram concluidas
            if(f_div && f_div_1 && f_div_2 && f_div_3  ){

               visorp_msg('Passo 1.2: Escolher Quociente e...');

               f_div = false;
               f_div_1 = false;
               f_div_2 = false;
               f_div_3 = false;

               //inicia-se a proxima fase: produto
               f_mul = true;
               f_mul_1 = true;

               //limpa as cores do dividendo e divisor e quociente
               un_sel_dd();
               un_sel_ds();
               un_sel_qu();

            }else{

               visorp_msg('Passo 1.3: Escrever Quociente.');

               //as 3 primeiras fases estão ativadas
               if(f_div && f_div_1 && f_div_2 ){

                  //f_div
                  //f_div_1;
                  //f_div_2;
                  f_div_3 = true;

                  sel(this, ocol, pcol);

                  //escreve o quociente
                  $(this).html(rquo);

                  console.log('escreve quo:'+rquo);

                  exibir();


               }

            }

            //a fase da multiplicação está ativa
            if(f_mul && f_mul_1){

               visorp_msg('Passo 2.1: Escolher Quociente e...');

               //seleciona a célula do quociente usando uma cor(verde)
               quop = sel_qu(this, ocol, pcol);

               //f_mul
               //f_mul_1
               //f_mul_2 = true;
               //f_mul_3
               un_sel_rr();

               //escreve o quociente
               // $(this).html(quo);

                console.log('quop:'+quop);

            }

         }

      }

      //ação baseada nas partes(dd, ds, q, r): se clicarmos na parte do resto
      if( pcol == 'r'){

         //se linha for par: escreve produto; inicia subtração com a linha superior
         if(nlin % 2 == 0){

            console.log('se linha for par: escreve produto; inicia subtração com a linha superior');

            //passo 2: clicou encima do produto escrito: encerra produto e inicia a subtração
            if(f_mul && f_mul_1 && f_mul_2 && f_mul_3  ){

               visorp_msg('Passo 3.1: Fazer Subtração...');

               f_mul = false;
               f_mul_1 = false;
               f_mul_2 = false;
               f_mul_3 = false;

               //inicia-se a proxima fase: a subtração
               f_sub = true;
               f_sub_1 = true;

               //continue: limpar divisor, quociente
               
               //limpa as cores do dividendo e divisor e quociente
               //un_sel_dd();
               un_sel_ds();
               un_sel_qu();

               //mostra resto no visor i guarda o resultado desse produto
               rpro = sel_rs(this, ocol, pcol, nlin);

               console.log('Resultado da multiplicação:'+rpro);

               console.log('fase subtração iniciada');

               //f_sub
               //f_sub_1;
               f_sub_2 = true;
               //f_div_3;

               //seleciona o dividendo para a subtração e guarda resultado em rsub
               //rsub = sel_dds(this, ocol, pcol, rpro);
               rsub = sel_sub(this, ocol, pcol, nlin, rpro);


            //passo 1: escreve o produto
            }else{

               //as 3 primeiras fases da multiplicação estão ativadas
               if(f_mul && f_mul_1 && f_mul_2 ){

                  visorp_msg('Passo 2.3: Escrever produto.');

                  //f_mul
                  //f_mul_1;
                  //f_mul_2;
                  f_mul_3 = true;

                  sel(this, ocol, pcol);

                  //escreve o resto
                  //$(this).html(quo);
                  
                  //busca números do divisor selecionados
                  var dvs = get_ds();

                  //busca números do quociente selecionados
                  var quo = get_qu();

                  var mult = calc_mul(dvs, quo);

                  //console.log('quop multt:'+quo);

                  console.log('mult:'+mult);

                  //preenche e seleciona una linha de resto
                  set_r(this, ocol, pcol, nlin, mult);

                  console.log('fase multiplicação finalizada');

               }

            }

         }

         //se linha for impar: escreve subtração; baixa numero do dividendo
         if(nlin % 2 == 1){

            console.log('se linha for impar: escreve subtração; baixa numero do dividendo');

            //inserir o resultado da subtraçao
            if(f_sub && f_sub_1 && f_sub_2){

               visorp_msg('Passo 3.2: Escrever Subtração...');

               //f_sub
               //f_sub_1
               //f_sub_2;
               //f_sub_3 = true;

               //vamos escrever o resultado da subtração nas colunas dos restos
               set_rs(this, ocol, pcol, nlin, rsub);

               //finaliza subtração
               f_sub = false;
               f_sub_1 = false;
               f_sub_2 = false;
               //f_sub_3 = true;

               //inicia fase de baixar valores
               f_bai = true;
               f_bai_1 = true;

            }

            //baixa o valores do dividendo
            if(f_bai && f_bai_1 && f_bai_2){

               visorp_msg('Passo 4.2: Baixar Dividendo.');

               //f_bai
               //f_bai_1;
               //f_bai_2 = true;
               //f_bai_3;

               //remove as seleções do dividendo e dos restos
               un_sel_dd();
               //un_sel_rr();

               console.log('baixar o dvdb:'+dvdb);

               set(this, ocol, pcol, dvdb);

               //seleciona uma linha de resto e mostra no visor
               ndvd = sel_rs(this, ocol, pcol, nlin); //retur resto
               dvd = ndvd;

               //seleciona valor do dividendo a ser baixado
               //dvdb = sel_dd(this, ocol, pcol);

            }

            //escreve resto no span resto
            $('#resto').html( get_rs() );

         }

      }

   }

});

var rgbb = 'rgb(255, 255, 255)';


// function keyPressed(evt){
//     evt = evt || window.event;
//     var key = evt.keyCode || evt.which;
//     console.log('tecla:'+key);
//     return key;
//     //return String.fromCharCode(key); 
// }

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    console.log('tecla:'+key);
    
    //var k = keyPressed(evt);
    var str = String.fromCharCode(key);

    console.log('codigo da tecla:'+key);

    console.log('tecla pressionada:'+str);
    if(escreva){
         console.log('escrevendo...:'+str);
         var clas = '.l.'+escr_nlin+' > .'+escr_ocol+'.'+escr_pcol;
         console.log('na classe:'+clas);
         //0=48 9=57
         //tecla delete ou backspace pressionada
         if(key == 46 || key == 8){
            set_num_cl(clas, escr_ocol, escr_pcol, '');   
         }else{
            //permite apenas caractere de 0 a 9
            if(key > 47 && key < 58){
               set_num_cl(clas, escr_ocol, escr_pcol, str);   
            }
               
         }
         
         exibir();
         //escreve resto no span resto
         $('#resto').html( get_rs() );
         
    }
};

//escreve número na td ativa atraves dos numeros disponivel mostrados ao usuario
function tecl(num){

   //se num=1 este será o valor inserido na td ativa
   console.log('tlec:escrevendo...:'+num);
   var clas = '.l.'+escr_nlin+' > .'+escr_ocol+'.'+escr_pcol;
   console.log('tlec:na classe:'+clas);

   if(num == 'limp'){
      set_num_cl(clas, escr_ocol, escr_pcol, ''); 
   }else{
      set_num_cl(clas, escr_ocol, escr_pcol, num); 
   }

   exibir();
   //escreve resto no span resto
   $('#resto').html( get_rs() );


}


function set(_this, ocol, pcol, num){
   
   $(_this).html(num);

}

//preenche o resto, uma ordem por vez
function set_ro(lin, ocol, pcol, num){
   
   var cls = '.l.' + lin + ' > .' + ocol + '.' + pcol;

   var cel = $(cls);

   console.log('cel:'+cel);

   cel.html(num);
   
}

//escreve o resultado do produto do quociente pelo dividor nas colunas dos restos
function set_r(_this, ocol, pcol, nlin, num){

   var arr_num = (num+'').split('');

   var len = arr_num.length;

   //set_ro(1, 'm', 'r', 9);

   //inserindo restos
   if(pcol == 'r'){

      if( ocol == 'm' ){

         if(len > 0){
            set_ro(nlin, 'm', 'r', arr_num[0]);
            set_ro(nlin, 'c', 'r', arr_num[1]);
            set_ro(nlin, 'd', 'r', arr_num[2]);
            set_ro(nlin, 'u', 'r', arr_num[3]);
         }

      }
      if( ocol == 'c' ){

         if(len > 0){
            set_ro(nlin, 'c', 'r', arr_num[0]);
            set_ro(nlin, 'd', 'r', arr_num[1]);
            set_ro(nlin, 'u', 'r', arr_num[2]);
         }

      }
      if( ocol == 'd' ){

         if(len > 0){
            set_ro(nlin, 'd', 'r', arr_num[0]);
            set_ro(nlin, 'u', 'r', arr_num[1]);
         }

      }
      if( ocol == 'u' ){

         if(len > 0){
            set_ro(nlin, 'u', 'r', arr_num[0]);
         }

      }

      //seleciona depois de preenchido
      sel_r( _this, ocol, pcol, nlin);

   }
   
}

//escreve o resultado da subtração de digitos escolhidos no dividendo pelo produto parcial nas colunas dos restos
function set_rs(_this, ocol, pcol, nlin, num){

   console.log('resultado da subtração a ser escrito:'+num);

   var arr_num = (num+'').split('');

   var len = arr_num.length;

   //set_ro(1, 'm', 'r', 9);

   //inserindo restos
   if(pcol == 'r'){

      if( ocol == 'm' ){

         if(len > 0){
            set_ro(nlin, 'm', 'r', arr_num[0]);
            set_ro(nlin, 'c', 'r', arr_num[1]);
            set_ro(nlin, 'd', 'r', arr_num[2]);
            set_ro(nlin, 'u', 'r', arr_num[3]);
         }

      }
      if( ocol == 'c' ){

         if(len > 0){
            set_ro(nlin, 'c', 'r', arr_num[0]);
            set_ro(nlin, 'd', 'r', arr_num[1]);
            set_ro(nlin, 'u', 'r', arr_num[2]);
         }

      }
      if( ocol == 'd' ){

         if(len > 0){
            set_ro(nlin, 'd', 'r', arr_num[0]);
            set_ro(nlin, 'u', 'r', arr_num[1]);
         }

      }
      if( ocol == 'u' ){

         if(len > 0){
            set_ro(nlin, 'u', 'r', arr_num[0]);
         }

      }

      //seleciona depois de preenchido
      sel_r( _this, ocol, pcol, nlin);

   }
   
}

//preenche o divisor ord=ds ou dividendo ord=dd
function set_num(num, parte){
   
   num = num+'';

   var ord = ['m','c','d','u'];

   arr_num = num.split('');

   for (var i = 0; i < arr_num.length; i++) {
      
      console.log('ord[i]:'+ord[i]);

      if(parte=='dd'){
         $('.l.1 > .'+ord[i]+'.dd').html( arr_num[i] );
         console.log('arr_num[i]>'+arr_num[i]+'>dd:'+arr_num[i]);
      }
      if(parte=='ds'){
         if(arr_num.length==1){
            $('.l.1 > .m.ds').html( arr_num[i] );
            $('.l.1 > .c.ds').html('');
            console.log('arr_num[i]>'+arr_num[i]+'>ds:'+arr_num[i]);
         }else{
             $('.l.1 > .'+ord[i]+'.ds').html( arr_num[i] );
            console.log('arr_num[i]>'+arr_num[i]+'>ds:'+arr_num[i]);
         }
        
      }
      
   }

}

//secreve na celula da tabela. recebe uma string que representa classes
function set_num_cl(clas, ocol, pcol, num){
   
   $(clas).text(num);

   //if( $(clas).text() != '' ){
      
      //$(clas).html(num);

   //}

}

//recebe um objeto jquery _this
function sel(_this, ocol, pcol){
   
   var rgb = 'rgb(0, 255, 64)';
   
   if( $(_this).text() != '' ){
      
      //cor está ativa: desativa
      if( _this.style.backgroundColor == rgb ){
         
         if(ocol == 'm'){
            
            if(pcol == 'ds'){
               _this.style.backgroundColor = rgbb; 
            }else{
               _this.style.backgroundColor = corf_mil;   
            }
               
         }
         
         if(ocol == 'c'){

            if(pcol == 'ds'){
               _this.style.backgroundColor = rgbb; 
            }else{
               _this.style.backgroundColor = corf_cen;   
            }

         }

         if(ocol == 'd'){
            _this.style.backgroundColor = corf_dez;   
         }

         if(ocol == 'u'){
            _this.style.backgroundColor = corf_uni;   
         }
         
      //cor não está ativa: ativa
      }else{
         
         _this.style.backgroundColor = corf_ativo;
            
      }
   }

}

//recebe um objeto jquery _this e seleciona, mesmo estando vazio
function selv(_this, ocol, pcol){
   
   var rgb = 'rgb(0, 255, 64)';
   
   //if( $(_this).text() != '' ){
      
      //cor está ativa: desativa
      if( _this.style.backgroundColor == rgb ){
         
         if(ocol == 'm'){
            
            if(pcol == 'ds'){
               _this.style.backgroundColor = rgbb; 
            }else{
               _this.style.backgroundColor = corf_mil;   
            }
               
         }
         
         if(ocol == 'c'){

            if(pcol == 'ds'){
               _this.style.backgroundColor = rgbb; 
            }else{
               _this.style.backgroundColor = corf_cen;   
            }

         }

         if(ocol == 'd'){
            _this.style.backgroundColor = corf_dez;   
         }

         if(ocol == 'u'){
            _this.style.backgroundColor = corf_uni;   
         }
         
      //cor não está ativa: ativa
      }else{
         
         _this.style.backgroundColor = corf_ativo;
            
      }
   //}

}

//seleciona celulas da tabela. recebe uma string que representa classes
function selcl(clas, ocol, pcol){
   
   var rgb = 'rgb(0, 255, 64)';
   
   if( $(clas).text() != '' ){
      
      //cor está ativa: desativa
      if( $(clas).css('backgroundColor') == rgb ){
         
         if(ocol == 'm'){
            
            if(pcol == 'ds'){
               $(clas).css('backgroundColor', rgbb); 
            }else{ 
               $(clas).css('backgroundColor', corf_mil);  
            }
               
         }
         
         if(ocol == 'c'){

            if(pcol == 'ds'){
               $(clas).css('backgroundColor', rgbb); 
            }else{ 
               $(clas).css('backgroundColor', corf_cen);  
            }

         }

         if(ocol == 'd'){
            $(clas).css('backgroundColor', corf_dez);   
         }

         if(ocol == 'u'){
            $(clas).css('backgroundColor', corf_uni);  
         }
         
      //cor não está ativa: ativa
      }else{
         
         $(clas).css('backgroundColor', corf_ativo);
            
      }
   }

}

//seleciona uma célula ao clicar no dividendo
function sel_dd(_this, ocol, pcol){
   
   sel( _this, ocol, pcol );

   //busca números do dividendo selecionados
   var dividendo = get_dd();

   visor_msg( dividendo );

   return dividendo;

}

//seleciona duas células do divisor, ao mesmo tempo
function sel_ds(_this, ocol, pcol){
   
   //seleciona o divisor inteiramente
   //sel( _this, ocol, pcol );

   selcl( '.l.1 > .m.ds', ocol, pcol );
   selcl( '.l.1 > .c.ds', ocol, pcol );


   //busca números do divisor selecionados
   var dvs = get_ds();

   //busca números do dividendo selecionados
   var dvd = get_dd();

   //divide dois valores(sting ou nao) e retorna a parte inteira da divisão
   var quoo = calc_quo(dvd, dvs);

   if(quoo == null){

      //console.log('merda:'+ (quo == 0) );
      //console.log('merda:'+ (quo == '') );
      visor_msg( dvd );

   }else{

      visor_msg( dvd + ' \u00F7 ' + dvs + ' = ' + quoo );

   }

   return quoo;

}

//seleciona uma célula do quociente
function sel_qu(_this, ocol, pcol){
   
   if( $(_this).html() == '' || $(_this).html() == '&nbsp;' ){

      console.log('celular qu vazia');

   }else{
      
      sel( _this, ocol, pcol );

      //busca números do dividendo selecionados
      var quociente = get_qu();

      visor_msg( quociente );

      return quociente;
      
   }

}

//seleciona as duas celulas não vazias do divisor que será multiplicado
function sel_dsp(_this, ocol, pcol){
   
   //seleciona o divisor
   //sel( _this, ocol, pcol );
   selcl( '.l.1 > .m.ds', ocol, pcol );
   selcl( '.l.1 > .c.ds', ocol, pcol );

   //busca números do divisor selecionados
   var dvs = get_ds();

   //busca números do quociente selecionados
   var quo = get_qu();

   var mult = calc_mul(dvs, quo);

   //divide dois valores(sting ou nao) e retorna a parte inteira da divisão
   //var quo = calc_quo(dvd, dvs);

   if(mult == null){

      //console.log('merda:'+ (quo == 0) );
      //console.log('merda:'+ (quo == '') );
      visor_msg( quo );

   }else{

      visor_msg( quo + ' x ' + dvs + ' = ' + mult );

   }

   return dvs;
   
}

//seleciona uma linha de resto
function sel_r(_this, ocol, pcol, nlin){
   
   var lrm = $('.l.'+nlin+' > .m.r');
   var lrc = $('.l.'+nlin+' > .c.r');
   var lrd = $('.l.'+nlin+' > .d.r');
   var lru = $('.l.'+nlin+' > .u.r');

   console.log('selecionar lrm:'+lrm.html() );
   console.log('selecionar lrc:'+lrc.html() );
   console.log('selecionar lrd:'+lrd.html() );
   console.log('selecionar lru:'+lru.html() );

   if(pcol == 'r'){

      if(lrm.html() != '' && lrm.html() != '&nbsp;'){
         lrm.css('backgroundColor', corf_ativo);   
      }
      if(lrc.html() != '' && lrc.html() != '&nbsp;'){
         lrc.css('backgroundColor', corf_ativo);
      }
      if(lrd.html() != '' && lrd.html() != '&nbsp;'){
         lrd.css('backgroundColor', corf_ativo);
      }
      if(lru.html() != '' && lru.html() != '&nbsp;'){
         lru.css('backgroundColor', corf_ativo);
      }
      
   }
   
}

//seleciona uma linha de resto e mostra no visor
function sel_rs(_this, ocol, pcol, nlin){
   
   var lrm = $('.l.'+nlin+' > .m.r');
   var lrc = $('.l.'+nlin+' > .c.r');
   var lrd = $('.l.'+nlin+' > .d.r');
   var lru = $('.l.'+nlin+' > .u.r');

   //sinal de menos
   var ls = $('.l.'+nlin+' > .s');

   //seleciona uma linha de resto
   sel_r(_this, ocol, pcol, nlin);

   //faz a cor do sinal ficar preto(era branco i.e. oculto)
   ls.css('color','#000');

   var resto = get_r(nlin);

   console.log('numero da linha selecionada:'+resto);

   visor_msg( resto );

   return resto;
 
}

//seleciona um intervalo
function sel_cel(ocol, pcol, nlin){
   
   var cel = $('.l.'+nlin+' > .'+ocol+'.'+pcol);

   console.log('sel_cel:'+cel.html());

   if(cel.html() != '' && cel.html() != '&nbsp;'){
      cel.css('backgroundColor', corf_ativo); 
   }

}

//seleciona um intervalo
function sel_int(_this, ocol, pcol, nlin, num){
  
   //se nlin>1 então seleciona nlin-1(linhas de restos)
   if(nlin > 2){
      
     // sel_r(_this, ocol, pcol, (nlin-1) );

      sel_cel('m', 'r', (nlin-1) );
      sel_cel('c', 'r', (nlin-1) );
      sel_cel('d', 'r', (nlin-1) );
      sel_cel('u', 'r', (nlin-1) );

    //se nlin=1 então seleciona dividendo
   }else{

      var nums = num+'';

      var arr_num = nums.split('');
      
      var len = arr_num.length;

      //console.log('lennnnnnnnnnnnnnnnn:'+len);
      console.log('--numero a ser selecionado:'+num);
      console.log('--tamanho::'+len);

      //sel_cel('m', 'dd', (nlin-1) );
      //sel_cel('c', 'dd', (nlin-1) );


      if(ocol == 'm'){

         if(len == 1){
            sel_cel('m', 'dd', (nlin-1) );
         }
         if(len == 2){
            sel_cel('m', 'dd', (nlin-1) );
            sel_cel('c', 'dd', (nlin-1) );
         }
         if(len == 3){
            sel_cel('m', 'dd', (nlin-1) );
            sel_cel('c', 'dd', (nlin-1) );
            sel_cel('d', 'dd', (nlin-1) );
         }
         if(len == 4){
            sel_cel('m', 'dd', (nlin-1) );
            sel_cel('c', 'dd', (nlin-1) );
            sel_cel('d', 'dd', (nlin-1) );
            sel_cel('u', 'dd', (nlin-1) );
         }
      }

      if(ocol == 'c'){
         if(len == 1){
            sel_cel('c', 'dd', (nlin-1) );
         }
         if(len == 2){
           sel_cel('c', 'dd', (nlin-1) );
            sel_cel('d', 'dd', (nlin-1) );
         }
         if(len == 3){
            sel_cel('c', 'dd', (nlin-1) );
            sel_cel('d', 'dd', (nlin-1) );
            sel_cel('u', 'dd', (nlin-1) );
         }
      }
      if(ocol == 'd'){
         if(len == 1){
            sel_cel('d', 'dd', (nlin-1) );
         }
         if(len == 2){
            sel_cel('d', 'dd', (nlin-1) );
            sel_cel('u', 'dd', (nlin-1) );
         }
      }
      if(ocol == 'u'){
         if(len == 1){
            sel_cel('u', 'dd', (nlin-1) );
         }
      }

   }

}

//faz a subtração com a linha anterior e exibe no visor
function sel_sub(_this, ocol, pcol, nlin, prod){

   //ler o minuendo(dividendo mais recente)
   var minu = dvd;

   //ler o subtraendo (produto )
   var subtra = prod;

   //seleciona o minuendo na linha acima(i.e. linha nlin-1)
   sel_int(_this, ocol, pcol, nlin, prod);

   //mostra operação de subtração no visor




   //seleciona o dividendo celula por celula
   //sel( _this, ocol, pcol );

   //busca números do divisor selecionados
   //var dvdss = get_dd();

   var subb = calc_sub(minu, subtra);

   //divide dois valores(sting ou nao) e retorna a parte inteira da divisão
   //var quo = calc_quo(dvd, dvs);

   if(subb == null){

      //console.log('merda:'+ (quo == 0) );
      //console.log('merda:'+ (quo == '') );
      visor_msg( prod );

   }else{

      visor_msg( minu + ' - ' + subtra + ' = ' + subb );

   }

   return subb;

}


//faz e mostra o resultado a partir da seguda divisao parcial
function sel_ds2(_this, ocol, pcol){
   
   //seleciona o divisor
   //sel( _this, ocol, pcol );
   selcl( '.l.1 > .m.ds', ocol, pcol );
   selcl( '.l.1 > .c.ds', ocol, pcol );

   //busca números do divisor selecionados
   var dvs = get_ds();

   //busca números do dividendo selecionados
   //var dvd = get_dd();

   //o dvd agora é um resto junto com um digito baixado definido na variavel ndvd
   var dvd = ndvd;

   console.log('dvd agora é ndvd:'+dvd);

   //divide dois valores(sting ou nao) e retorna a parte inteira da divisão
   var quoo = calc_quo(dvd, dvs);

   if(quoo == null){

      //console.log('merda:'+ (quo == 0) );
      //console.log('merda:'+ (quo == '') );
      visor_msg( dvd );

   }else{

      visor_msg( dvd + ' \u00F7 ' + dvs + ' = ' + quoo );

   }

   return quoo;

}

function un_sel(lin, ocol, pcol){

   //$('.l.1 > .m.q');
   var cls = '.l.' + lin + ' > .' + ocol + '.' + pcol;

   var cel = $(cls);

   console.log('cel:'+cel);
   
   if(ocol == 'm'){
      if(pcol == 'ds'){
         cel.css('backgroundColor', rgbb); 
      }else{
         cel.css('backgroundColor', corf_mil);  
      }  
   }

   if(ocol == 'c'){
      if(pcol == 'ds'){
         cel.css('backgroundColor', rgbb); 
      }else{
         cel.css('backgroundColor', corf_cen);  
      }   
   }

   if(ocol == 'd'){
      cel.css('backgroundColor', corf_dez);   
   }
   
   if(ocol == 'u'){
      cel.css('backgroundColor', corf_uni);   
   }

}

function un_sel_dd(){
   
   un_sel(1, 'm', 'dd');
   un_sel(1, 'c', 'dd');
   un_sel(1, 'd', 'dd');
   un_sel(1, 'u', 'dd');

}

function un_sel_ds(){
   
   un_sel(1, 'm', 'ds');
   un_sel(1, 'c', 'ds');

}

function un_sel_qu(){
   
   un_sel(3, 'm', 'q');
   un_sel(3, 'c', 'q');
   un_sel(3, 'd', 'q');
   un_sel(3, 'u', 'q');

}

function un_sel_r(nlin){
   un_sel(nlin, 'm', 'r');
   un_sel(nlin, 'c', 'r');
   un_sel(nlin, 'd', 'r');
   un_sel(nlin, 'u', 'r');
}

function un_sel_rr(){

   for (var i = 1; i < 9; i++) {

      un_sel_r(i);

   }
   
}

//verifica as células selecionadas do dividendo e retorna o número
function get_dd(){

   var rgb = 'rgb(0, 255, 64)';
   //var dd = 0;
   var dd = '';

   var l1m = $('.l.1 > .m.dd');
   var l1c = $('.l.1 > .c.dd');
   var l1d = $('.l.1 > .d.dd');
   var l1u = $('.l.1 > .u.dd');

   //console.log( l1m.css({background:color}) );

   if(l1m.css('backgroundColor') == rgb){
      //dd = dd+l1mi;
      dd = dd+l1m.html();
   }
   if(l1c.css('backgroundColor') == rgb){
      //dd = dd+l1ci;
      dd = dd+l1c.html();
   }
   if(l1d.css('backgroundColor') == rgb){
      //dd = dd+l1di;
      dd = dd+l1d.html();
   }
   if(l1u.css('backgroundColor') == rgb){
      //dd = dd+l1ui;
      dd = dd+l1u.html();
   }
   
   //var dividendo = parseInt(dd, 10);
   
   //console.log( dividendo );

   console.log( 'dd:'+dd );

   return dd;

}

//obterm o numero inteiro completo do dividendo
function get_ddi(){

   var lrm = $('.l.1 > .m.dd');
   var lrc = $('.l.1 > .c.dd');
   var lrd = $('.l.1 > .d.dd');
   var lru = $('.l.1 > .u.dd');

   var numr = lrm.html()+lrc.html()+lrd.html()+lru.html();
   
   var numrs = numr.replaceAll('&nbsp;','');

   console.log( 'dividendos:'+numrs );

   var numri = parseInt(numrs, 10);
   
   console.log( 'dividendoi:'+numri );

   if(isNaN(numri)){
      return 0;
   }

   return numri;

}

//obtem o numero inteiro completo do divisor
function get_dsi(){

   var lrm = $('.l.1 > .m.ds');
   var lrc = $('.l.1 > .c.ds');
   var lrd = $('.l.1 > .d.ds');
   var lru = $('.l.1 > .u.ds');

   var numr = lrm.html()+lrc.html()+lrd.html()+lru.html();
   
   var numrs = numr.replaceAll('&nbsp;','');

   console.log( 'divisors:'+numrs );

   var numri = parseInt(numrs, 10);
   
   console.log( 'divisori:'+numri );

   if(isNaN(numri)){
      return 0;
   }

   return numri;

}

//obterm o numero inteiro completo do quociente
function get_qui(){

   var lrm = $('.l.3 > .m.q');
   var lrc = $('.l.3 > .c.q');
   var lrd = $('.l.3 > .d.q');
   var lru = $('.l.3 > .u.q');
   /*
   var qm = lrm.html();
   var qc = lrc.html();
   var qd = lrd.html();
   var qu = lru.html();

   id(lrm.html() == '&nbsp;' || lrm.html() == ''){
      qm = 0;
   }
   id(lrc.html() == '&nbsp;' || lrc.html() == ''){
      qc = 0;
   }
   id(lrd.html() == '&nbsp;' || lrd.html() == ''){
      qd = 0;
   }
   id(lru.html() == '&nbsp;' || lru.html() == ''){
      qu = 0;
   }
   
   var numr = qm+qc+qd+qu;
   */

   var numr = lrm.html()+lrc.html()+lrd.html()+lru.html();
   
   var numrs = numr.replaceAll('&nbsp;','0');

   console.log( 'quocientes:'+numrs );

   var numri = parseInt(numrs, 10);
   
   console.log( 'quocientei:'+numri );

   if(isNaN(numri)){
      return 0;
   }

   return numri;

}

//verifica as células selecionadas do dividendo e retorna o número
function get_ds(){

   var rgb = 'rgb(0, 255, 64)';
   //var dd = 0;
   var ds = '';

   //por enquanto divisão até dois dígitos
   var l1m = $('.l.1 > .m.ds');
   var l1c = $('.l.1 > .c.ds');

   if(l1m.css('backgroundColor') == rgb){
      ds = ds+l1m.html();
   }
   if(l1c.css('backgroundColor') == rgb){
      ds = ds+l1c.html();
   }
   
   console.log( 'ds:'+ds );

   return ds;

}

//verifica as células selecionadas do quociente e retorna o número
function get_qu(){

   var rgb = 'rgb(0, 255, 64)';
   //var dd = 0;
   var qu = '';

   var l3m = $('.l.3 > .m.q');
   var l3c = $('.l.3 > .c.q');
   var l3d = $('.l.3 > .d.q');
   var l3u = $('.l.3 > .u.q');

   if(l3m.css('backgroundColor') == rgb){
      qu = qu+l3m.html();
   }
   if(l3c.css('backgroundColor') == rgb){
      qu = qu+l3c.html();
   }
   if(l3d.css('backgroundColor') == rgb){
      qu = qu+l3d.html();
   }
   if(l3u.css('backgroundColor') == rgb){
      qu = qu+l3u.html();
   }
   
   console.log( 'qu:'+qu );

   return qu;

}

//retorna o número na linha dos restos
function get_r(nlin){

   var lrm = $('.l.'+nlin+' > .m.r');
   var lrc = $('.l.'+nlin+' > .c.r');
   var lrd = $('.l.'+nlin+' > .d.r');
   var lru = $('.l.'+nlin+' > .u.r');

   var numr = lrm.html()+lrc.html()+lrd.html()+lru.html();
   
   var numrs = numr.replaceAll('&nbsp;','');

   console.log( 'numrs:'+numrs );

   var numri = parseInt(numrs, 10);
   
   console.log( 'numri:'+numri );

   return numri;

}

//retorna a ultima linha preenchida dos restos
function get_rs(){
   
   var rtemp = null;

   for (var i = 9; i > 1; i--) {

      rtemp = get_r(i);
      
      console.log('rtemp:'+rtemp);

      if(!isNaN(rtemp)){
         console.log('rtemp_in:'+rtemp);
         break;
      }

   }

   return rtemp;
}

//recebe duas string e retorna o resultado inteiro da divisão
function calc_quo(dvd, dvs){
   
   var dvsi = parseInt(dvs, 10);
   var dvdi = parseInt(dvd, 10);

   var quo = null;
   //dvdi=0 e dvdi='' produzem o mesmo booleano
   if( isNaN(dvdi) || isNaN(dvsi) || dvsi == 0 ){
      
      console.log('Erro!!! >> dvdi:'+dvdi+' >> dvsi:'+dvsi);

      return quo;

   }

   quo = Math.floor(dvdi/dvsi);
   
   console.log('quo:' + quo);

   return quo;

}

//recebe duas string e retorna o resultado inteiro da divisão
function calc_mul(quo, dvs){
   
   var dvsi = parseInt(dvs, 10);
   var quoi = parseInt(quo, 10);

   console.log('calc_mul:dvsi:'+dvsi);
   console.log('calc_mul:quoi:'+quoi);

   var mul = null;

   if( isNaN(quoi) || isNaN(dvsi) ){
      
      console.log('Multiplicação>>Erro!!!');

      return mul;

   }

   mul = quoi*dvsi;
   
   console.log('mul:' + mul);

   return mul;

}

//recebe duas string e retorna o resultado inteiro da divisão
function calc_sub(dvds, prod, quo, dvs){
   
   var dvdsi = parseInt(dvds, 10);
   var prodi = parseInt(prod, 10);

   console.log('calc_sub:dvdsi:'+dvdsi);
   console.log('calc_sub:prodi:'+prodi);

   var sub = null;

   if( isNaN(prodi) || isNaN(dvdsi) ){
      
      console.log('Subtração>>Erro!!!');

      return sub;

   }

   sub = dvdsi - prodi;

   //setando casas vazias com zero
   var subs = sub+'';
   var subsl = subs.length;

   var prods = prod+'';
   var prodsl = prods.length;

   var dif = prodsl - subsl;

   var subc = sub;

   for (var i = 0; i < dif; i++) {
      subc = '0'+subc;
   }

   console.log('sub:' + sub);
   console.log('subc:' + subc);

   if(subsl == prodsl){
      return sub;
   }else{
      return subc;
   }
   
}








































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
      window.history.replaceState("object or string", "Title", "divisao2.html");
   }

   //padrao: desativa todas as fases e subfases
   //f_ativar('');
   //sf_ativar('');

   //ativa a fase 1(divisao) e 1.1(selecionar dividendo)
   f_div = true;
   f_div_1 = true;
   
  
   visor = document.getElementById('visor');
   visorp = document.getElementById('visorp');

      /*escondendo o menu flutuante*/
   const flutua = document.getElementById("flutua");
   flutua.style.display = 'none';

   puloss = true;

   // document.getElementById('ajuda').checked = false;

   //novo(); 
  
   verificaStorage();

   exibir();


}


//----------------------------i30-07-2024
//depois de um longo periodo sem codar!!
/*
o algoritmo se divide em tres grandes fases e suas subfases:
1-divisão
   1.1-escolha do dividendo
   1.2-marcação do divisor(todos os numeros de uma vez)
   1.3-escrita do resultado no quociente
2-multiplicação
   2.1-escolha do quociente
   2.2-marcação do divisor
   2.3-escrita do resultado no dividendo
3-subtração
   3.1-marcação do resultado no dividendo
   3.2-marcação do dividendo escolhido
   3.3-escrita do resultado no resto
4-Baixar valores
   4.1-escolher um numero do dividendo
   4.2-baixar este número ao lado do resto
*/

//definindo flags para indicar em que fase da divisão estamos.
var f_div = false;//f1
   var f_div_1 = false;//f1.1
   var f_div_2 = false;//f1.2
   var f_div_3 = false;//f1.3

var f_mul = false;//f2
   var f_mul_1 = false;//f2.1
   var f_mul_2 = false;//f2.1
   var f_mul_3 = false;//f2.3

var f_sub = false;//f3
   var f_sub_1 = false;//f3.1
   var f_sub_2 = false;//f3.2
   var f_sub_3 = false;//f3.3

var f_bai = false;//f4
   var f_bai_1 = false;//f4.1
   var f_bai_2 = false;//f4.2


///*
//apenas uma das 4 fases está ativada por vez ou tudo desativado.
//parametros: 1,2,3,4,''
function f_ativar(fase){
   //fases:1:f_div, 2:f_mul, 3:f_sub, 4:f_bai
   switch (fase) {
     case 1:
       f_div = true; f_mul = false; f_sub = false; f_bai = false;
       break;
     case 2:
       f_div = false; f_mul = true; f_sub = false; f_bai = false;
       break;
     case 3:
       f_div = false; f_mul = false; f_sub = true; f_bai = false;
       break;
     case 4:
       f_div = false; f_mul = false; f_sub = false; f_bai = true;
       break;
     default:
       f_div = false; f_mul = false; f_sub = false; f_bai = false;
   }

}

//ativando as subfases
//parametros 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 4.1, 4.2, ''
function sf_ativar(fase){
   //fases:veja nas definições das variaveis acima
   switch (fase) {
     case 1.1:
       f_div_1 = true; f_div_2 = false; f_div_3 = false;
       break;
     case 1.2:
       f_div_1 = false; f_div_2 = true; f_div_3 = false;
       break;
     case 1.3:
       f_div_1 = false; f_div_2 = false; f_div_3 = true;
       break;
     case 2.1:
       f_mul_1 = true; f_mul_2 = false; f_mul_3 = false;
       break;
     case 2.2:
       f_mul_1 = false; f_mul_2 = true; f_mul_3 = false;
       break;
     case 2.3:
       f_mul_1 = false; f_mul_2 = false; f_mul_3 = true;
       break;
     case 3.1:
       f_sub_1 = true; f_sub_2 = false; f_sub_3 = false;
       break;
     case 3.2:
       f_sub_1 = false; f_sub_2 = true; f_sub_3 = false;
       break;
     case 3.3:
       f_sub_1 = false; f_sub_2 = false; f_sub_3 = true;
       break;
     case 4.1:
       f_bai_1 = true; f_bai_2 = false;
       break;
     case 4.2:
       f_bai_1 = false; f_bai_2 = true;
       break;
     
     default:
       f_div_1 = false; f_div_2 = false; f_div_3 = false;
       f_mul_1 = false; f_mul_2 = false; f_mul_3 = false;
       f_sub_1 = false; f_sub_2 = false; f_sub_3 = false;
       f_bai_1 = false; f_bai_2 = false;
       
   }

}


//visor para a tabuada
function visor_msg(msg){
   
   msg = msg+'';

   if(msg == ''){
      visor.innerText = '[Tabuada]';
   }else{
      visor.innerText = msg;
   }
   
}

//visor para os passos
function visorp_msg(msg){
   if(msg == ''){
      visorp.innerText = '[PASSOS DA DIVISÃO]';
   }else{
      visorp.innerText = msg;
   }
   
}


function limpar(){
   
   limpa_r();

   limpa_q();

   limpa_dd();

   limpa_ds();

   //limpa visores
   limpa_vis();

   //desativando as fases
   f_ativar();
   sf_ativar();
   
   f_ativar(1);
   sf_ativar(1.1);

   info();

}

function limpa_r(){

    for (var i = 1; i < 10; i++) {

      $('.l.'+i+' > .m.r').html('&nbsp;');
      $('.l.'+i+' > .c.r').html('');
      $('.l.'+i+' > .d.r').html('');
      $('.l.'+i+' > .u.r').html('');
      
      $('.l.'+i+' > .m.r').css('backgroundColor', corf_mil);   
      $('.l.'+i+' > .c.r').css('backgroundColor', corf_cen);   
      $('.l.'+i+' > .d.r').css('backgroundColor', corf_dez);   
      $('.l.'+i+' > .u.r').css('backgroundColor', corf_uni);   

      $('.l.'+i+' > .s').css('color','#fff');

   }

}

function limpa_q(){
   $('.l.3 > .m.q').html('&nbsp;');
   $('.l.3 > .c.q').html('&nbsp;');
   $('.l.3 > .d.q').html('&nbsp;');
   $('.l.3 > .u.q').html('&nbsp;');

   $('.l.3 > .m.q').css('backgroundColor', corf_mil);   
   $('.l.3 > .c.q').css('backgroundColor', corf_cen);   
   $('.l.3 > .d.q').css('backgroundColor', corf_dez);   
   $('.l.3 > .u.q').css('backgroundColor', corf_uni);
}

function limpa_dd(){
   
   $('.l.1 > .m.dd').css('backgroundColor', corf_mil);   
   $('.l.1 > .c.dd').css('backgroundColor', corf_cen);   
   $('.l.1 > .d.dd').css('backgroundColor', corf_dez);   
   $('.l.1 > .u.dd').css('backgroundColor', corf_uni);
}

function limpa_ds(){
   
   $('.l.1 > .m.ds').css('backgroundColor', '#fff');   
   $('.l.1 > .c.ds').css('backgroundColor', '#fff');   
   
}

function limpa_vis(){
   $('#visor').html('[Tabuada]');
   $('#visorp').html('[PASSOS DA DIVISÃO]');
}

function openNav(){

   const flutua = document.getElementById("flutua");

   var nome_aln = document.getElementById("nome_aln");

   var nome_aluno_divi = '';
   var nome_aluno_sec_divi = '';
   
   /*pega o nome do input*/
   if(nome_aln != null){
      
      nome_aluno_divi = nome_aln.value;     
      
      console.log('nome no input: ' + nome_aluno_divi);
   }else{
   
      console.log('nome null no input');
   
   }

   console.log('prop. flutua:'+flutua.style.display);

   /*mostra o menu*/
   if(flutua.style.display == 'none' || flutua.style.display == ''){

      flutua.style.display = 'block';
      
      /*recupera nome da sessao*/
      if(localStorage.getItem("nome_aluno_divi") != null){
      
         nome_aluno_sec_divi = localStorage.getItem("nome_aluno_divi");
         
         document.getElementById("nome_aln").value = nome_aluno_sec_divi;

         /*antes de inserir o nome da secao no input verifica se sao iguais*/
         // if( nome_aluno_sec_divi == nome_aluno_divi ){
         
         //    document.getElementById("nome_aln").value = nome_aluno_sec_divi;
         
         // }else{
            
         //    if ( confirm('Apagar Histórico de ' + nome_aluno_sec_divi + '?') ) {
         //       limpar_hist();
         //       document.getElementById("nome_aln").value = nome_aluno_sec_divi;
         //    }

         // }
         
         console.log('nome recuperado da secao: ' + nome_aluno_sec_divi);
      
      }else{
         
         console.log('nome vazio na secao');
      
      }

   /*esconde o menu*/  
   }else{
      
      flutua.style.display = 'none';

      if(nome_aluno_divi != ''){

         if(localStorage.getItem("nome_aluno_divi") != null){
         
            nome_aluno_sec_divi = localStorage.getItem("nome_aluno_divi");
         
         }

         /*antes de inserir o nome do input na secao verifica se sao iguais*/
         if( nome_aluno_sec_divi == nome_aluno_divi ){
         
            /*nomes iguais não há necessidade de escluir dados*/
           
         }else{
            
            /*se nao apagar os dados, eles são incorporados ao novo nome*/
            // if ( confirm('Apagar Histórico de ' + nome_aluno_sec_divi + '?') ) {
            //    limpar_hist();
            // }

         }

         /*apagando ou nao os dados do historico, o nome vai mudar*/
         localStorage.setItem("nome_aluno_divi", nome_aluno_divi);

         console.log('salvou nome na secao: ' + nome_aluno_divi); 

      }else{
         console.log('NAO salvou nome na secao'); 
      }
      
   }
    
}

function animm(){

   var marcado = document.getElementById('anim').checked;

   if(marcado){
      animar = true;
   }else{
      animar = false;
   }
   console.log('animar:'+animar);

}

function fsolo(){
   var soloo = document.getElementById('solo_id').checked;

   if(soloo){
      solo = true;
   }else{
      solo = false;
   }
   console.log('soloo:'+soloo);
}

function verificar(){

   if(!verifica){return false;}

   if(!verifica_err){return false;}

   if(!verifica_pul){return false;}

   var dd = get_ddi();
   var ds = get_dsi();
   var qu = get_qui();
   var rs = get_rs();

   var ddi = parseInt(dd,10);
   var dsi = parseInt(ds,10);
   var qui = parseInt(qu,10);
   var rsi = parseInt(rs,10);

   //divide dois valores(sting ou nao) e retorna a parte inteira da divisão
   var divisao = calc_quo(dd, ds);

   var restou = dd % ds;
   var resto = get_rs();

   console.log('resto do usuario:'+resto);
   console.log('resto da operação:'+restou);

   //verificar 1136/8

   console.log(ddi+" / "+dsi+"="+qui+">>"+divisao);

   if( divisao == qui && restou == resto){
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

function get_obj_conta_divi(){

   
   var num1 = parseInt( get_ddi(), 10);
   var num2 = parseInt( get_dsi(), 10);
   var numr = parseInt( get_rs(), 10 );
   var numq = parseInt( get_qui(), 10);
   var html = $('#subtracao').html();

   if(isNaN( numq )){
      numq = 0;
   }
   if(isNaN( numr )){
      numr = 0;
   }
   if(isNaN( num1 )){
      num1 = 0;
   }
   if(isNaN( num2 )){
      num2 = 0;
   }
   console.log('num1 obj_conta:'+num1);
   console.log('num2 obj_conta:'+num2);
   console.log('numq obj_conta:'+numq);
   console.log('numr obj_conta:'+numr);

   var obj_conta = { num1: num1, num2: num2, numr: numr, numq: numq, html: html };
   
   //console.log('obj_conta:'+obj_conta);
   
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

   var pont = localStorage.getItem("pontos_divi");
   var loc_err = localStorage.getItem("erros_divi");
   var loc_pul = localStorage.getItem("pulos_divi");

   var ponti = parseInt(pont, 10);
   var loc_erri = parseInt(loc_err, 10);
   var loc_puli = parseInt(loc_pul, 10);

   var pontt = document.getElementById("pontu");
   var input_err = document.getElementById("erros");
   var input_pul = document.getElementById("pulos");

   console.log('ponti1:' + ponti);


   if(JSON.parse(localStorage.getItem("arr_obj_err_divi")) != null){
       arr_obj_err = JSON.parse(localStorage.getItem("arr_obj_err_divi"));
   }
   if(JSON.parse(localStorage.getItem("arr_obj_acer_divi")) != null){
       arr_obj_acer = JSON.parse(localStorage.getItem("arr_obj_acer_divi"));
   }
   if(JSON.parse(localStorage.getItem("arr_obj_pul_divi")) != null){
       arr_obj_pul = JSON.parse(localStorage.getItem("arr_obj_pul_divi"));
   }

   // console.log('arr_txt_err secao: ' + arr_obj_err);
   // console.log('arr_txt_acer secao: ' + arr_obj_acer);
   // console.log('arr_txt_pul secao: ' + arr_obj_pul);

   var obj_conta = get_obj_conta_divi();

   console.log('obj_conta obtida da tabela n1: ' + obj_conta.num1);
   console.log('obj_conta obtida da tabela n2: ' + obj_conta.num2);
   console.log('obj_conta obtida da tabela qu: ' + obj_conta.numq);
   console.log('obj_conta obtida da tabela rs: ' + obj_conta.numr);
   console.log('obj_conta obtida da tabela html: ' + obj_conta.html);

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

   localStorage.setItem("pontos_divi", ponti);
   localStorage.setItem("erros_divi", loc_erri);
   localStorage.setItem("pulos_divi", loc_puli);

   localStorage.setItem("arr_obj_err_divi", JSON.stringify(arr_obj_err));
   localStorage.setItem("arr_obj_acer_divi", JSON.stringify(arr_obj_acer));
   localStorage.setItem("arr_obj_pul_divi", JSON.stringify(arr_obj_pul));

   var tempo_divi = document.getElementById("relg").innerText;

   localStorage.setItem("tempo_divi", tempo_divi);
   
   imprimir_hist();

}

function verificaStorage(){
   var pon = 0;
   var pont = localStorage.getItem("pontos_divi");
   var ponti = parseInt(pont, 10);

   var pon_err = 0;
   var pont_err = localStorage.getItem("erros_divi");
   var ponti_err = parseInt(pont_err, 10);

   var pon_pul = 0;
   var pont_pul = localStorage.getItem("pulos_divi");
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

function imprimir_hist(){

   // if(JSON.parse(localStorage.getItem("arr_obj_err_divi")) != null){
   //     arr_obj_err = JSON.parse(localStorage.getItem("arr_obj_err_divi"));
   // }
   // if(JSON.parse(localStorage.getItem("arr_obj_acer_divi")) != null){
   //     arr_obj_acer = JSON.parse(localStorage.getItem("arr_obj_acer_divi"));
   // }
   // if(JSON.parse(localStorage.getItem("arr_obj_pul_divi")) != null){
   //     arr_obj_pul = JSON.parse(localStorage.getItem("arr_obj_pul_divi"));
   // }

   if (localStorage.hasOwnProperty("arr_obj_err_divi")) {
      
      JSON.parse( localStorage.getItem("arr_obj_err_divi") ).forEach(objconta => {
      
         console.log('Erro: ' + objconta.num1 + ' \u00F7 ' + objconta.num2 + ' = ' + objconta.numq + ' (resto: '+ objconta.numr+')' + ' html: '+ objconta.html  );

      }); 

   }

   if (localStorage.hasOwnProperty("arr_obj_acer_divi")) {
      
      JSON.parse( localStorage.getItem("arr_obj_acer_divi") ).forEach(objconta => {
      
         console.log('Acerto: ' + objconta.num1 + ' \u00F7 ' + objconta.num2 + ' = ' + objconta.numq + ' (resto: '+ objconta.numr+')' + ' html: '+ objconta.html );

      }); 

   }

   if (localStorage.hasOwnProperty("arr_obj_pul_divi")) {
      
      JSON.parse( localStorage.getItem("arr_obj_pul_divi") ).forEach(objconta => {
      
         console.log('Pulo: ' + objconta.num1 + ' \u00F7 ' + objconta.num2 + ' = ' + objconta.numq + ' (resto: '+ objconta.numr+')' + ' html: '+ objconta.html );

      }); 

   }

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

      /*/não permitimos apenas 1 digito no multiplicador
      if(de2i < 10){
         var de2i = 10;
         var de2s = de2i;
      }*/

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

      num1 = getRandomInt(des, ates);

      console.log('numero 1:'+num1);

      num2 = getRandomInt(de2s, ate2s);

      console.log('numero 2:'+num2);

   //false: não completa os digitos vazios com zero
   //set_num1(num1, false);
   //set_num2(num2, false);

   set_num(num1, 'dd');
   set_num(num2, 'ds');

   //exibe a operação e seu resultado dentro do retangulo
   exibir();

   limpar();

   //limpando a tabuada
   //visor_par.innerText = '[Tabuada]';
   //visor_res.innerText = '';


}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

/*
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
function set_num2(num2, completo){}
*/

function exibir(){

   info();
   
   var exibe = document.getElementById("exibe");

   exibe.innerText = get_ddi()+' \u00F7 '+get_dsi()+' = '+get_qui();

   console.log('dd:'+get_ddi());
   console.log('ds:'+get_dsi());
   console.log('qu:'+get_qui());

}


//altera-se a cor de fundo do titulo amarelo como aviso
function aviso_dados(){

   var titulo = document.getElementById("principal");

   var parse_err_divi_st = false;
   var parse_acer_divi_st = false;
   var parse_pul_divi_st = false;

    if (localStorage.hasOwnProperty("arr_obj_err_divi")) {
         
         var parse_err_divi = JSON.parse( localStorage.getItem("arr_obj_err_divi") );

         if(parse_err_divi != null && parse_err_divi.length > 0){
             parse_err_divi_st = true;
             console.log(parse_err_divi);
         }
    }
            
   if (localStorage.hasOwnProperty("arr_obj_acer_divi")) {
         
         var parse_acer_divi = JSON.parse( localStorage.getItem("arr_obj_acer_divi") );

         if(parse_acer_divi != null && parse_acer_divi.length > 0){
             parse_acer_divi_st = true;
             console.log(parse_acer_divi);
         }
    }

   if (localStorage.hasOwnProperty("arr_obj_pul_divi")) {
         
         var parse_pul_divi = JSON.parse( localStorage.getItem("arr_obj_pul_divi") );

         if(parse_pul_divi != null && parse_pul_divi.length > 0){
             parse_pul_divi_st = true;
             console.log(parse_pul_divi);
         }
   }

   var mult_pt = localStorage.getItem("pontos_divi");
   var mult_er = localStorage.getItem("erros_divi");
   var mult_pu = localStorage.getItem("pulos_divi");

   var mult_pt_i = parseInt(mult_pt, 10);
   var mult_er_i = parseInt(mult_er, 10);
   var mult_pu_i = parseInt(mult_pu, 10);

   //caso haja dados no histórico ou pontos acumulado altera-se a cor de fundo do titulo amarelo como aviso
   if( parse_err_divi_st ||  parse_acer_divi_st || parse_pul_divi_st || mult_pt_i > 0 || mult_er_i > 0 || mult_pu_i > 0 ){
        titulo.style.background = "#dfdf7f";
   }else{
       titulo.style.background = "#97e697";
   }

   console.log('Erros? '+parse_err_divi_st);
   console.log('Acertos? '+parse_acer_divi_st);
   console.log('Pulos? '+parse_pul_divi_st);
   
}

function resetar(){
   console.log('Apagando os dados');

   if ( confirm('Apagar Pontos Erros e Pulos?') ) {

      localStorage.setItem("pontos_divi", 0);
      localStorage.setItem("erros_divi", 0);
      localStorage.setItem("pulos_divi", 0);
      verificaStorage();

      console.log('Dados Apagados');

   }else{
      console.log('Dados Não Apagados');
   }

}

function resetar_noconfirm(){
   console.log('Apagando os dados de sessão exibidos no html sem confirmação');

      //zera os dados na sessão
      localStorage.setItem("pontos_divi", 0);
      localStorage.setItem("erros_divi", 0);
      localStorage.setItem("pulos_divi", 0);
      
      //pega os dados da sessão e escreve no html
      verificaStorage();

}

function limpar_hist(){

   localStorage.setItem("arr_obj_err_divi", null);
   localStorage.setItem("arr_obj_acer_divi", null);
   localStorage.setItem("arr_obj_pul_divi", null);

}

function rumais() {

   //desabilita tabuada (e inserção automatica de valores) quando iniciamos a soma
   //limpa_tabuada();

   const q_u = $('#q_u');
   
   console.log('q_u.html():'+q_u.html());

   var q = 0;

   if(q_u.html() != '&nbsp;'){
      q = q_u.html();
   }
   
   var qi = parseInt(q, 10);

   if( qi > 8){
       q_u.html(9);
   }else{
       q_u.html(qi+1);
   }

   console.log('qi:'+qi);

   exibir();
   
}

function rumenos() {

   const q_u = $('#q_u');
   
   console.log('q_u.html():'+q_u.html());

   var q = 0;

   if(q_u.html() != '&nbsp;'){
      q = q_u.html();
   }
   
   var qi = parseInt(q, 10);

   if( qi < 1){
       q_u.html(0);
   }else{
       q_u.html(qi-1);
   }

   console.log('qi:'+qi);

   exibir();

}
function rdmais() {

   //desabilita tabuada (e inserção automatica de valores) quando iniciamos a soma
   //limpa_tabuada();

   const q_d = $('#q_d');
   
   console.log('q_d.html():'+q_d.html());

   var q = 0;

   if(q_d.html() != '&nbsp;'){
      q = q_d.html();
   }
   
   var qi = parseInt(q, 10);

   if( qi > 8){
       q_d.html(9);
   }else{
       q_d.html(qi+1);
   }

   console.log('qi:'+qi);

   exibir();
   
}

function rdmenos() {

   const q_d = $('#q_d');
   
   console.log('q_d.html():'+q_d.html());

   var q = 0;

   if(q_d.html() != '&nbsp;'){
      q = q_d.html();
   }
   
   var qi = parseInt(q, 10);

   if( qi < 1){
       q_d.html(0);
   }else{
       q_d.html(qi-1);
   }

   console.log('qi:'+qi);

   exibir();

}

function rcmais() {

   //desabilita tabuada (e inserção automatica de valores) quando iniciamos a soma
   //limpa_tabuada();

   const q_c = $('#q_c');
   
   console.log('q_c.html():'+q_c.html());

   var q = 0;

   if(q_c.html() != '&nbsp;'){
      q = q_c.html();
   }
   
   var qi = parseInt(q, 10);

   if( qi > 8){
       q_c.html(9);
   }else{
       q_c.html(qi+1);
   }

   console.log('qi:'+qi);

   exibir();
   
}

function rcmenos() {

   const q_c = $('#q_c');
   
   console.log('q_c.html():'+q_c.html());

   var q = 0;

   if(q_c.html() != '&nbsp;'){
      q = q_c.html();
   }
   
   var qi = parseInt(q, 10);

   if( qi < 1){
       q_c.html(0);
   }else{
       q_c.html(qi-1);
   }

   console.log('qi:'+qi);

   exibir();

}

function rmmais() {

   //desabilita tabuada (e inserção automatica de valores) quando iniciamos a soma
   //limpa_tabuada();

   const q_m = $('#q_m');
   
   console.log('q_m.html():'+q_m.html());

   var q = 0;

   if(q_m.html() != '&nbsp;'){
      q = q_m.html();
   }
   
   var qi = parseInt(q, 10);

   if( qi > 8){
       q_m.html(9);
   }else{
       q_m.html(qi+1);
   }

   console.log('qi:'+qi);

   exibir();
   
}

function rmmenos() {

   const q_m = $('#q_m');
   
   console.log('q_m.html():'+q_m.html());

   var q = 0;

   if(q_m.html() != '&nbsp;'){
      q = q_m.html();
   }
   
   var qi = parseInt(q, 10);

   if( qi < 1){
       q_m.html(0);
   }else{
       q_m.html(qi-1);
   }

   console.log('qi:'+qi);

   exibir();

}

function prepara_impr(){

   if(localStorage.getItem("nome_aluno_divi") != null){
      
      nome_aluno_divi = localStorage.getItem("nome_aluno_divi");
   
      document.getElementById("nome_aln").value = nome_aluno_divi;
   
      console.log('nome recuperado da secao: ' + nome_aluno_divi);
   
   }

   if(localStorage.getItem("tempo_divi") != null){
      
      tempo_divi = localStorage.getItem("tempo_divi");
   
      document.getElementById("tempo_divi").innerText = tempo_divi;
   
      console.log('tempo recuperado da secao: ' + tempo_divi);
   
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

   if (localStorage.hasOwnProperty("arr_obj_err_divi")) {
      
      var parse = JSON.parse( localStorage.getItem("arr_obj_err_divi") );

      if(parse != null){

         n_err.innerText = "("+parse.length+")";
         n_err_lin.innerText = "("+parse.length+")";
   
         parse.forEach(objconta => {
            
            /*não será impresso os valores*/
            if(chave=='his' && valor=='1'){

               //html_err = html_err + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span></span></div>";
               //html_err_lin = html_err_lin + "<li>"+objconta.num2+" \u00F7 "+objconta.num1+"</li>";

               html_err = html_err + objconta.html;

            }else{

               //html_err = html_err + "<div class=\"conta\"><span>"+objconta.num2+"</span>&nbsp;&nbsp;<span>"+objconta.num1+"</span><span class=\"sinal\">|_</span><hr><span>"+objconta.numq+"</span></div>";
               //html_err_lin = html_err_lin + "<li>"+objconta.num2+" \u00F7 "+objconta.num1+" = "+objconta.numr+"</li>";
            
               html_err = html_err + objconta.html;

            }
            console.log('Erro: ' + objconta.num1 + ' \u00F7 ' + objconta.num2 + ' = ' + objconta.numq +'(resto: '+ objconta.numq+')' );

         }); 

      }

      erros.innerHTML = html_err;
      erros_lin.innerHTML = '<ol>'+html_err_lin+'</ol>';

   }

   if (localStorage.hasOwnProperty("arr_obj_acer_divi")) {
      
      var parse = JSON.parse( localStorage.getItem("arr_obj_acer_divi") );

      if(parse != null){

         n_ace.innerText = "("+parse.length+")";
         n_ace_lin.innerText = "("+parse.length+")";

         parse.forEach(objconta => {
            
            /*não será impresso os valores*/
            if(chave=='his' && valor=='1'){

               //html_ace = html_ace + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span></span></div>";
               //html_ace_lin = html_ace_lin + "<li>"+objconta.num2+" x "+objconta.num1+"</li>";
               
               html_ace = html_ace + objconta.html;

            }else{

               //html_ace = html_ace + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span>"+objconta.numr+"</span></div>";
               //html_ace_lin = html_ace_lin + "<li>"+objconta.num2+" x "+objconta.num1+" = "+objconta.numr+"</li>";
               
               html_ace = html_ace + objconta.html;
               
            }
            console.log('Acerto: ' + objconta.num1 + ' \u00F7 ' + objconta.num2 + ' = ' + objconta.numq +'(resto: '+ objconta.numq+')' );

         }); 

      }

      acertos.innerHTML = html_ace;
      acertos_lin.innerHTML = '<ol>'+html_ace_lin+'</ol>';

   }

   if (localStorage.hasOwnProperty("arr_obj_pul_divi")) {
      
      var parse = JSON.parse( localStorage.getItem("arr_obj_pul_divi") );

      if(parse != null){

         n_pul.innerText = "("+parse.length+")";
         n_pul_lin.innerText = "("+parse.length+")";

         parse.forEach(objconta => {
         
            /*não será impresso os valores*/
            if(chave=='his' && valor=='1'){

               //html_pul = html_pul + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span></span></div>";
               //html_pul_lin = html_pul_lin + "<li>"+objconta.num2+" x "+objconta.num1+"</li>";
               
               html_pul = html_pul + objconta.html;

            }else{
            
               //html_pul = html_pul + "<div class=\"conta\"><span>"+objconta.num1+"</span><br><span>"+objconta.num2+"</span><span class=\"sinal\">x</span><hr><span>"+objconta.numr+"</span></div>";
               //html_pul_lin = html_pul_lin + "<li>"+objconta.num2+" x "+objconta.num1+" = "+objconta.numr+"</li>";

               html_pul = html_pul + objconta.html;

            }
            console.log('Pulo: ' + objconta.num1 + ' \u00F7 ' + objconta.num2 + ' = ' + objconta.numq +'(resto: '+ objconta.numq+')' );

         });

      } 

      pulos.innerHTML = html_pul;
      pulos_lin.innerHTML = '<ol>'+html_pul_lin+'</ol>';

   }
}