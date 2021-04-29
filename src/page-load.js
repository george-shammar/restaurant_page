function pageLoad() {
    const banner = document.createElement('div');
    banner.setAttribute('class', 'banner');

    const container = document.createElement('div');
    banner.setAttribute('class', 'container');

    const content = document.getElementById('content')
    content.appendChild(banner);


}

export default pageLoad