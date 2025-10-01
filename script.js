document.addEventListener("DOMContentLoaded", () => {
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
  digitar();

  // 🌗 Alternância de tema claro/escuro com botão tipo interruptor
  const botaoTema = document.getElementById("toggle-theme");
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // ✅ Validação de formulário de contato
  const form = document.getElementById("form-contato");
  form.addEventListener("submit", (e) => {
    const nome = document.getElementById("nome-contato").value.trim();
    const email = document.getElementById("email-contato").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      e.preventDefault();
    }
  });

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
});

document.addEventListener("DOMContentLoaded", () => {
  const reposContainer = document.getElementById("repos-container");

  // Substitua 'Bielcx' pelo seu nome de usuário no GitHub
  const githubUsername = "Bielcx";
  const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

  // Função para buscar os repositórios
  async function fetchRepos() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Erro ao buscar repositórios");
      }
      const repos = await response.json();

      // Filtra repositórios específicos pelo nome
    const reposEspecificos = repos.filter((repo) =>
      ["mochila-viagem", "Robotrex", "Calculadora-IMC-Flutter"].includes(repo.name)
    );

      // Limpa a mensagem de carregamento
      reposContainer.innerHTML = "";

      // Exibe os repositórios
      reposEspecificos.forEach((repo) => {
        const repoElement = document.createElement("div");
        repoElement.classList.add("repo");
        repoElement.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || "Sem descrição disponível."}</p>
        `;
        reposContainer.appendChild(repoElement);
      });
    } catch (error) {
      reposContainer.innerHTML = `<p>Erro ao carregar repositórios.</p>`;
      console.error(error);
    }
  }

  // Chama a função para buscar os repositórios
  fetchRepos();
});
