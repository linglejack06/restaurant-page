import Groot from './groot.jpeg';
import { createBasicStructure, addParagraph } from './helperFuncs';

function addImage(parent) {
    const image = new Image();
    image.src = Groot;
    image.classList.add('groot');
    const imageHolder = document.createElement('div');
    imageHolder.classList.add('image-holder');
    imageHolder.appendChild(image)
    parent.appendChild(imageHolder);
}

export default function renderHome() {
    const basicStructure = createBasicStructure();
    addImage(basicStructure.main);
    addParagraph('hi from the future', basicStructure.main, 'future-text')
}