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
    const sections = mainContent.querySelectorAll('section');

    sections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();

        if (sectionText.includes(searchTerm)) {
            section.style.display = 'block';
            section.classList.add('highlight'); // Adiciona a classe 'highlight' à SEÇÃO

        } else {
            section.style.display = 'none';
            section.classList.remove('highlight'); // Remove a classe 'highlight'
        }

        if (searchTerm === ""){
          section.classList.remove('highlight');
        }
    });
});
