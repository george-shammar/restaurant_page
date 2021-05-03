import './style.css';

function contactPage() {
  // create heading
  const contact = document.createElement('div');
  contact.setAttribute('class', 'contact');
  const heading = document.createElement('div');
  heading.setAttribute('class', 'page-heading');
  contact.appendChild(heading);

  // Create container
  const containerContact = document.createElement('div');
  containerContact.setAttribute('class', 'container');
  heading.appendChild(containerContact);

  // Create header with text
  const headerContact = document.createElement('h1');
  headerContact.setAttribute('class', 'text');
  const headerContactText = document.createTextNode('Contact Us');
  headerContact.appendChild(headerContactText);
  containerContact.appendChild(headerContact);

  // Create header paragrapgh
  const paragraphContact = document.createElement('p');
  paragraphContact.setAttribute('class', 'text');
  const paragraphContactText = document.createTextNode(' East Legon; P.O. Box KD213 Kanda,. Accra, GHANA Tel: 233');
  paragraphContact.appendChild(paragraphContactText);
  containerContact.appendChild(paragraphContact);

  //======page tabs=====
   // create menu
   const nav = document.createElement('nav');
   nav.setAttribute('class', 'menu');
   contact.appendChild(nav);
 
   // create home tab
   const home = document.createElement('div');
   home.setAttribute('class', 'primary-button me-5');
   const link = document.createElement('a');
   link.setAttribute('href', '#');
   link.setAttribute('id', 'home');
   const homeText = document.createTextNode('Home');
 
   link.appendChild(homeText);
   home.appendChild(link);
   nav.appendChild(home);
 
   // Create menu tab
   const homeMenu = document.createElement('div');
   homeMenu.setAttribute('class', 'primary-button me-5');
   const linkMenu = document.createElement('a');
   linkMenu.setAttribute('href', '#');
   linkMenu.setAttribute('id', 'menu');
   const homeMenuText = document.createTextNode('Menu');
 
   linkMenu.appendChild(homeMenuText);
   homeMenu.appendChild(linkMenu);
   nav.appendChild(homeMenu);
 
   // Create contact tab
   const homeContact = document.createElement('div');
   homeContact.setAttribute('class', 'primary-button me-5');
   const linkContact = document.createElement('a');
   linkContact.setAttribute('href', '#');
   linkContact.setAttribute('id', 'contact');
   const homeContactText = document.createTextNode('Contact');
 
   linkContact.appendChild(homeContactText);
   homeContact.appendChild(linkContact);
   nav.appendChild(homeContact);

  return contact;
}

function callContact() {
  const pageSwitch = document.getElementById('content');
  pageSwitch.innerHTML = '';
  pageSwitch.appendChild(contactPage());
}

export default callContact;