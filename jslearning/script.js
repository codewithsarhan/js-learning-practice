let div = document.querySelector(".card");

div.classList.add("shadow");

let newDiv = document.querySelector(".shadow");

console.log(newDiv);

// Classlist add use to add new class without remove old class

let remove = newDiv.classList.remove("shadow");

console.log(remove);
console.log(div);

// CLass List Remove To Use remove any class without removing old class