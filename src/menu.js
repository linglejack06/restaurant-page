import { createBasicStructure, addElement, addHead, addImage } from './helperFuncs';
import Bark from './bark.jpg';

function addCard(itemName, description, parent, image) {
    const card = addElement('div', '', parent, 'menu-card');
    const head = addElement('div', '', card, 'img-title-container');
    const body = addElement('div', '', card, 'description-container');
    // add image + title to head of card
    addImage(head, image, 'food-img');
    addElement('h3', itemName, head, 'item-title');
    // add description to body of card
    addElement('p', description, body, 'description');
    
}
export default function renderMenu() {
    const basicStructure = createBasicStructure();
    // add header content
    addHead(basicStructure, 'menu');
    // add cards for menu items
    addElement('h2', 'Our Out of The Galaxy Menu', basicStructure.main, 'title');
    const menuGrid = addElement('div', '', basicStructure.main, 'menu-grid');
    // source: ChatGPT
    let itemDescription = `Bark noodle soup is a hearty and flavorful dish that combines the earthy taste of tree bark with the satisfying texture of noodles and nuts. With fragrant spices that add a warm and comforting aroma, this soup is a perfect choice for a cozy and unique dining experience.`
    addCard('Bark Noodle Soup', itemDescription, menuGrid, Bark);
}