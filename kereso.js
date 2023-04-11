 function searchCards() {
let input = document.getElementById("search-input").value.toLowerCase();
console.log(input); // kiírja a keresési mezőbe írt szöveget a console-ba
let cards = document.querySelectorAll(".card");
let titles = document.querySelectorAll(".card-title, .cimek");
let hrs = document.querySelectorAll("hr");

cards.forEach((card) => {
let text = card.textContent.toLowerCase();
if (text.indexOf(input) > -1) {
card.style.display = "block";
} else {
card.style.display = "none";
}
});

titles.forEach((title) => {
let text = title.textContent.toLowerCase();
if (text.indexOf(input) > -1 || text === '') {
title.style.display = "block";
} else {
title.style.display = "none";
}
});

hrs.forEach((hr) => {
hr.style.display = "block";
});
}
document.getElementById("search-input").addEventListener("keyup", searchCards);
