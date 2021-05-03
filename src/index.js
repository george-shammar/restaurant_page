import callContact from './contact';
import callHome from './page-load';
import callMenu from './menus';

callHome();

const contactButton = document.getElementById('tabthree');
contactButton.addEventListener('click', callContact);

const menuButton = document.getElementById('tabtwo');
menuButton.addEventListener('click', callMenu);
