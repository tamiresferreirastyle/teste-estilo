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

  input.closest(".card").classList.remove("erro");
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
  const errorBox = document.getElementById("errorBox");

  errorBox.style.display = "block";

  document.querySelectorAll("#quizForm .card").forEach((card) => {
    card.classList.remove("erro");
  });

  const cards = document.querySelectorAll("#quizForm .card");

  let primeiraPendente = null;
  let faltantes = 0;

  cards.forEach((card) => {
    const respondeu = card.querySelector("input[type='radio']:checked");

    if (!respondeu) {
      card.classList.add("erro");
      faltantes++;

      if (!primeiraPendente) {
        primeiraPendente = card;
      }
    }
  });

  errorBox.textContent =
    `Você ainda possui ${faltantes} ${faltantes === 1 ? "pergunta" : "perguntas"} sem resposta.`;

  if (primeiraPendente) {
    primeiraPendente.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

export function ocultarErro() {
  document.getElementById("errorBox").style.display = "none";
}
