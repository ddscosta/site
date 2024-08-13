//--------------------------------------------
/*algoritmo da divisão tentativa 2(com matriz arrays e objetos)*/
//-------------------------------------------

var nlin = ''; // 1,2,3,4,5,6,7,8,9,''
var ocol = ''; // m, c, d, u, ''
var pcol = ''; // dd, ds, q, r, ''

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

      console.log( 'ordem(ocol): '+ocol );

      console.log( 'partes(pcol): '+pcol );

   //se clicarmos na linha 1
   if(nlin == 1){

      //se clicarmos no dividendo
      if(pcol == 'dd'){

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

   //se clicarmos na linha 2
   if(nlin == 2){

      /*
      //se clicarmos em algum lugar do resto
      if(pcol == 'r'){

         //as 3 primeiras fases foram concluidas
         if(f_mul && f_mul_1 && f_mul_2 && f_mul_3  ){

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

            //motra resto no visor i guarda o resultado desse produto
            rpro = sel_rs(this, ocol, pcol, nlin);

            console.log('fase subtração iniciada');

         }else{

            //as 3 primeiras fases da multiplicação estão ativadas
            if(f_mul && f_mul_1 && f_mul_2 ){

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
      */

   }

   //se clicarmos na linha 3
   if(nlin == 3){

      //se clicarmos no quociente
      if(pcol == 'q'){

         //as 3 primeiras fases foram concluidas
         if(f_div && f_div_1 && f_div_2 && f_div_3  ){

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


            }

         }

         //a fase da multiplicação está ativa
         if(f_mul && f_mul_1){

            //seleciona a célula do quociente usando uma cor(verde)
            quop = sel_qu(this, ocol, pcol);

            //f_mul
            //f_mul_1
            //f_mul_2 = true;
            //f_mul_3

            //escreve o quociente
            // $(this).html(quo);

             console.log('quop:'+quop);

         }

      }

      /*
      //se clicarmos no resto
      if(pcol == 'r'){

         //a fase da subtração está ativa:vamos inserir o resultado da subtrçao
         if(f_sub && f_sub_1 && f_sub_2){

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

         //baixa o valores do dividendo na linha 3
         if(f_bai && f_bai_1 && f_bai_2){

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

            //seleciona valor do dividendo a ser baixado
            //dvdb = sel_dd(this, ocol, pcol);

         }

         

      }
      */

   }

   //se clicarmos na linha 4 ocorre o mesmo da linha 2
   if(nlin == 4){

      //se clicarmos em algum lugar do resto
      if(pcol == 'r'){

         //as 3 primeiras fases foram concluidas
         if(f_mul && f_mul_1 && f_mul_2 && f_mul_3  ){

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

            //motra resto no visor i guarda o resultado desse produto
            rpro = sel_rs(this, ocol, pcol, nlin);

            console.log('fase subtração iniciada');

         }else{

            //as 3 primeiras fases da multiplicação estão ativadas
            if(f_mul && f_mul_1 && f_mul_2 ){

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

   }

   //ação baseada nas partes(dd, ds, q, r): se clicarmos na parte do resto
   if( pcol == 'r'){

      //se linha for par: escreve produto; inicia subtração com a linha superior
      if(nlin % 2 == 0){

         console.log('se linha for par: escreve produto; inicia subtração com a linha superior');

         //passo 2: clicou encima do produto escrito: encerra produto e inicia a subtração
         if(f_mul && f_mul_1 && f_mul_2 && f_mul_3  ){

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

      }

   }

});

var rgbb = 'rgb(255, 255, 255)';

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

function sel_dd(_this, ocol, pcol){
   
   sel( _this, ocol, pcol );

   //busca números do dividendo selecionados
   var dividendo = get_dd();

   visor_msg( dividendo );

   return dividendo;

}

function sel_ds(_this, ocol, pcol){
   
   //seleciona o divisor
   sel( _this, ocol, pcol );


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

//selecionar o divisor que será multiplicado
function sel_dsp(_this, ocol, pcol){
   
   //seleciona o divisor
   sel( _this, ocol, pcol );

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

   sel_r(_this, ocol, pcol, nlin);

   var resto = get_r(nlin);

   console.log('numero da linha selecionada:'+resto);

   visor_msg( resto );

   return resto;
 
}

//seleciona um intervalo
function sel_cel(ocol, pcol, nlin){
   
   var cel = $('.l.'+nlin+' > .'+ocol+'.'+pcol);

   console.log('sel_cel:'+cel);

   cel.css('backgroundColor', corf_ativo);   
    
}

//seleciona um intervalo
function sel_int(_this, ocol, pcol, nlin, num){
  
   //se nlin>1 então seleciona nlin-1(linhas de restos)
   if(nlin > 2){
      
     // sel_r(_this, ocol, pcol, (nlin-1) );

      sel_cel('m', 'r', (nlin-1) );
      sel_cel('c', 'r', (nlin-1) );

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
/*
function sel_dds(_this, ocol, pcol, prod){
   
   //seleciona o dividendo celula por celula
   sel( _this, ocol, pcol );

   //busca números do divisor selecionados
   var dvdss = get_dd();

   var subb = calc_sub(dvdss, prod);

   //divide dois valores(sting ou nao) e retorna a parte inteira da divisão
   //var quo = calc_quo(dvd, dvs);

   if(subb == null){

      //console.log('merda:'+ (quo == 0) );
      //console.log('merda:'+ (quo == '') );
      visor_msg( prod );

   }else{

      visor_msg( dvdss + ' - ' + prod + ' = ' + subb );

   }

   return subb;

}*/

//faz e mostra o resultado a partir da seguda divisao
function sel_ds2(_this, ocol, pcol){
   
   //seleciona o divisor
   sel( _this, ocol, pcol );


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

   // var l1mi = parseInt( l1m.html(), 10 ) * 1000;
   // var l1ci = parseInt( l1c.html(), 10 ) * 100;
   // var l1di = parseInt( l1d.html(), 10 ) * 10;
   // var l1ui = parseInt( l1u.html(), 10 ) * 1;

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
   
   var numrs = numr.replace('&nbsp;','');

   console.log( 'numrs:'+numrs );

   var numri = parseInt(numrs, 10);
   
   console.log( 'numri:'+numri );

   return numri;

}

//recebe duas string e retorna o resultado inteiro da divisão
function calc_quo(dvd, dvs){
   
   var dvsi = parseInt(dvs, 10);
   var dvdi = parseInt(dvd, 10);

   var quo = null;

   if( isNaN(dvdi) || isNaN(dvsi) || dvsi == 0 || dvdi == '' || dvsi == '' ){
      
      console.log('Erro!!!');

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



//criando a classe dividendo
   class Dividendo{
      constructor(m,c,d,u){
         this.u = u;
         this.d = d;
         this.c = c;
         this.m = m;
      }
      
      get valor(){
         return parseInt(this.str(),10);
      }

      str(){
         return ''+this.m + this.c + this.d + this.u;
      }

      log(){
         console.log('Dividendo: ' + this.str() );
      }
   }

   const div = new Dividendo(1,2,3,4);
   div.log();


function aoiniciar(){

   //padrao: desativa todas as fases e subfases
   //f_ativar('');
   //sf_ativar('');

   //ativa a fase 1(divisao) e 1.1(selecionar dividendo)
   f_ativar(1);
   sf_ativar(1.1);
   
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

   dvd2_u = document.getElementById('dvd2_u');
   dvd2_d = document.getElementById('dvd2_d');
   dvd2_c = document.getElementById('dvd2_c');
   dvd2_m = document.getElementById('dvd2_m');

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
var val_dvd2_u = '';
var val_dvd2_d = '';
var val_dvd2_c = '';
var val_dvd2_m = '';

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

//operação sendo executada no momento. ex.: divi, mult, subt
var oper = '';

//indica que será feita a operação de subtração
var ativ_sub = false;

//inicio de um cliclo da divisao
var ini_cic = false;

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


//-------------------------f30-07-2024

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

   //nenhuma operação em andamento
   if(oper == ''){

      //limpa valores do dividendo com variavel 'val_dvd_...' esta vazia
      limpa_cor_divid_v();

      //limpa cor do divisor, quociente, resto
      limpa_cor_dsqr();

   }

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
      
      //prefixo da linha minuendo é 'dvd'
      //prefixo da linha subtraendo é 'dvd1'
      //faz a subtração e pega a string para mostrar no visor
      var subt_vis = get_subt('dvd', 'dvd1');

      visor_msg( subt_vis );

   //se não vai fazer subtração entao marca a milhar e mostra no visor, além de limpar o resto
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
      
      //se não há nenhuma operação em andamento então vai selecionar número e também limpar do divisor, quociente e resto
      //limpa cor do divisor, quociente, resto
      limpa_cor_dsqr();

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
            
            //operação sendo realizada nesse momento
            oper = 'divi';

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

         //operação sendo realizada nesse momento
         oper = 'mult';

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

   //aqui inicia-se um ciclo da divisao(quando um resultado é inserido no quociente)
   ini_cic = true;

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
         
         //operação sendo realizada nesse momento(nenhuma)
         oper = '';

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

      //operação sendo realizada nesse momento(nenhuma)
      oper = ''; 

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

      //operação sendo realizada nesse momento(nenhuma)
      oper = '';

      //limpa_cor_divid();
      //limpa_cor_resto('dvd1');
    
   //baixa um número ou seleciona números  
   }else{
   
      console.log('ord:'+ord+'>>val_dvd_c:'+val_dvd_c);
      
      //vamos baixar numeros para continuar dividindo
      //ex.: verifica se apenas a centena do dividendo está ativa. Se estiver, baixa na 'ord' correta
      if(ord == 'c' && val_dvd_c != ''){
         
         document.getElementById('dvd2_'+ord).innerText = val_dvd_c;
         ini_cic = true;
         limpa_fim_cic();
         
      }
      if(ord == 'd' && val_dvd_d != ''){
         
         document.getElementById('dvd2_'+ord).innerText = val_dvd_d;
         ini_cic = true;
         limpa_fim_cic();
         
      }
      if(ord == 'u' && val_dvd_u != ''){
         
         document.getElementById('dvd2_'+ord).innerText = val_dvd_u;
         ini_cic = true;
         limpa_fim_cic();
         
      }

      ativ_sub = false;

      if(ord == 'm'){

         //preenche/pinta ou descarta/pinta o valor clicado
         if(val_dvd2_m == '' && dvd2_m.innerText != ''){
            val_dvd2_m = dvd2_m.innerText;
            dvd2_m.style.backgroundColor = corf_ativo;
         }else{
            val_dvd2_m = '';
            dvd2_m.style.backgroundColor = corf_mil;
         }
         
         visor_msg( get_dvd2_mark() );

      }
      if(ord == 'c'){

         //preenche/pinta ou descarta/pinta o valor clicado
         if(val_dvd2_c == '' && dvd2_c.innerText != ''){
            val_dvd2_c = dvd2_c.innerText;
            dvd2_c.style.backgroundColor = corf_ativo;
         }else{
            val_dvd2_c = '';
            dvd2_c.style.backgroundColor = corf_cen;
         }
         
         visor_msg( get_dvd2_mark() );

      }
      if(ord == 'd'){

         //preenche/pinta ou descarta/pinta o valor clicado
         if(val_dvd2_d == '' && dvd2_d.innerText != ''){
            val_dvd2_d = dvd2_d.innerText;
            dvd2_d.style.backgroundColor = corf_ativo;
         }else{
            val_dvd2_d = '';
            dvd2_d.style.backgroundColor = corf_dez;
         }
         
         visor_msg( get_dvd2_mark() );

      }
      if(ord == 'u'){

         //preenche/pinta ou descarta/pinta o valor clicado
         if(val_dvd2_u == '' && dvd2_u.innerText != ''){
            val_dvd2_u = dvd2_u.innerText;
            dvd2_u.style.backgroundColor = corf_ativo;
         }else{
            val_dvd2_u = '';
            dvd2_u.style.backgroundColor = corf_uni;
         }
         
         visor_msg( get_dvd2_mark() );

      }


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

//retorna os números do resto que estão marcados
function get_dvd2_mark(){
   var res = val_dvd2_m + val_dvd2_c + val_dvd2_d + val_dvd2_u;
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

   if(num == 0){
      num = num+'';
   }

   console.log('num_'+pre+':'+num);

   if( num != ''){
      numi = parseInt(num, 10);
      console.log('numi_'+pre+':'+numi );
      
      if( isNaN(numi) ){
         return '';
      }

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

      //operação sendo realizada nesse momento
      oper = 'subt';
      
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

//limpa cores do dividendo se a variavel estiver vazia
function limpa_cor_divid_v(){
   if(val_dvd_u == ''){
      dvd_u.style.backgroundColor = corf_uni;   
   }
   if(val_dvd_d == ''){
      dvd_d.style.backgroundColor = corf_dez;
   }

   if(val_dvd_c == ''){
      dvd_c.style.backgroundColor = corf_cen;
   }

   if(val_dvd_m == ''){
      dvd_m.style.backgroundColor = corf_mil;
   }

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

function limpa_cor_restos(pre){
   limpa_cor_resto('dvd1');
   limpa_cor_resto('dvd2');
   limpa_cor_resto('dvd3');
   limpa_cor_resto('dvd4');
   limpa_cor_resto('dvd5');
   limpa_cor_resto('dvd6');
}

//limpa cor do divisor, quociente, resto
function limpa_cor_dsqr(){
   limpa_cor_divis();
   limpa_cor_quoc();
   limpa_cor_restos();
}

function limpa_fim_cic(){
   //agora limpamos
   limpa_val_divid();
   limpa_cor_divid();

   limpa_val_divis();
   limpa_cor_divis();

   limpa_val_quoc();
   limpa_cor_quoc();

   limpa_cor_resto('dvd1');
   limpa_cor_resto('dvd2');
}
