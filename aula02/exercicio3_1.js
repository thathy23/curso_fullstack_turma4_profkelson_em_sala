/*Crie um script que contenha um array chamado
temperaturas, que armazena 4 temperaturas em graus
Celsius. O programa deve:
○ Imprimir todas as temperaturas armazenadas no
array.
○ Selecionar uma temperatura aleatória do array.
○ Converter a temperatura selecionada de Celsius para
Fahrenheit.
○ Imprimir a temperatura original em Celsius e sua
conversão para Fahrenheit.
○ Para converter de Celsius para Fahrenheit:
■ F=(C×9/5)+32
○ Utilize a sintaxe
temperaturas[Math.floor(Math.random() *
temperaturas.length)] para selecionar um item
aleatório do array.*/

const temperaturasC = [23, 24, 25,26];
const temperaturaAleatoria = temperaturasC[Math.floor(Math.random() * temperaturasC.length)];
const temperaturaF = (temperaturaAleatoria * 9/5) + 32;

console.log(`As temperaturas são: ${temperaturasC}`);
console.log(`A primeira temperatura é: ${temperaturasC[0]}`);
console.log(`A segunda temperatura é: ${temperaturasC[1]}`);
console.log(`A terceira temperatura é: ${temperaturasC[2]}`);
console.log(`A quarta temperatura é: ${temperaturasC[3]}`);
console.log(`A temperatura aleatória é: ${temperaturaAleatoria}`);
console.log(`A temperatura em Fahrenheit é de: ${temperaturaF}`)
