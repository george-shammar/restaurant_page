import {callContact} from './contact';
import {pageLayout} from './page-load';
import {menu} from './page-load';
import {callMenu} from './menus';


pageLayout();
menu();

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', callContact);

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', callMenu);

