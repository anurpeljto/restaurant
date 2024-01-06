export default function pageload(){
    const image = document.createElement('img');
    const container = document.querySelector('#content');
    image.setAttribute('src', '../src/img/panuccis.webp');
    image.setAttribute('alt', "panuccis");
    container.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "Panucci's pizza";
    container.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "Neapolitan landscapes adorning the walls and Italian paintings decorating the interior conjure up the atmosphere of southern Italy. Tetsuya Ikeda, owner-chef of this Naples-style pizzeria, knows Naples well. Signature dishes are the three types of Margherita pizza. Using mozzarella from Italy, Hokkaido and Okayama lets guests compare the flavours of each region. True to the spirit of craftsmanship he learned in Italy, Ikeda tends to his wood-fired oven with passion.";
    container.appendChild(description);
    
}