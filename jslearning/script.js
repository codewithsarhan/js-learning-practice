let toggleThemeBtn = document.querySelector(".toggleThemeBtn");
let body = document.querySelector("body");
let modeHeading = document.querySelector(".modeHeading");
let countertext = document.querySelector(".countertext");

let initialCount = 0;

let backgroundColor = "light";

toggleThemeBtn.addEventListener("click", () => {
  if (backgroundColor === "light") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    modeHeading.innerText = "Current Theme: Dark";
    backgroundColor = "dark";
  } else if (backgroundColor === "dark") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    modeHeading.innerText = "Current Theme: light";
    backgroundColor = "light";
  }

  initialCount++;
  console.log(initialCount);

  countertext.innerText = `Change Theme ${initialCount} times`;
});
