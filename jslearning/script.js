let game = document.querySelector(".game");
let clickBtn = document.querySelectorAll(".button");
let restBtn = document.querySelector(".reset-btn");
let startBtn = document.querySelector(".start-btn");

let winingPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let trunO = true;

for (let val of clickBtn) {
  val.style.fontSize = "50px";
  val.style.color = "black";

  val.addEventListener("click", () => {
    if (trunO) {
      val.innerText = "O";
      val.style.backgroundColor = "Blue";

      trunO = false;
    } else {
      val.innerText = "X";
      val.style.backgroundColor = "Green";

      trunO = true;
    }
    val.disabled = true;

    checkWinner();
  });
}

const checkWinner = () => {
  for (let pattern of winingPatterns) {
    let pos1val = clickBtn[pattern[0]].innerText;
    let pos2val = clickBtn[pattern[1]].innerText;
    let pos3val = clickBtn[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log(`Winner Is ${pos1val}`);
  disabledBox();

      }
    }
  }


};


const disabledBox = () => {

for(let box of clickBtn){

  box.disabled = true ;

}


}