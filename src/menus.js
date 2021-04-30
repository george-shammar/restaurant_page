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
     const headerContact = document.createElement('h1');
     headerContact.setAttribute('class', 'text');
     const headerContactText =  document.createTextNode('Contact Us');
     headerContact.appendChild(headerContactText);
     containerContact.appendChild(headerContact);

    // Create header paragrapgh
    const paragraphContact = document.createElement('p');
    paragraphContact.setAttribute('class', 'text');
    const paragraphContactText = document.createTextNode(' East Legon; P.O. Box KD213 Kanda,. Accra, GHANA Tel: 233');
    paragraphContact.appendChild(paragraphContactText);
    containerContact.appendChild(paragraphContact);

}

contactPage();

export {contactPage}