import { createBasicStructure, addElement, addHead, addImage } from './helperFuncs';
import SmilingGroot from './smilingGroot.jpeg';

export default function renderAbout () {
    // message source: chatGPT
    const welcomeMsg = `Welcome to Groot's Bark Bites, a unique dining experience owned and operated by the sentient tree himself, Groot. Our restaurant offers a one-of-a-kind menu featuring dishes made from the finest and most flavorful bark in the galaxy. Groot has curated each dish with care, ensuring that every bite is a savory and satisfying adventure.`
    const beliefMsg = `At Groot's Bark Bites, we believe that food is an expression of love and creativity, and we strive to share our passion for bark-based cuisine with each and every customer. Our restaurant is a welcoming space for all, whether you're a Guardian of the Galaxy or a local foodie looking for something new and exciting. Come join us for a meal that is out of this world!`
    const basicStructure = createBasicStructure();
    const navBtns = addHead(basicStructure, 'about');
    addImage(basicStructure.main, SmilingGroot, 'hero-img');
    const welcomeSection = addElement('div', '', basicStructure.main, 'welcome-container');
    addElement('h2', 'Welcome To Our Restaurant', welcomeSection, 'section-title');
    addElement('p', welcomeMsg, welcomeSection, 'welcome-msg');
    const beliefSection = addElement('div', '', basicStructure.main, 'belief-container');
    addElement('h2', 'Our Belief', beliefSection, 'section-title');
    addElement('p', beliefMsg, beliefSection, 'belief-msg');
    return navBtns;
}