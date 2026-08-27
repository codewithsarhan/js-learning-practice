let toggleBtn = document.querySelector("#mode");
let body = document.querySelector("body")
let currmode = "light" ;


toggleBtn.addEventListener( "click" , () => {

if (currmode === "light") {

  body.style.backgroundColor = "black" ;
  currmode = "dark"
  toggleBtn.style.backgroundColor = "White";
  toggleBtn.style.color = "black";
  toggleBtn.style.borderRadius = "5px"
  toggleBtn.innerHTML = "Black Mode"


  
}else {
  
body.style.backgroundColor = "white";
currmode = "light"
toggleBtn.style.backgroundColor = "black";
toggleBtn.style.color = "white";
  toggleBtn.innerHTML = "Light Mode"


}


})