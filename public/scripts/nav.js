const navElements = document.querySelectorAll('.list');
const switchSound = new Audio("public/voices/change_tab.mp3");


function display_container(container_id) {
    if (container_id == "about_me") {
        for(let i = 1; i <= 5; i++){
            if (i == 1) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }

    else if (container_id == "skills") {
        for(let i = 1; i <= 5; i++){
            if (i == 2) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }

    else if (container_id == "offer") {
        for(let i = 1; i <= 5; i++){
            if (i == 3) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }

    else if (container_id == "education") {
        for(let i = 1; i <= 5; i++){
            if (i == 4) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }

    else if (container_id == "contact") {
        for(let i = 1; i <= 5; i++){
            if (i == 5) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }
}


function activeLink(){
    navElements.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    switchSound.play();
    display_container(this.id);
}


navElements.forEach((item) => item.addEventListener('click', activeLink));
