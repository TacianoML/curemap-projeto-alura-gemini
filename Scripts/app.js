  function pesquisar() {
    /**
     * Função responsável por pesquisar dados e exibir os resultados em uma seção HTML.
     */
    
    let section = document.getElementById("resultados-pesquisa");

    let barraPesquisa = document.getElementById("barra-pesquisa").value;

    if (!barraPesquisa){
      section.innerHTML = "<p>Nada foi encontrado, digite algo na barra de pesquisa...</p>"
      return
    };
    
    barraPesquisa = barraPesquisa.toLowerCase();


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

  
    // Itera sobre cada item de dado
    for (let dado of dados) { // Cria uma string de HTML para um item de resultado

      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      if (titulo.includes(barraPesquisa) || descricao.includes(barraPesquisa) || tags.includes(barraPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p>${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
      }
    }

    if (!resultados) {
      section.innerHTML = "<p>Nada foi encontrado...</p>"
      return
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
  }