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
    heading.appendChild(container);


}


export {contactPage}