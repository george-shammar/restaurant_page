import callContact from './contact';
// import pageLayout from './page-load';
import pageLayout from './page-load';
import callMenu from './menus';

pageLayout();

const contactButton = document.getElementById('tabthree');
contactButton.addEventListener('click', callContact);

const menuButton = document.getElementById('tabtwo');
menuButton.addEventListener('click', callMenu);

