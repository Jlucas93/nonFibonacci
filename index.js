
function nonFibonacci(num)
{
    if(num === 0){
        console.log("Erro número não pode ser igual 0")
        return
    }   

    let prepevious=1, previous=2, current=3;
 
    // Garantindo que o número não seja negativo
    while (num > 0)
    {
        // Criando a sequência Fibonacci
        prepevious = previous;
        previous = current;
        current = prepevious + previous;
 
        // (current - previous - 1) contagem de números não Fibonacci entre o atual e o anterior.
        num = num - (current - previous - 1); 
    } 
 
    // Transformadno n em positivo
    num = num + (current - previous - 1); 
 

    // Somar o n positivo ao número de Fibonacci anterior para encontrar o n'ésimo não-fibonacci.
    return previous + num;

}