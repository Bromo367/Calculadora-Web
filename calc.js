let visor = document.getElementById("idVisor");
let um = document.getElementById("idUm");
let dois = document.getElementById("idDois");
let tres = document.getElementById("idTres");
let quatro = document.getElementById("idQuatro");
let cinco = document.getElementById("idCinco");
let seis = document.getElementById("idSeis");
let sete = document.getElementById("idSete");
let oito = document.getElementById("idOito");
let nove = document.getElementById("idNove");
let zero = document.getElementById("idZero");
let mais = document.getElementById("idMais");
let menos = document.getElementById("idMenos");
let divisao = document.getElementById("idDivisao");
let vezes = document.getElementById("idMultiplicacao");
let igual = document.getElementById("idIgual");

let numeros = document.getElementsByClassName("classNumeros")[0];

let a=0; b=0, c=0, d=0;

visor.textContent = a;
um.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=1;
        }
        else{
            a+='1';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=1;
        }
        else{
            b+='1';
        }
        visor.textContent = b;
    }
});
dois.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=2;
        }
        else{
            a+='2';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=2;
        }
        else{
            b+='2';
        }
        visor.textContent = b;
    }
});
tres.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=3;
        }
        else{
            a+='3';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=3;
        }
        else{
            b+='3';
        }
        visor.textContent = b;
    }
});
quatro.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=4;
        }
        else{
            a+='4';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=4;
        }
        else{
            b+='4';
        }
        visor.textContent = b;
    }
});
cinco.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=5;
        }
        else{
            a+='5';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=5;
        }
        else{
            b+='5';
        }
        visor.textContent = b;
    }
});
seis.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=6;
        }
        else{
            a+='6';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=6;
        }
        else{
            b+='6';
        }
        visor.textContent = b;
    }
});
sete.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=7;
        }
        else{
            a+='7';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=7;
        }
        else{
            b+='7';
        }
        visor.textContent = b;
    }
});
oito.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=8;
        }
        else{
            a+='8';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=8;
        }
        else{
            b+='8';
        }
        visor.textContent = b;
    }
});
nove.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=9;
        }
        else{
            a+='9';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=9;
        }
        else{
            b+='9';
        }
        visor.textContent = b;
    }
});
zero.addEventListener("click", function(){
    if(d===0){
        if(a===0){
            a=0;
        }
        else{
            a+='0';
        }
        visor.textContent = a;
    }
    else{
        if(b===0){
            b=0;
        }
        else{
            b+='0';
        }
        visor.textContent = b;
    }
});
mais.addEventListener("click", function(){
    if(d===1){
        operar();
    }
    c=1;
    d=1;
    visor.textContent = a;
});
menos.addEventListener("click", function(){
    if(d===1){
        operar();
    }
    c=2;
    d=1;
    visor.textContent = a;
});
vezes.addEventListener("click", function(){
    if(d===1){
        operar();
    }
    c=3;
    d=1;
    visor.textContent = a;
});
divisao.addEventListener("click", function(){
    if(d===1){
        operar();
    }
    c=4;
    d=1;
    visor.textContent = a;
});
igual.addEventListener("click", function(){
    operar();
    c=0;
    d=0;
    visor.textContent = a;
    a=0;
});
function operar(){
    switch(c){
        case 1:
            a=Number(a)+Number(b);
        break;
        case 2:
            a=Number(a)-Number(b);
        break;
        case 3:
            a=Number(a)*Number(b);
        break;
        case 4:
            a=Number(a)/Number(b);
        break;
        default:
        break;
    }
    c=0;
    b=0;
};