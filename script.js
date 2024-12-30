// Função para pesquisar tópicos e fórmulas em toda a página
function pesquisar() {
    // Obtém o valor do campo de pesquisa, converte para minúsculas para facilitar a comparação
    const input = document.getElementById("campoPesquisa").value.toLowerCase();
    
    // Obtém todos os elementos de texto na página
    const elementos = document.body.getElementsByTagName("*"); // Obtém todos os elementos

    // Variável para rastrear se algum elemento corresponde à pesquisa
    let algumElementoVisivel = false;

    // Itera sobre cada elemento da coleção "elementos"
    for (let elemento of elementos) {
        // Verifica se o elemento tem texto e se o texto contém o valor do input
        if (elemento.innerText && elemento.innerText.toLowerCase().includes(input)) {
            // Se o texto do elemento contém o valor do input, exibe o elemento
            elemento.style.display = "block";
            algumElementoVisivel = true; // Marca que pelo menos um elemento é visível
        } else {
            // Se o texto do elemento não contém o valor do input, oculta o elemento
            elemento.style.display = "none";
        }
    }

    // Se nenhum elemento correspondente for encontrado, você pode adicionar lógica adicional aqui
    // Por exemplo, exibir uma mensagem informando que não há resultados
}
