"use strict";
// automatically switch footer date to current year
const currentYear = new Date().getFullYear();
const yearDisplay = document.getElementById("footer_year");
yearDisplay.innerHTML = currentYear;

// faq functionality
let acc = document.getElementsByClassName("accordion");
let i;

// loop throught the accordions
for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        };
    });
};