import Groot from './groot.jpeg';

function addImage() {
    const image = new Image();
    image.src = Groot;
    image.classList.add('groot');
    const imageHolder = document.getElementById('image-holder');
    imageHolder.appendChild(image);
}
export default function renderHome() {
    addImage();
}