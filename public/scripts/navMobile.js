const menuOpenButton = document.querySelector('.menu-icon-div');
const navButtons = document.querySelectorAll('.navigation-icon-div');
var menuFlag = false;



function openMenu() {
    if (menuFlag == false) {
        document.querySelector('#about_me-mobile').classList.add('list-mobile');
        document.querySelector('#skills-mobile').classList.add('list-mobile');
        document.querySelector('#offer-mobile').classList.add('list-mobile');
        document.querySelector('#education-mobile').classList.add('list-mobile');
        document.querySelector('#contact-mobile').classList.add('list-mobile');
        menuFlag = true;
    }
    else {
        document.querySelector('#about_me-mobile').classList.remove('list-mobile');
        document.querySelector('#skills-mobile').classList.remove('list-mobile');
        document.querySelector('#offer-mobile').classList.remove('list-mobile');
        document.querySelector('#education-mobile').classList.remove('list-mobile');
        document.querySelector('#contact-mobile').classList.remove('list-mobile');
        menuFlag = false;
    }
}

function display_container_mobile(mobile_container_id) {
    if (mobile_container_id == "about_me-mobile") {
        for(let i = 1; i <= 5; i++){
            if (i == 1) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }

    else if (mobile_container_id == "skills-mobile") {
        for(let i = 1; i <= 5; i++){
            if (i == 2) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }

    else if (mobile_container_id == "offer-mobile") {
        for(let i = 1; i <= 5; i++){
            if (i == 3) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }

    else if (mobile_container_id == "education-mobile") {
        for(let i = 1; i <= 5; i++){
            if (i == 4) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }

    else if (mobile_container_id == "contact-mobile") {
        for(let i = 1; i <= 5; i++){
            if (i == 5) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }
}

function switchPage(){
    if (this.id == "about_me-button-mobile") {
        document.querySelector('#about_me-mobile').classList.remove('list-mobile-active');
        document.querySelector('#skills-mobile').classList.remove('list-mobile-active');
        document.querySelector('#offer-mobile').classList.remove('list-mobile-active');
        document.querySelector('#education-mobile').classList.remove('list-mobile-active');
        document.querySelector('#contact-mobile').classList.remove('list-mobile-active');

        document.querySelector('#about_me-mobile').classList.add('list-mobile-active');

        document.querySelector('#about_me-mobile').classList.remove('list-mobile');
        document.querySelector('#skills-mobile').classList.remove('list-mobile');
        document.querySelector('#offer-mobile').classList.remove('list-mobile');
        document.querySelector('#education-mobile').classList.remove('list-mobile');
        document.querySelector('#contact-mobile').classList.remove('list-mobile');
        menuFlag = false;

        display_container_mobile('about_me-mobile');

        document.querySelector('#about_me').classList.remove('active');
        document.querySelector('#skills').classList.remove('active');
        document.querySelector('#offer').classList.remove('active');
        document.querySelector('#education').classList.remove('active');
        document.querySelector('#contact').classList.remove('active');
        
        document.querySelector('#about_me').classList.add('active');
    }
    else if (this.id == "skills-button-mobile") {
        document.querySelector('#about_me-mobile').classList.remove('list-mobile-active');
        document.querySelector('#skills-mobile').classList.remove('list-mobile-active');
        document.querySelector('#offer-mobile').classList.remove('list-mobile-active');
        document.querySelector('#education-mobile').classList.remove('list-mobile-active');
        document.querySelector('#contact-mobile').classList.remove('list-mobile-active');

        document.querySelector('#skills-mobile').classList.add('list-mobile-active');

        document.querySelector('#about_me-mobile').classList.remove('list-mobile');
        document.querySelector('#skills-mobile').classList.remove('list-mobile');
        document.querySelector('#offer-mobile').classList.remove('list-mobile');
        document.querySelector('#education-mobile').classList.remove('list-mobile');
        document.querySelector('#contact-mobile').classList.remove('list-mobile');
        menuFlag = false;

        display_container_mobile('skills-mobile');

        document.querySelector('#about_me').classList.remove('active');
        document.querySelector('#skills').classList.remove('active');
        document.querySelector('#offer').classList.remove('active');
        document.querySelector('#education').classList.remove('active');
        document.querySelector('#contact').classList.remove('active');
        
        document.querySelector('#skills').classList.add('active');
    }
    else if (this.id == "offer-button-mobile") {
        document.querySelector('#about_me-mobile').classList.remove('list-mobile-active');
        document.querySelector('#skills-mobile').classList.remove('list-mobile-active');
        document.querySelector('#offer-mobile').classList.remove('list-mobile-active');
        document.querySelector('#education-mobile').classList.remove('list-mobile-active');
        document.querySelector('#contact-mobile').classList.remove('list-mobile-active');

        document.querySelector('#offer-mobile').classList.add('list-mobile-active');

        document.querySelector('#about_me-mobile').classList.remove('list-mobile');
        document.querySelector('#skills-mobile').classList.remove('list-mobile');
        document.querySelector('#offer-mobile').classList.remove('list-mobile');
        document.querySelector('#education-mobile').classList.remove('list-mobile');
        document.querySelector('#contact-mobile').classList.remove('list-mobile');
        menuFlag = false;

        display_container_mobile('offer-mobile');

        document.querySelector('#about_me').classList.remove('active');
        document.querySelector('#skills').classList.remove('active');
        document.querySelector('#offer').classList.remove('active');
        document.querySelector('#education').classList.remove('active');
        document.querySelector('#contact').classList.remove('active');
        
        document.querySelector('#offer').classList.add('active');
    }
    else if (this.id == "education-button-mobile") {
        document.querySelector('#about_me-mobile').classList.remove('list-mobile-active');
        document.querySelector('#skills-mobile').classList.remove('list-mobile-active');
        document.querySelector('#offer-mobile').classList.remove('list-mobile-active');
        document.querySelector('#education-mobile').classList.remove('list-mobile-active');
        document.querySelector('#contact-mobile').classList.remove('list-mobile-active');

        document.querySelector('#education-mobile').classList.add('list-mobile-active');

        document.querySelector('#about_me-mobile').classList.remove('list-mobile');
        document.querySelector('#skills-mobile').classList.remove('list-mobile');
        document.querySelector('#offer-mobile').classList.remove('list-mobile');
        document.querySelector('#education-mobile').classList.remove('list-mobile');
        document.querySelector('#contact-mobile').classList.remove('list-mobile');
        menuFlag = false;

        display_container_mobile('education-mobile');

        document.querySelector('#about_me').classList.remove('active');
        document.querySelector('#skills').classList.remove('active');
        document.querySelector('#offer').classList.remove('active');
        document.querySelector('#education').classList.remove('active');
        document.querySelector('#contact').classList.remove('active');
        
        document.querySelector('#education').classList.add('active');
    }
    else if (this.id == "contact-button-mobile") {
        document.querySelector('#about_me-mobile').classList.remove('list-mobile-active');
        document.querySelector('#skills-mobile').classList.remove('list-mobile-active');
        document.querySelector('#offer-mobile').classList.remove('list-mobile-active');
        document.querySelector('#education-mobile').classList.remove('list-mobile-active');
        document.querySelector('#contact-mobile').classList.remove('list-mobile-active');

        document.querySelector('#contact-mobile').classList.add('list-mobile-active');

        document.querySelector('#about_me-mobile').classList.remove('list-mobile');
        document.querySelector('#skills-mobile').classList.remove('list-mobile');
        document.querySelector('#offer-mobile').classList.remove('list-mobile');
        document.querySelector('#education-mobile').classList.remove('list-mobile');
        document.querySelector('#contact-mobile').classList.remove('list-mobile');
        menuFlag = false;

        display_container_mobile('contact-mobile');

        document.querySelector('#about_me').classList.remove('active');
        document.querySelector('#skills').classList.remove('active');
        document.querySelector('#offer').classList.remove('active');
        document.querySelector('#education').classList.remove('active');
        document.querySelector('#contact').classList.remove('active');
        
        document.querySelector('#contact').classList.add('active');
    }
}




menuOpenButton.addEventListener('click', openMenu);

navButtons.forEach((item) => item.addEventListener('click', switchPage));