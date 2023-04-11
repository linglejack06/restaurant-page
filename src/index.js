import renderHome from './home';
import renderMenu from './menu';
import renderAbout from './about';
import renderReserve from './reserve';

const content = document.getElementById('content');
content.innerHTML = '';
renderReserve();
