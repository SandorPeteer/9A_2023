function dark() {

  const body = document.body;
  body.classList.toggle("dark-mode");

  const cards = document.querySelectorAll(".card-body");
  const bords = document.querySelectorAll(".cimek");
  const hrs = document.querySelectorAll(".hr");
  cards.forEach(card => {
    if (body.classList.contains("dark-mode")) {
      card.style.backgroundColor = "white";
      card.style.color="rgb(33, 37, 41)";
    } else {
      card.style.backgroundColor = "rgb(33, 37, 41)";
      card.style.color="white";
    }
  });
  bords.forEach(bords => {
    if (body.classList.contains("dark-mode")) {
      bords.style.borderColor="white";
    } else {
        bords.style.borderColor="rgb(33, 37, 41)";
    }
  });
  hrs.forEach(hrs => {
    if (body.classList.contains("dark-mode")) {
      hrs.style.color="white";
    } else {
        hrs.style.color="rgb(33, 37, 41)";
    }
  });
}

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
