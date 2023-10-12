window.addEventListener("scroll", function() {
    let navbar = this.document.getElementById("nav-bar");

    if(window.pageYOffset >= 200) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})