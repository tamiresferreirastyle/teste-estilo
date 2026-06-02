// progress.js - Gerenciamento da barra de progresso

export function atualizarProgresso(perguntas) {
  let respondidas = 0;

  perguntas.forEach((_, i) => {
    const marcada = document.querySelector(
      `input[name="pergunta${i}"]:checked`,
    );

    if (marcada) {
      respondidas++;
    }
  });

  const porcentagem = (respondidas / perguntas.length) * 100;

  document.getElementById("progressBar").style.width = `${porcentagem}%`;

  document.getElementById("progressText").innerText =
    `${respondidas}/${perguntas.length}`;
}
