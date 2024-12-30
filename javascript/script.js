// Função para pesquisar tópicos e fórmulas
function pesquisar() {
    // Obtém o valor do campo de pesquisa, converte para minúsculas para facilitar a comparação
    const input = document.getElementById("campoPesquisa").value.toLowerCase();
    
    // Obtém todos os elementos com a classe "conteudo" e os armazena em uma coleção
    const elementos = document.getElementsByClassName("conteudo");
    
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
    // Função para desenhar o triângulo
function drawTriangle() {
    const canvas = document.getElementById('triangleCanvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(100, 30);  // Ponto superior
    ctx.lineTo(30, 170);  // Ponto inferior esquerdo
    ctx.lineTo(170, 170); // Ponto inferior direito
    ctx.closePath();

    ctx.fillStyle = 'lightblue';
    ctx.fill();
}

// Função para desenhar o círculo
function drawCircle() {
    const canvas = document.getElementById('circleCanvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(100, 100, 70, 0, Math.PI * 2);  // Desenha o círculo
    ctx.closePath();

    ctx.fillStyle = 'lightgreen';
    ctx.fill();
}

// Função para desenhar o retângulo
function drawRectangle() {
    const canvas = document.getElementById('rectangleCanvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'lightcoral';
    ctx.fillRect(30, 30, 140, 100); // Desenha o retângulo
}

// Chama as funções de desenho
drawTriangle();
drawCircle();
drawRectangle();

}
