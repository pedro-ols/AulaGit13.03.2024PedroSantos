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
//comentario1
//comentario2
//comentario3
//coment4
//coment5
//coment6
//coment7
//coment8
//coment9
//coment10
//11
//12
//13
//14
//15
//16
