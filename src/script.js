const frm = document.querySelector('form');
const resposta = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = frm.inNumber.value;
  console.log(numero)

  //Validacoes
  if (numero.trim()) {
    const numeroConvertido = (numero * 9 / 5) + 32;
    resposta.innerText = `O valor de Celsius convertido em Fahrenheit é: ${numeroConvertido}°F`;
    resposta.style.color = '#4CAF50';
  } else {
    mostrarPopup("Por favor, insira um valor válido!");
  }
})

function mostrarPopup(mensagem) {
  const popup = document.querySelector('.popup');
  const popupTexto = document.querySelector('.popup-texto');
  popupTexto.innerText = mensagem;
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
}