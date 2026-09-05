let textArea = document.querySelector(".textArea");
let initialCharacter = document.querySelector(".initialCharacter");


textArea.addEventListener( "input" , () => {

let count = textArea.value.length;
initialCharacter.innerText = `Characters : ${count}  / 50`

if (count > 50) {
  
  textArea.style.color = "red";
  initialCharacter.innerText = `Characters : ${count}  / 50`;
  initialCharacter.style.color = "red";

}else{

textArea.style.color = "black"
initialCharacter.style.color = "black";
}


})
