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
    const paragraphMenu = document.createElement('p');
    paragraphMenu.setAttribute('class', 'text');
    const paragraphMenuText = document.createTextNode('Breakfast......Brunch......Lunch......Dinner');
    paragraphMenu.appendChild(paragraphMenuText);
    containerMenu.appendChild(paragraphMenu);

}

menuPage();
export {menuPage}