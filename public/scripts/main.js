const copyEmail = document.querySelector('#copy-email-icon');
const changeMotiveButton = document.querySelector('#motive-change');
const changeMotiveButtonMobile = document.querySelector('#motive-change-mobile');


function copy_email() {
    navigator.clipboard.writeText("grzegorz.pasich@o2.pl");
}

function change_motive() {
    document.body.classList.add('reflesh-effect');
    if(getComputedStyle(document.documentElement).getPropertyValue('--motive') == '#FFFFFF') {
        document.documentElement.style.setProperty('--motive', 'var(--darkmotive)');

        document.documentElement.style.setProperty('--text-color-1', 'var(--text-color-1-whitemotive)');
        document.documentElement.style.setProperty('--text-color-2', 'var(--text-color-2-whitemotive)');
        document.documentElement.style.setProperty('--text-color-3', 'var(--text-color-3-whitemotive)');
        document.documentElement.style.setProperty('--body-background-color', 'var(--body-background-color-whitemotive)');
        document.documentElement.style.setProperty('--nav-background-color', 'var(--nav-background-color-whitemotive)');
        document.documentElement.style.setProperty('--mobile-nav-background-color', 'var(--mobile-nav-background-color-whitemotive)');
        document.documentElement.style.setProperty('--footer-background-color', 'var(--footer-background-color-whitemotive)');
        document.documentElement.style.setProperty('--education-achievement-background-color', 'var(--education-achievement-background-color-whitemotive)');
        document.documentElement.style.setProperty('--icons-background-color', 'var(--icons-background-color-whitemotive)');
        document.documentElement.style.setProperty('--email-icon-background', 'var(--email-icon-background-whitemotive)');
        document.documentElement.style.setProperty('--shadow-color-1', 'var(--shadow-color-1-whitemotive)');
        document.documentElement.style.setProperty('--shadow-color-2', 'var(--shadow-color-2-whitemotive)');
        document.documentElement.style.setProperty('--border-liner-color-1', 'var(--border-liner-color-1-whitemotive)');
        document.documentElement.style.setProperty('--hover-education-achievement-color', 'var(--hover-education-achievement-color-whitemotive)');
    }
    else{
        document.documentElement.style.setProperty('--motive', 'var(--whitemotive)'); 

        document.documentElement.style.setProperty('--text-color-1', 'var(--text-color-1-darkmotive)');
        document.documentElement.style.setProperty('--text-color-2', 'var(--text-color-2-darkmotive)');
        document.documentElement.style.setProperty('--text-color-3', 'var(--text-color-3-darkmotive)');
        document.documentElement.style.setProperty('--body-background-color', 'var(--body-background-color-darkmotive)');
        document.documentElement.style.setProperty('--nav-background-color', 'var(--nav-background-color-darkmotive)');
        document.documentElement.style.setProperty('--mobile-nav-background-color', 'var(--mobile-nav-background-color-darkmotive)');
        document.documentElement.style.setProperty('--footer-background-color', 'var(--footer-background-color-darkmotive)');
        document.documentElement.style.setProperty('--education-achievement-background-color', 'var(--education-achievement-background-color-darkmotive)');
        document.documentElement.style.setProperty('--icons-background-color', 'var(--icons-background-color-darkmotive)');
        document.documentElement.style.setProperty('--email-icon-background', 'var(--email-icon-background-darkmotive)');
        document.documentElement.style.setProperty('--shadow-color-1', 'var(--shadow-color-1-darkmotive)');
        document.documentElement.style.setProperty('--shadow-color-2', 'var(--shadow-color-2-darkmotive)');
        document.documentElement.style.setProperty('--border-liner-color-1', 'var(--border-liner-color-1-darkmotive)');
        document.documentElement.style.setProperty('--hover-education-achievement-color', 'var(--hover-education-achievement-color-darkmotive)');
    }
    setTimeout(function() {
        document.body.classList.remove('reflesh-effect');
    }, 1500);
}

changeMotiveButton.addEventListener('click', change_motive);
changeMotiveButtonMobile.addEventListener('click', change_motive);

copyEmail.addEventListener('click', copy_email);

window.addEventListener('scroll', function() {
    var element = document.querySelector('.mobile-socials-container-div');
    if (window.scrollY >= 280) {
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
});