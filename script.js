const frm = document.querySelector('form');
const resposta = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  const numero = frm.inNumber.value;
  const numeroConvertido = (numero * 9/5) + 32;
  resposta.innerText = `O valor de Celsius convertido em Fahrenheit é: ${numeroConvertido}`;
  e.preventDefault();
})