let choices = document.querySelectorAll(".choices");
let yourScore = document.querySelector(".yourScore");
let computerScore = document.querySelector(".compScore");
let msgs = document.querySelector(".msgDiv");

let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("user click", userChoice);

    genCompChoice(userChoice);
  });
});

let genCompChoice = (userChoice) => {
  let choices = ["rock", "paper", "scissor"];

  let randIdx = Math.floor(Math.random() * choices.length);
  let randomItem = choices[randIdx];

  console.log("comp choose", randomItem);

  playGame(userChoice, randomItem);
};

let playGame = (userChoice, compChoice) => {
  let userwin = true;

  if (userChoice === compChoice) {
    console.log("Draw Match Nobody's Win");

    msgs.innerText = "Draw A Match Nobody's Wins";
    msgs.style.height = "30px";
    msgs.style.width = "280px";
    msgs.style.display = "flex";
    msgs.style.justifyContent = "center";
    msgs.style.alignItems = "center";
    msgs.style.backgroundColor = "blue";
    msgs.style.color = "black";
    msgs.style.fontSize = "20px";
    return ;
  } else {
    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;

    } else if (userChoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userwin = compChoice === "rock" ? false : true;
    }

    if (userwin) {
      console.log("You Win");
    } else {
      console.log("Comp Win");
    }
  }

  if (userwin === true) {
    userScore++;
    yourScore.innerText = userScore;
    msgs.innerText = "You Win Hurraaah";
    msgs.style.height = "30px";
    msgs.style.width = "200px";
    msgs.style.display = "flex";
    msgs.style.justifyContent = "center";
    msgs.style.alignItems = "center";
    msgs.style.backgroundColor = "green";
    msgs.style.color = "black";
    msgs.style.fontSize = "20px";
  } else if (userwin === false) {
    compScore++;
    computerScore.innerText = compScore;
    msgs.innerText = "Comp Wins You Loose";
    msgs.style.height = "30px";
    msgs.style.width = "200px";
    msgs.style.display = "flex";
    msgs.style.justifyContent = "center";
    msgs.style.alignItems = "center";
    msgs.style.backgroundColor = "red";
    msgs.style.color = "black";
    msgs.style.fontSize = "20px";
  }
};
