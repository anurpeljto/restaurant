import homePage from "./homePage";

export default class AboutUs{
    constructor(){
        this.container = document.querySelector('#content');
    }

    createAbout(){
        let home = new homePage;
        home.createHeader();

        const bodyElement = document.createElement('div');
        bodyElement.id = 'bod-ele';
        this.container.appendChild(bodyElement);

        const img = document.createElement('img');
        img.setAttribute('src', '../src/img/nucci.webp');
        bodyElement.appendChild(img);

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = 'Neapolitan landscapes adorning the walls and Italian paintings decorating the interior conjure up the atmosphere of southern Italy. Tetsuya Ikeda, owner-chef of this Naples-style pizzeria, knows Naples well. Signature dishes are the three types of Margherita pizza. Using mozzarella from Italy, Hokkaido and Okayama lets guests compare the flavours of each region. True to the spirit of craftsmanship he learned in Italy, Ikeda tends to his wood-fired oven with passion.';
        bodyElement.appendChild(description);
    }
}