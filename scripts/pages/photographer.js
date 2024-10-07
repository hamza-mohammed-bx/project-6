

window.addEventListener('load', () => {
    const  photographHeader = document.querySelector(".photograph-header");
    const btnModal = `<button class="contact_button" onclick="displayModal()">Contactez-moi</button>`
    let dataCard = sessionStorage.getItem("thisCard");
    photographHeader.innerHTML = dataCard + btnModal ;
    
    document.querySelector('.price').remove();
    document.querySelector('.logo').addEventListener('click', () => {
        document.location.href ="http://127.0.0.1:5500/Front-End-Fisheye/index.html";
    })

    async function getPhotographers() {
        let patch = "http://127.0.0.1:5500/Front-End-Fisheye/data/photographers.json"
        let photographers = await fetch(`${patch}`)
        photographers = photographers.json();
        return photographers
    }
    
    async function displayMediaData (photographers) {
        const photographSection = document.querySelector('.photographer-section');
        photographers.forEach((photographer) => {
        const idUser = document.querySelector('[data-id]');
        const attributID = idUser.getAttribute("data-id"); 
        if(attributID == photographer.photographerId){ 
            const mediaModel = mediaTemplate(photographer);
            const  userMedia = mediaModel.getUserMedia();
            const likes = document.querySelector('like')
            photographSection.appendChild(userMedia);
            return userMedia
        }   
        });      
    }

    async function filterMedia (){
        const allUsers = document.querySelectorAll('.photographer-media');
        const btnFilter = document.querySelector('.select-filter')
        const like = document.querySelector('photographer-media like');
        allUsers.forEach(function(){
            console.log(like);
        })
        

    }

    
    async function init1() {
        // Récupère les datas des photographes
        let { media } = await getPhotographers() ;
        displayMediaData (media);
        filterMedia ()
        
    }
    init1();
    

})


