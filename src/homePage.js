export default class homePage{
    constructor(){
        this.container = document.querySelector('#content');
    };
    createHeader(){
        const header = document.createElement('div');
        header.classList.add('header');

        const aboutUs = document.createElement('span');
        aboutUs.id='abt';
        aboutUs.textContent = 'About us';
        header.appendChild(aboutUs);

        const logoButton = document.createElement('span');
        logoButton.id='title';
        logoButton.textContent="Panucci's Pizza";
        header.appendChild(logoButton);

        this.container.appendChild(header);

    }
}