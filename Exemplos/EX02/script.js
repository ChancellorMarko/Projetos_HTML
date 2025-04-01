function verificar_numero()
{
    var num_digitado = prompt("Insira um número:");

    var numero = Number(num_digitado);

    if(numero % 2 == 0)
    {
        alert("O numero: " + numero + " é par");
    }
    else
    {
        alert("O numero: " + numero + " é impar");
    }
}
