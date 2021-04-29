import './style.css';

const content = document.getElementById('content');

function pageLayout() {
    // create banner div and append to content.
    const banner = document.createElement('div');
    banner.setAttribute('class', 'banner');
    content.appendChild(banner);

    // create container div and append to banner
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    banner.appendChild(container);

    // Create header with text
    const header = document.createElement('h1');
    header.setAttribute('class', 'text');
    const headerText =  document.createTextNode('Bon Goût');
    header.appendChild(headerText);
    container.appendChild(header);

    // Create header paragrapgh
    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'text');
    const paragraphText = document.createTextNode('We tantalize your taste bud...');
    paragraph.appendChild(paragraphText);
    container.appendChild(paragraph);
}

// create menu function
function menu() {
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'menu');
    content.appendChild(nav);

    // create menu tabs
    const home = document.createElement('div');
    home.setAttribute('class', 'primary-button me-5');
    const link = document.createElement('a');
    link.setAttribute('href', "index.html");
    const homeText = document.createTextNode('Home');

    link.appendChild(homeText);
    home.appendChild(link);
    nav.appendChild(home);
}

export {pageLayout}
export {menu}