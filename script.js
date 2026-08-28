let userScore = 0;
let botScore = 0;

let userChoosed;
let botChoosed;

// Elements
let userSelect = document.querySelectorAll(".choose");
let userScoreText = document.querySelector("#user-score");
let botScoreText = document.querySelector("#comp-score");
let playResult = document.querySelector(".playBtn");
let resetButton = document.querySelector(".reset");


// --------------------
// USER CHOOSES
// --------------------

function uselected() {

    userSelect.forEach((choose) => {

        choose.addEventListener("click", () => {

            userChoosed = choose.id;

            console.log("User choosed =", userChoosed);

            botChoose();
            play();

        });

    });

}

uselected();


// --------------------
// BOT CHOOSES
// --------------------

function botChoose() {

    const options = ["rock", "paper", "scissor"];

    let optionIndex = Math.floor(Math.random() * options.length);

    botChoosed = options[optionIndex];

    console.log("Bot choosed =", botChoosed);

}


// --------------------
// PLAY / CHECK WINNER
// --------------------

function play() {

    if (userChoosed === botChoosed) {

        console.log("Draw");

        playResult.textContent = "It's Draw! Try once more...";
        playResult.style.backgroundColor = "yellow";
        playResult.style.color = "black";

    }

    else if (

        (userChoosed === "rock" && botChoosed === "scissor") ||
        (userChoosed === "paper" && botChoosed === "rock") ||
        (userChoosed === "scissor" && botChoosed === "paper")

    ) {

        console.log("Congrats!! You Win!");

        playResult.textContent = "Congrats!! You Win!";
        playResult.style.backgroundColor = "green";
        playResult.style.color = "white";

        userScore++;

        userScoreText.textContent = userScore;

    }

    else {

        console.log("You Lose, Try once more");

        playResult.textContent = "You Lose, Try once more";
        playResult.style.backgroundColor = "red";
        playResult.style.color = "white";

        botScore++;

        botScoreText.textContent = botScore;

    }

}


// --------------------
// RESET GAME
// --------------------

resetButton.addEventListener("click", () => {

    userScore = 0;
    botScore = 0;

    userScoreText.textContent = userScore;
    botScoreText.textContent = botScore;

    userChoosed = undefined;
    botChoosed = undefined;

    playResult.textContent = "Choose your Move from above";
    playResult.style.backgroundColor = "#3368A0";
    playResult.style.color = "white";

});