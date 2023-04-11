import renderHome from './home';
import renderMenu from './menu';
import renderAbout from './about';

const content = document.getElementById('content');
content.innerHTML = '';
renderAbout();
