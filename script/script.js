
let quadrados = document.getElementsByClassName('col');
let jogadorX = 'X';
let jogadorO = 'O';
let jogadorDaVez = jogadorO;
let vencedor = null;


let pontosJogadorX =  document.getElementById('pontoX');
let posntosJogadorO = document.getElementById('pontoO');
pontosJogadorX.innerHTML = Number(0)
posntosJogadorO.innerHTML = Number(0)

const celulaClicada = (e) => {      
    
    if(vencedor === jogadorDaVez){       
        return
    }
     
    if(jogadorDaVez === jogadorO){
        jogadorDaVez = jogadorX 
    } else {
        jogadorDaVez = jogadorO
    }    

    e.target.innerHTML = jogadorDaVez;
    
    let um = document.getElementById('1');
    let dois = document.getElementById('2');
    let tres = document.getElementById('3');
    let quatro = document.getElementById('4');
    let cinco = document.getElementById('5');
    let seis = document.getElementById('6');
    let sete = document.getElementById('7');
    let oito = document.getElementById('8');
    let nove = document.getElementById('9');    
 
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

    if(um.innerHTML !== '' && um.innerHTML === dois.innerHTML && dois.innerHTML === tres.innerHTML){
        igual = true;
        vencedor = jogadorDaVez;
    }
    if(igual){
        avisoVencedor();
    }
    return igual;
}


function avisoVencedor(){
    document.getElementById('aviso').style.display = 'flex';
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.innerHTML = `Parabéns Jogador ${jogadorDaVez}, Você ganhou!!`;

    pontosJogador(jogadorDaVez);
    
}

function pontosJogador(vencedor){    
    if(vencedor === 'X'){
        pontosJogadorX.innerHTML++
    } else if (vencedor === 'O'){
        posntosJogadorO.innerHTML++
    }
}


//Troca de cor
function mudaCor(um, dois, tres){
    um.style.backgroundColor = 'green';
    dois.style.backgroundColor = 'green';
    tres.style.backgroundColor = 'green';
}



function reiniciar(){
    for(let celula of quadrados){    
        celula.addEventListener('click', celulaClicada, {once:true});    
    }
    for(let celula of quadrados){
            celula.innerHTML = '';
            celula.style.backgroundColor = '';
    }
    document.getElementById('aviso').style.display = 'none';
    vencedor = null;        
}
reiniciar()

let btReiniciar = document.getElementById('btReiniciar');
btReiniciar.addEventListener('click', reiniciar);
/*
let btReiniciarPaginaInicial =  document.getElementById('btReiniciarPaginaInicial');
btReiniciarPaginaInicial.addEventListener('click', reiniciar)
*/