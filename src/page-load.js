function pageLoad() {
    const banner = document.createElement('div');
    banner.setAttribute('class', 'banner');

    const content = document.getElementById('content')
    content.appendChild(banner);

    
}

export default pageLoad