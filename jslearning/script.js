// Small Mini Challenge :--------

let div = document.createElement("div");
let body = document.querySelector("body")

div.setAttribute("id" , "alert-banner");

div.classList.add("card" , "active");

div.classList.remove("hidden");

div.style.backgroundColor = "black" ;
div.style.color = "white" ;
div.style.padding = "16px" ;
div.style.borderRadius = "10px";
div.style.fontFamily = "sans-serif";
div.style.height = "200px";
div.style.width = "200px";


console.log(div);

div.innerHTML = ("<h3> Task Completed </h3>");
div.innerHTML += ("<p> Your file has been successfully uploaded. </p>");

let getAttr = div.getAttribute("id");
console.log(getAttr);


document.body.prepend(div);
//  div.remove()

