function pageLayout() {
    // create banner div and append to content.
    const banner = document.createElement('div');
    banner.setAttribute('class', 'banner');
    const content = document.getElementById('content')
    content.appendChild(banner);

    // create container div and append to banner
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    banner.appendChild(container);

    // Create header with text
    const header = document.createElement('h1');
    header.setAttribute('class', 'text');
    const headerText =  document.createTextNode('Bon Goût');
    header.appendChild(headerText);
    container.appendChild(header);

    // Create header paragrapgh
    



}

export default pageLayout