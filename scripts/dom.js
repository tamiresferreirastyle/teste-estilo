// dom.js - Manipulação de DOM e renderização

export function renderizarPerguntas(perguntas, callback) {
  const form = document.getElementById("quizForm");

  perguntas.forEach((perguntaObj, perguntaIndex) => {
    const card = document.createElement("div");

    card.classList.add("card");

    let html = `
      <div class="question-title">
        ${perguntaIndex + 1}. ${perguntaObj.pergunta}
      </div>
    `;

    perguntaObj.respostas.forEach((resposta) => {
      html += `
        <div class="option">

          <label>

            <input
              type="radio"
              name="pergunta${perguntaIndex}"
              value="${resposta.letra}"
              onchange="window.app.handleChange()"
            >

            <div>
              ${resposta.texto}
            </div>

          </label>

        </div>
      `;
    });

    card.innerHTML = html;

    form.appendChild(card);
  });
}

export function selecionar(input) {
  const grupo = document.querySelectorAll(`input[name="${input.name}"]`);

  grupo.forEach((item) => {
    item.parentElement.classList.remove("selected");
  });

  input.parentElement.classList.add("selected");

  const card = input.closest(".card");

  // Remove destaque
  card.classList.remove("erro");

  // Remove a mensagem de erro desse card
  const mensagem = card.querySelector(".error-message");

  if (mensagem) {
    mensagem.remove();
  }
}

export function exibirResultado(top3, estilos) {
  const resultado = document.getElementById("resultado");

  resultado.style.display = "block";

  document.getElementById("resultadoConteudo").innerHTML = top3
    .map(
      (item, index) => `

      <div class="resultado-item">

        <div>

          <h3>
            ${index + 1}º Lugar
          </h3>

          <div>
            Estilo ${estilos[item[0]]}
          </div>

        </div>

        <div class="resultado-pontos">
          ${item[1]} pts
        </div>

      </div>

    `,
    )
    .join("");

  resultado.scrollIntoView({
    behavior: "smooth",
  });
}

export function exibirErro() {
  document.querySelectorAll(".error-message").forEach(msg => msg.remove());

  document.querySelectorAll("#quizForm .card").forEach(card => {
    card.classList.remove("erro");
  });

  const cards = document.querySelectorAll("#quizForm .card");

  let primeiraPendente = null;
  let faltantes = 0;

  cards.forEach(card => {

    const respondeu = card.querySelector("input[type='radio']:checked");

    if (!respondeu) {

      faltantes++;

      if (!primeiraPendente) {
        primeiraPendente = card;
      }

    }

  });

  if (primeiraPendente) {

    primeiraPendente.classList.add("erro");

    const alerta = document.createElement("div");

    alerta.className = "error-message";

    alerta.innerHTML = `
      <strong>⚠ Atenção!</strong><br>
      Você ainda possui <strong>${faltantes}</strong>
      ${faltantes === 1 ? "pergunta" : "perguntas"}
      sem resposta. Complete-as para visualizar seu resultado.
    `;

    primeiraPendente.prepend(alerta);

    primeiraPendente.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }
}

export function ocultarErro() {
  document.querySelectorAll(".error-message").forEach(msg => msg.remove());

  document.querySelectorAll("#quizForm .card").forEach(card => {
    card.classList.remove("erro");
  });
}
