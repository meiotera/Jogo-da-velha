// Captura das colunas ho HTML
let quadrados = document.getElementsByClassName('col');
// iniciando variaveis
let jogadorX = 'X';
let jogadorO = 'O';
let vencedor = null;
// Variavel faz contagem da quantidade de jogadas para verificar se tem empate
let diferente = 0;

// Captura de local HTML onde exibe a pontuação
let pontosJogadorX =  document.getElementById('pontoX');
let posntosJogadorO = document.getElementById('pontoO');
// Atribuindo valor inicial a pontuação
pontosJogadorX.innerHTML = 0
posntosJogadorO.innerHTML = 0

// Captura celula clicada
const celulaClicada = (e) => {      
    // Vencedor ingual a jogador da vez, jogo termina e retorna para não ser executada mais esta função
    if(vencedor === jogadorDaVez){       
        return
    }
    // Se jogador da vez for X na proxima jogada jogador da vez será O
    if(jogadorDaVez === jogadorX){
        jogadorDaVez = jogadorO 
    } else {
        jogadorDaVez = jogadorX
    }    

    e.target.innerHTML = jogadorDaVez;
    
    // Variaveis que capturam celulas
    let um = document.getElementById('1');
    let dois = document.getElementById('2');
    let tres = document.getElementById('3');
    let quatro = document.getElementById('4');
    let cinco = document.getElementById('5');
    let seis = document.getElementById('6');
    let sete = document.getElementById('7');
    let oito = document.getElementById('8');
    let nove = document.getElementById('9');    
 
    // Se sequencia igual chama a função mudaCor() 
    if(verificaSequencia(um, dois, tres)){
        mudaCor(um, dois, tres);                 
    }
    if(verificaSequencia(quatro, cinco, seis)){
        mudaCor(quatro, cinco, seis);                
    }
    if(verificaSequencia(sete, oito, nove)){
        mudaCor(sete, oito, nove);        
    }
    if(verificaSequencia(um, quatro, sete)){
        mudaCor(um, quatro, sete);        
    }
    if(verificaSequencia(dois, cinco, oito)){
        mudaCor(dois, cinco, oito);        
    }
    if(verificaSequencia(tres, seis, nove)){
        mudaCor(tres, seis, nove);        
    }
    if(verificaSequencia(tres, cinco, sete)){
        mudaCor(tres, cinco, sete);        
    }
    if(verificaSequencia(um, cinco, nove)){
        mudaCor(um, cinco, nove);        
    }    
}


function verificaSequencia(um, dois, tres){
    let igual = false;    
    diferente++ 
    // Se um diferente de 'VAZIO' verifica UM DOIS e TRES , se forem iguais a variavel igual recebe TRUE
    if(um.innerHTML !== '' && um.innerHTML === dois.innerHTML && dois.innerHTML === tres.innerHTML){
        igual = true;
        // Variavel vencedor recebe jogadorDaVez
        vencedor = jogadorDaVez;
    } 
    // Se diferente === 72, chama a variale avisoVencedor()
    if (diferente === 72){
        avisoVencedor();        
    }
    // Se igual chama avisoVencedor()
    if(igual){
        avisoVencedor();
    } 
    // retorna TRUE
    return igual;
}

// avisoVencedor() mostra o aviso na tela
function avisoVencedor () {    
    if(diferente === 72){
        document.getElementById('aviso').style.display = 'flex';
        let paragrafo = document.getElementById('paragrafo');
        paragrafo.innerHTML = `Infelizmente o jogo terminou empate`;
        return;
    } else {
        document.getElementById('aviso').style.display = 'flex';
        let paragrafo = document.getElementById('paragrafo');
        paragrafo.innerHTML = `Parabéns Jogador ${jogadorDaVez}, Você ganhou!!`;
    }
    pontosJogador(jogadorDaVez);    
}

// passa a pontuação na tela
function pontosJogador(vencedor){    
    if(vencedor === 'X'){
        pontosJogadorX.innerHTML++
    } else if (vencedor === 'O'){
        posntosJogadorO.innerHTML++
    }
}


//Troca de cor somente das celula que contém a sequência igual
function mudaCor(um, dois, tres){
    um.style.backgroundColor = 'green';
    dois.style.backgroundColor = 'green';
    tres.style.backgroundColor = 'green';
}


// Reinicia o jogo, limpando todas as celulas e váriaveis
function reiniciar(){
    for(let celula of quadrados){    
        celula.addEventListener('click', celulaClicada, {once:true});    
    }
    for(let celula of quadrados){
        celula.innerHTML = '';
        celula.style.backgroundColor = '';
           
    }
    document.getElementById('aviso').style.display = 'none';
    diferente = 0
    vencedor = null;        
    jogadorDaVez = jogadorO;
}
reiniciar()

let btReiniciar = document.getElementById('btReiniciar');
btReiniciar.addEventListener('click', reiniciar);
