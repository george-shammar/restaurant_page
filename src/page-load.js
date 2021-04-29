function pageLoad() {
    // create banner div and append to content.
    const banner = document.createElement('div');
    banner.setAttribute('class', 'banner');
    const content = document.getElementById('content')
    content.appendChild(banner);

    // create container div and append to banner
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    banner.appendChild(container);

    


}

export default pageLoad