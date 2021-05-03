import callContact from './contact';
// import pageLayout from './page-load';
import pageCall from './page-load';
import callMenu from './menus';

pageCall();

const contactButton = document.getElementById('tabthree');
contactButton.addEventListener('click', callContact);

const menuButton = document.getElementById('tabtwo');
menuButton.addEventListener('click', callMenu);

const homeButton = document.getElementById('tabone');
homeButton.addEventListener('click', callHome);
