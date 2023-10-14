let textbox = document.getElementById("text-box");

textbox.addEventListener("input", function() {
    let text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    let clean = words.filter(function(el) {
        return el != "";
    });
    let wrd = clean.length;
    document.getElementById("word").innerHTML = wrd;
});