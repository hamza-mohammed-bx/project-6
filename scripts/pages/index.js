  async function getPhotographers() {
        let patch = "http://127.0.0.1:5500/Front-End-Fisheye/data/photographers.json"
        let photographers = await fetch(`${patch}`)
        photographers = photographers.json();
        return photographers     
    }

   
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
            userCardDOM.addEventListener("click", function(e){
                console.log(this);
                
            console.log(e.target);
        
                document.location.href = "http://127.0.0.1:5500/Front-End-Fisheye/photographer.html/80";
                const thisPhotographer = this.outerHTML
                
                
                const  photographHeader = document.querySelector(".photograph-header");
                const btnModal = `<button class="contact_button" onclick="displayModal()">Contactez-moi</button>`
                let dataCard = this.outerHTML;
                photographHeader.innerHTML = dataCard + btnModal ; 
                document.querySelector('.price').remove();
            })
        });
        
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
    
    
    