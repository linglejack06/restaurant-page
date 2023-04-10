export function createBasicStructure() {
    const body = document.getElementById('content');
    const head = document.createElement('div');
    head.classList.add('head');
    body.appendChild(head);
    const main = document.createElement('div');
    main.classList.add('main');
    body.appendChild(main);
    const footer = document.createElement('div');
    footer.classList.add('footer');
    body.appendChild(footer);

    return {head, main, footer};
}
export function addParagraph(text, parent, className) {
    const paragraph = document.createElement('p');
    paragraph.classList.add(className);
    paragraph.textContent = text;
    parent.appendChild(paragraph);

}