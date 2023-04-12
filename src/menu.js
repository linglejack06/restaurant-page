import { createBasicStructure, addElement, addHead, addCard } from './helperFuncs';
import Bark from './bark.jpg';
import Pizza from './pizza.jpeg';
import Tenders from './tenders.jpeg';
import Pasta from './pasta.jpeg'
import Drink from './drink.jpeg';
import Soda from './soda.jpeg';

export default function renderMenu() {
    const basicStructure = createBasicStructure();
    // add header content
    addHead(basicStructure, 'menu');
    // add cards for menu items
    addElement('h2', 'Our Out of The Galaxy Menu', basicStructure.main, 'title');
    const menuGrid = addElement('div', '', basicStructure.main, 'menu-grid');
    addElement('h2', 'Food', menuGrid, 'long-section-title');
    // source: ChatGPT
    let itemDescription = `Features tender bark, savory noodles, crunchy nuts, and fragrant spices in a hearty and comforting broth.`
    addCard('Bark Noodle Soup', itemDescription, menuGrid, Bark, 'An Image of bark within a creamy broth');
    // source: ChatGPT
    itemDescription = `Features a crispy crust made with bark and topped with a mouthwatering blend of savory tomato sauce, melted cheese, and your choice of delectable toppings.`
    addCard('Bark Pizza', itemDescription, menuGrid, Pizza, 'Pizza lying on a slab of bark');
    // source: ChatGPT
    itemDescription = `Made with tender strips of finely ground bark, coated in a flavorful breading, and served with your choice of savory dipping sauce.`;
    addCard('Bark Tenders', itemDescription, menuGrid, Tenders, 'Bark tenders with special sauces and fries');
    // source: ChatGPT
    itemDescription = `Bark noodles tossed in a savory sauce and sprinkled with herbs and spices.`;
    addCard('Bark Pasta', itemDescription, menuGrid, Pasta, 'pasta carbonara');
    addElement('h2', 'Drinks', menuGrid, 'long-section-title');
    // source: ChatGPT
    itemDescription = ` Made from fermented sap, this refreshing beverage boasts a sweet yet tangy taste and a subtle earthy aroma.`;
    addCard('Twig', itemDescription, menuGrid, Drink, 'orange drink in wine glass');
    // source: ChatGPT
    itemDescription = `This vibrant and effervescent beverage combines the flavors of tangy citrus and sweet berries, perfectly balanced with a fizzy and refreshing finish`;
    addCard('Star-Lord Soda', itemDescription, menuGrid, Soda, 'Orange soda');
}