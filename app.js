const hamBtn = document.getElementById("ham-btn");
const nav = document.getElementById("ul");

window.onresize = displayWindowSize;

let check = 3;


function displayWindowSize() {
    width = window.innerWidth;
    if(width >= 680) {
        nav.style.display = "flex";
    }
};

function navManager() {
    if(check%2 === 1) {
    nav.style.display = "inline-block";
    nav.style.textAlign = "center";
    } else if(check % 2 === 0) {
    nav.style.display = "none";
    }
    check++;
}

hamBtn.addEventListener("click", navManager);