function toggleDestaques() {
    const botao = document.querySelector('#botao-destaques');
    const lista = document.querySelector('#lista-destaques');
    if (lista.style.display === 'none') {
      botao.textContent = 'Ocultar';
      lista.style.display = 'block';
    } else {
      botao.textContent = 'Ver Mais';
      lista.style.display = 'none';
    }
  }

  // Adiciona o event listener ao botão de destaques
  const botao = document.querySelector('#botao-destaques');
  botao.addEventListener('click', toggleDestaques);