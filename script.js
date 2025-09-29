// ✍️ Efeito de digitação no nome
const texto = "Gabriel Cavalcanti";
let i = 0;
function digitar() {
  if (i < texto.length) {
    document.getElementById("nome").innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 100);
  }
}
window.onload = digitar;

// 🌗 Alternância de tema claro/escuro
document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// ✅ Validação de formulário de contato
document.getElementById("form-contato").onsubmit = function (e) {
  const nome = document.getElementById("nome-contato").value.trim();
  const email = document.getElementById("email-contato").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    e.preventDefault();
  }
};

// 🧠 Filtro de certificações por categoria
const botoesFiltro = document.querySelectorAll(".filtro-btn");
const secoes = document.querySelectorAll(".cert-section");

botoesFiltro.forEach((btn) => {
  btn.addEventListener("click", () => {
    const categoria = btn.getAttribute("data-categoria");

    secoes.forEach((secao) => {
      if (categoria === "todos" || secao.id === categoria) {
        secao.style.display = "block";
      } else {
        secao.style.display = "none";
      }
    });
  });
});
