export default function pageload(){
    const image = document.createElement('img');
    const container = document.querySelector('#content');
    

    // top-navbar

    const headbar = document.createElement("div");
    headbar.classList.add('header');
    container.appendChild(headbar);


    const headline = document.createElement('h1');
    headline.textContent = "Panucci's pizza";
    headline.setAttribute('id', 'title');
    headbar.appendChild(headline);

    const about = document.createElement('h2');
    about.textContent = "About us";
    about.classList.add('bar-item');
    about.setAttribute('id', 'abt');
    headbar.appendChild(about);


    const contact = document.createElement('h2');
    contact.textContent = "Contact Us";
    contact.classList.add('bar-item');
    contact.setAttribute('id', 'contact');
    headbar.appendChild(contact);

    // done with header

    //insert image
    image.setAttribute('src', '../src/img/panuccis.jpg');
    image.setAttribute('alt', "panuccis");
    container.appendChild(image);

    const description = document.createElement('p');
    description.textContent = "Neapolitan landscapes adorning the walls and Italian paintings decorating the interior conjure up the atmosphere of southern Italy. Tetsuya Ikeda, owner-chef of this Naples-style pizzeria, knows Naples well. Signature dishes are the three types of Margherita pizza. Using mozzarella from Italy, Hokkaido and Okayama lets guests compare the flavours of each region. True to the spirit of craftsmanship he learned in Italy, Ikeda tends to his wood-fired oven with passion.";
    container.appendChild(description);

    
}