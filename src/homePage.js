import AboutUs from "./aboutus";
import contact from "./contact";

export default class homePage{
    constructor(){
        this.container = document.querySelector('#content');
    };
    clearPage(){
        this.container.innerHTML='';
    }
    createHeader(){
        const header = document.createElement('div');
        header.classList.add('header');

        const aboutUs = document.createElement('span');
        aboutUs.id='abt';
        aboutUs.textContent = 'About us';
        aboutUs.classList.add('bar-item');
        aboutUs.addEventListener('click', () => {
            this.container.innerHTML = '';
            let abt = new AboutUs;
            abt.createAbout();
        })
        header.appendChild(aboutUs);

        const logoButton = document.createElement('span');
        logoButton.id='title';
        logoButton.textContent="Panucci's Pizza";
        header.appendChild(logoButton);

        const contactUs = document.createElement('span');
        contactUs.id='contact';
        contactUs.classList.add('bar-item');
        contactUs.textContent='Contact us';
        contactUs.addEventListener('click', () => {
            this.container.innerHTML = '';
            let cnct = new contact;
            cnct.createContact();
        });
        header.appendChild(contactUs);

        this.container.appendChild(header);

       

    }
}