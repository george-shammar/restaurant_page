import './style.css';

const contact = document.getElementById('contact');

function contactPage() {
    // create heading
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
     const headerContactText =  document.createTextNode('Contact Us');
     headerContact.appendChild(headerContactText);
     containerContact.appendChild(headerContact);

}

contactPage();

export {contactPage}