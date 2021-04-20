const typeTextSpan = document.querySelector(".text");

const text = ["Design Patterns"];
const typeDelay = 200;
const erasingDelay = 100;
const newText = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < text[textArrayIndex].length) {
        typeTextSpan.textContent += text[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typeDelay);
    }
    else {
        setTimeout(erase, newText);
    }
}

//     if(charIndex > 0) {
//         typeTextSpan.textContent = type[textArrayIndex].substring(0, charIndex -1)
//     }
//     else {

//     }
// }

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newText + 250);
});
