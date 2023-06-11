const copyEmail = document.querySelector('#copy-email-icon');


function copy_email() {
    navigator.clipboard.writeText("grzegorz.pasich@o2.pl");
}

copyEmail.addEventListener('click', copy_email);