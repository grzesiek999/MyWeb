const navElements = document.querySelectorAll('.list');
const switchSound = new Audio("public/voices/change_tab.mp3");


function activeLink(){
    navElements.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    switchSound.play();
}


navElements.forEach((item) => item.addEventListener('click', activeLink));
