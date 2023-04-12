import renderHome from './home';
import renderMenu from './menu';
import renderAbout from './about';
import renderReserve from './reserve';

const content = document.getElementById('content');
content.innerHTML = '';
renderHome();
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('home')) {
        content.innerHTML = '';
        renderHome();
    } else if (e.target.classList.contains('about')) {
        content.innerHTML = '';
        renderAbout();
    } else if (e.target.classList.contains('menu')) {
        content.innerHTML = '';
        renderMenu();
    } else if (e.target.classList.contains('reserve')) {
        content.innerHTML = ''
        renderReserve();
    }
})
