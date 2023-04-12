import { createBasicStructure, addElement, addHead } from './helperFuncs';

export default function renderHome() {
    const basicStructure = createBasicStructure();
    // create head title + img
    const navBtns = addHead(basicStructure, 'home');
    // create main body section
    const barkBiteContainer = addElement('div', '', basicStructure.main, 'section-container');
    addElement('h2', 'Bark Bites', barkBiteContainer, 'section-title');
    let paraText = `Groot's Bark Bites are an innovative new dish. Designed to pair with a multitude of cuisines, the bark brings forth an earthy flavor.`;
    addElement('p', paraText, barkBiteContainer, 'para');
    const reservationContainer = addElement('div', '', basicStructure.main, 'section-container');
    addElement('h2', 'Reservations', reservationContainer, 'section-title');
    paraText = `Due to current demand, all travellers are required to reserve a table and food request atleast one week in advance. While reviewing your reservation, we are authorized to perform background checks, and, if needed, notify the Sovereign.`;
    addElement('p', paraText, reservationContainer, 'para');
    return navBtns;
}