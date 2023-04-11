import Groot from './groot.jpeg';

export function createBasicStructure() {
    const body = document.getElementById('content');
    const head = document.createElement('div');
    head.classList.add('head');
    body.appendChild(head);
    const header = document.createElement('div');
    header.classList.add('header');
    head.appendChild(header);
    const navBar = document.createElement('div');
    navBar.classList.add('nav');
    head.appendChild(navBar);
    const main = document.createElement('div');
    main.classList.add('main');
    body.appendChild(main);
    const footer = document.createElement('div');
    footer.classList.add('footer');
    body.appendChild(footer);

    return {header, navBar, main, footer};
}
export function addElement(elType, text, parent, className) {
    const element = document.createElement(elType);
    element.classList.add(className);
    element.textContent = text;
    parent.appendChild(element);
    return element;
}
export function addImage(parent, source, className, altDescription) {
    const image = new Image();
    image.src = source;
    image.alt = altDescription;
    image.classList.add(className);
    const imageHolder = document.createElement('div');
    imageHolder.classList.add('image-holder');
    imageHolder.appendChild(image)
    parent.appendChild(imageHolder);
}
export function addHead(basicStructure, current) {
    addImage(basicStructure.header, Groot, 'groot', 'A weeping image of Groot');
    const btnArray = [];
    addElement('h1', `Groot's Bark Bites`, basicStructure.header, 'title');
    const homeBtn = addElement('button', 'Home', basicStructure.navBar, 'nav-btn');
    btnArray.push(homeBtn)
    const menuBtn = addElement('button', 'Menu', basicStructure.navBar, 'nav-btn');
    btnArray.push(menuBtn);
    const aboutBtn = addElement('button', 'About', basicStructure.navBar, 'nav-btn');
    btnArray.push(aboutBtn);
    const reserveBtn = addElement('button', 'Reserve', basicStructure.navBar, 'nav-btn');
    btnArray.push(reserveBtn);
    btnArray.forEach(btn => {
        btn.classList.add(btn.textContent.toLowerCase());
        if(btn.classList.contains(current)) {
            btn.classList.add('active');
        } else {
            btn.classList.add('inactive');
        }
    })
}