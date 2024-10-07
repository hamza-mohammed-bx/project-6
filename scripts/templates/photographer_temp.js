function photographerTemplate(data) {
    // destructuring data photograhers from json file 
    const { name, portrait , tagline, city , country , price ,id} = data;
    const picture = `assets/images/${portrait}`;
    
    function getUserCardDOM() {
        // document.querySelector('.logo').addEventListener('click', function(){
        //     document.location.href ="http://127.0.0.1:5500/Front-End-Fisheye/index.html";
        // })
        
        // create a element in DOM
        const linkArticle = document.createElement('a')
        const article = document.createElement( 'article' );
        const h2 = document.createElement( 'h2' );
        const imgDiv = document.createElement('div');
        const img = document.createElement( 'img' );
        const descriptionDiv = document.createElement('div');
        const tag = document.createElement('p');
        const location = document.createElement('p');

        // add atributes to elements created 
        // linkArticle.href = "https://www.mrepair.fr"
        article.classList.add('header-description');
        imgDiv.classList.add('img-div')
        descriptionDiv.classList.add('description-div')
        img.setAttribute("src", picture);
        h2.textContent = name;
        h2.setAttribute('data-id',id)
        tag.textContent = tagline;
        tag.classList.add('tagline');
        location.textContent = city + ','+ ' ' + country;
        location.classList.add('location');
        priceElement = document.createElement('p');
        priceElement.textContent = price + '€' + '/jours'
        priceElement.classList.add('price');

        // displaying a elements 
        imgDiv.appendChild(img);
        article.appendChild(imgDiv);
        article.appendChild(descriptionDiv);
        linkArticle.appendChild(article)
        descriptionDiv.appendChild(h2);
        descriptionDiv.appendChild(location);
        descriptionDiv.appendChild(tag);
        descriptionDiv.appendChild(priceElement);
        return (linkArticle);
    }
    return { name, picture,id, getUserCardDOM }
}


