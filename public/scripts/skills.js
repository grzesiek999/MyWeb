function skils_delay(){
    let delay = 0.7;
    for(let i = 1; i <= 19; i++){
        document.querySelector('#a'+i).style.animationDelay = delay+"s";
        delay+=0.7;
    }
}

skils_delay();