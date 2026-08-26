let btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.append(btn)


const handler = () =>{

btn.style.backgroundColor = "black"

};


btn.addEventListener("click" , handler);
btn.removeEventListener("click" , handler)