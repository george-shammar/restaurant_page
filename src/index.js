import {callContact} from './contact';
import {pageLayout} from './page-load';
import {menu} from './page-load';


pageLayout();
menu();

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', callContact);

