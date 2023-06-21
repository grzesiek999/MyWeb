const offerBoxes = document.querySelectorAll('.offer-box');
const showAudio = new Audio("public/voices/show_education_achievement.wav");

function show_offer() {
    if(this.id == "website") {
        if (document.querySelector('#website-information').style.display == "none") {

            document.querySelector('#onlineshop-information').style.display="none";
            document.querySelector('#onlineshop').classList.remove('offer-box-active');
            document.querySelector('#onlineshop').classList.add('offer-box');

            document.querySelector('#businesscard-information').style.display="none";
            document.querySelector('#businesscard').classList.remove('offer-box-active');
            document.querySelector('#businesscard').classList.add('offer-box');

            document.querySelector('#logo-information').style.display="none";
            document.querySelector('#logo').classList.remove('offer-box-active');
            document.querySelector('#logo').classList.add('offer-box');

            document.querySelector('#banner-information').style.display="none";
            document.querySelector('#banner').classList.remove('offer-box-active');
            document.querySelector('#banner').classList.add('offer-box');

            document.querySelector('#video-information').style.display="none";
            document.querySelector('#video').classList.remove('offer-box-active');
            document.querySelector('#video').classList.add('offer-box');

            showAudio.play();
            document.querySelector('#website').classList.remove('offer-box');
            document.querySelector('#website').classList.add('offer-box-active');
            document.querySelector('#website-information').style.display="flex";
        }
        else {
            document.querySelector('#website-information').style.display="none";
            document.querySelector('#website').classList.remove('offer-box-active');
            document.querySelector('#website').classList.add('offer-box');
        }
    }
    else if (this.id == "onlineshop") {
        if (document.querySelector('#onlineshop-information').style.display == "none") {

            document.querySelector('#website-information').style.display="none";
            document.querySelector('#website').classList.remove('offer-box-active');
            document.querySelector('#website').classList.add('offer-box');

            document.querySelector('#businesscard-information').style.display="none";
            document.querySelector('#businesscard').classList.remove('offer-box-active');
            document.querySelector('#businesscard').classList.add('offer-box');

            document.querySelector('#logo-information').style.display="none";
            document.querySelector('#logo').classList.remove('offer-box-active');
            document.querySelector('#logo').classList.add('offer-box');

            document.querySelector('#banner-information').style.display="none";
            document.querySelector('#banner').classList.remove('offer-box-active');
            document.querySelector('#banner').classList.add('offer-box');

            document.querySelector('#video-information').style.display="none";
            document.querySelector('#video').classList.remove('offer-box-active');
            document.querySelector('#video').classList.add('offer-box');

            showAudio.play();
            document.querySelector('#onlineshop').classList.remove('offer-box');
            document.querySelector('#onlineshop').classList.add('offer-box-active');
            document.querySelector('#onlineshop-information').style.display="flex";
        }
        else {
            document.querySelector('#onlineshop-information').style.display="none";
            document.querySelector('#onlineshop').classList.remove('offer-box-active');
            document.querySelector('#onlineshop').classList.add('offer-box');
        }
    }
    else if (this.id == "businesscard") {
        if (document.querySelector('#businesscard-information').style.display == "none") {

            document.querySelector('#website-information').style.display="none";
            document.querySelector('#website').classList.remove('offer-box-active');
            document.querySelector('#website').classList.add('offer-box');

            document.querySelector('#onlineshop-information').style.display="none";
            document.querySelector('#onlineshop').classList.remove('offer-box-active');
            document.querySelector('#onlineshop').classList.add('offer-box');

            document.querySelector('#logo-information').style.display="none";
            document.querySelector('#logo').classList.remove('offer-box-active');
            document.querySelector('#logo').classList.add('offer-box');

            document.querySelector('#banner-information').style.display="none";
            document.querySelector('#banner').classList.remove('offer-box-active');
            document.querySelector('#banner').classList.add('offer-box');

            document.querySelector('#video-information').style.display="none";
            document.querySelector('#video').classList.remove('offer-box-active');
            document.querySelector('#video').classList.add('offer-box');

            showAudio.play();
            document.querySelector('#businesscard').classList.remove('offer-box');
            document.querySelector('#businesscard').classList.add('offer-box-active');
            document.querySelector('#businesscard-information').style.display="flex";
        }
        else {
            document.querySelector('#businesscard-information').style.display="none";
            document.querySelector('#businesscard').classList.remove('offer-box-active');
            document.querySelector('#businesscard').classList.add('offer-box');
        }
    }
    else if (this.id == "logo") {
        if (document.querySelector('#logo-information').style.display == "none") {

            document.querySelector('#website-information').style.display="none";
            document.querySelector('#website').classList.remove('offer-box-active');
            document.querySelector('#website').classList.add('offer-box');

            document.querySelector('#onlineshop-information').style.display="none";
            document.querySelector('#onlineshop').classList.remove('offer-box-active');
            document.querySelector('#onlineshop').classList.add('offer-box');

            document.querySelector('#businesscard-information').style.display="none";
            document.querySelector('#businesscard').classList.remove('offer-box-active');
            document.querySelector('#businesscard').classList.add('offer-box');

            document.querySelector('#banner-information').style.display="none";
            document.querySelector('#banner').classList.remove('offer-box-active');
            document.querySelector('#banner').classList.add('offer-box');

            document.querySelector('#video-information').style.display="none";
            document.querySelector('#video').classList.remove('offer-box-active');
            document.querySelector('#video').classList.add('offer-box');

            showAudio.play();
            document.querySelector('#logo').classList.remove('offer-box');
            document.querySelector('#logo').classList.add('offer-box-active');
            document.querySelector('#logo-information').style.display="flex";
        }
        else {
            document.querySelector('#logo-information').style.display="none";
            document.querySelector('#logo').classList.remove('offer-box-active');
            document.querySelector('#logo').classList.add('offer-box');
        }
    }
    else if (this.id == "banner") {
        if (document.querySelector('#banner-information').style.display == "none") {

            document.querySelector('#website-information').style.display="none";
            document.querySelector('#website').classList.remove('offer-box-active');
            document.querySelector('#website').classList.add('offer-box');

            document.querySelector('#onlineshop-information').style.display="none";
            document.querySelector('#onlineshop').classList.remove('offer-box-active');
            document.querySelector('#onlineshop').classList.add('offer-box');

            document.querySelector('#businesscard-information').style.display="none";
            document.querySelector('#businesscard').classList.remove('offer-box-active');
            document.querySelector('#businesscard').classList.add('offer-box');

            document.querySelector('#logo-information').style.display="none";
            document.querySelector('#logo').classList.remove('offer-box-active');
            document.querySelector('#logo').classList.add('offer-box');

            document.querySelector('#video-information').style.display="none";
            document.querySelector('#video').classList.remove('offer-box-active');
            document.querySelector('#video').classList.add('offer-box');

            showAudio.play();
            document.querySelector('#banner').classList.remove('offer-box');
            document.querySelector('#banner').classList.add('offer-box-active');
            document.querySelector('#banner-information').style.display="flex";
        }
        else {
            document.querySelector('#banner-information').style.display="none";
            document.querySelector('#banner').classList.remove('offer-box-active');
            document.querySelector('#banner').classList.add('offer-box');
        }
    }
    else if (this.id == "video") {
        if (document.querySelector('#video-information').style.display == "none") {

            document.querySelector('#website-information').style.display="none";
            document.querySelector('#website').classList.remove('offer-box-active');
            document.querySelector('#website').classList.add('offer-box');

            document.querySelector('#onlineshop-information').style.display="none";
            document.querySelector('#onlineshop').classList.remove('offer-box-active');
            document.querySelector('#onlineshop').classList.add('offer-box');

            document.querySelector('#businesscard-information').style.display="none";
            document.querySelector('#businesscard').classList.remove('offer-box-active');
            document.querySelector('#businesscard').classList.add('offer-box');

            document.querySelector('#logo-information').style.display="none";
            document.querySelector('#logo').classList.remove('offer-box-active');
            document.querySelector('#logo').classList.add('offer-box');

            document.querySelector('#banner-information').style.display="none";
            document.querySelector('#banner').classList.remove('offer-box-active');
            document.querySelector('#banner').classList.add('offer-box');

            showAudio.play();
            document.querySelector('#video').classList.remove('offer-box');
            document.querySelector('#video').classList.add('offer-box-active');
            document.querySelector('#video-information').style.display="flex";
        }
        else {
            document.querySelector('#video-information').style.display="none";
            document.querySelector('#video').classList.remove('offer-box-active');
            document.querySelector('#video').classList.add('offer-box');
        }
    }
}

offerBoxes.forEach((it) => it.addEventListener('click', show_offer));