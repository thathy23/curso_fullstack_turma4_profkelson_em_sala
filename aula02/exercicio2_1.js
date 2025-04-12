/**Crie um script que contenha duas
funções, uma usando a sintaxe
tradicional e outra usando arrow
function. Ambas as funções devem
receber um parâmetro carreira e
retornar uma string concatenada
usando template literals ${var}.
○ Retorno: "Meu objetivo de
carreira é me tornar um
[parametro carreira]" */

const profissao = "Desenvolvedora";

function exibeProfissao(carreira) {

    return `Meu objetivo de carreira é me tornar uma ${carreira}`
}

const exibeProfissao2 = (carreira) => {

     return `Meu objetivo de carreira é me tornar uma ${carreira}`

}

console.log(exibeProfissao(profissao));
console.log(exibeProfissao2(profissao));

