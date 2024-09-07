function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // JavaScript não aceita caractere especial para nome, com isso um dos nomes fica em maiusculo
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa) {
        section.innerHTML = "<p>Busca Vazia. Você não escreveu o origami.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    let titulo = "";
    let descricao = "";
    let tags = "";

    // para cada dado dentro da lista de dados

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (dado.titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>`
        }

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>"
    }

    section.innerHTML = resultados;
}


