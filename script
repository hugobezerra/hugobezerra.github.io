// Função para pesquisar tópicos e fórmulas
function pesquisar() {
    const input = document.getElementById("campoPesquisa").value.toLowerCase();
    const elementos = document.getElementsByClassName("conteudo");
    for (let elemento of elementos) {
        if (elemento.innerText.toLowerCase().includes(input)) {
            elemento.style.display = "block";
        } else {
            elemento.style.display = "none";
        }
    }
}
