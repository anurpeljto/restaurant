export default class aboutUs{

    createPage(){
        const container = document.createElement('div');
        document.body.appendChild(container);

        const text = document.createElement('span');
        text.setAttribute('style', 'color:red');
        container.appendChild(text);
        
    }
}