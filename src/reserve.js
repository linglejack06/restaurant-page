import { createBasicStructure, addElement, addHead } from "./helperFuncs";

export default function renderReserve () {
    const basicStructure = createBasicStructure();
    addHead(basicStructure, 'reserve');
    const reservationContainer = addElement('div', '', basicStructure.main, 'section-container');
    addElement('h2', 'Reservations', reservationContainer, 'section-title');
    const paraText = `Due to current demand, all travellers are required to reserve a table and food request atleast one week in advance. While reviewing your reservation, we are authorized to perform background checks, and, if needed, notify the Sovereign.`;
    addElement('p', paraText, reservationContainer, 'para');
    // add form
    const formContainer = addElement('div', '', basicStructure.main, 'form-containr');
    const form = addElement('form', '', formContainer, 'reserve-form');
    // name input + label
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.textContent = 'Full Name:';
    form.appendChild(nameLabel);
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('name');
    nameInput.setAttribute('id', 'name');
    nameInput.placeholder = 'Groot';
    form.appendChild(nameInput);
}