const meusProjetos = [
  {
    nome: "JRConsult",
    descricao: "Repositório com exercícios de lógica e fundamentos em JavaScript.",
    linguagem: "JavaScript",
    link: "https://github.com/Elaniio/JRConsult"
  },
  {
    nome: "Exercicios-de-JavaScript",
    descricao: "Exercícios práticos realizados durante o curso de formação.",
    linguagem: "HTML/JS",
    link: "https://github.com/Elaniio/Exercicios-de-JavaScript"
  }
];

const containerProjetos = document.getElementById("lista-projetos");

meusProjetos.forEach(function(projeto) {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <p style="color: #34d399; font-size: 0.9rem; margin-top: 10px;">
        <i class="fa-solid fa-code"></i> ${projeto.linguagem}
    </p>
    <a class="project-link" href="${projeto.link}" target="_blank">
        Ver no GitHub <i class="fa-solid fa-arrow-right"></i>
    </a>
  `;

  containerProjetos.appendChild(card);
});

const formulario = document.querySelector(".contato-form");
formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
  alert("Obrigado! Sua mensagem foi enviada com sucesso.");
  formulario.reset();
});
