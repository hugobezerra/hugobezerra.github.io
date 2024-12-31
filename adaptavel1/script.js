const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');
const mainContent = document.getElementById('mainContent');
let timeoutId; // Variável para armazenar o ID do timeout

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
    clearTimeout(timeoutId); // Limpa o timeout anterior

    timeoutId = setTimeout(() => { // Define um novo timeout
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm.trim() !== "") {
            const sections = mainContent.querySelectorAll('section');
            let foundSection = null;

            sections.forEach(section => {
                const sectionText = section.textContent.toLowerCase();
                if (sectionText.includes(searchTerm)) {
                    foundSection = section;
                    return;
                }
            });

            if (foundSection) {
                foundSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                //searchInput.value = ""; // Removemos essa linha daqui
            }
        }
    }, 300); // Executa a pesquisa 300ms após o usuário parar de digitar
});

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        clearTimeout(timeoutId); // Limpa o timeout se o Enter for pressionado
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm.trim() !== "") {
            const sections = mainContent.querySelectorAll('section');
            let foundSection = null;

            sections.forEach(section => {
                const sectionText = section.textContent.toLowerCase();
                if (sectionText.includes(searchTerm)) {
                    foundSection = section;
                    return;
                }
            });

            if (foundSection) {
                foundSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                searchInput.value = ""; // Limpa o campo de pesquisa após a rolagem (agora aqui)
            }
        }
    }
});
