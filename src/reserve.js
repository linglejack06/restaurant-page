import { createBasicStructure, addLabel, addInput, addElement, addHead } from "./helperFuncs";

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
    addLabel('name', 'Full Name:', form);
    addInput('text', 'name', 'name', 'Groot', form);
    // email input + label
    addLabel('email', 'Email Address:', form);
    addInput('email', 'email', 'email', 'groot@guardians.com', form);
    // phone number input + label
    addLabel('num', 'Phone Number:', form);
    addInput('tel', 'phone-num', 'num', '123-456-7890', form)
    // submit button
    const button = addElement('button', 'Reserve', form, 'submit-btn');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Submitted');
    })
}
