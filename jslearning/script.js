let magicBtn = document.createElement("button");
let body = document.querySelector("body");
document.body.append(magicBtn);
magicBtn.innerText = "Click Me";
magicBtn.style.padding = "50px";
magicBtn.style.border = "20px solid black";
magicBtn.style.backgroundColor = "blue";
magicBtn.style.color = "white";
magicBtn.style.fontSize = "50px";
magicBtn.style.margin = "50px";

body.style.display = "flex";
body.style.justifyContent = "center";

const magicBtnMagic = () => {
  magicBtn.style.backgroundColor = "green";
  magicBtn.innerText = "You CLick Me";
};

magicBtn.addEventListener("click", magicBtnMagic);
