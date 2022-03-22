"use strict";
// automatically switch footer date to current year
const currentYear = new Date().getFullYear();
const yearDisplay = document.getElementById("footer_year");
yearDisplay.innerHTML = currentYear;