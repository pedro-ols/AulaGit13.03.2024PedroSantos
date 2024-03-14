let a = ((Math.random() * 100).toFixed());

let b = ((Math.random()* 100).toFixed());

let contagem = 1;

while(!(b == a)){
    contagem++;
    if(b > a){
        
        console.log("o número secreto é menor que " + b);
        
    }else{
        console.log("o número secreto é maior que " + b);
    }
    
    b = ((Math.random()* 100).toFixed());
}

console.log("você adivinhou o número secreto :)")

console.log("foram realizadas " + contagem + " tentativas")
//01
//02
//03
//04
//05
//06
//07
//08
//09
//10 
//11
