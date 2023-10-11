let pic = 0;

function controller(x) {
    pic = pic + x;
    slideShow(pic);
};

slideShow(pic);

function slideShow(num) {
    let slides = document.getElementsByClassName("slide");

    if( num == slides.length) {
        pic = 0;
        num = 0;
    }
    if(num < 0) {
        pic = slides.length - 1;
        num = slides.length - 1;
    }

    for(let y of slides) {
        y.style.display = "none";
    }
    
    slides[num].style.display = "block";
}




