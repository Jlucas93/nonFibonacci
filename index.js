
function fibonacci(num){

    const sequencia =[0,1];
    let a,b;

    for( var i = 2; i <num; i++){
        a = sequencia[i - 1];
        b = sequencia [i -2];

        sequencia.push(a+b);
    }

    
    console.log(sequencia)
}

