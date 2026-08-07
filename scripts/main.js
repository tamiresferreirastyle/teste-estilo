// main.js - Arquivo principal que orquestra o aplicativo

import { estilos, perguntas } from "./data.js";
import { renderizarPerguntas, selecionar, exibirResultado, exibirErro, ocultarErro } from "./dom.js";
import { atualizarProgresso } from "./progress.js";
import { calcularResultados, obterTop3, todasRespondidas } from "./quiz.js";
import { baixarPDF } from "./pdf.js";

let top3Global = [];

// Inicialização
function init() {
  renderizarPerguntas(perguntas, atualizarProgresso);
}

// Event handlers globais
window.app = {
  handleChange: function() {
    const input = event.target;
    selecionar(input);
    atualizarProgresso(perguntas);
  },

  finalizarQuiz: function() {
    event.preventDefault();

    const { respondidas, contagem } = calcularResultados(perguntas);

    if (!todasRespondidas(respondidas, perguntas.length)) {
      exibirErro();
      return;
    }

    ocultarErro();

    top3Global = obterTop3(contagem);

    exibirResultado(top3Global, estilos);
  },

  baixarPDF: function() {
    baixarPDF(top3Global, estilos);
  }
};

// Inicializar quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
