import './style.css';


const menu = document.getElementById('menu');

function menuPage() {
    // create heading
    const headingMenu = document.createElement('div');
    headingMenu.setAttribute('class', 'page-heading');
    menu.appendChild(headingMenu);

    // Create container
    const containerMenu = document.createElement('div');
    containerMenu.setAttribute('class', 'container');
    headingMenu.appendChild(containerMenu);

     // Create header with text
     const headerMenu = document.createElement('h1');
     headerMenu.setAttribute('class', 'text');
     const headerMenuText =  document.createTextNode('Our Menu');
     headerMenu.appendChild(headerMenuText);
     containerMenu.appendChild(headerMenu);

    // Create header paragrapgh
    const paragraphContact = document.createElement('p');
    paragraphContact.setAttribute('class', 'text');
    const paragraphContactText = document.createTextNode(' East Legon; P.O. Box KD213 Kanda,. Accra, GHANA Tel: 233');
    paragraphContact.appendChild(paragraphContactText);
    containerContact.appendChild(paragraphContact);

}

contactPage();

export {contactPage}