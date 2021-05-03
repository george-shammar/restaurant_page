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


  return contact;
}

function callContact() {
  const pageSwitch = document.getElementById('content');
  pageSwitch.innerHTML = '';
  pageSwitch.appendChild(contactPage());
}

export default callContact;