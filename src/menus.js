import './style.css';

function menuPage() {
  // create heading
  const menuMenu = document.createElement('div');
  menuMenu.setAttribute('class', 'menu');
  const headingMenu = document.createElement('div');
  headingMenu.setAttribute('class', 'page-heading');
  menuMenu.appendChild(headingMenu);

  // Create container
  const containerMenu = document.createElement('div');
  containerMenu.setAttribute('class', 'container');
  headingMenu.appendChild(containerMenu);

  // Create header with text
  const headerMenu = document.createElement('h1');
  headerMenu.setAttribute('class', 'text');
  const headerMenuText = document.createTextNode('Our Menu');
  headerMenu.appendChild(headerMenuText);
  containerMenu.appendChild(headerMenu);

  // Create header paragrapgh
  const paragraphMenu = document.createElement('p');
  paragraphMenu.setAttribute('class', 'text');
  const paragraphMenuText = document.createTextNode('Breakfast......Brunch......Lunch......Dinner');
  paragraphMenu.appendChild(paragraphMenuText);
  containerMenu.appendChild(paragraphMenu);

  //======page tabs=====
   // create menu
   const nav = document.createElement('nav');
   nav.setAttribute('class', 'menu');
   menuMenu.appendChild(nav);
 
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

  return menuMenu;
}

function callMenu() {
  const pageSwitchMenu = document.getElementById('content');
  pageSwitchMenu.innerHTML = '';
  pageSwitchMenu.appendChild(menuPage());
}

export default callMenu;