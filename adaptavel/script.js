const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput'); // Obtém o campo de pesquisa
const mainContent = document.getElementById('mainContent'); // Obtém o conteúdo principal

navbarToggler.addEventListener('click', () => {
    navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            const submenu = link.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')){
                event.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        }
    });
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase(); // Converte o termo de pesquisa para minúsculas
    const sections = mainContent.querySelectorAll('section'); // Seleciona todas as seções

    sections.forEach(section => {
        const sectionText = section.textContent.toLowerCase(); // Converte o texto da seção para minúsculas

        if (sectionText.includes(searchTerm)) { // Verifica se o termo de pesquisa está presente no texto da seção
            section.style.display = 'block'; // Mostra a seção se houver correspondência

            // Realça o texto encontrado
            const regex = new RegExp(searchTerm, 'gi');
            section.innerHTML = section.innerHTML.replace(regex, '<span class="highlight">$&</span>');

        } else {
            section.style.display = 'none'; // Oculta a seção se não houver correspondência
        }

        if (searchTerm === ""){
          section.innerHTML = section.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/gi, '$1');
        }
    });
});
