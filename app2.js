const feedbackImage = document.getElementById("feed-img");
const userName = document.getElementById("name");
const userSaid = document.getElementById("told");

function finalopacity() {
    feedbackImage.style.opacity = "1";
    feedbackImage.src = "images/feed1.jpg";
    
    userSaid.textContent = '"Meow Bypass OP"';
    userName.textContent = "-Doraemon";
    userSaid.style.opacity = "1";
    userName.style.opacity = "1";
    
    setTimeout(image1opacity, 1900);
}
function image1opacity() {
    feedbackImage.style.opacity = "0";
    
    userName.style.opacity = "0";
    userSaid.style.opacity = "0";
    
    setTimeout(image2,1900);
}
function image2() {
    feedbackImage.style.opacity = "1";
    feedbackImage.src = "images/feed2.jpg";
    
    userSaid.textContent = '"meow meow biralo musa marna gako we both use meow"';
    userName.textContent = "-Nirmal";
    userName.style.opacity = "1";
    userSaid.style.opacity = "1";
    
    setTimeout(image2opacity, 1900);
}
function image2opacity() {
    feedbackImage.style.opacity = "0";
    
    userName.style.opacity = "0";
    userSaid.style.opacity = "0";
    
    setTimeout(image3, 1900);
}
function image3() {
    feedbackImage.style.opacity = "1";
    feedbackImage.src = "images/feed3.jpg";
    
    userSaid.textContent = '"Meow OS n bypass is the best thing that has ever happened to me after I started playing PUBG on POS"';
    userName.textContent = "-Sashi";
    userName.style.opacity = "1";
    userSaid.style.opacity = "1";
    
    setTimeout(image3opacity, 1900);
}
function image3opacity() {
    feedbackImage.style.opacity = "0";
   
    userName.style.opacity = "0";
    userSaid.style.opacity = "0";
    
    setTimeout(image4, 1900);
}
function image4() {
    feedbackImage.style.opacity = "1";
    feedbackImage.src = "images/feed4.jpg";
    
    userSaid.textContent = '"thanks meow bypass work op main id and hack  100% safe"';
    userName.textContent = "-Aman";
    userName.style.opacity = "1";
    userSaid.style.opacity = "1";
    
    setTimeout(image4opacity, 1900);
}
function image4opacity() {
    feedbackImage.style.opacity = "0";
    
    userName.style.opacity = "0";
    userSaid.style.opacity = "0";
    
    setTimeout(finalopacity,1900);
}


finalopacity();