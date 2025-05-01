 <script>
    const botao = document.getElementById('botao-fujao');
    const mensagem = document.getElementById('mensagem-secreta');

    botao.addEventListener('mouseover', () => {
      const larguraJanela = window.innerWidth;
      const alturaJanela = window.innerHeight;

      const novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
      const novaPosicaoY = Math.random() * (alturaJanela - botao.offsetHeight);

      botao.style.left = `${novaPosicaoX}px`;
      botao.style.top = `${novaPosicaoY}px`;
    });

    botao.addEventListener('click', () => {
      mensagem.style.display = 'block';
    });
  </script>
