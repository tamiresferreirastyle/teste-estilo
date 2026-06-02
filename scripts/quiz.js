// quiz.js - Lógica do quiz e cálculo de resultados

export function calcularResultados(perguntas) {
  let respondidas = 0;

  const contagem = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  };

  perguntas.forEach((_, i) => {
    const marcada = document.querySelector(
      `input[name="pergunta${i}"]:checked`,
    );

    if (marcada) {
      respondidas++;
      contagem[marcada.value]++;
    }
  });

  return {
    respondidas,
    contagem,
  };
}

export function obterTop3(contagem) {
  return Object.entries(contagem)
    .filter((item) => item[1] > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
}

export function todasRespondidas(respondidas, totalPerguntas) {
  return respondidas === totalPerguntas;
}
