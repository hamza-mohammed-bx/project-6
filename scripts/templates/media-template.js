

function mediaTemplate(data) {
    const { id, photographerId , title , image , video , likes , date , price } = data;

    // checking  type of media ( image or video)
    const contentMedia = () => { 
        let mediaType;

        if(data.image){
            mediaType = `<img src="assets/images/${image}" class = 'img-list'alt="title">`
         return mediaType 
    
        } else {
            mediaType =  `<video controls  class = 'video'> <source src="assets/images/${video}" type="video/webm" />`
        return mediaType
        }
    };
    // function create a html and style for media users 
    function getUserMedia() {
         // create a elements in Dom 
        const mediaSection = document.createElement('div');
        const imgMedia = document.createElement('div');
        const descriptionDiv = document.createElement('div');
        const h3 = document.createElement( 'h2' );
        const likesElement = document.createElement('p');
        const likeBtn = document.createElement('i');

        
        
        // add class to elements 
        mediaSection.classList.add('photographer-media');
        imgMedia.classList.add('img-div');
        descriptionDiv.classList.add('description-div');
        likeBtn.classList.add('far' , 'fa-heart', 'js-heart' );
        likesElement.classList.add('like')

        // displaying and organizing elements in Dom
        h3.textContent = title;
        h3.setAttribute('id',id);
        likesElement.textContent = likes;
        likeBtn.addEventListener('click' , function () { // click icon heart function
            this.classList.toggle("fas");
            if (this.classList.contains("fas")) {
                likesElement.textContent  ++
            } else {
                likesElement.textContent  --
            }
        })

        imgMedia.innerHTML = contentMedia();
        mediaSection.appendChild(imgMedia);
        mediaSection.appendChild(descriptionDiv)
        descriptionDiv.appendChild(h3);
        descriptionDiv.appendChild(likeBtn);
        descriptionDiv.appendChild(likesElement);
        likesElement.appendChild.likesCounter;
        const allLikes =  document.querySelectorAll('.like')
        return(mediaSection)
        
    }
    
    return { title , price , date, likes, getUserMedia }
    
}
