// Função para pesquisar tópicos e fórmulas
function pesquisar() {
    // Obtém o valor do campo de pesquisa, converte para minúsculas para facilitar a comparação
    const input = document.getElementById("campoPesquisa").value.toLowerCase();
    
    // Obtém todos os elementos de texto na página
    const elementos = document.body.getElementsByTagName("*"); // Obtém todos os elementos
    
    // Itera sobre cada elemento da coleção "elementos"
    for (let elemento of elementos) {
        // Verifica se o texto do elemento (também convertido para minúsculas) contém o valor do input
        if (elemento.innerText.toLowerCase().includes(input)) {
            // Se o texto do elemento contém o valor do input, exibe o elemento
            elemento.style.display = "block";
        } else {
            // Se o texto do elemento não contém o valor do input, oculta o elemento
            elemento.style.display = "none";
        }
    }
}
