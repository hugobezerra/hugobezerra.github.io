const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggler.addEventListener('click', () => {
    navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
});
const submenus = document.querySelectorAll('.submenu'); //seleciona todos os submenus

submenus.forEach(submenu => {
  const parentLink = submenu.parentNode.querySelector('.nav-link'); //pega o link pai de cada submenu
  parentLink.addEventListener('click', (event) => {
    if(window.innerWidth <= 768){ //verifica se está em tela pequena
      event.preventDefault(); //impede o link de redirecionar
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; //abre ou fecha o submenu
    }
  });
});
