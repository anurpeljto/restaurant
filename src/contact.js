import homePage from "./homePage";

export default class contact{
    constructor(){
        this.container = document.querySelector('#content');
    }

    createContact(){
        let home = new homePage;
        home.createHeader();
        let contactContent = document.createElement('span');
        contactContent.textContent = 'WELCOME! CALL 121-333-NOTIP-44';
        this.container.appendChild(contactContent);

    }
}