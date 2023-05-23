function dark() {

  const body = document.body;
  body.classList.toggle("dark-mode");

  const cards = document.querySelectorAll(".card-body");
  const bords = document.querySelectorAll(".cimek");
  const hrs = document.querySelectorAll(".hr");
  cards.forEach(card => {
    if (body.classList.contains("dark-mode")) {
      card.style.backgroundColor = "white";
      card.style.color = "rgb(33, 37, 41)";
    } else {
      card.style.backgroundColor = "rgb(33, 37, 41)";
      card.style.color = "white";
    }
  });
  bords.forEach(bords => {
    if (body.classList.contains("dark-mode")) {
      bords.style.borderColor = "white";
    } else {
      bords.style.borderColor = "rgb(33, 37, 41)";
    }
  });
  hrs.forEach(hrs => {
    if (body.classList.contains("dark-mode")) {
      hrs.style.color = "white";
    } else {
      hrs.style.color = "rgb(33, 37, 41)";
    }
  });
}

