import './style.css';

const content = document.getElementById('content');


function tabCall() {
  // ==========tab for home=================
  const tabs = document.createElement('div');
  tabs.setAttribute('class', 'tabs');
  content.appendChild(tabs);

  // ===========tab for menu==================
  const menuInput = document.createElement('input');
  menuInput.setAttribute('type', 'radio');
  menuInput.setAttribute('name', 'tabs');
  menuInput.setAttribute('id', 'tabtwo');
  tabs.appendChild(menuInput);
  // label for menu
  const menuLabel = document.createElement('label');
  menuLabel.setAttribute('for', 'tabtwo');
  tabs.appendChild(menuLabel);
  const menuText = document.createTextNode('Menu');
  menuLabel.appendChild(menuText);
  // ===========tab for contact==================
  const contactInput = document.createElement('input');
  contactInput.setAttribute('type', 'radio');
  contactInput.setAttribute('name', 'tabs');
  contactInput.setAttribute('id', 'tabthree');
  tabs.appendChild(contactInput);
  // label for contact
  const contactLabel = document.createElement('label');
  contactLabel.setAttribute('for', 'tabthree');
  tabs.appendChild(contactLabel);
  const contactText = document.createTextNode('Contact');
  contactLabel.appendChild(contactText);

  return tabs;
}

function pageLayout() {
  // create banner div and append to content.
  const banner = document.createElement('div');
  banner.setAttribute('id', 'banner');
  content.appendChild(banner);

  // create container div and append to banner
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  banner.appendChild(container);

  // Create header with text
  const header = document.createElement('h1');
  header.setAttribute('class', 'text');
  const headerText = document.createTextNode('Bon Goût');
  header.appendChild(headerText);
  container.appendChild(header);

  // Create header paragrapgh
  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'text');
  const paragraphText = document.createTextNode('We tantalize your taste bud...');
  paragraph.appendChild(paragraphText);
  container.appendChild(paragraph);

  tabCall();
}

function callHome() {
  pageLayout();
}

export default callHome;