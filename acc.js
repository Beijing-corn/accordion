var acc = document.getElementsByClassName("head")
for (var i = 0; i<acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active")
        var sibling = this.nextElementSibling;
        if (sibling.style.display === "block") {
            sibling.style.display = "none"
        }
        else {
            sibling.style.display = "block"
        }
    })
}
