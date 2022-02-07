
function nonFibonacci(num)
{
    // Dessa forma pulamos o 0 e 1 incial
    let prepevious=1, previous=2, current=3;
 
    // Garantindo que o número não seja negativo
    while (n > 0)
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