const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');
const mainContent = document.getElementById('mainContent');

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
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm.trim() !== "") { // Verifica se o campo de pesquisa não está vazio ou contém apenas espaços em branco

        const sections = mainContent.querySelectorAll('section');
        let foundSection = null;

        sections.forEach(section => {
            const sectionText = section.textContent.toLowerCase();
            if (sectionText.includes(searchTerm)) {
                foundSection = section;
                return; // Sai do loop assim que encontrar a primeira correspondência
            }
        });

        if (foundSection) {
            foundSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            searchInput.value = ""; // Limpa o campo de pesquisa após a rolagem
        }
    }
});

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o envio do formulário (se estiver dentro de um)
        searchInput.dispatchEvent(new Event('input')); // Dispara o evento 'input' manualmente
    }
});
