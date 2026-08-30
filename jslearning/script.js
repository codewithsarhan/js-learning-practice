let game = document.querySelector(".game");
let clickBtn = document.querySelectorAll(".button");
let resetBtn = document.querySelector(".reset-btn");
let startBtn = document.querySelector(".start-btn");
let hiddenMsg = document.querySelector(".hiddenMsg");
let plyrX = document.querySelector(".plyrX");
let plyrO = document.querySelector(".plyrO");

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

let scoreX = 0;
let scoreO = 0;

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
        hiddenMsg.style.display = "inline-block";
        hiddenMsg.innerText = `Winner Is ${pos1val}`;

        if (pos1val === "X") {
          scoreX++;
          plyrX.innerText = scoreX;
        } else if (pos1val === "O") {
          scoreO++;
          plyrO.innerText = scoreO;
        }

        disabledBox();
        return;
      }
    }
  }
};

const disabledBox = () => {
  for (let box of clickBtn) {
    box.disabled = true;
  }
};
const resetGame = () => {
  trunO = false;

  enabledBox();
};

let enabledBox = () => {
  for (let val of clickBtn) {
    val.innerText = "";
    val.style.backgroundColor = "rgba(128, 128, 128, 0.752)";
    val.disabled = false;
  }
};

resetBtn.addEventListener("click", () => {
  resetGame();
});

startBtn.addEventListener("click" , () => {

resetGame();

})
