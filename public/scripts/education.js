const educationAchievementsCover = document.querySelectorAll('.education-achievement-cover');


function show_describe() {
    if(this.id == "lo") {
        if (document.querySelector('#lo_desc').style.display == "none") {

            document.querySelector('#studies_desc').style.display="none";
            document.querySelector('#studies').classList.remove('education-achievement-cover-active');
            document.querySelector('#studies').classList.add('education-achievement-cover');

            document.querySelector('#jsCourse_desc').style.display="none";
            document.querySelector('#jsCourse').classList.remove('education-achievement-cover-active');
            document.querySelector('#jsCourse').classList.add('education-achievement-cover');

            document.querySelector('#lo').classList.remove('education-achievement-cover');
            document.querySelector('#lo').classList.add('education-achievement-cover-active');
            document.querySelector('#lo_desc').style.display="flex";
        }
        else {
            document.querySelector('#lo_desc').style.display="none";
            document.querySelector('#lo').classList.remove('education-achievement-cover-active');
            document.querySelector('#lo').classList.add('education-achievement-cover');
        }
    }
    else if (this.id == "studies") {

        if (document.querySelector('#studies_desc').style.display == "none") {

            document.querySelector('#lo_desc').style.display="none";
            document.querySelector('#lo').classList.remove('education-achievement-cover-active');
            document.querySelector('#lo').classList.add('education-achievement-cover');

            document.querySelector('#jsCourse_desc').style.display="none";
            document.querySelector('#jsCourse').classList.remove('education-achievement-cover-active');
            document.querySelector('#jsCourse').classList.add('education-achievement-cover');

            document.querySelector('#studies').classList.remove('education-achievement-cover');
            document.querySelector('#studies').classList.add('education-achievement-cover-active');
            document.querySelector('#studies_desc').style.display="flex";
        }
        else {
        document.querySelector('#studies_desc').style.display="none";
        document.querySelector('#studies').classList.remove('education-achievement-cover-active');
        document.querySelector('#studies').classList.add('education-achievement-cover');
        }
    }
    else if (this.id == "jsCourse") {

        if (document.querySelector('#jsCourse_desc').style.display == "none") {

            document.querySelector('#lo_desc').style.display="none";
            document.querySelector('#lo').classList.remove('education-achievement-cover-active');
            document.querySelector('#lo').classList.add('education-achievement-cover');

            document.querySelector('#studies_desc').style.display="none";
            document.querySelector('#studies').classList.remove('education-achievement-cover-active');
            document.querySelector('#studies').classList.add('education-achievement-cover');

            document.querySelector('#jsCourse').classList.remove('education-achievement-cover');
            document.querySelector('#jsCourse').classList.add('education-achievement-cover-active');
            document.querySelector('#jsCourse_desc').style.display="flex";
        }
        else {
        document.querySelector('#jsCourse_desc').style.display="none";
        document.querySelector('#jsCourse').classList.remove('education-achievement-cover-active');
        document.querySelector('#jsCourse').classList.add('education-achievement-cover');
        }
    }
}

educationAchievementsCover.forEach((it) => it.addEventListener('click', show_describe));
