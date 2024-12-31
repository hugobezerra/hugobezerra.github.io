const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.nav-link'); // Seleciona todos os links do menu

navbarToggler.addEventListener('click', () => {
    navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Adiciona o evento de clique para os links do menu em dispositivos móveis
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) { // Verifica se está em tela pequena
            const submenu = link.nextElementSibling; //pega o submenu irmão do link
            if (submenu && submenu.classList.contains('submenu')){ //verifica se existe submenu
                event.preventDefault(); // Impede o link de redirecionar
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
